# Rhapsody Sagas

Projeto de fã sobre as sagas contadas nos álbuns da banda de power metal **Rhapsody of Fire**:

- **A Saga da Espada Esmeralda** (*Emerald Sword Saga*) — 5 álbuns: Legendary Tales, Symphony of Enchanted Lands, Dawn of Victory, Rain of a Thousand Flames e Power of the Dragonflame.
- **A Saga do Segredo Sombrio** (*Dark Secret Saga*) — 5 álbuns: Symphony of Enchanted Lands II – The Dark Secret, Triumph or Agony, The Frozen Tears of Angels, The Cold Embrace of Fear (EP) e From Chaos to Eternity.

Inclui um site estático com mapa interativo, a história completa capítulo a capítulo, discografia com resumo de cada faixa, cronologia do Mundo Conhecido e raridades/faixas bônus.

## 🔗 Site

**https://alessandrovoliveira.github.io/Rhapsody_sagas/**

## 🗺️ O que tem no site

- **Seletor de saga** — alterna entre a Espada Esmeralda (tema quente) e o Segredo Sombrio (tema frio); cada saga tem sua própria paleta, ícone e conjunto de dados
- **Mapa Interativo** — clique em uma localidade pra ver quais músicas se passam ali, de qual álbum, com link pra letra completa e pra ouvir no Spotify. Cada saga usa um mapa diferente: a Espada Esmeralda usa a arte oficial pintada das Terras Encantadas; o Segredo Sombrio usa um mapa-múndi do "Known World", que cobre uma área bem maior (inclusive as Terras do Norte, onde parte da saga se passa)
- **História Completa** — a saga narrada capítulo a capítulo, cada um ligado às faixas correspondentes e ilustrado com uma imagem gerada por IA da cena; capítulos-chave trazem também uma citação em 1ª pessoa de um personagem
- **Codex** — personagens, lugares e artefatos das duas sagas, com arte gerada por IA, descrição bilíngue e as faixas que os mencionam
- **Discografia** — os álbuns em ordem de lançamento com todas as faixas, e uma seção de **Raridades** no rodapé com faixas bônus/lados B que não entraram nos álbuns principais mas se conectam à história
- **Cronologia do Mundo Conhecido** — linha do tempo histórica compartilhada pelas duas sagas, do choque primordial entre Kron e os deuses da Luz até a fundação da Ordem do Dragão Branco
- Faixas com trechos em latim/italiano trazem a tradução ao lado do resumo
- Disponível em **Português** e **Inglês** (botão PT/EN no canto superior)

## 📁 Estrutura do repositório

```
├── 01 - Legendary Tales/                              } uma pasta por álbum, com:
├── 02 - Symphony of Enchanted Lands/                     - capa (cover.jpg)
├── 03 - Dawn of Victory/                                 - um .md por faixa (letra + contexto na saga)
├── 04 - Rain of a Thousand Flames/
├── 05 - Power of the Dragonflame/
├── 06 - Symphony of Enchanted Lands II - The Dark Secret/
├── 07 - Triumph or Agony/
├── 08 - The Frozen Tears of Angels/
├── 09 - The Cold Embrace of Fear (EP)/
├── 10 - From Chaos to Eternity/
├── referencias/                          # material-fonte já usado para montar o site
│   ├── RhapsodySagas.md                  # compêndio com letras, capítulos e apêndices das duas sagas
│   ├── Resumo da saga.txt                # sinopse geral da Emerald Sword Saga
│   ├── Resumo da saga - The Dark Secret.txt
│   ├── Localidades do Mapa - Known World.md
│   ├── contexto.md                       # brief original do projeto
│   └── mapas/
│       ├── resize.png / mapa_mundo.jpeg  # mapa oficial pintado das Terras Encantadas
│       └── Known_World.png               # mapa-múndi usado pela Dark Secret Saga no site
├── Prompts de IA - Historia Completa.md  # prompts de imagem por capítulo da História Completa (com referências do Codex)
├── scripts/
│   └── resize_story_images.py            # redimensiona/comprime as imagens dos capítulos antes de entrar em docs/assets
└── docs/                                 # o site (publicado via GitHub Pages)
    ├── index.html
    ├── style.css
    ├── script.js
    ├── data-common.js                    # textos de interface (PT/EN) e cronologia do Mundo Conhecido
    ├── data-emerald-sword.js             # álbuns, faixas, localizações e história da Espada Esmeralda
    ├── data-dark-secret.js               # álbuns, faixas, localizações e história do Segredo Sombrio
    ├── data-codex.js                     # personagens, lugares e artefatos das duas sagas
    ├── sagas.js                          # registro das sagas disponíveis, na ordem do seletor
    └── assets/
        ├── codex/                        # arte gerada por IA de cada entrada do Codex
        ├── story-emerald/                # arte gerada por IA de cada capítulo da Espada Esmeralda
        └── story-dark-secret/            # arte gerada por IA de cada capítulo do Segredo Sombrio
```

## 💻 Rodando localmente

O site é HTML/CSS/JS puro, sem build. Basta abrir `docs/index.html` no navegador, ou servir a pasta com qualquer servidor estático:

```bash
cd docs
python -m http.server 8000
```

## ⚖️ Sobre direitos autorais

Este é um projeto pessoal de fã, sem afiliação com a Rhapsody of Fire, seus membros ou gravadoras. As letras completas **não são reproduzidas** aqui — cada faixa traz apenas um resumo/paráfrase de onde ela se encaixa na história, com um link externo para a letra completa (Letras.com) e para ouvir no Spotify.

## ☕ Apoie o projeto

Se curtiu, dá pra apoiar via [PayPal](https://www.paypal.com/donate/?hosted_button_id=WPL3U5XBTVDAA) — o mesmo botão também está no rodapé do site.
