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
    mencoes: { pt: ["Guerreiro de Gelo", "Guerreiro"], en: ["Ice Warrior", "Warrior"] },
    descricao: {
      pt: "Protagonista de toda a Saga da Espada Esmeralda: um guerreiro de sangue nórdico, rei da aldeia de Loregard. Para atravessar os Portões de Marfim precisa ter um coração puro como gelo — daí seu epíteto. Parte em busca da lendária espada de esmeralda para libertar suas terras da guerra e das trevas, empunhando-a ao fim como arma sagrada contra Akron. Capturado na queda de Algalord, tem as duas pernas mutiladas por Akron e está prestes a ser lançado vivo aos pântanos de Acheros quando a rebelião de Dargor muda o destino da guerra — já moribundo, ainda encontra forças para arrastar o Rei Negro consigo para as águas escuras.",
      en: "The protagonist of the entire Emerald Sword Saga: a warrior of Nordic blood, king of the village of Loregard. To pass through the Ivory Gates he must have a heart pure as ice — hence his epithet. He sets out in search of the legendary emerald sword to free his lands from war and darkness, wielding it as a holy weapon against Akron. Captured when Algalord falls, he has both legs mutilated by Akron and is about to be thrown alive into the marshes of Acheros when Dargor's rebellion changes the tide of war — already dying, he still finds the strength to drag the Black King down into the dark waters with him."
    },
    faixas: [{ album: "legendary_tales", faixa: 2 }, { album: "symphony", faixa: 10 }, { album: "dawn_of_victory", faixa: 3 }]
  },
  {
    id: "dargor",
    categoria: "personagem",
    saga: "dual",
    nome: { pt: "Dargor, Senhor das Sombras", en: "Dargor, Shadowlord" },
    imagem: "assets/codex/dargor.jpg",
    mencoes: { pt: ["Dargor"], en: ["Dargor"] },
    descricao: {
      pt: "Príncipe das Terras Sombrias e Senhor das Sombras, Dargor é meio-demônio — filho adotivo do mago das trevas Vankar, mas com sangue humano correndo em suas veias. Introduzido como vilão em Dawn of Victory, ataca o Guerreiro de Gelo mesmo depois de ser poupado por ele, enganado pela mentira de Vankar de que o Guerreiro massacrara sua família; só na batalha final ouve a verdade sobre Akron e se volta contra o próprio senhor. Sua história se transforma no arco central de redenção da Dark Secret Saga: perde o fiel cavalo Pask-Ur em busca da pedra Aelin, e é escolhido justamente por conhecer tanto a escuridão quanto a luz para cruzar sozinho o Portão do Mundo Antigo — onde seu corpo humano morre, preso atrás do portal que se fecha, e o espírito do anjo Erian se funde à sua alma, dando origem a um novo deus da Luz Cósmica sobre Algalord.",
      en: "Prince of the Darklands and Shadowlord, Dargor is half-demon — the adopted son of the dark wizard Vankar, but with human blood running through his veins. Introduced as a villain in Dawn of Victory, he attacks the Ice Warrior even after being spared by him, deceived by Vankar's lie that the Warrior had massacred his family; only in the final battle does he hear the truth about Akron and turn against his own lord. His story becomes the central redemption arc of the Dark Secret Saga: he loses his faithful horse Pask-Ur in the search for the Aelin stone, and is chosen — precisely for having known both darkness and light — to cross the Gate of the Ancient World alone, where his human body dies, trapped behind the portal as it closes, and the angel Erian's spirit merges with his soul, giving birth to a new God of Cosmic Light over Algalord."
    },
    faixas: [{ album: "dawn_of_victory", faixa: 5 }, { album: "dragonflame", faixa: 9 }, { album: "dark_secret", faixa: 1 }, { album: "chaos_to_eternity", faixa: 9 }]
  },
  {
    id: "akron",
    categoria: "personagem",
    saga: "warm",
    nome: { pt: "Akron, o Rei Negro", en: "Akron, King of the Dark" },
    imagem: "assets/codex/akron.jpg",
    mencoes: { pt: ["Akron"], en: ["Akron"] },
    descricao: {
      pt: "O Rei Negro, “filho do Inferno, traidor da Luz” — também chamado de Rex Tremende, “rei terrível” — principal antagonista da Saga da Espada Esmeralda. Comanda legiões de mortos-vivos e ressuscita a Rainha dos Horizontes Sombrios para reforçar seu exército. No fim, tem o olho direito perfurado pela própria espada esmeralda nas mãos do Guerreiro de Gelo; sua queda vem nos pântanos, afogado e devorado por serpentes do abismo junto ao Guerreiro, num duelo final que também o vitima.",
      en: "The Black King, “Son of Hell, betrayer of Light” — also called Rex Tremende, “dreadful king” — the main antagonist of the Emerald Sword Saga. He commands legions of the undead and resurrects the Queen of the Dark Horizons to strengthen his army. In the end, his right eye is pierced by the emerald sword itself in the Ice Warrior's hands; his downfall comes in the marshes, drowned and devoured by serpents of the abyss alongside the Warrior, in a final duel that claims them both."
    },
    faixas: [{ album: "dawn_of_victory", faixa: 6 }, { album: "rain_of_flames", faixa: 1 }, { album: "rain_of_flames", faixa: 3 }]
  },
  {
    id: "nekron",
    categoria: "personagem",
    saga: "cold",
    nome: { pt: "Nekron, o Cavaleiro-Demônio", en: "Nekron, the Demonknight" },
    imagem: "assets/codex/nekron.jpg",
    mencoes: { pt: ["Nekron"], en: ["Nekron"] },
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
    mencoes: { pt: ["Rei Uriel", "rei Uriel"], en: ["King Uriel"] },
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
    mencoes: { pt: ["Iras Algor", "Iras"], en: ["Iras Algor", "Iras"] },
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
    mencoes: { pt: ["Thanor"], en: ["Thanor"] },
    descricao: {
      pt: "Dragão negro petrificado que guarda o Livro Branco de Erian em Har-Kuun. Traiu Nekron nas guerras primordiais ao revelar aos anjos seu esconderijo — furioso, o filho de Kron arrancou seus dois olhos e o matou, aprisionando sua dor na pedra. Seu espírito, ainda torturado no Abismo, só retorna quando as pedras Aelin e Mornir, seus antigos olhos, são devolvidas às órbitas vazias da estátua, despertando-o para a batalha final.",
      en: "A petrified black dragon who guards Erian's White Book at Har-Kuun. He betrayed Nekron in the primordial wars by revealing his hiding place to the angels — furious, Kron's son tore out both his eyes and killed him, trapping his pain in stone. His spirit, still tortured in the Abyss, only returns when the stones Aelin and Mornir, his ancient eyes, are placed back into the statue's empty sockets, awakening him for the final battle."
    },
    faixas: [{ album: "cold_embrace", faixa: 3 }, { album: "cold_embrace", faixa: 4 }, { album: "chaos_to_eternity", faixa: 9 }]
  },
  {
    id: "rainha_horizontes_sombrios",
    categoria: "personagem",
    saga: "warm",
    nome: { pt: "A Rainha dos Horizontes Sombrios", en: "The Queen of the Dark Horizons" },
    imagem: "assets/codex/rainha_horizontes_sombrios.jpg",
    mencoes: { pt: ["Rainha dos Horizontes Sombrios"], en: ["Queen of the Dark Horizons"] },
    descricao: {
      pt: "Bruxa e rainha dos mortos, trazida de volta por Akron, que usa o poder da espada esmeralda para abrir o Livro dos Mortos guardado por um Anjo Sombrio e assim ressuscitá-la. Emerge das criptas amaldiçoadas ao som de velas negras, convocando legiões de mortos-vivos e vampiros para reforçar o exército das trevas na guerra contra Algalord.",
      en: "A witch and queen of the dead, brought back by Akron, who uses the emerald sword's power to open the Book of the Dead — kept by a Dark Angel — and so resurrect her. She rises from the cursed crypts to the light of black candles, summoning legions of the undead and vampires to reinforce the army of darkness in the war against Algalord."
    },
    faixas: [{ album: "rain_of_flames", faixa: 3 }]
  },
  {
    id: "gargulas",
    categoria: "personagem",
    saga: "warm",
    nome: { pt: "As Gárgulas de Algalord", en: "The Gargoyles of Algalord" },
    imagem: "assets/codex/gargulas.jpg",
    mencoes: { pt: ["Gárgulas"], en: ["Gargoyles"] },
    descricao: {
      pt: "Convocadas por Dargor contra as legiões das trevas na batalha final da Saga da Espada Esmeralda, essas “anjas de pedra” — guardiãs aladas mais protetoras que demoníacas — carregam os demônios derrotados até os portais do Caos escondidos nas criptas das Terras Fantasmas e os fecham para sempre, tornando-se suas guardiãs eternas; depois da guerra, também viram o novo símbolo esculpido nos muros da cidade reconstruída.",
      en: "Summoned by Dargor against the legions of darkness in the final battle of the Emerald Sword Saga, these “angels of stone” — winged guardians more protective than demonic — carry the defeated demons to the portals of Chaos hidden in the crypts of the Ghostlands and seal them shut forever, becoming their eternal guardians; after the war, they also become the new emblem carved into the walls of the rebuilt city."
    },
    faixas: [{ album: "dragonflame", faixa: 11 }]
  },
  {
    id: "tharos",
    categoria: "personagem",
    saga: "warm",
    nome: { pt: "Tharos", en: "Tharos" },
    imagem: "assets/codex/tharos.jpg",
    mencoes: { pt: ["Tharos"], en: ["Tharos"] },
    descricao: {
      pt: "Dragão sob um feitiço sombrio que o Guerreiro de Gelo enfrenta e liberta em Symphony of Enchanted Lands — a partir daí, seu fiel aliado, chamado por ele de “irmão”. Ajuda a encontrar as chaves da sabedoria e enfrenta ao seu lado o guardião ancestral da espada esmeralda na Torre Sombria do Abismo; ferido de morte no impacto contra a criatura, escolhe voar até sua terra natal, Dragonland, para morrer lá.",
      en: "A dragon under a dark curse whom the Ice Warrior fights and frees in Symphony of Enchanted Lands — from then on his loyal ally, called “brother” by the Warrior. He helps find the keys of wisdom and fights beside him against the emerald sword's ancestral guardian in the Dark Tower of Abyss; mortally wounded in the impact with the creature, he chooses to fly on to his homeland, Dragonland, to die there."
    },
    faixas: [{ album: "symphony", faixa: 5 }, { album: "symphony", faixa: 7 }, { album: "symphony", faixa: 10 }]
  },
  {
    id: "airin",
    categoria: "personagem",
    saga: "warm",
    nome: { pt: "Airin", en: "Airin" },
    imagem: "assets/codex/airin.jpg",
    mencoes: { pt: ["Airin"], en: ["Airin"] },
    descricao: {
      pt: "Princesa de Ancelot amada por Arwald, capturada junto com ele e o Guerreiro de Gelo na armadilha de Akron em Hargor. É violentada pelos guerreiros do Rei Negro diante do Guerreiro e jogada viva num caldeirão de ácido — sua morte, ao lado da de Arwald, é o momento mais brutal da Saga da Espada Esmeralda e o estopim do juramento de vingança do herói.",
      en: "A princess of Ancelot loved by Arwald, captured together with him and the Ice Warrior in Akron's trap at Hargor. She is raped by the Black King's warriors in front of the Warrior and thrown alive into a cauldron of acid — her death, alongside Arwald's, is the most brutal moment of the Emerald Sword Saga and the spark for the hero's vow of revenge."
    },
    faixas: [{ album: "legendary_tales", faixa: 5 }, { album: "dawn_of_victory", faixa: 9 }]
  },
  {
    id: "arwald",
    categoria: "personagem",
    saga: "warm",
    nome: { pt: "Arwald", en: "Arwald" },
    imagem: "assets/codex/arwald.jpg",
    mencoes: { pt: ["Arwald"], en: ["Arwald"] },
    descricao: {
      pt: "Guerreiro de Ancelot a quem o Guerreiro de Gelo confia suas tropas no início da saga; amado de Airin, celebra o retorno do herói com a espada esmeralda e o acompanha na marcha rumo a Hargor. Capturado na armadilha de Akron, sofre o mesmo destino cruel de Airin no caldeirão de ácido, mas com o último sopro de vida consegue jogar o ácido nas correntes do Guerreiro — libertando-o antes de morrer.",
      en: "A warrior of Ancelot entrusted with the Ice Warrior's troops at the saga's start; Airin's beloved, he hails the hero's return with the emerald sword and marches with him toward Hargor. Captured in Akron's trap, he suffers the same cruel fate as Airin in the cauldron of acid, but with his very last breath manages to throw the acid onto the Warrior's chains — freeing him before he dies."
    },
    faixas: [{ album: "legendary_tales", faixa: 5 }, { album: "dawn_of_victory", faixa: 9 }, { album: "dawn_of_victory", faixa: 10 }]
  },
  {
    id: "aresius",
    categoria: "personagem",
    saga: "dual",
    nome: { pt: "Aresius de Elgard", en: "Aresius of Elgard" },
    imagem: "assets/codex/aresius.jpg",
    mencoes: { pt: ["Aresius"], en: ["Aresius"] },
    descricao: {
      pt: "Mago de Elgard que guia à distância o Guerreiro de Gelo e narra boa parte da saga em primeira pessoa nas “Crônicas de Algalord”. Eterno inimigo de Vankar, cura a mente do Guerreiro após o trauma da morte de Airin e Arwald. Décadas depois, já um velho sábio, é ele quem reconhece o nome Har-Kuun para a Ordem do Dragão Branco na Dark Secret Saga.",
      en: "A wizard of Elgard who guides the Ice Warrior from afar and narrates much of the saga in first person through the “Algalord Chronicles.” The eternal enemy of Vankar, he heals the Warrior's mind after the trauma of Airin and Arwald's deaths. Decades later, now an old sage, he's the one who recognizes the name Har-Kuun for the White Dragon's Order in the Dark Secret Saga."
    },
    faixas: [{ album: "symphony", faixa: 3 }, { album: "dawn_of_victory", faixa: 4 }, { album: "frozen_tears", faixa: 9 }]
  },
  {
    id: "etherus",
    categoria: "personagem",
    saga: "cold",
    nome: { pt: "Etherus", en: "Etherus" },
    imagem: "assets/codex/etherus.jpg",
    mencoes: { pt: ["Etherus"], en: ["Etherus"] },
    descricao: {
      pt: "Mestre-mago cofundador da Ordem do Dragão Branco ao lado de Iras Algor. No duelo final da Dark Secret Saga, invoca a magia proibida dos antigos — “Erin, Taria, Loran” — sabendo que ela custará sua própria vida, e se arremessa contra Koras, o mais poderoso dos sete demônios, matando-o em um combate mútuo e selando a vitória sobre o exército de Nekron.",
      en: "A master wizard, co-founder of the White Dragon's Order alongside Iras Algor. In the Dark Secret Saga's final duel, he invokes the ancients' forbidden magic — “Erin, Taria, Loran” — knowing it will cost his own life, and hurls himself at Koras, mightiest of the seven demons, killing him in a mutual, fatal clash that seals the victory over Nekron's army."
    },
    faixas: [{ album: "dark_secret", faixa: 6 }, { album: "chaos_to_eternity", faixa: 9 }]
  },
  {
    id: "khaas",
    categoria: "personagem",
    saga: "cold",
    nome: { pt: "Khaas", en: "Khaas" },
    imagem: "assets/codex/khaas.jpg",
    mencoes: { pt: ["Khaas"], en: ["Khaas"] },
    descricao: {
      pt: "Um dos cinco heróis escolhidos pela Ordem do Dragão Branco na busca pelo Livro Branco. Na travessia por uma passagem subterrânea alagada rumo à pedra Mornir, enfrenta ao lado de Dargor uma criatura monstruosa — já mortalmente ferido, usa a última força do corpo para contê-la, dando a Dargor a chance de desferir o golpe final.",
      en: "One of the five heroes chosen by the White Dragon's Order for the quest for the White Book. Crossing a flooded underground passage toward the Mornir stone, he and Dargor face a monstrous creature — already mortally wounded, he uses the last of his strength to hold it back, giving Dargor the chance to land the killing blow."
    },
    faixas: [{ album: "dark_secret", faixa: 6 }, { album: "chaos_to_eternity", faixa: 6 }]
  },
  {
    id: "lothen",
    categoria: "personagem",
    saga: "cold",
    nome: { pt: "Lothen", en: "Lothen" },
    imagem: "assets/codex/lothen.jpg",
    mencoes: { pt: ["Lothen"], en: ["Lothen"] },
    descricao: {
      pt: "Princesa do Reino das Cachoeiras Ancestrais e uma das cinco figuras escolhidas para formar a Ordem do Dragão Branco. Acompanha o grupo por toda a busca pelo Livro Branco, testemunhando tanto a traição de Tarish quanto o despertar de Thanor na batalha final em sua própria terra natal.",
      en: "Princess of the Realm of the Ancient Waterfalls and one of the five figures chosen to form the White Dragon's Order. She travels with the group throughout the search for the White Book, witnessing both Tarish's betrayal and Thanor's awakening in the final battle on her own home soil."
    },
    faixas: [{ album: "dark_secret", faixa: 6 }, { album: "chaos_to_eternity", faixa: 9 }]
  },
  {
    id: "tarish",
    categoria: "personagem",
    saga: "cold",
    nome: { pt: "Tarish", en: "Tarish" },
    imagem: "assets/codex/tarish.jpg",
    mencoes: { pt: ["Tarish", "Tharish"], en: ["Tarish", "Tharish"] },
    descricao: {
      pt: "Velho rei-elfo das cavernas, guia a Ordem do Dragão Branco pelas passagens até Dar-Kunor. Revela-se espião infiltrado da Ordem Negra: faz Iras Algor refém em Har-Kuun, exigindo o Livro Branco em troca de sua vida, e consegue arrancar páginas do livro antes de ser morto por Dargor e Khaas.",
      en: "An old elf-king of the caverns who guides the White Dragon's Order through the passages to Dar-Kunor. He turns out to be a spy planted by the Black Order: he takes Iras Algor hostage at Har-Kuun, demanding the White Book in exchange for his life, and manages to tear pages from the book before being killed by Dargor and Khaas."
    },
    faixas: [{ album: "dark_secret", faixa: 6 }, { album: "cold_embrace", faixa: 4 }]
  },
  {
    id: "vankar",
    categoria: "personagem",
    saga: "dual",
    nome: { pt: "Vankar de Helm", en: "Vankar of Helm" },
    imagem: "assets/codex/vankar.jpg",
    mencoes: { pt: ["Vankar"], en: ["Vankar"] },
    descricao: {
      pt: "Velho mago das trevas de Helm, pai adotivo de Dargor e eterno inimigo de Aresius. Mente para Dargor dizendo que o Guerreiro de Gelo massacrara sua família, levando-o a atacar o Guerreiro mesmo depois de ser poupado por ele. Décadas depois, tenta em vão reconquistar o filho adotivo em uma visão, sem imaginar que o próprio poder das gárgulas que revelou a Dargor seria usado contra o exército das trevas.",
      en: "An old dark wizard of Helm, Dargor's adoptive father and Aresius's eternal enemy. He lies to Dargor, telling him the Ice Warrior had massacred his family, driving him to attack the Warrior even after being spared. Decades later, he tries in vain to reclaim his adopted son in a vision, never imagining that the very power of the gargoyles he revealed to Dargor would be turned against the army of darkness."
    },
    faixas: [{ album: "dawn_of_victory", faixa: 5 }, { album: "dark_secret", faixa: 9 }]
  },
  {
    id: "erian",
    categoria: "personagem",
    saga: "cold",
    nome: { pt: "Erian", en: "Erian" },
    imagem: "assets/codex/erian.jpg",
    mencoes: { pt: ["Erian"], en: ["Erian"] },
    descricao: {
      pt: "Anjo-guerreiro que escreveu o Livro Branco com o próprio sangue, cinco mil anos antes da Dark Secret Saga. No clímax final, suas palavras proféticas surgem gravadas na pele de Dargor no alfabeto sagrado Irindal, revelando que o Senhor das Sombras é sua reencarnação — e é o espírito de Erian que se funde à alma de Dargor para dar origem a um novo Deus da Luz Cósmica.",
      en: "The angel-warrior who wrote the White Book with his own blood, five thousand years before the Dark Secret Saga. At the final climax, his prophetic words appear carved into Dargor's skin in the holy Irindal alphabet, revealing the Shadowlord to be his reincarnation — and it's Erian's spirit that merges with Dargor's soul to give birth to a new God of Cosmic Light."
    },
    faixas: [{ album: "dark_secret", faixa: 6 }, { album: "chaos_to_eternity", faixa: 9 }]
  },

  // ===== Lugares =====
  {
    id: "algalord",
    categoria: "lugar",
    saga: "dual",
    nome: { pt: "Algalord, a Cidade Sagrada", en: "Algalord, the Holy City" },
    imagem: "assets/codex/algalord.jpg",
    mencoes: { pt: ["Algalord"], en: ["Algalord"] },
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
    mencoes: { pt: ["Hargor"], en: ["Hargor"] },
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
    mencoes: { pt: ["Dar-Kunor"], en: ["Dar-Kunor"] },
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
    mencoes: { pt: ["Har-Kuun"], en: ["Har-Kuun"] },
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
    mencoes: { pt: ["Portões de Marfim", "portões de marfim"], en: ["Ivory Gates", "ivory gates"] },
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
    mencoes: { pt: ["Elgard"], en: ["Elgard"] },
    descricao: {
      pt: "O reino verde e místico onde a Ordem do Dragão Branco tem sua sede, e onde o Guerreiro de Gelo obtém a primeira das três chaves da sabedoria rumo aos Portões de Marfim. Seus ventos guardam as memórias antigas de Airin, Arwald e do próprio Guerreiro — heróis da saga anterior.",
      en: "The green, mystical kingdom where the White Dragon's Order is headquartered, and where the Ice Warrior obtains the first of the three keys of wisdom on his way to the Ivory Gates. Its winds carry the old memories of Airin, Arwald, and the Warrior himself — heroes of the previous saga."
    },
    faixas: [{ album: "legendary_tales", faixa: 7 }, { album: "symphony", faixa: 2 }, { album: "dark_secret", faixa: 4 }]
  },
  {
    id: "ancelot",
    categoria: "lugar",
    saga: "warm",
    nome: { pt: "Ancelot", en: "Ancelot" },
    imagem: "assets/codex/ancelot.jpg",
    mencoes: { pt: ["Ancelot"], en: ["Ancelot"] },
    descricao: {
      pt: "Cidade natal de Arwald e lar de Airin, nas Terras Médias das Terras Encantadas. Cai sob as forças de Akron logo no início da saga — o estopim da jornada do Guerreiro de Gelo — e é libertada quando ele retorna com a espada de esmeralda, celebrada nas ruínas próximas de Kazar.",
      en: "The home city of Arwald and Airin, in the Middle Lands of the Enchanted Lands. It falls to Akron's forces early in the saga — the spark for the Ice Warrior's quest — and is freed when he returns with the emerald sword, celebrated at the nearby ruins of Kazar."
    },
    faixas: [{ album: "legendary_tales", faixa: 5 }, { album: "dawn_of_victory", faixa: 2 }]
  },
  {
    id: "loregard",
    categoria: "lugar",
    saga: "warm",
    nome: { pt: "Loregard", en: "Loregard" },
    imagem: "assets/codex/loregard.jpg",
    mencoes: { pt: ["Loregard"], en: ["Loregard"] },
    descricao: {
      pt: "Aldeia natal do Guerreiro de Gelo, da qual ele é rei. É de lá que um mensageiro o chama ao conselho para receber a missão da espada de esmeralda — e é como “o homem de Loregard” que ele será celebrado em toda a saga, mesmo décadas depois, na Dark Secret Saga.",
      en: "The Ice Warrior's home village, where he is king. A messenger rides there to summon him before the council for the quest of the emerald sword — and it's as “the man from Loregard” that he is celebrated throughout the saga, even decades later, in the Dark Secret Saga."
    },
    faixas: [{ album: "legendary_tales", faixa: 2 }, { album: "triumph_or_agony", faixa: 5 }]
  },
  {
    id: "reino_cachoeiras",
    categoria: "lugar",
    saga: "cold",
    nome: { pt: "O Reino das Cachoeiras Sagradas", en: "The Realm of the Sacred Waterfalls" },
    imagem: "assets/codex/reino_cachoeiras.jpg",
    mencoes: { pt: ["Reino das Cachoeiras Sagradas"], en: ["Realm of the Sacred Waterfalls"] },
    descricao: {
      pt: "Reino das lendárias cachoeiras ancestrais, terra natal da heroína Lothen e palco da batalha final da Dark Secret Saga. É no pico de Arinen, sua montanha mais alta, que os exércitos do mundo inteiro se reúnem no dia do último eclipse total do século para enfrentar os sete demônios de Nekron.",
      en: "The realm of the legendary ancient waterfalls, homeland of the heroine Lothen and the setting for the Dark Secret Saga's final battle. It's on the peak of Arinen, its highest mountain, that armies from across the world gather on the day of the century's last total eclipse to face Nekron's seven demons."
    },
    faixas: [{ album: "chaos_to_eternity", faixa: 6 }, { album: "chaos_to_eternity", faixa: 9 }]
  },
  {
    id: "elnor_thorald",
    categoria: "lugar",
    saga: "warm",
    nome: { pt: "Elnor e Thorald", en: "Elnor and Thorald" },
    imagem: "assets/codex/elnor_thorald.jpg",
    mencoes: { pt: ["Elnor e Thorald", "Elnor", "Thorald"], en: ["Elnor and Thorald", "Elnor", "Thorald"] },
    descricao: {
      pt: "Cidades-irmãs das Terras Encantadas, antigas aliadas de Ancelot e Elgard nas Guerras dos Anos das Trevas. Destruídas pelas forças de Akron enquanto o Guerreiro de Gelo está preso em Hargor, sua queda é lamentada por um Anjo Sombrio e abre caminho para o cerco final a Algalord.",
      en: "Sister cities of the Enchanted Lands, old allies of Ancelot and Elgard in the Wars of the Years of Darkness. Destroyed by Akron's forces while the Ice Warrior is held captive at Hargor, their fall is mourned by a Dark Angel and clears the way for the final siege of Algalord."
    },
    faixas: [{ album: "rain_of_flames", faixa: 5 }, { album: "rain_of_flames", faixa: 6 }]
  },
  {
    id: "vila_anoes",
    categoria: "lugar",
    saga: "warm",
    nome: { pt: "A Vila dos Anões", en: "The Village of Dwarves" },
    imagem: "assets/codex/vila_anoes.jpg",
    mencoes: { pt: ["Vila dos Anões"], en: ["Village of Dwarves"] },
    descricao: {
      pt: "Povoado de descanso na colina de Gandor, perto das Montanhas Cinzentas, onde o Guerreiro de Gelo, Arwald e o mago Aresius riem e conversam antes de seguir para a batalha final contra Dargor e Akron. É ali que a história de Dargor — adotado e corrompido por Vankar — é revelada pela primeira vez.",
      en: "A resting village on Gandor hill, near the Grey Mountains, where the Ice Warrior, Arwald, and the wizard Aresius laugh and talk before setting off for the final battle against Dargor and Akron. It's there that Dargor's story — adopted and corrupted by Vankar — is first revealed."
    },
    faixas: [{ album: "dawn_of_victory", faixa: 4 }]
  },
  {
    id: "ainor",
    categoria: "lugar",
    saga: "cold",
    nome: { pt: "Ainor", en: "Ainor" },
    imagem: "assets/codex/ainor.jpg",
    mencoes: { pt: ["Ainor"], en: ["Ainor"] },
    descricao: {
      pt: "Salão nórdico onde o Livro Branco de Erian ficava guardado, até ser roubado há três mil anos pelos senhores das Terras Sombrias e escondido na fortaleza gelada de Har-Kuun. Décadas depois, é também um dos pontos de mobilização do exército da Ordem do Dragão Branco rumo à batalha final.",
      en: "The Nordic hall where Erian's White Book was once kept, until it was stolen three thousand years ago by the lords of the Darklands and hidden away in the frozen fortress of Har-Kuun. Decades later, it's also one of the mustering points for the White Dragon's Order's army on its way to the final battle."
    },
    faixas: [{ album: "frozen_tears", faixa: 8 }, { album: "frozen_tears", faixa: 9 }]
  },
  {
    id: "ghostlands",
    categoria: "lugar",
    saga: "dual",
    nome: { pt: "As Terras Fantasmas", en: "The Ghostlands" },
    imagem: "assets/codex/ghostlands.jpg",
    mencoes: { pt: ["Terras Fantasmas"], en: ["Ghostlands"] },
    descricao: {
      pt: "Região desértica conquistada pelo Exército das Trevas séculos antes das duas sagas. É entre suas ruínas empoeiradas que a pedra Aelin, um dos antigos olhos de Thanor, é encontrada — e é em suas criptas que ficam os portais do Caos, selados para sempre pelas gárgulas de Algalord depois da guerra.",
      en: "A desert region conquered by the Army of Darkness centuries before both sagas. It's among its dusty ruins that the Aelin stone, one of Thanor's ancient eyes, is found — and in its crypts lie the portals of Chaos, sealed forever by Algalord's gargoyles after the war."
    },
    faixas: [{ album: "dragonflame", faixa: 11 }, { album: "chaos_to_eternity", faixa: 4 }]
  },

  // ===== Artefatos =====
  {
    id: "espada_esmeralda",
    categoria: "artefato",
    saga: "dual",
    nome: { pt: "A Espada Esmeralda", en: "The Emerald Sword" },
    imagem: "assets/codex/espada_esmeralda.jpg",
    mencoes: { pt: ["espada de esmeralda"], en: ["emerald sword"] },
    descricao: {
      pt: "Durante as guerras élficas, o senhor das trevas Atlon, “Fúria do Inferno”, capturou e torturou Naimur nas minas de Galfor usando a Pedra Esmeralda; seu irmão Loinir tomou a pedra, forjou-a em espada para vingá-lo e pediu aos anjos que a imbuíssem de poder. Temendo seu poder, os magos a esconderam além dos Portões de Marfim até o Guerreiro de Gelo encontrá-la e usá-la para derrotar Akron — hoje repousa perdida no fundo do mar de Algalord.",
      en: "During the elvish wars, the darklord Atlon, “Hell's Fury,” captured and tortured Naimur in the mines of Galfor using the Emerald Stone; his brother Loinir took the stone, forged it into a sword to avenge him, and had the angels imbue it with power. Fearing its might, the wizards hid it beyond the Ivory Gates until the Ice Warrior found it and used it to defeat Akron — today it lies lost at the bottom of Algalord's sea."
    },
    faixas: [{ album: "symphony", faixa: 2 }, { album: "dawn_of_victory", faixa: 3 }, { album: "triumph_or_agony", faixa: 5 }]
  },
  {
    id: "sete_livros_negros",
    categoria: "artefato",
    saga: "cold",
    nome: { pt: "Os Sete Livros Negros", en: "The Seven Black Books" },
    imagem: "assets/codex/sete_livros_negros.jpg",
    mencoes: { pt: ["sete livros negros", "sétimo livro negro"], en: ["seven black books", "seventh black book"] },
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
    mencoes: { pt: ["Livro Branco de Erian", "livro de Erian"], en: ["Erian's White Book", "Erian's book"] },
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
    mencoes: { pt: ["três chaves da sabedoria", "chaves da sabedoria"], en: ["three keys of wisdom", "keys of wisdom"] },
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
    mencoes: { pt: ["Aelin e Mornir", "Aelin", "Mornir"], en: ["Aelin and Mornir", "Aelin", "Mornir"] },
    descricao: {
      pt: "Os antigos olhos do dragão Thanor, transformados em duas pedras preciosas pelos anjos após a última Guerra Primordial e espalhadas pelo mundo — uma nas Terras Fantasmas, outra no Reino das Cachoeiras. Reunidas em suas órbitas vazias, devolvem a vida a Thanor no dia da batalha final.",
      en: "The ancient eyes of the dragon Thanor, turned into two precious stones by the angels after the last Primordial War and scattered across the world — one in the Ghostlands, the other in the Realm of the Waterfalls. Reunited in his empty sockets, they restore Thanor's life on the day of the final battle."
    },
    faixas: [{ album: "chaos_to_eternity", faixa: 4 }, { album: "chaos_to_eternity", faixa: 9 }]
  },
  {
    id: "livro_dos_mortos",
    categoria: "artefato",
    saga: "warm",
    nome: { pt: "O Livro dos Mortos", en: "The Book of the Dead" },
    imagem: "assets/codex/livro_dos_mortos.jpg",
    mencoes: { pt: ["Livro dos Mortos"], en: ["Book of the Dead"] },
    descricao: {
      pt: "Tomo sombrio guardado por um Anjo Sombrio, aberto por Akron com o poder da espada esmeralda para ressuscitar a Rainha dos Horizontes Sombrios. Contraponto direto aos Livros Negros de Nekron na outra saga — mas escrito para trazer os mortos de volta, não para prever o fim do mundo.",
      en: "A dark tome kept by a Dark Angel, opened by Akron with the emerald sword's power to resurrect the Queen of the Dark Horizons. A direct counterpart to Nekron's Black Books in the other saga — but written to bring the dead back, not to foretell the world's end."
    },
    faixas: [{ album: "rain_of_flames", faixa: 1 }, { album: "rain_of_flames", faixa: 3 }]
  },
  {
    id: "irindal",
    categoria: "artefato",
    saga: "cold",
    nome: { pt: "Irindal, o Alfabeto dos Anjos", en: "Irindal, the Angels' Alphabet" },
    imagem: "assets/codex/irindal.jpg",
    mencoes: { pt: ["Irindal"], en: ["Irindal"] },
    descricao: {
      pt: "O alfabeto sagrado dos anjos. No clímax da Dark Secret Saga, palavras proféticas de Erian escritas em Irindal surgem gravadas na própria pele de Dargor, revelando que ele é a reencarnação do anjo-guerreiro e o escolhido para cruzar o Portão do Mundo Antigo.",
      en: "The holy alphabet of angels. At the climax of the Dark Secret Saga, prophetic words by Erian written in Irindal appear carved into Dargor's own skin, revealing that he is the angel-warrior's reincarnation and the one chosen to cross the Gate of the Ancient World."
    },
    faixas: [{ album: "chaos_to_eternity", faixa: 9 }]
  }
];
