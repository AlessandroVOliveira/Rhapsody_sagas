// Dados compartilhados entre todas as sagas: textos de interface e o mapa
// (as coordenadas do mapa não mudam de saga para saga — só os dados de álbuns/faixas mudam).

const UI_STRINGS = {
  pt: {
    tabMap: "Mapa Interativo",
    tabHistory: "História Completa",
    tabDiscography: "Discografia",
    tabChronology: "Cronologia",
    tabCodex: "Codex",
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
    extrasTitle: "Raridades e faixas bônus",
    extrasDesc: "Faixas fora dos álbuns principais — lados B, versões alternativas e bônus de edições especiais — que também se conectam à saga.",
    extrasOrigin: "Origem",
    chronologyTitle: "Cronologia do Mundo Conhecido",
    chronologyDesc: "A história por trás das sagas, do choque primordial entre Kron e os deuses da Luz até a fundação da Ordem do Dragão Branco — extraída dos apêndices históricos do encarte de Symphony of Enchanted Lands II.",
    codexTitle: "Codex",
    codexDesc: "Personagens, lugares e artefatos das duas sagas. Clique numa faixa pra ver onde cada um aparece na história.",
    codexFilterCharacters: "Personagens",
    codexFilterPlaces: "Lugares",
    codexFilterArtifacts: "Artefatos",
    codexSagaWarm: "Espada Esmeralda",
    codexSagaCold: "Segredo Sombrio",
    codexSagaDual: "As duas sagas",
    codexAppearsIn: "Aparece em",
    lyricsLink: "Letra completa ↗",
    spotifyLink: "Ouvir no Spotify ↗",
    trackWord: "faixa",
    tracksWord: "faixas",
    footer: "Site pessoal de fã — sem afiliação com Rhapsody of Fire. Letras completas disponíveis via link externo (Letras.com); resumos de localização são paráfrases próprias.",
    donateLink: "Apoie este projeto ↗"
  },
  en: {
    tabMap: "Interactive Map",
    tabHistory: "Full Story",
    tabDiscography: "Discography",
    tabChronology: "Chronology",
    tabCodex: "Codex",
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
    extrasTitle: "Rarities & Bonus Tracks",
    extrasDesc: "Tracks outside the main albums — B-sides, alternate versions, and special-edition bonuses — that also tie into the saga.",
    extrasOrigin: "Origin",
    chronologyTitle: "Chronology of the Known World",
    chronologyDesc: "The history behind the sagas, from the primordial clash between Kron and the gods of Light to the founding of the White Dragon's Order — drawn from the historical appendices of the Symphony of Enchanted Lands II booklet.",
    codexTitle: "Codex",
    codexDesc: "Characters, places and artifacts from both sagas. Click a track to see where each one appears in the story.",
    codexFilterCharacters: "Characters",
    codexFilterPlaces: "Places",
    codexFilterArtifacts: "Artifacts",
    codexSagaWarm: "Emerald Sword",
    codexSagaCold: "Dark Secret",
    codexSagaDual: "Both sagas",
    codexAppearsIn: "Appears in",
    lyricsLink: "Full lyrics ↗",
    spotifyLink: "Listen on Spotify ↗",
    trackWord: "track",
    tracksWord: "tracks",
    footer: "Personal fan site — not affiliated with Rhapsody of Fire. Full lyrics available via external link (Letras.com); location summaries are original paraphrases.",
    donateLink: "Support this project ↗"
  }
};

const LETRAS_BASE = "https://www.letras.com";

// Mapas disponíveis no site. Independem da saga ativa — o usuário alterna entre eles livremente
// (botão "map-toggle"), porque a Enchanted Lands da arte pintada nada mais é que o centro do
// Known World desenhado grande. Cada saga só define qual mapa abre por padrão (meta.mapaPadrao).
const MAPS = [
  { id: "enchanted", nome: { pt: "Terras Encantadas", en: "Enchanted Lands" }, img: "assets/map.jpg" },
  { id: "known_world", nome: { pt: "Known World", en: "Known World" }, img: "assets/map-known-world.jpg" }
];

// Localizações do Mundo Conhecido — registro único compartilhado pelas duas sagas (a geografia
// não muda de saga pra saga, só as músicas que se passam em cada lugar). Cada local carrega
// coordenadas (% da imagem, x=esquerda->direita, y=topo->baixo) para cada mapa em que aparece;
// pos.<mapa> = null quando o local fica fora do recorte daquele mapa (as Terras do Norte e o
// Reino das Cachoeiras Ancestrais não existem na arte pintada das Terras Encantadas).
const LOCATIONS = [
  { id: "nordic_plains", nome: "Nordic Plains", pos: { enchanted: { x: 51.4, y: 16.2 }, known_world: { x: 46.5, y: 32 } } },
  { id: "sea_of_trolls", nome: "Sea of Trolls", pos: { enchanted: { x: 28.75, y: 21.9 }, known_world: { x: 32, y: 39 } } },
  { id: "elves_hills", nome: "The Elves Hills", pos: { enchanted: { x: 80.0, y: 26.1 }, known_world: { x: 39, y: 47 } } },
  { id: "forest_of_trolls", nome: "Forest of Trolls", pos: { enchanted: { x: 61.3, y: 26.1 }, known_world: { x: 44.5, y: 46.6 } } },
  { id: "caltor", nome: "Caltor", pos: { enchanted: { x: 14.78, y: 33.4 }, known_world: { x: 31, y: 43 } } },
  { id: "dragonland", nome: "Dragonland", pos: { enchanted: { x: 55.3, y: 31.8 }, known_world: { x: 41.5, y: 46.8 } } },
  { id: "ancelot", nome: "Ancelot", pos: { enchanted: { x: 50.1, y: 39.5 }, known_world: { x: 43.2, y: 50.7 } } },
  { id: "hargor", nome: "Hargor", pos: { enchanted: { x: 20.7, y: 39.6 }, known_world: { x: 40.5, y: 50 } } },
  { id: "darklands", nome: "Darklands", pos: { enchanted: { x: 34.83, y: 37.1 }, known_world: { x: 38, y: 50 } } },
  { id: "dar_kunor", nome: "Dar-Kunor", pos: { enchanted: { x: 27, y: 41 }, known_world: { x: 39.2, y: 52 } } },
  { id: "forest_of_unicorns", nome: "Forest of Unicorns", pos: { enchanted: { x: 37.84, y: 42.8 }, known_world: { x: 43, y: 48 } } },
  { id: "grey_mountains", nome: "Grey Mountains", pos: { enchanted: { x: 14.78, y: 43.3 }, known_world: { x: 32, y: 53.5 } } },
  { id: "elgard", nome: "Elgard", pos: { enchanted: { x: 51.2, y: 49.1 }, known_world: { x: 43.7, y: 50.2 } } },
  { id: "kanor", nome: "Kanor", pos: { enchanted: { x: 95.0, y: 43.8 }, known_world: { x: 59.4, y: 49.3 } } },
  { id: "green_valleys", nome: "Green Valleys", pos: { enchanted: { x: 35.3, y: 51.7 }, known_world: { x: 44, y: 40 } } },
  { id: "lands_of_chaos", nome: "Lands of Chaos", pos: { enchanted: { x: 66.7, y: 54.3 }, known_world: { x: 50.7, y: 48.5 } } },
  { id: "desert_of_varg", nome: "Desert of Varg", pos: { enchanted: { x: 81.05, y: 49.1 }, known_world: { x: 41, y: 51.2 } } },
  { id: "enchanted_valleys", nome: "Enchanted Valleys", pos: { enchanted: { x: 12.06, y: 55.3 }, known_world: { x: 37, y: 53 } } },
  { id: "algalord", nome: "Algalord", pos: { enchanted: { x: 33.9, y: 62.4 }, known_world: { x: 45.5, y: 51.9 } } },
  { id: "hills_of_loregard", nome: "Hills of Loregard", pos: { enchanted: { x: 95.0, y: 55.8 }, known_world: { x: 44.5, y: 51.3 } } },
  { id: "loregard", nome: "Loregard", pos: { enchanted: { x: 80.4, y: 64.2 }, known_world: { x: 52.5, y: 51.7 } } },
  { id: "elnor", nome: "Elnor", pos: { enchanted: { x: 8.26, y: 68.4 }, known_world: { x: 42.8, y: 51.8 } } },
  { id: "trengard", nome: "Trengard", pos: { enchanted: { x: 63.5, y: 69.9 }, known_world: { x: 41.8, y: 51.6 } } },
  { id: "holy_lakes", nome: "Holy Lakes", pos: { enchanted: { x: 93.2, y: 72.0 }, known_world: { x: 63, y: 55.3 } } },
  { id: "thorald", nome: "Thorald", pos: { enchanted: { x: 13.0, y: 74.1 }, known_world: { x: 43.2, y: 52.6 } } },
  { id: "ragatorn", nome: "Ragatorn", pos: { enchanted: { x: 78.2, y: 83.5 }, known_world: { x: 44.5, y: 54.5 } } },
  { id: "ainor", nome: "Ainor", pos: { enchanted: null, known_world: { x: 47, y: 30 } } },
  { id: "white_mountains", nome: "White Mountains", pos: { enchanted: null, known_world: { x: 47.5, y: 24 } } },
  { id: "har_kuun", nome: "Har-Kuun", pos: { enchanted: null, known_world: { x: 46.5, y: 21 } } },
  { id: "waterfalls_kingdom", nome: "Kingdom of the Ancient Waterfalls", pos: { enchanted: null, known_world: { x: 79, y: 24 } } },
  // Locais citados nas letras mas sem rótulo em nenhum dos dois mapas oficiais — posicionados por
  // referência ao texto (ver resumo das faixas que os citam) em vez de calibração visual direta.
  { id: "urien", nome: "Urien", pos: { enchanted: { x: 34.83, y: 23.1 }, known_world: { x: 36.75, y: 44.15 } } },
  { id: "erloria", nome: "Erloria", pos: { enchanted: { x: 23, y: 41.3 }, known_world: { x: 37.5, y: 50.5 } } },
  { id: "nairin", nome: "Nairin", pos: { enchanted: null, known_world: { x: 52, y: 24 } } },
  { id: "aranen", nome: "Aranen", pos: { enchanted: null, known_world: { x: 50, y: 26.5 } } },
  { id: "hor_lad", nome: "Hor-Lad", pos: { enchanted: null, known_world: { x: 23.5, y: 54.5 } } }
];

// Cronologia do Mundo Conhecido — Apêndice A do encarte de Symphony of Enchanted
// Lands II (originalmente parte do próprio booklet do álbum). Compartilhada por
// todas as sagas: é o pano de fundo histórico comum a ambas.
const TIMELINE = [
  {
    id: "ancient",
    era: { pt: "História Antiga, Mitos e Lendas", en: "Ancient History, Myths and Legends" },
    eventos: [
      { ano: { pt: "Muito antes de tudo", en: "Long before" },
        texto: { pt: "Na era das Trevas místicas e desconhecidas, Kron, senhor do Inferno, desafia os deuses da Luz pelo domínio total do Mundo Conhecido.",
          en: "In the age of mystic, unknown Darkness, Kron, master of Hell, challenges the gods of Light for total domination of the Known World." } },
      { ano: { pt: "Ano 0 dos Dragões", en: "Dragons' Year 0" },
        texto: { pt: "A Primeira Guerra Primordial: os demônios de Kron contra um exército de anjos e dragões; a queda de Kron e a criação de Dragonland, nas regiões centrais do mundo.",
          en: "The First Primordial War: Kron's demons against an army of angels and dragons; the fall of Kron and the creation of Dragonland in the middle regions of the world." } },
      { ano: { pt: "Ano 5200 dos Dragões", en: "Dragons' Year 5200" },
        texto: { pt: "A Segunda Guerra Primordial entre anjos e demônios.", en: "The Second Primordial War between the angels and demons." } },
      { ano: { pt: "Anos 6000–8500 dos Dragões", en: "Dragons' Years 6000-8500" },
        texto: { pt: "A Terceira, a Quarta e a Quinta Guerras Primordiais.", en: "The Third, Fourth, and Fifth Primordial Wars." } },
      { ano: { pt: "Ano 8500 dos Dragões", en: "Dragons' Year 8500" },
        texto: { pt: "A Sexta Guerra Primordial entre anjos e demônios; vitória de Nekron.", en: "The Sixth Primordial War between the angels and demons; Nekron's victory." } },
      { ano: { pt: "Ano 9000 dos Dragões", en: "Dragons' Year 9000" },
        texto: { pt: "O domínio de Nekron sobre as terras de Irith — hoje as Terras Sombrias; Hargor é erguida.", en: "Nekron's dominion over the lands of Irith, the actual Darklands; Hargor was built." } },
      { ano: { pt: "Ano 9800 dos Dragões", en: "Dragons' Year 9800" },
        texto: { pt: "Nekron se torna Rei das Terras Sombrias.", en: "Nekron becomes King of the Darklands." } },
      { ano: { pt: "Ano 0 dos Anjos", en: "Angels' Year 0" },
        texto: { pt: "A Sétima e última Guerra Primordial entre anjos e demônios; derrota e morte de Nekron.", en: "Seventh and last Primordial War between the angels and demons; Nekron's defeat and death." } }
    ]
  },
  {
    id: "old",
    era: { pt: "História Antiga", en: "Old History" },
    eventos: [
      { ano: { pt: "Anos 400–600 dos Anjos", en: "Angels' Years 400-600" },
        texto: { pt: "As três Guerras Élficas.", en: "The three Elvish Wars." } },
      { ano: { pt: "Anos 600–1000 dos Anjos", en: "Angels' Years 600-1000" },
        texto: { pt: "A guerra pelas Terras Sombrias: homens e anões contra o exército da Ordem Negra; vitória dos discípulos do Inferno, mas as Terras Sombrias ficam isoladas.",
          en: "The war for the Darklands; men and dwarves against the Black Order's army; victory of Hell's disciples, but the Darklands are isolated." } },
      { ano: { pt: "Anos 1400–1450 dos Anjos", en: "Angels' Years 1400-1450" },
        texto: { pt: "Guerras Ocidentais entre Anões Negros e Anões Brancos.", en: "Western Wars between Black and White Dwarves." } },
      { ano: { pt: "Ano 1700 dos Anjos", en: "Angels' Year 1700" },
        texto: { pt: "Guerras das Terras Médias entre homens e anões.", en: "Wars of the Middle Lands between men and dwarves." } },
      { ano: { pt: "Ano 1900 dos Anjos", en: "Angels' Year 1900" },
        texto: { pt: "Vitória dos homens sobre os anões; Harold, o Sábio, torna-se o primeiro rei do antigo reino que corresponde às atuais Terras Encantadas.",
          en: "Victory of the men over the dwarves; Harold the Wise becomes first king of the ancient kingdom, corresponding to the actual Enchanted Lands." } },
      { ano: { pt: "Ano 2000 dos Anjos", en: "Angels' Year 2000" },
        texto: { pt: "A Era da Lua Vermelha; as Guerras das Terras do Norte, homens e elfos contra a Ordem Negra; a Ordem Negra rouba o Livro Branco de Erian.",
          en: "Age of the Red Moon; the Wars of the Northlands; men and elves against the Black Order; the Black Order steals Erian's White Book." } },
      { ano: { pt: "Anos 2200–2400 dos Anjos", en: "Angels' Years 2200-2400" },
        texto: { pt: "Guerra das Terras do Sul, homens contra homens.", en: "War of the Southern Lands; men against men." } },
      { ano: { pt: "Ano 2500 dos Anjos", en: "Angels' Year 2500" },
        texto: { pt: "A invasão de Nakros e a luta contra os dragões pela conquista de Dragonland; os dragões vencem e mantêm o controle de suas terras.",
          en: "Nakros' invasion and fight with the dragons for the conquest of the Dragonland; the dragons win and maintain the control of their land." } },
      { ano: { pt: "Anos 3100–3500 dos Anjos", en: "Angels' Years 3100-3500" },
        texto: { pt: "Os chamados “Séculos do Inferno na Terra”; as Guerras das Terras do Sul.", en: "The so called “Centuries of Hell on Earth”; the Wars of the Southern Lands." } },
      { ano: { pt: "Ano 3200 dos Anjos", en: "Angels' Year 3200" },
        texto: { pt: "As Terras Fantasmas são conquistadas pelo Exército das Trevas.", en: "The Ghostlands are conquered by the Army of Darkness." } },
      { ano: { pt: "Ano 3500 dos Anjos", en: "Angels' Year 3500" },
        texto: { pt: "Guerra cruel de homens, dragões, anões e elfos contra o Exército das Trevas; as Terras Fantasmas ficam isoladas.",
          en: "Cruel war of men, dragons, dwarves and elves versus the Army of Darkness; the Ghostlands are isolated." } },
      { ano: { pt: "Anos 3800–3900 dos Anjos", en: "Angels' Years 3800-3900" },
        texto: { pt: "As batalhas pelos desertos centrais entre Algalord e Elgard contra Kanor.", en: "The battles for the middle deserts between Algalord and Elgard against Kanor." } },
      { ano: { pt: "Anos 4000–4300 dos Anjos", en: "Angels' Years 4000-4300" },
        texto: { pt: "Os chamados “Anos das Trevas”, as Guerras das Terras Encantadas (Ancelot, Elgard e Irengard contra Algalord, Elnor e Thorald).",
          en: "The so called “Years of Darkness”, the Wars of the Enchanted Lands (Ancelot, Elgard and Irengard against Algalord, Elnor and Thorald)." } },
      { ano: { pt: "Ano 4200 dos Anjos", en: "Angels' Year 4200" },
        texto: { pt: "Guerras entre Algalord e Elgard.", en: "Wars between Algalord and Elgard." } },
      { ano: { pt: "Ano 4300 dos Anjos", en: "Angels' Year 4300" },
        texto: { pt: "Vitória de Algalord; fim das guerras.", en: "Algalord's victory; and the end of the wars." } },
      { ano: { pt: "Ano 4950 dos Anjos", en: "Angels' Year 4950" },
        texto: { pt: "Guerra da Santa Aliança contra o Exército das Trevas.", en: "War of the Holy Alliance against the Army of Darkness." } },
      { ano: { pt: "Ano 4952 dos Anjos", en: "Angels' Year 4952" },
        texto: { pt: "O Exército das Trevas é derrotado; Harold III é eleito Rei das Terras Encantadas; um longo período de paz é garantido para toda a região das Terras Médias.",
          en: "The Army of Darkness is defeated; Harold III elected King of the Enchanted Lands; a long period of peace is guaranteed for the whole Middle Lands." } }
    ]
  },
  {
    id: "recent",
    era: { pt: "História Recente", en: "Recent History" },
    eventos: [
      { ano: { pt: "Anos 5040–5070 dos Anjos", en: "Angels' Years 5040-5070" },
        texto: { pt: "As Guerras dos Magos pelos Olhos do Poder.", en: "The Wizards' Wars for the Eyes of Power." } },
      { ano: { pt: "Ano 5070 dos Anjos", en: "Angels' Year 5070" },
        texto: { pt: "Aresius lidera seus aliados a uma grande vitória; fim das Guerras Místicas.", en: "Aresius leads his allies to a great victory; the Mystic Wars end." } },
      { ano: { pt: "Ano 5087 dos Anjos", en: "Angels' Year 5087" },
        texto: { pt: "Akron inicia os primeiros ataques às regiões ao redor das Montanhas Cinzentas.", en: "Akron begins the first attacks to the regions surrounding the Grey Mountains." } },
      { ano: { pt: "Ano 5090 dos Anjos", en: "Angels' Year 5090" },
        texto: { pt: "Elnor e Thorald caem; o exército de Akron marcha até a sagrada Cidade dos Deuses.", en: "Elnor, Thorald fall; Akron's army marches to the holy Town of the Gods." } },
      { ano: { pt: "Ano 5091 dos Anjos", en: "Angels' Year 5091" },
        texto: { pt: "A Guerra Sagrada das Gárgulas; Akron é derrotado; o Guerreiro de Gelo é morto.", en: "Gargoyle's Holy War; Akron is defeated; the Warrior of Ice is killed." } },
      { ano: { pt: "Ano 5096 dos Anjos", en: "Angels' Year 5096" },
        texto: { pt: "A Ordem do Dragão Branco é criada.", en: "The White Dragon's Order is created." } }
    ]
  }
];
