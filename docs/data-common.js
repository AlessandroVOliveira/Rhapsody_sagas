// Dados compartilhados entre todas as sagas: textos de interface e o mapa
// (as coordenadas do mapa não mudam de saga para saga — só os dados de álbuns/faixas mudam).

const UI_STRINGS = {
  pt: {
    tabMap: "Mapa Interativo",
    tabHistory: "História Completa",
    tabDiscography: "Discografia",
    filterAll: "Todos",
    panelDefaultTitle: "Selecione uma localização",
    panelDefaultHint: "Clique em um marcador no mapa para ver quais músicas se passam ali.",
    panelEmptyAlbum: "Nenhuma música deste álbum se passa aqui.",
    panelEmptyGeneric: "Nenhuma música encontrada.",
    offmapTitle: "Faixas sem localização definida no mapa",
    offmapDesc: "Aberturas instrumentais, interlúdios e momentos de transição/reflexão que as letras não amarram a um ponto específico do mapa.",
    historyTitle: "A História Completa",
    historyDesc: "A jornada narrada através dos álbuns, capítulo a capítulo. Clique nas faixas de cada capítulo para ver o resumo, a letra e o link do Spotify.",
    discographyTitle: "Discografia completa",
    discographyDesc: "Os álbuns em ordem de lançamento, com todas as faixas.",
    lyricsLink: "Letra completa ↗",
    spotifyLink: "Ouvir no Spotify ↗",
    trackWord: "faixa",
    tracksWord: "faixas",
    footer: "Site pessoal de fã — sem afiliação com Rhapsody of Fire. Letras completas disponíveis via link externo (Letras.com); resumos de localização são paráfrases próprias."
  },
  en: {
    tabMap: "Interactive Map",
    tabHistory: "Full Story",
    tabDiscography: "Discography",
    filterAll: "All",
    panelDefaultTitle: "Select a location",
    panelDefaultHint: "Click a marker on the map to see which songs take place there.",
    panelEmptyAlbum: "No song from this album takes place here.",
    panelEmptyGeneric: "No songs found.",
    offmapTitle: "Tracks without a defined map location",
    offmapDesc: "Instrumental openings, interludes, and transitional/reflective moments that the lyrics don't tie to a specific point on the map.",
    historyTitle: "The Full Story",
    historyDesc: "The journey told across the albums, chapter by chapter. Click a chapter's tracks to see the summary, lyrics link and Spotify link.",
    discographyTitle: "Full Discography",
    discographyDesc: "The albums in release order, with all tracks.",
    lyricsLink: "Full lyrics ↗",
    spotifyLink: "Listen on Spotify ↗",
    trackWord: "track",
    tracksWord: "tracks",
    footer: "Personal fan site — not affiliated with Rhapsody of Fire. Full lyrics available via external link (Letras.com); location summaries are original paraphrases."
  }
};

const LETRAS_BASE = "https://www.letras.com";

// Localizações no mapa (coordenadas em % da imagem, x=esquerda->direita, y=topo->baixo)
// Nomes são topônimos do mapa oficial — não traduzidos. Compartilhado por todas as sagas:
// o mapa é sempre o mesmo, só os dados de álbuns/faixas que apontam pra cá mudam.
// x foi calibrado para ficar logo à direita de onde o nome termina na arte do mapa
// (o rótulo de texto já está desenhado na imagem; aqui só posicionamos ponto + contador).
const LOCATIONS = [
  { id: "nordic_plains",     nome: "Nordic Plains",      x: 51.4, y: 16.2 },
  { id: "sea_of_trolls",     nome: "Sea of Trolls",      x: 28.75, y: 21.9 },
  { id: "elves_hills",       nome: "The Elves Hills",    x: 80.0, y: 26.1 },
  { id: "forest_of_trolls",  nome: "Forest of Trolls",   x: 61.3, y: 26.1 },
  { id: "caltor",            nome: "Caltor",             x: 14.78, y: 33.4 },
  { id: "dragonland",        nome: "Dragonland",         x: 55.3, y: 31.8 },
  { id: "ancelot",           nome: "Ancelot",            x: 53.1, y: 39.5 },
  { id: "hargor",            nome: "Hargor",             x: 20.7, y: 38.6 },
  { id: "darklands",         nome: "Darklands",          x: 34.83, y: 37.1 },
  { id: "forest_of_unicorns",nome: "Forest of Unicorns", x: 39.84, y: 42.8 },
  { id: "grey_mountains",    nome: "Grey Mountains",     x: 14.78, y: 42.3 },
  { id: "elgard",            nome: "Elgard",             x: 54.2, y: 49.1 },
  { id: "kanor",             nome: "Kanor",              x: 95.0, y: 43.8 },
  { id: "green_valleys",     nome: "Green Valleys",      x: 35.3, y: 51.7 },
  { id: "lands_of_chaos",    nome: "Lands of Chaos",     x: 66.7, y: 54.3 },
  { id: "desert_of_varg",    nome: "Desert of Varg",     x: 81.05, y: 49.1 },
  { id: "enchanted_valleys", nome: "Enchanted Valleys",  x: 14.06, y: 55.3 },
  { id: "algalord",          nome: "Algalord",           x: 35.9, y: 62.4 },
  { id: "hills_of_loregard", nome: "Hills of Loregard",  x: 95.0, y: 55.8 },
  { id: "loregard",          nome: "Loregard",           x: 86.4, y: 64.2 },
  { id: "elnor",             nome: "Elnor",              x: 7.26, y: 68.4 },
  { id: "trengard",          nome: "Trengard",           x: 63.5, y: 69.9 },
  { id: "holy_lakes",        nome: "Holy Lakes",         x: 93.2, y: 72.0 },
  { id: "thorald",           nome: "Thorald",            x: 13.0, y: 73.1 },
  { id: "ragatorn",          nome: "Ragatorn",           x: 78.2, y: 83.5 }
];
