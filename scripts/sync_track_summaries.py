"""
Sincroniza a seção '## Localização na saga' dos arquivos .md de cada faixa
com o campo resumo.pt de docs/data-emerald-sword.js e docs/data-dark-secret.js,
que é hoje a fonte mais atualizada (ver report.md, achado A1).

Uso:
    python scripts/sync_track_summaries.py            # aplica as mudanças
    python scripts/sync_track_summaries.py --check     # só relata divergências, não escreve nada
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

JS_FILES = [
    ROOT / "docs" / "data-emerald-sword.js",
    ROOT / "docs" / "data-dark-secret.js",
]

# pasta do repositório -> id do álbum usado em docs/data-*.js
FOLDER_TO_ALBUM = {
    "01 - Legendary Tales": "legendary_tales",
    "02 - Symphony of Enchanted Lands": "symphony",
    "03 - Dawn of Victory": "dawn_of_victory",
    "04 - Rain of a Thousand Flames": "rain_of_flames",
    "05 - Power of the Dragonflame": "dragonflame",
    "06 - Symphony of Enchanted Lands II - The Dark Secret": "dark_secret",
    "07 - Triumph or Agony": "triumph_or_agony",
    "08 - The Frozen Tears of Angels": "frozen_tears",
    "09 - The Cold Embrace of Fear (EP)": "cold_embrace",
    "10 - From Chaos to Eternity": "chaos_to_eternity",
}

# Nota fixa de rodapé que existe só nos .md de "Rain of a Thousand Flames"
# (álbum spin-off) e não tem equivalente em resumo.pt. Preservada por não
# ser uma divergência de fato narrativo, e sim uma ressalva editorial que
# só existe no .md.
PRESERVED_SUFFIX = (
    ' Nota: este álbum é um spin-off — conta uma história paralela sobre as '
    'atrocidades cometidas pelas tropas de Akron enquanto estão de posse da '
    'espada de esmeralda, e não é essencial ao fio principal da saga. A '
    'atribuição de cada faixa a um evento específico é menos documentada '
    'que nos demais álbuns; trate como interpretação.'
)

SONG_BLOCK_RE = re.compile(
    r'\{\s*album:\s*"(?P<album>\w+)",\s*faixa:\s*(?P<faixa>\d+),\s*'
    r'titulo:\s*"(?P<titulo>(?:[^"\\]|\\.)*)",.*?'
    r'resumo:\s*\{\s*pt:\s*"(?P<pt>(?:[^"\\]|\\.)*)"',
    re.DOTALL,
)

HEADING_RE = re.compile(r'^## Localização na saga *$', re.MULTILINE)


def normalize_title(text):
    """Reduz um título a letras e dígitos minúsculos, para comparar nome de arquivo
    com o campo `titulo` do .js sem tropeçar em pontuação, acento ou caixa."""
    return re.sub(r"[^a-z0-9]", "", text.lower())


def load_summaries():
    summaries = {}
    for js_path in JS_FILES:
        text = js_path.read_text(encoding="utf-8")
        for m in SONG_BLOCK_RE.finditer(text):
            key = (m.group("album"), int(m.group("faixa")))
            pt = m.group("pt").replace('\\"', '"')
            titulo = m.group("titulo").replace('\\"', '"')
            if key in summaries and summaries[key][0] != pt:
                print(f"AVISO: {key} tem dois resumos diferentes em {js_path.name}; usando o primeiro.")
                continue
            summaries.setdefault(key, (pt, titulo))
    return summaries


def iter_track_files():
    for folder_name, album_id in FOLDER_TO_ALBUM.items():
        folder = ROOT / folder_name
        if not folder.is_dir():
            print(f"AVISO: pasta não encontrada: {folder_name}")
            continue
        for md_path in sorted(folder.glob("*.md")):
            # Faixas bônus de edição especial não fazem parte da tracklist oficial:
            # vivem em EXTRAS no .js e não têm resumo por faixa para sincronizar.
            if md_path.name.lower().startswith("bonus"):
                continue
            match = re.match(r"(\d+)\s*-\s*(?P<titulo>.+)\.md$", md_path.name)
            if not match:
                print(f"AVISO: nome de arquivo sem número de faixa: {md_path}")
                continue
            yield album_id, int(match.group(1)), match.group("titulo"), md_path


def sync(check_only: bool):
    summaries = load_summaries()
    changed, unchanged, missing, mismatched = [], [], [], []

    for album_id, faixa, file_title, md_path in iter_track_files():
        key = (album_id, faixa)
        if key not in summaries:
            missing.append(md_path)
            continue

        new_pt, js_title = summaries[key]

        # Trava de segurança: se o número da faixa no nome do arquivo e o título não
        # baterem com a mesma faixa no .js, a numeração saiu de sincronia (foi o que
        # aconteceu ao remover uma faixa bônus da tracklist). Escrever aqui gravaria o
        # resumo da música errada, então o certo é parar e avisar.
        if normalize_title(file_title) != normalize_title(js_title):
            mismatched.append((md_path, js_title))
            continue

        text = md_path.read_text(encoding="utf-8")
        m = HEADING_RE.search(text)
        if not m:
            print(f"AVISO: sem cabeçalho '## Localização na saga' em {md_path}")
            continue

        before = text[: m.end()]
        old_body = text[m.end():].strip("\n")

        body = new_pt
        if old_body.endswith(PRESERVED_SUFFIX.strip()):
            body = new_pt.rstrip() + PRESERVED_SUFFIX

        new_text = before + "\n\n" + body + "\n"

        if new_text != text:
            changed.append(md_path)
            if not check_only:
                md_path.write_text(new_text, encoding="utf-8")
        else:
            unchanged.append(md_path)

    print(f"\n{'[--check] ' if check_only else ''}Faixas sincronizadas: {len(changed)}")
    for p in changed:
        print(f"  - {p.relative_to(ROOT)}")
    print(f"Já estavam em dia: {len(unchanged)}")
    if missing:
        print(f"\nSem entrada correspondente em docs/data-*.js ({len(missing)}):")
        for p in missing:
            print(f"  - {p.relative_to(ROOT)}")
    if mismatched:
        print(f"\nERRO — número de faixa aponta para outra música ({len(mismatched)}):")
        for p, js_title in mismatched:
            print(f"  - {p.relative_to(ROOT)} → no .js essa faixa é \"{js_title}\"")
        print("  Renomeie o .md (ou corrija a tracklist) antes de sincronizar.")

    return 1 if mismatched else 0


if __name__ == "__main__":
    sys.exit(sync(check_only="--check" in sys.argv))
