// Verificação de integridade dos dados do site.
//
// Roda sem dependências: `node scripts/check_data_integrity.js`
// Sai com código 1 se encontrar problema, para poder ser usado em CI/pre-commit.
//
// Checa:
//   1. Toda referência {album, faixa} em STORY e em CODEX aponta para uma faixa que existe.
//   2. Todo `local` de faixa (string ou array) aponta para um id existente em LOCATIONS.
//   3. As faixas de cada álbum são 1..N sem buraco nem repetição — o que impede que uma
//      faixa bônus de edição especial volte a ser numerada como faixa oficial do álbum
//      (bônus vivem em EXTRAS; ver report.md, Parte H).

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const DOCS = path.join(__dirname, "..", "docs");
const FILES = ["data-common.js", "data-emerald-sword.js", "data-dark-secret.js", "data-codex.js"];

let src = FILES.map((f) => fs.readFileSync(path.join(DOCS, f), "utf8")).join("\n");
// `const` no topo de um script não vira propriedade do global; exportamos explicitamente.
src += "\n;globalThis.__data = { SAGA_EMERALD_SWORD, SAGA_DARK_SECRET, CODEX, LOCATIONS };";

const ctx = {};
vm.createContext(ctx);
vm.runInContext(src, ctx);

const { SAGA_EMERALD_SWORD, SAGA_DARK_SECRET, CODEX, LOCATIONS } = ctx.__data;
const sagas = [SAGA_EMERALD_SWORD, SAGA_DARK_SECRET];

const problems = [];
const trackKeys = new Set();
const locationIds = new Set(LOCATIONS.map((l) => l.id));

for (const saga of sagas) {
  for (const song of saga.SONGS) trackKeys.add(song.album + "#" + song.faixa);
}

function checkRef(ref, where) {
  const key = ref.album + "#" + ref.faixa;
  if (!trackKeys.has(key)) problems.push(`referência quebrada em ${where}: ${key}`);
}

for (const saga of sagas) {
  for (const chapter of saga.STORY) {
    for (const ref of chapter.faixas) checkRef(ref, `STORY ${chapter.id}`);
  }
  for (const song of saga.SONGS) {
    const locals = song.local == null ? [] : Array.isArray(song.local) ? song.local : [song.local];
    for (const id of locals) {
      if (!locationIds.has(id)) {
        problems.push(`local inexistente em ${song.album} #${song.faixa}: "${id}"`);
      }
    }
  }
}

for (const entry of CODEX) {
  for (const ref of entry.faixas) checkRef(ref, `CODEX ${entry.id}`);
}

for (const saga of sagas) {
  for (const albumId of Object.keys(saga.ALBUMS)) {
    const nums = saga.SONGS.filter((s) => s.album === albumId).map((s) => s.faixa).sort((a, b) => a - b);
    if (!nums.every((n, i) => n === i + 1)) {
      problems.push(`tracklist de ${albumId} não é 1..N: [${nums.join(", ")}]`);
    }
  }
}

// Cobertura da "História Completa": quantas faixas de cada álbum estão ligadas a algum capítulo.
// Não é erro ter faixa órfã (instrumental sem cena, por exemplo), mas é o número que a
// Parte C do report.md acompanha, então vale imprimir sempre.
if (process.argv.includes("--cobertura")) {
  for (const saga of sagas) {
    const linked = new Set();
    for (const chapter of saga.STORY) {
      for (const ref of chapter.faixas) linked.add(ref.album + "#" + ref.faixa);
    }
    for (const albumId of Object.keys(saga.ALBUMS)) {
      const songs = saga.SONGS.filter((s) => s.album === albumId);
      const orphans = songs.filter((s) => !linked.has(s.album + "#" + s.faixa));
      const label = `${songs.length - orphans.length}/${songs.length}`;
      console.log(
        `${label.padEnd(6)} ${albumId}` +
          (orphans.length ? `  — órfãs: ${orphans.map((s) => s.titulo).join(", ")}` : "")
      );
    }
  }
  console.log("");
}

if (problems.length) {
  console.error("Problemas encontrados:\n" + problems.map((p) => "  - " + p).join("\n"));
  process.exit(1);
}

const total = sagas.reduce((n, s) => n + s.SONGS.length, 0);
console.log(`OK — ${total} faixas, ${LOCATIONS.length} locais, ${CODEX.length} entradas de Codex; nenhuma referência quebrada.`);
