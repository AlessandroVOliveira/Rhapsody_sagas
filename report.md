# Relatório de Revisão de Canonicidade — Rhapsody Sagas

**Data:** 2026-08-18
**Escopo:** todo o conteúdo textual e de dados do site (`docs/`), os arquivos por faixa (`01 - …` a `10 - …`) e os arquivos de prompt em `referencias/`.
**Fonte canônica única usada:** `referencias/RhapsodySagas.md` (compêndio completo — letras, prosa dos encartes, Crônicas de Algalord, Apêndices A–D), lido integralmente, mais as capas oficiais em `docs/assets/covers/` e os dois mapas oficiais (`docs/assets/map.jpg`, `docs/assets/map-known-world.jpg`).

> Relatório escrito em português para ficar junto dos outros documentos do repositório. Posso reescrever em inglês se preferir.

---

## Legenda de gravidade

| Marca | Significado |
|---|---|
| 🔴 **ERRO** | Contradiz diretamente a fonte. Precisa ser corrigido. |
| 🟠 **INVENÇÃO** | Afirma algo que a fonte não diz. Precisa ser removido ou marcado como especulação. |
| 🟡 **IMPRECISO** | Não é falso, mas induz a erro / está no lugar errado / é vago demais para servir. |
| ⚪ **LACUNA** | Informação canônica relevante que o site simplesmente não tem. |

---

## Sumário executivo

Números do levantamento:

- **97 faixas** catalogadas nas duas sagas.
- **59 das 97** (61%) têm o texto do arquivo `.md` do álbum **diferente** do texto que aparece no site. As duas cópias divergiram e a do `.md` é, na maioria dos casos, a versão antiga e mais errada.
- **3 faixas com letra são descritas como "instrumental"** — inclusive uma cujo próprio arquivo `.md` traz a letra logo acima da frase que diz que ela é instrumental.
- **Toda a sequência de capítulos de *Symphony of Enchanted Lands* no site está fora de ordem** e contradiz os resumos das próprias faixas que ela linka.
- **Sete faixas de SoEL** estão marcadas no mapa como se acontecessem em Dragonland — todas acontecem **além dos Portões de Marfim**, num reino que não existe em nenhum dos dois mapas.
- **As 11 faixas de *Power of the Dragonflame*** estão todas marcadas como "Algalord", incluindo as que se passam no litoral destruído e nos pântanos do sul.
- **As Terras Fantasmas (Ghostlands) não existem em `LOCATIONS`**, apesar de estarem rotuladas no mapa oficial do Known World e de serem o cenário de boa parte de *Rain of a Thousand Flames* e da abertura de *Power of the Dragonflame*.
- **Cobertura da "História Completa":** *From Chaos to Eternity* tem 3 de 9 faixas ligadas a algum capítulo; *The Frozen Tears of Angels*, 4 de 10.
- **Erro de calibragem sistemático nos dois mapas** — medições abaixo.
- **A arte de Tharos no Codex contradiz a capa oficial de *Symphony of Enchanted Lands*, que está no próprio site.**

O problema de fundo não é uma lista de erros pontuais: é que boa parte do texto foi escrita a partir de um resumo de segunda mão e depois "corrigida" só em um dos dois lugares, sem nunca voltar à fonte. As seções abaixo apontam onde.

---

# Parte A — Problemas estruturais (a raiz de quase tudo)

## A1. 🔴 Duas fontes de verdade dessincronizadas

O mesmo texto existe em dois lugares: `## Localização na saga` nos arquivos `.md` de cada álbum, e `resumo.pt` em `docs/data-*.js`. **59 das 97 faixas divergem.** Em algum momento o site foi corrigido e os `.md` não. Resultado: quem lê o repositório (que é o que está publicado no GitHub) lê a versão errada.

Exemplos onde o `.md` guarda erro grave que o site já não tem:

| Faixa | `.md` (errado, ainda no repo) | Site (corrigido) |
|---|---|---|
| Warrior of Ice | "o Guerreiro de Gelo, **rei** da aldeia de Loregard" | "da aldeia de Loregard" |
| Flames of Revenge | "o **príncipe Arwald** e a princesa Airin foram **capturados**" | Airin capturada com uma dúzia de cavaleiros |
| Lord of the Thunder | "o **Deus** do Trovão" | "o Senhor do Trovão" |
| Shadows of Death | "**Tharish**" (3×) | "Tarish" |
| The Frozen Tears of Angels | "O personagem **Loin**" | "Eloin" |
| Triumph or Agony | "masmorras esculpidas **há 200 anos**" | "antigas masmorras" |
| Dragonland's Rivers | "Guiados pelo elfo **Tharish**" | (removido) |
| Old Age of Wonders | "**Tarish e Iras** relembram" | "Iras relembra" |
| Symphony of Enchanted Lands | "duela com seu guardião, **um guerreiro de Akron**" | "o guardião ancestral" |

Notas sobre alguns desses:
- 🔴 **"rei de Loregard"** — o Guerreiro nunca é rei. A fonte o chama de "the mighty warrior of nordic blood", "the Son of Ice", "the hero of Loregard", "the man from Loregard". Um mensageiro cavalga até Loregard *para convocá-lo*; ele não governa nada.
- 🔴 **"príncipe Arwald"** — Arwald nunca é chamado de príncipe. A fonte o chama de "Arwald, hero of the Middle Lands" (Cap. II de *Legendary Tales*), "Arwald of Ancelot" (Cap. VI), "hero of the northern lands" (Crônicas, Parte III). Só **Airin** é "princesa" ("Airin, Arwald's beloved princess of Ancelot").
- 🔴 **"há 200 anos"** — tradução errada do verso "Two hundred **nor** of unholy stone". "Nor" não é unidade de tempo; a frase descreve duzentas estruturas/blocos de pedra, não uma data.
- 🔴 **"um guerreiro de Akron"** como guardião da espada — a fonte diz "the ancestral guardian, a monstrous creature that eyes can't describe". Não é humano e não serve Akron; ele guarda a espada desde muito antes de Akron existir.
- 🔴 **"Tharish"/"Loin"** — os nomes são **Tarish** e **Eloin**.

**Ação:** eleger `docs/data-*.js` como fonte única e regenerar os `.md` a partir dele (ou o contrário), com um teste/script que quebre se voltarem a divergir.

## A2. 🔴 Os capítulos da "História Completa" contradizem os resumos das faixas que eles linkam

Este é o erro mais visível do site, porque as duas informações aparecem lado a lado na mesma tela.

Em *Symphony of Enchanted Lands*, a ordem real da fonte é:

1. As três chaves são conquistadas **na prosa das Crônicas de Algalord, Parte II** — não nas músicas. A 1ª chave vem do Espelho das Sombras no Argon's Glade; a 2ª de Tharos, nos Pântanos do Caos; a 3ª (o Ikaren) do altar entre as Middle Forests e o Deserto do Caos.
2. **Emerald Sword** (faixa 2) = o altar, a **terceira** chave, o Ikaren, os três dragões de pedra.
3. **Wisdom of the Kings** (faixa 3) = a passagem secreta, o salão antigo, a **abertura dos Portões de Marfim**.
4. Faixas 4 a 10 = **tudo já além dos Portões**.

O site acertou isso nos resumos das faixas — e deixou os capítulos com o mapeamento antigo e errado:

| Capítulo no site | Título | Faixas que ele linka | Problema |
|---|---|---|---|
| `ch5` | "A primeira chave" | Emerald Sword, Wisdom of the Kings | 🔴 Essas faixas são a **terceira** chave e a abertura dos Portões. O próprio resumo de "Emerald Sword" no site diz "a última chave da sabedoria que falta". Contradição direta na mesma página. |
| `ch6` | "O dragão Tharos" | Heroes of the Lost Valley, Eternal Glory, Beyond the Gates of Infinity | 🔴 O duelo com Tharos acontece **antes** dos Portões e não é narrado em nenhuma música. Essas três se passam já do outro lado. |
| `ch7` | "A terceira chave" | Wings of Destiny, The Dark Tower of Abyss | 🔴 A terceira chave já tinha sido obtida na faixa 2. Estas duas são o voo com Tharos e a chegada à Fortaleza do Abismo. |

- 🔴 `ch5` ainda diz **"Já orientado à distância pelo mago Aresius"**. Aresius **viaja junto**: "at the first light of dawn **we** were already far from the green Elgard" (Crônicas, Parte II, narradas por ele em 1ª pessoa) e só se despede na boca da passagem secreta — "The warrior greets Aresius and crosses it". Ele acompanha fisicamente do Argon's Glade até os Portões.

- 🟡 `ch9` diz que Dargor **"foge da batalha"** em Ancelot. A fonte diz só "The kingdom is now hailing the triumph over Dargor" e "after the legendary fight of the bravehearts against Dargor's army Ancelot was free once again". Não há fuga descrita.

- 🔴 `ch11` chama Hargor de **"fortaleza de Dargor na Montanha Negra"** (o mesmo erro está no resumo de "Holy Thunderforce"). Hargor é a cidade infernal de **Akron**, "hellish town of the Darklands, located in the heart of Chaos" e "Akron's nest". Dargor é *Shadowlord of the Black Mountain* — outro lugar, outra coisa.

## A3. 🟠 Os arquivos de prompt de IA carregam invenções que viraram imagem

`referencias/Prompts de IA - Novas Entradas do Codex.md` e `… - Historia Completa.md` contêm afirmações que não estão na fonte e que foram usadas para gerar as imagens que hoje estão publicadas:

- 🔴 Prompt do **Tharos**: *"descreva-o livremente como um dragão de escamas escuras"* e *"dark, scale-armored hide"*. Ver §E1 — a capa oficial mostra Tharos **vermelho**.
- 🔴 Prompt do **Tharos**: fonte listada como *"Eternal Glory"*. Tharos não aparece em "Eternal Glory" — nem na letra, nem na prosa do capítulo.
- 🔴 Prompt da **Airin**: *"capturada junto com ele [Arwald]"* — falso; e fonte listada como *"Legendary Tales — Flames of Revenge"*, onde Airin não aparece.
- 🔴 Prompt do **Arwald**: fonte listada como *"Legendary Tales — Land of Immortals (entrega as tropas ao Guerreiro)"*. A entrega das tropas está na prosa do Cap. VI ("Virgin Skies"), e Arwald não é citado na letra de "Land of Immortals".
- 🔴 Prompt do **Aresius**: *"guia o Guerreiro à distância"* (ele viaja junto) e *"reaparece como ancião em The Frozen Tears of Angels ('Har-Kuun') … décadas depois, já velho, reconhece o nome Har-Kuun para a nova geração de heróis"*. **Aresius já morreu** antes da Dark Secret Saga ("Our friend Aresius in his passing left our lands in peace and splendour"). Quem lembra do nome é **Iras Algor**, de memória: "my old friend Aresius once told me about it". Aresius não reaparece.

**Ação:** os prompts precisam ser corrigidos antes de qualquer nova geração de imagem, senão o erro se reproduz.

---

# Parte B — Erros faixa a faixa

## B1. Saga da Espada Esmeralda

### Legendary Tales

| # | Faixa | Achado |
|---|---|---|
| 1 | Ira Tenax | 🔴 Descrita como **"abertura instrumental"**. Tem letra em latim, e a letra está no próprio arquivo `01 - Ira Tenax.md`, dez linhas acima da frase que diz que é instrumental. |
| 2 | Warrior of Ice | 🟡 `local: loregard`. A letra e o capítulo cobrem a cavalgada Loregard → **Irengard** ("March to Hell, Irengard brothers… Now, leave your castles") → **Algalord**. Irengard e Algalord existem em `LOCATIONS` e não estão marcados. |
| 3 | Rage of the Winter | 🔴 `local: ancelot`. O capítulo é explícito: "Crossing the hills of **Algalord** … the falling snow caresses the now visible **valleys of unicorns** … the valorous troops finally reach the southern side of the **Middle Forests**". Ancelot só será alcançada duas faixas depois. |
| 4 | Forest of Unicorns | ✅ Local correto. 🟡 O `.md` diz "em sua rota até a terra dos imortais" e o site diz "até Ancelot" — o correto é Ancelot (a Terra dos Imortais vem depois de Ancelot). |
| 5 | Flames of Revenge | 🔴 O resumo diz que **Airin foi capturada aqui**. Não foi. A captura de Airin acontece no **cerco de Dawn of Victory** ("Airin, Arwald's beloved princess of Ancelot, **captured during the siege of the town**", Crônicas Parte III — depois da batalha contra Dargor). Em *Legendary Tales*, Ancelot foi atacada pelo Príncipe Negro e o capítulo só descreve "the victims are countless". 🟠 A letra chora "My princess, why must I assist at your death" — a fonte **não diz quem é**. Não deve ser atribuída a Airin. |
| 7 | Land of Immortals | ✅ Local e conteúdo corretos, inclusive a observação sobre Tharos ser citado na letra antes de aparecer. |
| 8 | Echoes of Tragedy | 🟡 `local: null`. O capítulo situa a cena em **Elgard**, às vésperas do início da busca. |
| 9 | Lord of the Thunder | ⚪ `local: null`, mas o capítulo diz "the mighty warrior rides **around Elgard** to calm his thoughts". Deveria ser `elgard`. |
| 10 | Legendary Tales | ⚪ `local: null`, mas o capítulo diz "in the forest near the castle's walls **the people of Elgard** are celebrating". Deveria ser `elgard`. |

### Symphony of Enchanted Lands

| # | Faixa | Achado |
|---|---|---|
| 1 | Epicus Furor | 🔴 "Abertura instrumental" — tem letra em latim ("Epicus furor… Quae mala venientia metuuntur"). |
| 2 | Emerald Sword | 🔴 `local: elgard`. O altar fica "on the border between the Middle Forests and the southern side of the **Lands of Chaos**", alcançado "after crossing the Forgotten Valleys… the Middle Forests and then the **Desert of Chaos**". Elgard ficou para trás vários dias antes. |
| 3 | Wisdom of the Kings | 🔴 `local: elgard`. A cena é a passagem secreta indicada pelo raio de luz e a abertura dos **Portões de Marfim**, nas Terras do Caos. |
| 4–10 | Heroes of the Lost Valley → Symphony of Enchanted Lands | 🔴 Marcadas como `green_valleys` (4) e `dragonland` (5–10). **Todas as sete se passam além dos Portões de Marfim**, num reino escondido que não corresponde a nenhum ponto dos mapas oficiais. Dragonland só entra na história no fim da faixa 10, quando Tharos voa para lá para morrer. Colocar "Riding the Winds of Eternity" ou "The Dark Tower of Abyss" em Dragonland é geograficamente falso. |
| 4 | Heroes of the Lost Valley | 🟠 Além disso, `referencias/Localidades do Mapa - Known World.md` especula que o "Waterfalls' Realm" desta faixa seria o mesmo Reino das Cachoeiras Ancestrais da outra saga. Essa equivalência **não está na fonte** e foi tratada como fato ao dar a ambos o mesmo marcador. |
| 5 | Eternal Glory | 🟠 A entrada do Codex de Tharos lista esta faixa como aparição dele. Tharos não está aqui — nem na letra nem na prosa. |

### Dawn of Victory

| # | Faixa | Achado |
|---|---|---|
| 3 | Triumph for My Magic Steel | 🟡 O arquivo do álbum se chama `03 - Triumph **of** My Magic Steel.md`. O título correto é **"Triumph for My Magic Steel"** (o site já usa o correto). |
| 4 | Village of Dwarves | 🟠 `local: grey_mountains` e "perto das Montanhas Cinzentas". A fonte dá só "the dwarves of **Lork**" e "the **Gandor** secret hill". Nenhuma ligação com as Montanhas Cinzentas. O próprio resumo admite "(região aproximada)" — o honesto é `local: null` ou criar um marcador Gandor/Lork declarado como não oficial. |
| 5 | Dargor, Shadowlord… | 🟡 `local: hargor`. É uma faixa-retrato, não uma cena. Se precisar de local, é `darklands` ("He's prince of the **Darklands**") — não Hargor, que é a cidade de Akron. |
| 6 | The Bloody Rage of the Titans | 🟡 `local: enchanted_valleys`. A letra louva as Terras Encantadas em geral ("Wonderful Symphony of Enchanted Lands"); "Enchanted Valleys" é um rótulo específico no canto sudoeste do mapa. Escolha arbitrária. |
| 7 | Holy Thunderforce | 🔴 "Hargor, **fortaleza de Dargor**" — Hargor é a cidade de **Akron**. |
| 8 | Trolls in the Dark | 🟠 Instrumental. O resumo inventa uma cena ("O Guerreiro é mantido em cativeiro, cercado por criaturas sombrias a serviço de Akron"). A fonte não dá nenhum conteúdo a esta faixa. |
| 9 | The Last Winged Unicorn | 🟡 O resumo já conta a morte de Arwald aqui, mas Arwald morre na faixa **10** ("While descending in the red flame **Arwald dies**"). Nesta faixa ele "falls so to his knees" e é a princesa que morre. |

### Rain of a Thousand Flames

| # | Faixa | Achado |
|---|---|---|
| 1 | Rain of a Thousand Flames | ⚪ `local: null`, mas a letra grita "**War of the Ghostland**". Deveria apontar para as Terras Fantasmas (marcador inexistente — ver §D1). |
| 2 | Deadly Omen | 🟠 Instrumental; resumo inventado. |
| 3 | Queen of the Dark Horizons | 🔴 `local: darklands`. O ritual acontece nas **criptas das Terras Fantasmas** — "the crypts of the **Ghostland**" (Crônicas Parte IV), "**Forests of Ghostland** give your sad welcome" (letra). |
| 4 | Tears of a Dying Angel | 🟡 Duplicada como duas entradas (`elnor` e `thorald`) para aparecer em dois marcadores. É uma gambiarra funcional, mas é a **única** faixa que a usa, enquanto várias outras precisam do mesmo tratamento. Merece virar `local: [ ... ]` de verdade. |
| 5 | Elnor's Magic Valley | 🟠 Instrumental ("Rhymes of a Tragic Poem: The Gothic Saga – Part II — *(Instrumental)*"). O resumo inventa "o vale mágico de Elnor é atacado e devastado". |
| 6 | The Poem's Evil Page | 🟡 `local: elnor` apenas. A letra abre nas Terras Fantasmas ("Rituals of terror quake all the **Ghostland**") e nas Montanhas Cinzentas ("Fire is raining on the **Grey Mountains**") antes de chegar ao fim de Elnor. |

### Power of the Dragonflame

| # | Faixa | Achado |
|---|---|---|
| — | *todas* | 🔴 **As 11 faixas estão marcadas como `algalord`.** É marcação em bloco, não leitura das letras. |
| 1 | In Tenebris | 🔴 "Abertura instrumental sombria" — tem letra ("Tenebra, Tenebra… domina!… Let me open the dark portal and so cross the crypts of Ghostland now"). 🔴 E o local é explicitamente as **criptas das Terras Fantasmas**, não Algalord. |
| 2 | Knightrider of Doom | 🟡 A letra é sobre as cidades-irmãs destruídas ("the town's tragic fear", "the dragonship's fall", "the **twins**' holy call", "the rituals on the silent shore") — Elnor e Thorald, não Algalord. |
| 3 | Power of the Dragonflame | 🟡 "God is dead in **Thorald's** and in **Elnor's** rhyme… wash my bloody **shore**… the dead now lying on the **sand**". Cenário costeiro arrasado, não Algalord. |
| 4 | The March of the Swordmaster | 🟡 É a marcha: "We cross the lakes of the holy woods to reach the **ocean** where red waves rule". A batalha resultante acontece "between the **marshes of the southern regions**". |
| 5 | When Demons Awake | 🟡 Mesma batalha nos pântanos do sul, não em Algalord. |
| 7 | Lamento Eroico | 🟡 Introspectivo, sem lugar. `algalord` é arbitrário. |
| 8 | Steelgods of the Last Apocalypse | ✅ Correto — ele está preso olhando Algalord cair. |
| 10 | Rise From the Sea of Flames | 🔴 Listada como **faixa 10 do álbum**, empurrando "Gargoyles" para 11. É bônus de edição limitada; a tracklist oficial tem 10 faixas terminando em "Gargoyles". Além disso ela aparece **duas vezes** no site: como faixa e em "Raridades". |

## B2. Saga do Segredo Sombrio

### Symphony of Enchanted Lands II

| # | Faixa | Achado |
|---|---|---|
| 6 | Erian's Mystical Rhymes | 🔴 `local: hor_lad`. A faixa inteira é a fundação da Ordem **em Elgard** — o refrão diz "A GREAT AND NEW HOPE **IN ELGARD** WAS BORN" e depois "ELETTI **IN ELGARD**". Hor-Lad é só a terra natal de Iras, citada de passagem. Deveria ser `elgard`. |
| 7 | The Last Angels' Call | 🟡 `local: erloria`. A cena é a **partida de Elgard** ("From the high towers the people acclaim the chosen heroes now crossing the gates"). Erloria é o caminho *planejado*, não onde a faixa se passa. |
| 8 | Dragonland's Rivers | 🟡 `local: urien`. A faixa é a travessia de **Dragonland**; Urien é um dos pontos citados. Ver §D3 sobre o problema do próprio marcador "Urien". |
| 9 | Sacred Power of Raging Winds | 🟡 `local: hargor`. Eles ainda estão atravessando as **Montanhas Cinzentas** rumo a Hargor ("Dark is the way to the mountains of grey"). 🟠 O resumo chama Vankar de **"o demônio Vankar"**. A fonte o chama de "**old wizard** of Helm" / "the evil wizard". Quem é meio-demônio é **Dargor**, não necessariamente Vankar. |
| 10 | Guardiani del Destino | 🟡 O resumo funde dois lugares: "rumo ao **Monte Erinor/Hargor**". A letra os separa — "Verso il monte di **Erinor**, unica via per arrivar" (o caminho) e depois "**Hargor** rivela la sua irrealtà" (o destino avistado). |

### Triumph or Agony

| # | Faixa | Achado |
|---|---|---|
| 2 | Triumph or Agony | 🟡 `local: hargor`. A letra descreve as masmorras "**under the ghost town**" e "deep into the dungeons of hell" — é Dar-Kunor. |
| 3 | Heart of the Darklands | 🔴 O resumo diz que Nekron "construiu sua cidade **sobre Hargor**". Hargor **é** a cidade: "A whole town built on a rock as giant as a mountain… **Hargor** became soon the heart of the Darklands". |
| 5 | The Myth of the Holy Sword | 🟡 `local: algalord`. É uma história contada por Iras enquanto o grupo descansa nas **Terras Sombrias**. Algalord só aparece na última frase ("now it lies somewhere deep in the Algalord's raging sea"). Marcar a faixa em Algalord dá a entender que a cena se passa lá. |
| 8 | Bloody Red Dungeons | 🔴 `local: hargor`. As masmorras vermelhas ficam **dentro de Dar-Kunor**. |
| 10 | The Mystic Prophecy of the Demonknight | 🔴 `local: hargor`. As cinco partes se passam **dentro de Dar-Kunor**; só a fuga final termina no pântano de Hargor. |

### The Frozen Tears of Angels

| # | Faixa | Achado |
|---|---|---|
| 9 | The Frozen Tears of Angels | 🔴 `local: har_kuun`. O capítulo inteiro se passa **em Ainor** — Iras está na torre mais alta da fortaleza de Ainor, entre "thousands and thousands of books", e é *ali* que ele descobre o nome Har-Kuun. Har-Kuun é o que ele descobre, não onde ele está. Deveria ser `ainor`. |
| 10 | Labyrinth of Madness | 🟠 `local: har_kuun` + resumo inventado ("mergulha na loucura enquanto o grupo se aproxima de Har-Kuun"). O compêndio é explícito: *"I have no clue if it's related to the story at all."* Isso é exatamente o tipo de texto vago que o site não devia ter. |
| 2,3,4,6,7 | Sea of Fate, Crystal Moonlight, Reign of Terror, Raging Starfire, Lost in Cold Dreams | 🟡 Resumos genéricos que não dizem nada de concreto sobre a história. Ver §G. |

### The Cold Embrace of Fear

| # | Faixa | Achado |
|---|---|---|
| 1–7 | Títulos com prefixo "Act I - …" | 🟡 Conferir contra a edição física. Se a tracklist oficial não traz "Act N -", o prefixo tem que sair (mesma regra de não alterar títulos oficiais). |
| 4 | The Betrayal | 🟡 O Codex diz que Tarish é morto "por Dargor **e Khaas**". A fonte: "I saw Dargor struggling with Tarish… **he won**". Khaas participa do ataque inicial, mas quem mata é Dargor. |

### From Chaos to Eternity

| # | Faixa | Achado |
|---|---|---|
| 4 | Ghosts of Forgotten Worlds | ⚪ `local: null`. É a busca por **Aelin nas Terras Fantasmas** ("Aelin, the first eye of Thanor, was found between the wild rocks of the southern dusty **Ghostlands**"). Sem marcador porque as Terras Fantasmas não existem em `LOCATIONS`. |
| 6 | Aeons of Raging Darkness | 🔴 `local: waterfalls_kingdom` e resumo dizendo que ali é "onde **Etherus se sacrificará contra Koras**". O sacrifício de Etherus acontece em **Har-Kuun**, não no Reino das Cachoeiras. 🟠 E o assunto real da letra ("I won't forget her name… her lovely smile brutalised and raped… I will save her soul") não é sequer mencionado — a fonte não identifica quem é "ela", então o honesto é dizer isso, não inventar um cenário. |
| 9 | Heroes of the Waterfalls' Kingdom | 🔴 O resumo funde dois lugares distintos. A **batalha** dos exércitos é no Reino das Cachoeiras; o **clímax** (eclipse, olhos de Thanor, Etherus × Koras, portal do Mundo Antigo) é em **Har-Kuun**, para onde Iras, Dargor, Lothen e Etherus viajaram via Naimun → Tamien → Montanhas Brancas. O site diz que Etherus se sacrifica "no Reino das Cachoeiras Sagradas". |

---

# Parte C — Cobertura da "História Completa"

Faixas que não estão ligadas a nenhum capítulo:

| Álbum | Cobertura | Faixas órfãs |
|---|---|---|
| Legendary Tales | 6/10 | Ira Tenax; Virgin Skies; Echoes of Tragedy; Legendary Tales |
| Symphony of Enchanted Lands | 9/10 | Epicus Furor |
| Dawn of Victory | 10/10 | — |
| Rain of a Thousand Flames | 6/7 | Deadly Omen |
| Power of the Dragonflame | 10/11 | In Tenebris |
| Symphony of Enchanted Lands II | 11/12 | Elgard's Green Valleys |
| Triumph or Agony | 8/11 | **Triumph or Agony** (a faixa-título!); Il Canto del Vento; Silent Dream |
| The Frozen Tears of Angels | **4/10** | Crystal Moonlight; Reign of Terror; Raging Starfire; Lost in Cold Dreams; **On the Way to Ainor**; Labyrinth of Madness |
| The Cold Embrace of Fear | 5/7 | Dark Mystic Vision; Neve Rosso Sangue |
| From Chaos to Eternity | **3/9** | From Chaos to Eternity; Tempesta di Fuoco; **Ghosts of Forgotten Worlds**; Anima Perduta; I Belong to the Stars; Tornado |

⚪ **"On the Way to Ainor" e a chegada a Ainor** são um capítulo inteiro da fonte (a descoberta do nome Har-Kuun na torre de Ainor) e não existem na História Completa do site.

⚪ **"Ghosts of Forgotten Worlds"** cobre a busca por Aelin — narrada em detalhe na fonte (a morte do cavalo Pask-Ur nos pântanos ácidos). O site conta isso no capítulo `ds-ch16`, mas sem ligar à faixa.

⚪ **Nenhum capítulo cobre o prólogo da Espada Esmeralda**: os Tempos das Trevas, a Santa Aliança dos quatro reis sob Harold, o Concílio dos Reis (Harold III de Algalord, Argon IV de Elgard, Eric de Elnor), e a convocação do Guerreiro. A saga do site começa direto no Guerreiro partindo.

---

# Parte D — Mapa e localizações

## D1. 🔴 As Terras Fantasmas não existem em `LOCATIONS`

`docs/data-common.js` tem 35 localizações. **Nenhuma é as Ghostlands** — apesar de:

- estarem **rotuladas na arte oficial** do Known World (Southern Lands, sudeste, perto de "Shadowlands"/"Dragons' Hills"), conforme o próprio `referencias/Localidades do Mapa - Known World.md` confirma;
- terem **entrada de Codex** com arte (`docs/assets/codex/ghostlands.jpg`);
- serem citadas na Cronologia (Ano 3200 e 3500 dos Anjos);
- serem o cenário de **"Rain of a Thousand Flames"**, **"Queen of the Dark Horizons"**, **"The Poem's Evil Page"**, **"In Tenebris"** e da busca por Aelin em **"Ghosts of Forgotten Worlds"**.

Consequência exata do que você apontou: **nenhuma faixa de *Rain of a Thousand Flames* está ligada às Terras Fantasmas**, porque o lugar não existe no mapa do site. As faixas que se passam lá foram empurradas para `darklands`, `elnor` ou `null`.

Medição no mapa oficial: o rótulo "Ghostlands" fica em aproximadamente **x 72%, y 75%** da imagem `map-known-world.jpg`.

## D2. 🔴 Calibragem dos marcadores

Medi a posição dos rótulos nos dois mapas oficiais e comparei com as coordenadas em `LOCATIONS`. As medições são a olho sobre a imagem renderizada (margem ~±1,5 ponto percentual), mas o padrão é grande demais para ser ruído.

**`map.jpg` (Terras Encantadas)** — desvio consistente para a **direita**:

| Local | Rótulo no mapa (x%) | Ícone da cidade (x%) | `LOCATIONS` (x%) | Desvio |
|---|---|---|---|---|
| Algalord | 30,9 | ~25,5 | 33,9 | +8 do ícone |
| Ancelot | 46,4 | ~42,3 | 50,1 | +8 do ícone |
| Elgard | 47,9 | ~45,0 | 51,2 | +6 do ícone |
| Hargor | 18,0 | ~13,6 | 20,7 | +7 do ícone |
| Irengard (rótulo "Trengard") | 59,4 | ~55,4 | 63,5 | +8 do ícone |
| Ragatorn | 72,5 | ~68,3 | 78,2 | +10 do ícone |
| Holy Lakes | 84,5 | — | 93,2 | +8,7 do rótulo |
| The Elves Hills | 72,8 | — | 80,0 | +7,2 do rótulo |
| Forest of Unicorns | 31,8 | — | 37,8 | +6,0 do rótulo |
| Sea of Trolls | 20,8 | — | 28,75 | +8,0 do rótulo |
| Nordic Plains | 46,5 | — | 51,4 | +4,9 do rótulo |

Os marcadores parecem ter sido posicionados no **fim do texto do rótulo** em vez de no ícone/feição correspondente. Nas cidades isso os coloca visivelmente fora do lugar.

**`map-known-world.jpg`** — desvio consistente **para cima** (~3 pontos) mais outliers grandes:

| Local | Medido no mapa (x, y %) | `LOCATIONS` (x, y %) | Desvio |
|---|---|---|---|
| Ancelot | 44,8 / 53,8 | 43,2 / 50,7 | −3,1 y |
| Elgard | 46,1 / 54,8 | 43,7 / 50,2 | −2,4 x, −4,6 y |
| Algalord | 45,7 / 55,7 | 45,5 / 51,9 | −3,8 y |
| Elnor | 40,7 / 54,9 | 42,8 / 51,8 | +2,1 x, −3,1 y |
| Thorald | 42,4 / 55,6 | 43,2 / 52,6 | −3,0 y |
| Irengard | 48,2 / 56,5 | 41,8 / 51,6 | **−6,4 x, −4,9 y** |
| Ragatorn | 51,7 / 57,2 | 44,5 / 54,5 | **−7,2 x** |
| Dragonland | 47,1 / 52,5 | 41,5 / 46,8 | **−5,6 x, −5,7 y** |
| Kanor | 55,7 / 52,6 | 59,4 / 49,3 | +3,7 x, −3,3 y |
| Holy Lakes | 57,7 / 56,4 | 63,0 / 55,3 | **+5,3 x** |
| Har-Kuun | 46,7 / 20,2 | 46,5 / 21,0 | ✅ ok |
| White Mountains | 47,0 / 25,8 | 47,5 / 24,0 | ✅ ok |
| Ainor | 48,3 / 31,0 | 47,0 / 30,0 | ✅ ok |

Os pontos do norte (Har-Kuun, White Mountains, Ainor) estão bem calibrados; o cluster das Terras Encantadas está deslocado.

## D3. 🟠 "Urien" está no lugar de "Urienor"

O mapa do Known World tem **dois rótulos distintos**: **"Urien"**, dentro do cluster Enchanted Lands (medido em ~44,9 / 52,0), e **"Urienor"** (grafado "Uvienor"), a oeste na fronteira dos Reinos dos Trolls/Anões (~37,9 / 45,3).

A fonte também os trata separadamente: a letra de "Dragonland's Rivers" diz "THE RIVER WILL LEAD THEM TO **URIEN**, THE MYSTICAL HOME OF THE GODS"; o Prólogo diz "**Etherus from Urienor**".

O site tem um único marcador, chamado **"Urien"**, posicionado nas coordenadas de **Urienor**. São dois lugares diferentes e o site fundiu os dois.

## D4. ⚪ Lugares rotulados no mapa oficial sem marcador

Confirmados na arte e ausentes de `LOCATIONS`: **Ghostlands**, **Seth** (citada em "Unholy Warcry" — "to the walls of Seth"), **Golden Plains** (o "Golden Sea" da mesma letra), **Middle Desert**, **Urien** (o de verdade), **White Forest**, **Middle Sea**, **Green Plains**, **Dark Gate**, **Shadowlands**, **Dragons' Hills**.

## D5. 🟡 Locais fictícios do site marcados como se fossem do mapa

`LOCATIONS` inclui `erloria`, `nairin`, `aranen`, `hor_lad` com coordenadas inventadas. O próprio `referencias/Localidades do Mapa - Known World.md` já registra: *"Dar-Kunor, Nair-Kaan, Nairin, Fenor, Orin, Erloria, Hor-Lad, Town of the Gods e Arinen/Erinor **não existem na arte do mapa**… seria criar um rótulo novo do zero, não restaurar um apagado."* No site esses pontos aparecem exatamente iguais aos oficiais, sem nenhuma distinção visual ou aviso. `dar_kunor` tem o mesmo problema.

---

# Parte E — Imagens

## E1. 🔴 Tharos é vermelho, e a capa oficial está no próprio site

`docs/assets/covers/02.jpg` — a capa oficial de *Symphony of Enchanted Lands* — mostra o Guerreiro montado num **dragão vermelho, cuspindo fogo, voando em direção à torre sombria**. Essa é a imagem oficial de Tharos, e ela está publicada no site na aba Discografia.

`docs/assets/codex/tharos.jpg` mostra um dragão **verde-escuro/preto**, sozinho, sem cavaleiro. A imagem foi gerada a partir do prompt *"dark, scale-armored hide"*, escrito porque o prompt anterior dizia "descreva-o livremente como um dragão de escamas escuras, já que ele é diferente de Thanor". Ou seja: a cor foi **inventada por exclusão**, sem consultar a capa que já estava no repositório.

A fonte textual corrobora o vermelho: "the one with Tharos, the **bloody** dragon, keeper of the second key", e "to obtain the second key you have to cross the **bloody sea**, where the thirst of Tharos never ends".

**Ação:** refazer a arte de Tharos como dragão **vermelho**, e corrigir o prompt antes.

## E2. 🟡 Arwald

A arte atual (`docs/assets/codex/arwald.jpg`) mostra uma figura baixa, atarracada e barbada em armadura — lê-se como anão, o que é justamente a confusão que você levantou. A fonte não dá **nenhuma** descrição física de Arwald: só "hero of the Middle Lands", "hero of the northern lands", "Arwald of Ancelot", "Arwald 'the Rock'". O prompt inventou o resto.

Recomendação: quando a fonte não descreve fisicamente um personagem, a arte precisa evitar marcadores de espécie/parentesco (altura, barba de anão, orelhas élficas) e a legenda precisa dizer que é interpretação. A alternativa mais honesta é uma composição simbólica em vez de retrato.

## E3. 🟡 Logos de saga gerados por IA

Os botões do seletor de saga são imagens geradas por IA com os **títulos das sagas** escritos dentro (`docs/assets/logos/logo{pt,en}-{emerald,dark}.webp`), conforme `referencias/Prompts de IA - Logos das Sagas.md`. Títulos são elemento de identidade oficial. Recomendo voltar para texto (Cinzel já está carregada) ou usar um ornamento sem letras, com o título em texto real por cima — mantém acessibilidade, SEO e evita "reescrever" material oficial.

## E4. ✅ Mapas e capas não foram alterados

Verificado no histórico do git: `map.jpg` só passou por conversão PNG→JPEG (commit `ecb4d26`); `map-known-world.jpg` e as 10 capas nunca foram modificadas depois de adicionadas. Nenhuma arte oficial foi refeita com IA.

---

# Parte F — Codex

| Entrada | Achado |
|---|---|
| **Aresius** | 🔴 "guia **à distância** o Guerreiro de Gelo" — ele viaja junto até os Portões. 🔴 "**décadas** mais tarde… lembrada por Iras Algor" — a Cronologia dá Ano 5091 (queda de Akron) e 5096 (criação da Ordem): **cinco anos**, não décadas. |
| **Loregard** | 🔴 Mesmo erro de "décadas depois, na Dark Secret Saga". |
| **Airin** | 🔴 `faixas` inclui `legendary_tales` #5. Airin não aparece em *Legendary Tales* — nem na letra nem na prosa. Sua captura é em *Dawn of Victory*. |
| **Arwald** | 🔴 `faixas` inclui `legendary_tales` #5 (não é citado nessa letra). 🟡 "Guerreiro de Ancelot" — a fonte diz "hero of the Middle Lands"/"hero of the northern lands"; ele **defende** Ancelot. |
| **Tharos** | 🔴 `faixas` lista `symphony` #5 (não aparece) e **omite** as aparições reais: `legendary_tales` #7 ("the thirst of Tharos"), `symphony` #8 ("Mighty Tharos"), `dawn_of_victory` #2 ("For Tharos, the dragon"), #10 ("I call the Tharos' fire"), `dragonflame` #6 ("Airin, Arwald, Tharos in my painful dreams"). |
| **Akron** | 🔴 `faixas` lista `dawn_of_victory` #6 (não é citado). As citações reais são #9 e #10. |
| **Elgard** (lugar) | 🔴 "onde o Guerreiro de Gelo obtém a **primeira** das três chaves". A primeira chave vem do Espelho das Sombras no **Argon's Glade**, nas colinas onde vive o velho anão — depois de sair de Elgard. |
| **Portões de Marfim** | 🟡 "Além dele ergue-se a Torre Sombria do Abismo" — comprime demais. Além dos Portões há um reino inteiro (vales, cachoeiras, deserto dos heróis mortos, pântano dos mortos-vivos); a Fortaleza do Abismo fica muito além, alcançada voando com Tharos. 🔴 `faixas` omite as citações reais (`legendary_tales` #7, `symphony` #2 e #3, `triumph_or_agony` #5). |
| **Vila dos Anões** | 🟠 "perto das Montanhas Cinzentas" — inventado. 🔴 "antes de seguir para a batalha final contra **Dargor** e Akron" — a batalha contra Dargor em Ancelot já tinha acontecido; da Vila eles marcham para Hargor. |
| **Ghostlands** | 🔴 `faixas` lista só `dragonflame` #11 e `chaos_to_eternity` #4, e **omite** as citações diretas: `rain_of_flames` #1 ("War of the Ghostland", "Forests of Ghostland"), #6 ("Rituals of terror quake all the Ghostland"), `dragonflame` #1 ("cross the crypts of Ghostland now"). Este é o ponto exato que você levantou. |
| **Hargor** | 🟡 `faixas` inclui `dawn_of_victory` #5 — Hargor só é citada na **versão estendida** dessa faixa, não na do álbum. |
| **Tarish** | 🟡 "morto por Dargor **e Khaas**" — a fonte diz que Dargor venceu a luta. |
| **Vankar** | ✅ Correto no Codex ("velho mago das trevas de Helm"). 🔴 Mas `data-dark-secret.js` o chama de "o **demônio** Vankar" — inconsistência interna. |
| **Nekron, Iras, Etherus, Erian, Thanor, Lothen, Khaas, Uriel, Dargor** | ✅ Descrições conferem com a fonte. |

---

# Parte G — Texto vago que não diz nada

Você pediu explicitamente para não gastar linha com texto vago. Estes resumos não informam nada sobre a história e devem ser reescritos com conteúdo real ou substituídos por uma nota honesta ("a fonte não conecta esta faixa a nenhum evento"):

- **Silent Dream**, **Il Canto del Vento** — "um sonho silencioso de esperança", "interlúdio lírico sobre saudade e memória".
- **Sea of Fate**, **Crystal Moonlight**, **Raging Starfire**, **Lost in Cold Dreams** — paráfrases da letra sem nenhuma âncora narrativa.
- **I Belong to the Stars**, **Tornado**, **Tempesta di Fuoco**, **Anima Perduta**, **From Chaos to Eternity** — todas com resumo genérico e `local: null`. Estas cinco cobrem o trecho da história em que o exército se reúne e Dargor caminha para o destino final; há material concreto na fonte para amarrá-las.
- **Deadly Omen**, **Trolls in the Dark**, **Elnor's Magic Valley**, **Labyrinth of Madness** — instrumentais com resumo **inventado**. O certo é dizer que são instrumentais e onde caem na sequência, sem descrever eventos.
- **Rise from the Sea of Flames (Raridades)** — a nota diz que é bônus de "Power of the Dragonflame **(2006)**". O álbum é de **2002**.
- **Rage of the Winter (Sinfônica) (Raridades)** — 🟠 a nota diz "a mesma tempestade enfrentada pelo Guerreiro de Gelo **antes do duelo com Akron**". Não existe duelo com Akron nesse ponto; "Rage of the Winter" é a cavalgada de Algalord até a Floresta dos Unicórnios. (A versão sinfônica *tem* um verso extra desafiando Akron — "Face me, Akron, king of terror" — mas isso não é "a mesma tempestade antes do duelo".)

---

# Parte H — Metadados e coisas menores

| Item | Achado |
|---|---|
| `README.md` linhas 40–41 | 🟡 Documenta `referencias/Resumo da saga.txt` e `Resumo da saga - The Dark Secret.txt`, **apagados** no commit `3c3866c`. |
| `docs/data-dark-secret.js` | 🟡 O campo `spotify` de *Triumph or Agony* guarda uma URL do **YouTube Music**. O `script.js` trata isso corretamente no rótulo, mas o nome do campo mente. |
| Tracklists | 🟡 *Power of the Dragonflame* com 11 faixas (bônus incluída como faixa 10) e *The Frozen Tears of Angels* com 10 (bônus como faixa 10) misturam bônus de edição especial com a tracklist oficial — e de forma inconsistente, já que "Immortal, New Reign" ficou só em Raridades e "Rise from the Sea of Flames" está nos dois lugares. |
| `data-common.js` `chronologyDesc` | ✅ Cronologia confere integralmente com o Apêndice A. Nenhum erro encontrado. |
| Traduções (`traducao`) | ✅ Conferidas contra o Apêndice C. Corretas. |

---

# Parte I — Plano de correção sugerido

Em ordem de impacto:

**1. Eliminar a duplicação (A1).** Escolher `docs/data-*.js` como fonte única e regenerar os 97 `.md` a partir dela. Sem isso, qualquer correção vai dessincronizar de novo.

**2. Reescrever a sequência de SoEL (A2).** Refazer `ch5`–`ch8` com o mapeamento correto: as três chaves na prosa, "Emerald Sword" = 3ª chave/Ikaren, "Wisdom of the Kings" = abertura dos Portões, faixas 4–10 = além dos Portões.

**3. Criar o marcador das Terras Fantasmas (D1)** e religar `rain_of_flames` #1, #3, #6, `dragonflame` #1 e `chaos_to_eternity` #4.

**4. Reabrir os `local:` faixa a faixa (Parte B).** Especialmente: as 7 faixas de SoEL fora dos mapas, as 11 de PotD marcadas em bloco, "The Frozen Tears of Angels" → Ainor, "Erian's Mystical Rhymes" → Elgard, e as masmorras de ToA → Dar-Kunor. Introduzir suporte a **múltiplos locais** por faixa e a `local: "fora-do-mapa"` para o que acontece além dos Portões.

**5. Recalibrar os dois mapas (D2)** posicionando cada marcador no ícone/feição, não no fim do rótulo. Separar Urien de Urienor (D3). Marcar visualmente os pontos não oficiais (D5).

**6. Corrigir os prompts em `referencias/` (A3) e refazer a arte de Tharos em vermelho (E1).** Nessa ordem — corrigir o prompt primeiro.

**7. Reescrever os resumos vagos e remover os inventados (Parte G).** Regra: se a fonte não diz, o texto diz que a fonte não diz.

**8. Fechar as lacunas da História Completa (Parte C)** — prioridade para *From Chaos to Eternity* (3/9) e *The Frozen Tears of Angels* (4/10), e para o capítulo de Ainor, que hoje não existe.

**9. Corrigir o Codex (Parte F)**, com atenção especial às listas de `faixas`, que em vários casos apontam para músicas onde o personagem não é citado.

---

## Regras de trabalho que este relatório sugere adotar

1. **Nenhuma afirmação sem verso ou linha de prosa que a sustente.** Se a fonte não descreve, o texto diz "a fonte não diz" — não preenche.
2. **Um lugar no mapa só é marcado se a letra ou o capítulo colocam a cena ali** — não porque um nome é citado de passagem, e não porque "é a região mais próxima".
3. **Instrumental não ganha enredo.** Diz-se onde cai na sequência, e só.
4. **Arte oficial (capas, mapas, títulos) manda.** Se a arte gerada contradiz a capa, quem muda é a arte gerada.
5. **Uma fonte de dados só.** Nada de manter o mesmo texto em dois arquivos.

---

# Parte J — Registro de execução

Acompanhamento do Plano de correção (Parte I), atualizado a cada passo concluído.

## ✅ Passo 1 — Eliminar a duplicação .md/.js (A1)

Criado `scripts/sync_track_summaries.py`: lê `docs/data-emerald-sword.js` e `docs/data-dark-secret.js` (fonte única) e regenera a seção `## Localização na saga` dos 97 `.md` de faixa a partir do campo `resumo.pt`. Suporta `--check` (dry-run).

- 56 dos 97 `.md` corrigidos na primeira execução; a nota de rodapé exclusiva de *Rain of a Thousand Flames* ("Nota: este álbum é um spin-off...") foi preservada por não ter equivalente no `.js` e não ser um erro factual.
- Rodar `python scripts/sync_track_summaries.py` sempre que `docs/data-*.js` mudar (foi executado de novo depois dos Passos 3 e 4 para reabsorver os resumos que mudaram nesses passos).

## ✅ Passo 2 — Reescrever a sequência de SoEL (A2)

Reescritos `ch5`–`ch8` em `docs/data-emerald-sword.js` (STORY):
- `ch5` "A primeira chave" — Espelho das Sombras/Argon's Glade, prosa pura (sem faixa vinculada), com citação de Aresius.
- `ch6` "O dragão Tharos" — duelo nos Pântanos do Caos, mesmo tratamento (prosa + citação).
- `ch7` "A terceira chave e os Portões de Marfim" — altar do Ikaren + abertura dos Portões → `symphony` #2 e #3.
- `ch8` "A conquista da espada" — tudo além dos Portões até a espada em punho e a morte de Tharos → `symphony` #4 a #10.

As 4 imagens de capítulo já existentes (`ch5.jpg`–`ch8.jpg`) foram reaproveitadas sem gerar arte nova — elas já retratavam as cenas certas (espelho, duelo, portões, guardião); só a legenda estava errada.

## ✅ Passo 3 — Marcador das Terras Fantasmas (D1)

Adicionado `ghostlands` em `LOCATIONS` (`docs/data-common.js`), calibrado por medição direta do rótulo no `map-known-world.jpg` (x≈72,7%, y≈74%; bate com a medição do relatório). `enchanted: null` (fora do recorte pintado das Terras Encantadas).

Religadas: `rain_of_flames` #1, #3, #6; `dragonflame` #1; `chaos_to_eternity` #4 (já existia, mas com `local: null`). Atualizada também a entrada de Codex "As Terras Fantasmas", que só linkava 2 das 6 faixas reais.

## ✅ Passo 4 — Reabrir os `local:` faixa a faixa (Parte B)

Pré-requisito: suporte a **múltiplos locais por faixa** em `docs/script.js` (`songLocations()` normaliza `local` como string, array ou `null`; usado em `buildLocationIndex`, na seção "faixas sem localização" e na Discografia). Testado no navegador sem erros de console.

Correções aplicadas (lista completa faixa a faixa fica nas Partes B1/B2 acima; aqui só o que mudou de fato):
- **Legendary Tales:** *Warrior of Ice* → Loregard/Irengard/Algalord; *Rage of the Winter* → Algalord/Forest of Unicorns; *Echoes of Tragedy*, *Lord of the Thunder*, *Legendary Tales* → Elgard.
- **Symphony of Enchanted Lands:** *Emerald Sword* e *Wisdom of the Kings* → Lands of Chaos; faixas 4–10 (além dos Portões) → sem local no mapa.
- **Dawn of Victory:** *Village of Dwarves* e *The Bloody Rage of the Titans* → sem local; *Dargor, Shadowlord* → Darklands.
- **Rain of a Thousand Flames:** *Tears of a Dying Angel* deixou de ser duplicada (agora uma faixa com dois locais).
- **Power of the Dragonflame:** *Knightrider of Doom* e *Power of the Dragonflame* → Elnor/Thorald; *March of the Swordmaster*, *When Demons Awake*, *Lamento Eroico* → sem local (antes todas "Algalord" em bloco).
- **Symphony II — The Dark Secret:** *Erian's Mystical Rhymes* e *The Last Angels' Call* → Elgard; *Dragonland's Rivers* → Dragonland+Urien; *Sacred Power of Raging Winds* → Grey Mountains (e corrigido "o demônio Vankar" → "o velho mago Vankar", que também estava errado num capítulo da História Completa).
- **Triumph or Agony:** *Triumph or Agony* e *Bloody Red Dungeons* → Dar-Kunor; *The Myth of the Holy Sword* → Darklands; *The Mystic Prophecy of the Demonknight* → Dar-Kunor+Hargor.
- **The Frozen Tears of Angels:** faixa-título → Ainor (não Har-Kuun); *Labyrinth of Madness* → sem local, resumo reescrito para admitir que a fonte não confirma a ligação.
- **From Chaos to Eternity:** *Aeons of Raging Darkness* → sem local (removida a afirmação errada sobre onde Etherus se sacrifica); *Heroes of the Waterfalls' Kingdom* → Waterfalls Kingdom + Har-Kuun, resumo ajustado para deixar clara a mudança de cenário no meio da faixa.

Ficaram de fora deste passo, por serem correções de **texto** e não de `local:` (entram nos Passos 7/9): a confusão Hargor/Dargor em "Holy Thunderforce" e no Codex, a atribuição da morte de Tarish a "Dargor e Khaas", e os resumos vagos de *The Frozen Tears of Angels* (faixas 2–4, 6–7).

## ✅ Passo 7 — Resumos vagos e inventados (Parte G)

- **Instrumentais com resumo inventado, corrigidos para admitir que a fonte não dá conteúdo** (regra: "instrumental não ganha enredo"): *Deadly Omen* (`rain_of_flames` #2), *Trolls in the Dark* (`dawn_of_victory` #8), *Elnor's Magic Valley* (`rain_of_flames` #5) — as três são marcadas `*(Instrumental)*` no compêndio, sem prosa associada.
- **`Flames of Revenge`** (`legendary_tales` #5): removida a afirmação de que Airin é capturada nesta faixa. A fonte só diz "the victims are countless"; a captura de Airin (com uma dúzia de cavaleiros, rumo a Hargor) só é revelada na prosa das Crônicas de Algalord Parte III, posicionada entre "Dargor, Shadowlord" (#5 de *Dawn of Victory*) e "The Bloody Rage of the Titans" (#6) — mesma correção replicada em `ch3` e `ch11` da História Completa (ver Passo 9).
- **EXTRAS corrigidos**: *Rise from the Sea of Flames* tinha o ano do álbum errado (2006 → 2002, confere com `dragonflame.ano`); *Rage of the Winter (Sinfônica)* tinha uma afirmação inventada ("antes do duelo com Akron" — não existe esse duelo nesse ponto da história); trocado pelo verso extra real da versão sinfônica ("Face me, Akron, king of terror...").
- Conferidos contra a fonte e mantidos sem alteração por já serem paráfrases fiéis da letra (o problema real dessas faixas era falta de âncora narrativa, não invenção — resolvido no Passo 8): *Sea of Fate*, *Crystal Moonlight*, *Raging Starfire*, *Lost in Cold Dreams*, *I Belong to the Stars*, *Tornado*, *Tempesta di Fuoco*, *Anima Perduta*, *From Chaos to Eternity*, *Silent Dream*, *Il Canto del Vento*.

## ✅ Passo 8 — Lacunas da História Completa (Parte C)

Prioridade dada pelo Passo I: *From Chaos to Eternity* (3/9) e *The Frozen Tears of Angels* (4/10), mais o capítulo de Ainor que não existia.

- **`chaos_to_eternity`: 3/9 → 9/9.** `ds-ch16` ("A profecia de Thanor") passou de ligar só as faixas 1 e 6 para ligar 1–8 (a #9 já estava em `ds-ch17`/`ds-ch18`). O texto do capítulo foi reescrito para tecer as faixas líricas/introspectivas (2, 3, 5, 7, 8 — todas confirmadas na fonte como interlúdios sem novo evento de enredo) entre os dois beats narrativos reais (a revelação sobre Thanor e a busca por Aelin/Mornir), sem inventar nada além do que a letra de cada uma diz. A faixa 4 ("Ghosts of Forgotten Worlds", já com `local: ghostlands`) também entrou, fechando a lacuna apontada no relatório ("o site conta isso em ds-ch16 mas sem ligar à faixa").
- **`frozen_tears`: 4/10 → 9/10.** `ds-ch12` passou a cobrir as faixas 1–7 (antes só 1, 2, 5), tecendo as faixas líricas (2, 3, 4, 6, 7) no mesmo estilo. Criado o conteúdo que faltava para a faixa 8 ("On the Way to Ainor") — a travessia das planícies cinzentas rumo a Ainor —, agora coberta por `ds-ch13` junto com a #9, fechando a lacuna "On the Way to Ainor e a chegada a Ainor são um capítulo inteiro da fonte... e não existem na História Completa do site". A #10 (*Labyrinth of Madness*) permanece sem faixa vinculada — é instrumental e o próprio compêndio admite incerteza ("I have no clue if it's related to the story at all").
- Nenhuma imagem nova foi necessária: os capítulos existentes (`ds-ch12.jpg`, `ds-ch13.jpg`, `ds-ch16.jpg`) foram reaproveitados, já que a expansão foi de conteúdo textual dentro dos mesmos capítulos, não de novos capítulos.
- Passos 5–8 de "From Chaos to Eternity" também corrigem a atribuição de local: os versos de Pask-Ur/Aelin agora citam explicitamente as Terras Fantasmas, e os de Khaas/Mornir o Reino das Cachoeiras, dentro do texto de `ds-ch16`.
- **`triumph_or_agony`: 8/11 → 11/11.** `ds-ch7` passou a incluir a faixa-título #2 — as masmorras infernais logo na entrada de Dar-Kunor, o "triunfo ou agonia" que dá nome ao capítulo central da saga. `ds-ch8` passou a incluir as faixas 6 e 7 (*Il Canto del Vento*, *Silent Dream*), tecidas como o mesmo tipo de interlúdio lírico sem novo evento de enredo já usado noutros pontos, entre a origem da espada esmeralda e a retomada da ação nas masmorras vermelhas.
- **`cold_embrace`: 5/7 → 7/7.** `ds-ch14` passou a incluir a faixa 2 (*Dark Mystic Vision* — o avistamento da montanha que esconde Har-Kuun, antes da chegada) e a faixa 5 (*Neve Rosso Sangue* — o lamento em italiano pela morte de Tarish, logo após a traição).
- Nenhuma imagem nova foi necessária nestes dois casos também — mesmo padrão do resto do Passo 8, conteúdo textual absorvido nos capítulos já existentes.

## ✅ Passo 9 — Codex (Parte F)

- **Aresius**: "guia à distância" → corrigido para "acompanha... até os Portões de Marfim" (ele viaja fisicamente junto, só se despede na passagem secreta). "décadas mais tarde" → "cinco anos mais tarde" (Cronologia: Ano 5091, queda de Akron / Ano 5096, fundação da Ordem).
- **Loregard**: mesmo erro de "décadas depois" corrigido para "cinco anos depois".
- **Airin**: removida a faixa `legendary_tales` #5 (ela não é citada nessa letra); `faixas` agora aponta para `dawn_of_victory` #9 e #10, onde ela é de fato citada ("For Airin, my dead friend...").
- **Arwald**: removida a mesma faixa incorreta; adicionada `legendary_tales` #6 ("Virgin Skies", "Consigning his troops to Arwald of Ancelot"), a citação real do álbum. Descrição corrigida de "Guerreiro de Ancelot" para "Herói das Terras Médias... ao partir para defender Ancelot" (a fonte nunca o chama de guerreiro de Ancelot).
- **Tharos**: `faixas` trocado de `symphony` #5 (onde ele não aparece) para as citações reais: `legendary_tales` #7, `symphony` #7, `symphony` #8, `symphony` #10, `dawn_of_victory` #2.
- **Akron**: `faixas` trocado de `dawn_of_victory` #6 (não citado) para #9 e #10 (citações reais).
- **Elgard (lugar)**: corrigida a afirmação de que o Guerreiro obtém ali "a primeira das três chaves" — a primeira chave vem do Argon's Glade, para onde ele parte a partir de Elgard.
- **Portões de Marfim**: descrição reescrita para deixar claro que há um reino inteiro além deles (vales, cachoeiras, deserto, pântano) antes da Torre Sombria do Abismo; `faixas` completado com `legendary_tales` #7, `symphony` #2, `symphony` #3 e `triumph_or_agony` #5 (antes só listava `symphony` #7 e #8).
- **Vila dos Anões**: removida a localização inventada "perto das Montanhas Cinzentas"; corrigido "antes de seguir para a batalha final contra Dargor e Akron" (a batalha contra Dargor em Ancelot já havia acontecido — dali eles partem para negociar com Akron em Hargor).
- **Hargor**: `dawn_of_victory` #5 (citado só na versão estendida) trocado por #7 ("Holy Thunderforce", que cita Hargor na versão de álbum: "on their way to Hargor").
- **Tarish**: "morto por Dargor e Khaas" → "morto por Dargor", que vence a luta sozinho, conforme a fonte ("I saw Dargor struggling with Tarish... he won").
- Conferidos e já corretos, sem alteração: Ghostlands (`faixas` já incluía todas as citações reais), Vankar (`data-dark-secret.js` já usava "velho mago", não "demônio" — corrigido em passo anterior), Nekron/Iras/Etherus/Erian/Thanor/Lothen/Khaas/Uriel/Dargor.

## ✅ Passo 5 — Recalibrar os mapas (D2/D3)

Mudança de critério em relação ao que o relatório original propunha: o marcador do site não mostra o nome do local (só um ponto + o contador de faixas), então **o objetivo passou a ser posicionar cada marcador ao lado do nome já impresso/pintado no mapa** — não em cima do ícone da cidade — para a pessoa ler o rótulo oficial e clicar logo ao lado. Decisão do Aleh, registrada aqui para não se perder.

- Reli os dois mapas oficiais diretamente (`map.jpg` e `map-known-world.jpg`), com recortes ampliados via PowerShell/`System.Drawing` para o aglomerado denso das Terras Encantadas no mapa do Known World (letra cursiva pequena, difícil de ler na imagem inteira).
- Recalibradas as 25 coordenadas `enchanted` de `map.jpg` e 15 coordenadas `known_world` de `map-known-world.jpg` em `docs/data-common.js` (`LOCATIONS`), todas medidas a olho a partir da imagem — sem ferramenta de medição de pixel exata, então mantém a mesma margem de erro (~±1–2 pontos percentuais) que o relatório original já assumia.
- **D3 corrigido de fato**: "Urien" tem rótulo próprio no mapa do Known World, bem distinto de "Urienor" (mais a noroeste). O marcador `urien`, que antes estava cravado em cima de "Urienor", foi movido para a posição real de "Urien" (`known_world: {43.5, 51.5}`). "Urienor" não ganhou marcador próprio porque nenhuma faixa o cita diretamente (só o epíteto "Etherus from Urienor").
- Ao gerar uma prévia com os pontos sobrepostos nos mapas (script de verificação, descartado ao final) apareceu uma colisão: `desert_of_varg` e `hills_of_loregard` no Known World estavam cravados exatamente onde "Urien" deveria ficar, sem nenhum rótulo visível dessas duas ali perto — sinal de que as coordenadas antigas dessas duas no Known World eram um chute nunca verificado contra a arte (o relatório original também nunca as mediu). Reposicionadas por aproximação geográfica relativa (entre Elgard/Lands of Chaos e Kanor/Loregard, mesma relação que têm no mapa das Terras Encantadas) — **não é uma leitura direta de rótulo como as outras**, marcado aqui para uma futura conferência mais precisa se possível.
- Verificação feita por overlay (pontos desenhados sobre os mapas com PowerShell/`System.Drawing`, sem depender do navegador — a extensão do Chrome não estava conectada nesta sessão) e inspeção visual direta; não foi possível testar no site rodando de verdade (live DOM/CSS), então uma conferência visual no navegador é recomendada antes de dar isso por definitivo.

**Passo 5 dado como concluído.** Os ~20 locais do Known World não remedidos (nordic_plains, sea_of_trolls, forest_of_trolls, elves_hills, caltor, forest_of_unicorns, grey_mountains, enchanted_valleys, etc.) ficam com as coordenadas que já tinham — são legendas manuscritas pequenas demais para uma leitura confiável a mais, e o Aleh decidiu não perseguir precisão adicional aí. O D5 (marcação visual de `dar_kunor`/`erloria`/`nairin`/`aranen`/`hor_lad` como não-oficiais) também fica de fora do Passo 5 — se for retomado, entra como pedido à parte.

## 🟡 Passo 6 — Prompts de IA corrigidos (arte ainda pendente)

Criado `referencias/Prompts de IA - Correções do Report.md` com os 4 prompts corrigidos (Tharos,
Airin, Arwald, Aresius), em vez de editar `Prompts de IA - Novas Entradas do Codex.md` direto — para
manter rastreável o que mudou e por quê, ligado a este relatório.

- **Tharos (E1 + A3):** cor trocada de dragão escuro para dragão **vermelho**, batendo com a capa
  oficial (`docs/assets/covers/02.jpg`) e com "the bloody dragon" / "the bloody sea" da letra de "Land
  of Immortals". Fonte do prompt trocada de "Eternal Glory" (onde ele não aparece) para as faixas
  reais.
- **Airin (A3):** removida a afirmação de que foi capturada junto com Arwald em "Flames of Revenge";
  fonte trocada para a revelação real (Crônicas Parte III / *Dawn of Victory*).
- **Arwald (A3 + E2):** fonte trocada de "Land of Immortals" (não citado ali) para a prosa real de
  "Virgin Skies"; prompt reescrito para evitar os marcadores de altura/barba que fizeram a arte atual
  ler como anã — a fonte não descreve fisicamente Arwald.
- **Aresius (A3):** prompt corrigido para mostrar o mago caminhando fisicamente ao lado do Guerreiro
  (não guiando à distância) e removida a invenção de que ele reaparece na Dark Secret Saga — quem
  lembra dele de memória é Iras Algor, não o próprio Aresius.

**Ainda pendente:** gerar as 4 imagens a partir desses prompts corrigidos e salvá-las por cima de
`docs/assets/codex/{tharos,airin,arwald,aresius}.jpg` — precisa de uma ferramenta de geração de
imagem, fora do alcance desta sessão. Depois de gerada, a arte do Tharos deve ser conferida lado a
lado com a capa oficial.

## ⏳ Ainda não iniciados

Nenhum passo do plano original ficou de fora — o Passo 6 está com os prompts corrigidos, só falta gerar a arte nova a partir deles (ver acima).

---

# Parte K — Auditoria da execução (2026-08-18)

Reconferência do Registro de Execução (Parte J) contra `referencias/RhapsodySagas.md` lido integralmente e contra os arquivos de dados. O objetivo era responder duas perguntas: as correções declaradas foram mesmo aplicadas, e há erro que nem o relatório original pegou.

## K1. Confirmado como aplicado e correto

Verificado verso a verso: a refação de `ch5`–`ch8` da SoEL (Passo 2), o marcador `ghostlands` e suas religações (Passo 3), o suporte a múltiplos `local:` e as correções faixa a faixa do Passo 4, a remoção da captura de Airin em *Flames of Revenge*, os três instrumentais que ganharam texto honesto (Passo 7), o ano de *Rise from the Sea of Flames* e a nota da *Rage of the Winter (Sinfônica)*.

As coberturas da História Completa declaradas no Passo 8 conferem: `triumph_or_agony` 11/11, `frozen_tears` 9/10 → agora **9/9** (ver K3), `cold_embrace` 7/7, `chaos_to_eternity` 9/9.

## K2. Correções declaradas que não tinham sido aplicadas de fato

| Onde | Problema | Correção |
|---|---|---|
| `Ira Tenax`, `Epicus Furor`, `In Tenebris` | 🔴 As três continuavam descritas como "abertura instrumental" — o erro que a Parte B1 abre. `In Tenebris` era o caso mais grave: o Passo 4 mudou seu `local` para as Terras Fantasmas **por causa da letra**, mas o resumo ao lado ainda dizia que ela não tinha letra. | Resumos reescritos com a letra real e a prosa do capítulo; `In Tenebris` ganhou `traducao` (Apêndice C, 11–14) e o texto agora explica a ligação com as criptas. |
| `Holy Thunderforce` | 🔴 "Hargor, fortaleza de Dargor". O Passo 4 adiou para os Passos 7/9 e nenhum dos dois executou. | "a cidade infernal de Akron nas Terras Sombrias, no coração do Caos". |
| `Village of Dwarves` | 🟠 `local` virou `null`, mas o resumo manteve "região aproximada, próxima às Montanhas Cinzentas". | Só o que a fonte dá (anões de Lork, colina secreta de Gandor), declarando que ela não os situa no mapa. |
| `Heart of the Darklands` e `ds-ch7` | 🔴 "construiu sua cidade **sobre** Hargor". Hargor **é** a cidade. | Corrigido nos dois lugares, com o verso ("uma cidade inteira erguida sobre uma rocha tão grande quanto uma montanha"). |
| `Guardiani del Destino` | 🟡 Resumo fundia "Monte Erinor/Hargor". | Separados: o Monte Erinor é o caminho, Hargor é o destino avistado do alto. |

## K3. Erros novos, não apontados no relatório original

- 🔴 **`ds-ch17` contradizia a correção do Passo 4.** O resumo da faixa `Heroes of the Waterfalls' Kingdom` foi corrigido para separar a batalha (Reino das Cachoeiras) do clímax (Har-Kuun), mas o **capítulo** que a linka continuou juntando os dois, deixando implícito que Etherus se sacrifica no Reino das Cachoeiras. Reescrito com os dois cenários explícitos e a rota Naimun → Tamien → Montanhas Brancas.

- 🔴 **O Codex apontava para faixas onde a entidade não aparece.** O Passo 9 corrigiu as listas que o relatório citou nominalmente, mas o problema era mais amplo — conferi as 40 entradas contra as letras e a prosa. Casos piores: **Algalord** listava `dragonflame` #1, #3 e #11, e a cidade não é citada em nenhuma das três (as citações diretas estão em "Warrior of Ice", "Eternal Glory", "Holy Thunderforce", "Agony Is My Name", "Steelgods", "Unholy Warcry"); **Akron** listava `rain_of_flames` #1 e #3, onde o nome não aparece (a citação real é #4, "Tears of a Dying Angel"); **Hargor**, **Elgard**, **Khaas**, **Reino das Cachoeiras**, **Thanor**, **Iras**, **Dargor** e **Os Sete Livros Negros** tinham cada um pelo menos uma faixa errada. Todas corrigidas, e as citações reais que faltavam foram acrescentadas (inclusive as duas de Tharos que o próprio relatório listou e o Passo 9 não incluiu: `dawn_of_victory` #10 e `dragonflame` #6).

- 🟡 **Codex, Vankar:** "Décadas depois" para a visão em "Sacred Power of Raging Winds" — mesmo erro de escala que o Passo 9 corrigiu em Aresius e Loregard, mas nessa entrada ninguém tinha notado. Trocado por "Anos depois".

- 🔴 **Dois arquivos `.md` com título errado**, achados pela nova trava do script de sync: `03 - Triumph **of** My Magic Steel.md` (o correto é "for", como a Parte B1 já registrava) e `04 - **The** Village of Dwarves.md`. Renomeados.

## K4. Tracklists: bônus deixaram de ser faixa oficial (Parte H)

`Rise from the Sea of Flames` era a faixa 10 de *Power of the Dragonflame* (empurrando "Gargoyles" para 11) e ainda aparecia em Raridades; `Labyrinth of Madness` era a faixa 10 de *The Frozen Tears of Angels*. Ambas são bônus de edição especial.

As duas saíram de `SONGS` e vivem só em `EXTRAS` — mesmo tratamento que "Immortal, New Reign" já tinha, encerrando a inconsistência apontada na Parte H. "Gargoyles" voltou a ser a faixa 10. Os `.md` correspondentes foram renomeados para o prefixo `bonus - ` e trazem agora a ressalva de estarem fora da tracklist oficial. As tracklists agora são **10 / 10 / 10 / 7 / 10** e **12 / 11 / 9 / 7 / 9**.

## K5. Duas travas para o erro não voltar

O relatório pedia, no Passo 1, "um teste/script que quebre se voltarem a divergir". Ele não existia; agora existe:

- **`scripts/check_data_integrity.js`** (`node scripts/check_data_integrity.js`) — valida que toda referência `{album, faixa}` em `STORY` e no `CODEX` aponta para uma faixa existente, que todo `local:` existe em `LOCATIONS`, e que a tracklist de cada álbum é 1..N sem buraco (o que impede uma faixa bônus de voltar a ser numerada como oficial). Sai com código 1 em caso de problema.

- **`scripts/sync_track_summaries.py`** ganhou uma trava de segurança. Ele casava `.md` com `.js` **só pelo número da faixa** — e por isso, ao renumerar "Gargoyles" de 11 para 10, gravou o resumo de "Gargoyles" dentro do arquivo de "Rise from the Sea of Flames" (revertido). Agora ele também compara o título do arquivo com o campo `titulo`, e recusa a escrita se não baterem. Foi essa trava que encontrou os dois `.md` mistitulados do K3. Arquivos com prefixo `bonus - ` são ignorados por não pertencerem à tracklist.

**Estado ao fim desta rodada:** `node scripts/check_data_integrity.js` → 95 faixas, 36 locais, 40 entradas de Codex, nenhuma referência quebrada. `py -3 scripts/sync_track_summaries.py` → 95 de 95 `.md` em dia.

## K6. Conferência dedicada: História Completa, Cronologia e Codex

Passagem específica sobre os três blocos, capítulo a capítulo e entrada a entrada.

### Cronologia — ✅ bate integralmente

Os 27 eventos de `TIMELINE` (`data-common.js`) conferem um a um com o Apêndice A, nas três eras, em PT e EN. Único desvio: a fonte grafa "Algolord" no Ano 4200 dos Anjos (erro de digitação do próprio compêndio, já que todas as outras ocorrências são "Algalord") e o site usa a grafia correta. Confirma o que a Parte H já dizia.

### História Completa — 3 erros de fato

- 🔴 **`ch4` e a faixa "Land of Immortals" diziam que o Guerreiro *chega* à Terra dos Imortais**, "situada entre as colinas de Elgard". Ela não é um lugar do mapa e ele não chega lá: a fonte a define como o **Paraíso dos Heróis** — "the Land of Immortals, the Heaven of Heroes, will be finally his" *quando sua hora chegar* —, os "vales onde os verdadeiros heróis cavalgam, **além dos Portões de Marfim**". O que a faixa narra é a chegada a **Elgard** e o encontro com Aresius. As colinas de Elgard e as Ruínas de Kron são onde vive o velho anão, não a Terra dos Imortais. Capítulo retitulado para "Elgard e o mago Aresius" e os dois textos reescritos.

- 🔴 **`ch1` e "Warrior of Ice" diziam que o Guerreiro "decide partir" em busca da espada.** Ele não decide: é **convocado**. O Conselho dos Reis em Algalord escolhe o guerreiro de sangue nórdico e manda um mensageiro a Loregard; ele parte "orgulhoso de ter sido escolhido por seus sábios reis", com a tarefa adicional de levar tropas de Irengard. Reescritos — o que de quebra fecha a lacuna ⚪ da Parte C ("nenhum capítulo cobre o prólogo da Espada Esmeralda"): `ch1` agora traz a Santa Aliança, o Conselho e a convocação.

- 🟡 **`ch2` era vago a ponto de não informar** ("onde espera reencontrar seus aliados" — invenção). Reescrito com a rota real da fonte: decisão estratégica em Algalord, travessia das colinas sob a fúria do inverno, vales dos unicórnios, lado sul das Middle Forests, o desvio noturno até a Floresta dos Unicórnios onde lutou seu trisavô, e o unicórnio branco ao amanhecer.

### Codex — 3 erros de fato (além dos de `faixas` já listados em K3)

- 🔴 **Reino das Cachoeiras:** "É no pico de Arinen que os exércitos de todo o Mundo Conhecido **se reúnem**". A fonte diz outra coisa: a batalha acontece "entre lagos e cachoeiras" e **se decide** quando os senhores dos dragões **surgem sobre** o pico de Arinen. Corrigido, e acrescentada a recuperação de Mornir sob a cachoeira, ao custo da vida de Khaas.
- 🔴 **Ainor:** "roubado há três mil anos... **Décadas depois**, é também um dos pontos de mobilização" — a escala não fecha (o roubo é milenar, a mobilização é no presente da saga). Reescrito, incluindo o que Ainor de fato é na trama: onde Iras encontra o nome Har-Kuun na torre mais alta.
- 🟡 **Ancelot:** "Cidade natal de Arwald" — a fonte nunca diz onde ele nasceu; ela o chama de "hero of the Middle Lands", "hero of the northern lands" e "Arwald of Ancelot", e o apresenta como **defensor** da cidade. É o mesmo tipo de deslize que a Parte F já apontara em "Guerreiro de Ancelot". Trocado por "Cidadela defendida por Arwald e lar da princesa Airin". Mesmo ajuste em "O Guerreiro de Gelo" ("Convocado pelo Conselho dos Reis, parte em busca...").

### Cobertura da História Completa — agora 95/95

A Parte C listava faixas órfãs em quase todos os álbuns. As restantes foram ligadas aos capítulos que **já narravam aquelas cenas**, sem inventar enredo para instrumental (regra 3): `Ira Tenax` → `ch1` (o Conselho); `Virgin Skies` → `ch3` (a cavalgada de Ancelot a Elgard, que é literalmente a prosa desse capítulo); `Echoes of Tragedy` e `Legendary Tales` → `ch4` (a lembrança de Ancelot e a última noite de paz em Elgard); `Epicus Furor` → `ch5`; `Deadly Omen` → `ch14`; `In Tenebris` → `ch16`; `Elgard's Green Valleys` → `ds-ch2`. Os textos de `ch3`, `ch4`, `ch14` e `ds-ch2` foram estendidos para de fato cobrir essas cenas.

`node scripts/check_data_integrity.js --cobertura` agora imprime **10/10, 10/10, 10/10, 7/7, 10/10** e **12/12, 11/11, 9/9, 7/7, 9/9** — nenhuma faixa órfã nas duas sagas.

## K7. Pendente

- **Passo 6** segue como estava: os 4 prompts corrigidos existem, a arte (sobretudo o Tharos vermelho) não foi gerada.
- **D5** — os locais não oficiais (`dar_kunor`, `erloria`, `nairin`, `aranen`, `hor_lad`) continuam sem distinção visual dos marcadores tirados da arte oficial.
- **Títulos "Act I - …"** do EP *The Cold Embrace of Fear* seguem sem conferência contra a edição física (Parte B2).
- **Calibragem dos mapas (Passo 5)** continua sem verificação no navegador, e `urien` mantém uma coordenada `enchanted` herdada (`34.83 / 23.1`) que não passou pela remedição declarada.
