# A Saga da Espada Esmeralda

Projeto de fã sobre a **Emerald Sword Saga**, a história em 5 álbuns contada pela banda de power metal **Rhapsody of Fire** (Legendary Tales, Symphony of Enchanted Lands, Dawn of Victory, Rain of a Thousand Flames e Power of the Dragonflame).

Inclui um site estático com um mapa interativo das Terras Encantadas, a história completa capítulo a capítulo e a discografia completa com resumo de cada faixa.

## 🔗 Site

**https://alessandrovoliveira.github.io/Rhapsody_sagas/**

## 🗺️ O que tem no site

- **Mapa Interativo** — clique em uma localidade das Terras Encantadas para ver quais músicas se passam ali, de qual álbum, com link para a letra completa e para ouvir no Spotify
- **História Completa** — a saga narrada em 20 capítulos cronológicos, cada um ligado às faixas correspondentes
- **Discografia** — os 5 álbuns em ordem de lançamento com todas as faixas
- Disponível em **Português** e **Inglês** (botão PT/EN no canto superior)

## 📁 Estrutura do repositório

```
├── 01 - Legendary Tales/            } uma pasta por álbum, com:
├── 02 - Symphony of Enchanted Lands/  - capa (cover.jpg)
├── 03 - Dawn of Victory/               - um .md por faixa (letra + contexto na saga)
├── 04 - Rain of a Thousand Flames/
├── 05 - Power of the Dragonflame/
├── Resumo da saga.txt                # sinopse geral da saga
├── resize.png / mapa_mundo.jpeg      # mapa oficial das Terras Encantadas
└── docs/                             # o site (publicado via GitHub Pages)
    ├── index.html
    ├── style.css
    ├── script.js
    ├── data.js                       # dados de álbuns, faixas, localizações e história
    └── assets/
```

## 💻 Rodando localmente

O site é HTML/CSS/JS puro, sem build. Basta abrir `docs/index.html` no navegador, ou servir a pasta com qualquer servidor estático:

```bash
cd docs
python -m http.server 8000
```

## ⚖️ Sobre direitos autorais

Este é um projeto pessoal de fã, sem afiliação com a Rhapsody of Fire, seus membros ou gravadoras. As letras completas **não são reproduzidas** aqui — cada faixa traz apenas um resumo/paráfrase de onde ela se encaixa na história, com um link externo para a letra completa (Letras.com) e para ouvir no Spotify.
