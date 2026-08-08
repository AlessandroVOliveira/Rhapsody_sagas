// Codex: personagens, lugares e artefatos das duas sagas, com as faixas que os mencionam.
// Independente da saga ativa (como a TIMELINE) — cada entrada carrega seu próprio selo de saga.
// Fonte: "Prompts de IA - Personagens, Lugares e Artefatos.md" (levantamento das descrições
// físicas/visuais concretas no compêndio); imagens geradas a partir desses prompts.

// saga: "warm" (Espada Esmeralda), "cold" (Segredo Sombrio) ou "dual" (aparece nas duas)
const CODEX = [
  // ===== Personagens e criaturas =====
  {
    id: "guerreiro_de_gelo",
    categoria: "personagem",
    saga: "warm",
    nome: { pt: "O Guerreiro de Gelo", en: "The Ice Warrior" },
    imagem: "assets/codex/guerreiro_de_gelo.jpg",
    descricao: {
      pt: "Protagonista de toda a Saga da Espada Esmeralda: um guerreiro de sangue nórdico, rei da aldeia de Loregard. Para atravessar os Portões de Marfim precisa ter um coração puro como gelo — daí seu epíteto. Parte em busca da lendária espada de esmeralda para libertar suas terras da guerra e das trevas, empunhando-a ao fim como arma sagrada contra Akron.",
      en: "The protagonist of the entire Emerald Sword Saga: a warrior of Nordic blood, king of the village of Loregard. To pass through the Ivory Gates he must have a heart pure as ice — hence his epithet. He sets out in search of the legendary emerald sword to free his lands from war and darkness, wielding it as a holy weapon against Akron."
    },
    faixas: [{ album: "legendary_tales", faixa: 2 }, { album: "symphony", faixa: 10 }, { album: "dawn_of_victory", faixa: 3 }]
  },
  {
    id: "dargor",
    categoria: "personagem",
    saga: "dual",
    nome: { pt: "Dargor, Senhor das Sombras", en: "Dargor, Shadowlord" },
    imagem: "assets/codex/dargor.jpg",
    descricao: {
      pt: "Príncipe das Terras Sombrias e Senhor das Sombras, Dargor é meio-demônio — filho do demônio Vankar, mas com sangue humano correndo em suas veias. Introduzido como vilão em Dawn of Victory, sua história se transforma no arco central de redenção da Dark Secret Saga: escolhido justamente por conhecer tanto a escuridão quanto a luz, seu sacrifício final funde o espírito do anjo Erian à sua alma, dando origem a um novo deus da Luz Cósmica sobre Algalord.",
      en: "Prince of the Darklands and Shadowlord, Dargor is half-demon — son of the demon Vankar, but with human blood running through his veins. Introduced as a villain in Dawn of Victory, his story becomes the central redemption arc of the Dark Secret Saga: chosen precisely for having known both darkness and light, his final sacrifice merges the angel Erian's spirit with his soul, giving birth to a new God of Cosmic Light over Algalord."
    },
    faixas: [{ album: "dawn_of_victory", faixa: 5 }, { album: "dragonflame", faixa: 9 }, { album: "dark_secret", faixa: 1 }, { album: "chaos_to_eternity", faixa: 9 }]
  },
  {
    id: "akron",
    categoria: "personagem",
    saga: "warm",
    nome: { pt: "Akron, o Rei Negro", en: "Akron, King of the Dark" },
    imagem: "assets/codex/akron.jpg",
    descricao: {
      pt: "O Rei Negro, “filho do Inferno, traidor da Luz” — principal antagonista da Saga da Espada Esmeralda. Comanda legiões de mortos-vivos e ressuscita a Rainha dos Horizontes Sombrios para reforçar seu exército. Sua queda vem nos pântanos, afogado e devorado por serpentes do abismo junto ao Guerreiro de Gelo, num duelo final que também o vitima.",
      en: "The Black King, “Son of Hell, betrayer of Light” — the main antagonist of the Emerald Sword Saga. He commands legions of the undead and resurrects the Queen of the Dark Horizons to strengthen his army. His downfall comes in the marshes, drowned and devoured by serpents of the abyss alongside the Ice Warrior, in a final duel that claims them both."
    },
    faixas: [{ album: "dawn_of_victory", faixa: 6 }, { album: "rain_of_flames", faixa: 1 }, { album: "rain_of_flames", faixa: 3 }]
  },
  {
    id: "nekron",
    categoria: "personagem",
    saga: "cold",
    nome: { pt: "Nekron, o Cavaleiro-Demônio", en: "Nekron, the Demonknight" },
    imagem: "assets/codex/nekron.jpg",
    descricao: {
      pt: "O Cavaleiro-Demônio, último e mais poderoso dos três filhos malignos de Kron. Mestre da Antiga Ordem, escreveu os sete Livros Negros com sangue de anjos. Morto há cinco mil anos, seu espírito continua à espreita além dos Portões do Inferno, aguardando a chance de se ressuscitar através do segredo guardado no sétimo livro.",
      en: "The Demonknight, the last and mightiest of Kron's three evil sons. Master of the Ancient Order, he wrote the seven Black Books with the blood of angels. Killed five thousand years ago, his spirit still lurks beyond the Gates of Hell, waiting for the chance to resurrect through the secret held in the seventh book."
    },
    faixas: [{ album: "dark_secret", faixa: 1 }, { album: "dark_secret", faixa: 2 }, { album: "triumph_or_agony", faixa: 10 }]
  },
  {
    id: "rei_uriel",
    categoria: "personagem",
    saga: "cold",
    nome: { pt: "Rei Uriel, o Rei Mago", en: "King Uriel, the Wizard King" },
    imagem: "assets/codex/rei_uriel.jpg",
    descricao: {
      pt: "O Rei Mago de Elgard e cofundador da Ordem do Dragão Branco, narrador de boa parte da Dark Secret Saga. Figura sábia e paternal, é ele quem conta o testamento de maldade de Nekron aos “irmãos e irmãs” que o escutam, e quem abençoa os heróis antes de cada etapa perigosa da jornada.",
      en: "The Wizard King of Elgard and co-founder of the White Dragon's Order, narrator of much of the Dark Secret Saga. A wise, paternal figure, he is the one who tells Nekron's testament of evil to the “brothers and sisters” listening, and who blesses the heroes before each dangerous leg of their journey."
    },
    faixas: [{ album: "dark_secret", faixa: 1 }, { album: "frozen_tears", faixa: 1 }, { album: "chaos_to_eternity", faixa: 1 }]
  },
  {
    id: "iras_algor",
    categoria: "personagem",
    saga: "cold",
    nome: { pt: "Iras Algor, Primeiro Mago da Ordem", en: "Iras Algor, First Wizard of the Order" },
    imagem: "assets/codex/iras_algor.jpg",
    descricao: {
      pt: "Primeiro Mago da Ordem do Dragão Branco, escolhido ao lado de Etherus para liderar a busca pelo Livro Branco de Erian. Decifra runas e enigmas ao longo de toda a Dark Secret Saga, é ferido pela traição do elfo Tarish em Har-Kuun, mas sobrevive para revelar a profecia final escondida nas páginas recuperadas do livro.",
      en: "First Wizard of the White Dragon's Order, chosen alongside Etherus to lead the search for Erian's White Book. He deciphers runes and riddles throughout the Dark Secret Saga, is wounded by the elf Tarish's betrayal at Har-Kuun, but survives to reveal the final prophecy hidden in the book's recovered pages."
    },
    faixas: [{ album: "dark_secret", faixa: 6 }, { album: "triumph_or_agony", faixa: 1 }, { album: "cold_embrace", faixa: 1 }]
  },
  {
    id: "thanor",
    categoria: "personagem",
    saga: "cold",
    nome: { pt: "Thanor, o Dragão de Pedra", en: "Thanor, the Stone Dragon" },
    imagem: "assets/codex/thanor.jpg",
    descricao: {
      pt: "Dragão negro petrificado que guarda o Livro Branco de Erian em Har-Kuun. Traiu Nekron nas guerras primordiais ao revelar aos anjos seu esconderijo, e paga por isso torturado nas profundezas do abismo — até as pedras Aelin e Mornir, seus antigos olhos, serem devolvidas às suas órbitas vazias e o despertarem para a batalha final.",
      en: "A petrified black dragon who guards Erian's White Book at Har-Kuun. He betrayed Nekron in the primordial wars by revealing his hiding place to the angels, and pays for it tortured in the depths of the abyss — until the stones Aelin and Mornir, his ancient eyes, are returned to their empty sockets and awaken him for the final battle."
    },
    faixas: [{ album: "cold_embrace", faixa: 3 }, { album: "cold_embrace", faixa: 4 }, { album: "chaos_to_eternity", faixa: 9 }]
  },
  {
    id: "rainha_horizontes_sombrios",
    categoria: "personagem",
    saga: "warm",
    nome: { pt: "A Rainha dos Horizontes Sombrios", en: "The Queen of the Dark Horizons" },
    imagem: "assets/codex/rainha_horizontes_sombrios.jpg",
    descricao: {
      pt: "Bruxa e rainha dos mortos, ressuscitada por Akron através do poder da espada esmeralda. Emerge das criptas amaldiçoadas ao som de velas negras, convocando legiões de mortos-vivos e vampiros para reforçar o exército das trevas na guerra contra Algalord.",
      en: "A witch and queen of the dead, resurrected by Akron through the power of the emerald sword. She rises from the cursed crypts to the light of black candles, summoning legions of the undead and vampires to reinforce the army of darkness in the war against Algalord."
    },
    faixas: [{ album: "rain_of_flames", faixa: 3 }]
  },
  {
    id: "gargulas",
    categoria: "personagem",
    saga: "warm",
    nome: { pt: "As Gárgulas de Algalord", en: "The Gargoyles of Algalord" },
    imagem: "assets/codex/gargulas.jpg",
    descricao: {
      pt: "Convocadas por Dargor contra as legiões das trevas na batalha final da Saga da Espada Esmeralda, essas “anjas de pedra” — guardiãs aladas mais protetoras que demoníacas — se tornam, depois da guerra, o novo símbolo esculpido nos muros da cidade reconstruída.",
      en: "Summoned by Dargor against the legions of darkness in the final battle of the Emerald Sword Saga, these “angels of stone” — winged guardians more protective than demonic — become, after the war, the new emblem carved into the walls of the rebuilt city."
    },
    faixas: [{ album: "dragonflame", faixa: 11 }]
  },

  // ===== Lugares =====
  {
    id: "algalord",
    categoria: "lugar",
    saga: "dual",
    nome: { pt: "Algalord, a Cidade Sagrada", en: "Algalord, the Holy City" },
    imagem: "assets/codex/algalord.jpg",
    descricao: {
      pt: "A cidade-cidadela sagrada das Terras Encantadas, guardiã do segredo da espada esmeralda, citada do início ao fim da saga. Sobrevive ao cerco de Akron e, depois da guerra, ganha a gárgula esculpida em seus muros como novo símbolo — e é também onde nasce o novo Deus da Luz Cósmica ao fim da Dark Secret Saga.",
      en: "The sacred citadel-city of the Enchanted Lands, guardian of the emerald sword's secret, mentioned from the saga's beginning to its end. It survives Akron's siege and, after the war, gains the carved gargoyle on its walls as a new symbol — and is also where the new God of Cosmic Light is born at the close of the Dark Secret Saga."
    },
    faixas: [{ album: "dragonflame", faixa: 1 }, { album: "dragonflame", faixa: 3 }, { album: "dragonflame", faixa: 11 }]
  },
  {
    id: "hargor",
    categoria: "lugar",
    saga: "dual",
    nome: { pt: "Hargor, a Cidade Amaldiçoada", en: "Hargor, the Cursed City" },
    imagem: "assets/codex/hargor.jpg",
    descricao: {
      pt: "Cidade amaldiçoada erguida por Nekron sobre as ruínas da bela região élfica de Irith, “uma cidade inteira construída sobre uma rocha gigante como uma montanha”, com portões feitos de ossos de anjos. Coração das Terras Sombrias, é o ponto de partida da jornada rumo às cavernas de Dar-Kunor.",
      en: "A cursed city built by Nekron atop the ruins of the once-beautiful elven region of Irith, “a whole town built on a rock as giant as a mountain,” with gates made of angels' bones. The heart of the Darklands, it's the starting point of the journey toward the caves of Dar-Kunor."
    },
    faixas: [{ album: "triumph_or_agony", faixa: 3 }, { album: "dark_secret", faixa: 1 }, { album: "dawn_of_victory", faixa: 5 }]
  },
  {
    id: "dar_kunor",
    categoria: "lugar",
    saga: "cold",
    nome: { pt: "Dar-Kunor, as Cavernas Esquecidas", en: "Dar-Kunor, the Forgotten Caves" },
    imagem: "assets/codex/dar_kunor.jpg",
    descricao: {
      pt: "Labirinto de cavernas silenciosas, escuras e esquecidas, cortado por um rio vermelho e guardado por dois portais feitos de ossos humanos e élficos. É o salão onde nasceu a Ordem Negra — e onde a Ordem do Dragão Branco encontra o sétimo Livro Negro, escondido havia milênios.",
      en: "A labyrinth of silent, dark, forgotten caves, cut through by a red river and guarded by two portals made of human and elven bones. It's the hall where the Black Order was born — and where the White Dragon's Order finds the seventh Black Book, hidden for millennia."
    },
    faixas: [{ album: "triumph_or_agony", faixa: 1 }, { album: "triumph_or_agony", faixa: 10 }]
  },
  {
    id: "har_kuun",
    categoria: "lugar",
    saga: "cold",
    nome: { pt: "Har-Kuun, o Portão Gélido do Inferno", en: "Har-Kuun, the Frozen Gate of Hell" },
    imagem: "assets/codex/har_kuun.jpg",
    descricao: {
      pt: "Fortaleza gélida com sete torres negras rasgando o céu, guardada por sete demônios de pedra imóveis em suas colunas. É onde o dragão Thanor protege o Livro Branco de Erian havia três mil anos — até a chegada da Ordem do Dragão Branco e a traição de Tarish.",
      en: "A frozen fortress with seven black towers tearing the sky, guarded by seven stone demons frozen atop its columns. It's where the dragon Thanor has protected Erian's White Book for three thousand years — until the White Dragon's Order arrives, and Tarish's betrayal."
    },
    faixas: [{ album: "frozen_tears", faixa: 9 }, { album: "cold_embrace", faixa: 3 }, { album: "cold_embrace", faixa: 4 }]
  },
  {
    id: "portoes_marfim",
    categoria: "lugar",
    saga: "warm",
    nome: { pt: "Os Portões de Marfim", en: "The Ivory Gates" },
    imagem: "assets/codex/portoes_marfim.jpg",
    descricao: {
      pt: "Portal mágico escondido nas Terras do Caos, marcado por dois portões esculpidos com runas sagradas. Além deles ergue-se a Torre Sombria do Abismo, cuja câmara mais alta guarda a espada esmeralda sob a vigília de um guardião ancestral.",
      en: "A magical portal hidden in the Lands of Chaos, marked by two gates carved with holy runes. Beyond them rises the Dark Tower of the Abyss, whose highest chamber holds the emerald sword under the watch of an ancestral guardian."
    },
    faixas: [{ album: "symphony", faixa: 7 }, { album: "symphony", faixa: 8 }]
  },
  {
    id: "elgard",
    categoria: "lugar",
    saga: "dual",
    nome: { pt: "Elgard, o Reino Verde", en: "Elgard, the Green Kingdom" },
    imagem: "assets/codex/elgard.jpg",
    descricao: {
      pt: "O reino verde e místico onde a Ordem do Dragão Branco tem sua sede, e onde o Guerreiro de Gelo obtém a primeira das três chaves da sabedoria rumo aos Portões de Marfim. Seus ventos guardam as memórias antigas de Airin, Arwald e do próprio Guerreiro — heróis da saga anterior.",
      en: "The green, mystical kingdom where the White Dragon's Order is headquartered, and where the Ice Warrior obtains the first of the three keys of wisdom on his way to the Ivory Gates. Its winds carry the old memories of Airin, Arwald, and the Warrior himself — heroes of the previous saga."
    },
    faixas: [{ album: "legendary_tales", faixa: 7 }, { album: "symphony", faixa: 2 }, { album: "dark_secret", faixa: 4 }]
  },

  // ===== Artefatos =====
  {
    id: "espada_esmeralda",
    categoria: "artefato",
    saga: "dual",
    nome: { pt: "A Espada Esmeralda", en: "The Emerald Sword" },
    imagem: "assets/codex/espada_esmeralda.jpg",
    descricao: {
      pt: "Forjada pelo elfo Loinir com a Pedra Esmeralda para vingar seu irmão torturado, e depois imbuída de poder pelos anjos. Escondida além dos Portões de Marfim até o Guerreiro de Gelo encontrá-la e usá-la para derrotar Akron — hoje repousa perdida no fundo do mar de Algalord.",
      en: "Forged by the elf Loinir with the Emerald Stone to avenge his tortured brother, and later imbued with power by the angels. Hidden beyond the Ivory Gates until the Ice Warrior found it and used it to defeat Akron — today it lies lost at the bottom of Algalord's sea."
    },
    faixas: [{ album: "symphony", faixa: 2 }, { album: "dawn_of_victory", faixa: 3 }, { album: "triumph_or_agony", faixa: 5 }]
  },
  {
    id: "sete_livros_negros",
    categoria: "artefato",
    saga: "cold",
    nome: { pt: "Os Sete Livros Negros", en: "The Seven Black Books" },
    imagem: "assets/codex/sete_livros_negros.jpg",
    descricao: {
      pt: "Escritos por Nekron com sangue de anjos, contêm seu testamento de maldade — seis foram encontrados ao longo dos séculos, mas o sétimo, “a chave negra de um portão do Inferno”, guarda o segredo da sua própria ressurreição e permanece escondido em Dar-Kunor até a chegada da Ordem do Dragão Branco.",
      en: "Written by Nekron with the blood of angels, they hold his testament of evil — six were found over the centuries, but the seventh, “the black key of a gate of Hell,” holds the secret of his own resurrection and stays hidden in Dar-Kunor until the White Dragon's Order arrives."
    },
    faixas: [{ album: "dark_secret", faixa: 1 }, { album: "triumph_or_agony", faixa: 8 }, { album: "triumph_or_agony", faixa: 10 }]
  },
  {
    id: "livro_branco",
    categoria: "artefato",
    saga: "cold",
    nome: { pt: "O Livro Branco de Erian", en: "Erian's White Book" },
    imagem: "assets/codex/livro_branco.jpg",
    descricao: {
      pt: "Contraponto sagrado aos Livros Negros, escrito pelo anjo-guerreiro Erian com o próprio sangue. Roubado há três mil anos e escondido na fortaleza de Har-Kuun sob a guarda do dragão Thanor, suas páginas recuperadas revelam a profecia final que decide o destino da Dark Secret Saga.",
      en: "The sacred counterpart to the Black Books, written by the angel-warrior Erian with his own blood. Stolen three thousand years ago and hidden in the fortress of Har-Kuun under the dragon Thanor's watch, its recovered pages reveal the final prophecy that decides the Dark Secret Saga's fate."
    },
    faixas: [{ album: "dark_secret", faixa: 6 }, { album: "frozen_tears", faixa: 9 }, { album: "cold_embrace", faixa: 6 }]
  },
  {
    id: "tres_chaves",
    categoria: "artefato",
    saga: "warm",
    nome: { pt: "As Três Chaves da Sabedoria e Ikaren", en: "The Three Keys of Wisdom and Ikaren" },
    imagem: "assets/codex/tres_chaves.jpg",
    descricao: {
      pt: "Três chaves mágicas guardadas por um enigma no Espelho das Sombras, pelo dragão Tharos e por um antigo altar — desafios que o Guerreiro de Gelo precisa vencer para abrir os Portões de Marfim. Duas delas se encaixam para formar o Ikaren, objeto místico que revela o caminho até os portões.",
      en: "Three magic keys guarded by a riddle in the Mirror of Shadows, by the dragon Tharos, and by an ancient altar — trials the Ice Warrior must overcome to open the Ivory Gates. Two of them fit together to form the Ikaren, a mystical object that reveals the path to the gates."
    },
    faixas: [{ album: "legendary_tales", faixa: 7 }, { album: "symphony", faixa: 2 }, { album: "symphony", faixa: 3 }]
  },
  {
    id: "aelin_mornir",
    categoria: "artefato",
    saga: "cold",
    nome: { pt: "Aelin e Mornir, os Olhos de Thanor", en: "Aelin and Mornir, Thanor's Eyes" },
    imagem: "assets/codex/aelin_mornir.jpg",
    descricao: {
      pt: "Os antigos olhos do dragão Thanor, transformados em duas pedras preciosas pelos anjos após a última Guerra Primordial e espalhadas pelo mundo — uma nas Terras Fantasmas, outra no Reino das Cachoeiras. Reunidas em suas órbitas vazias, devolvem a vida a Thanor no dia da batalha final.",
      en: "The ancient eyes of the dragon Thanor, turned into two precious stones by the angels after the last Primordial War and scattered across the world — one in the Ghostlands, the other in the Realm of the Waterfalls. Reunited in his empty sockets, they restore Thanor's life on the day of the final battle."
    },
    faixas: [{ album: "chaos_to_eternity", faixa: 4 }, { album: "chaos_to_eternity", faixa: 9 }]
  }
];
