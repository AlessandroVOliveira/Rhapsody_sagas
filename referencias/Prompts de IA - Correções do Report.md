# Prompts de IA — Correções do Report (Passo 6)

Este arquivo não substitui `Prompts de IA - Novas Entradas do Codex.md` — ele documenta as correções
apontadas no `report.md` (Parte A3 e Parte E) para as 4 entradas que saíram erradas: os prompts
originais continham afirmações que a fonte não sustenta, e essas afirmações foram usadas para gerar
as imagens que hoje estão em `docs/assets/codex/`.

**Antes de gerar imagem nova**, troque o prompt da entrada correspondente no arquivo original pelo
prompt corrigido abaixo (ou gere direto a partir daqui). Depois de gerar, salve por cima do arquivo
existente (`docs/assets/codex/<id>.jpg`) e confira que a nova imagem bate com a capa oficial onde
aplicável (caso do Tharos).

---

## 1. Tharos — cor errada

**Problema (report, E1 e A3):** o prompt mandava descrever Tharos como um dragão de escamas
**escuras** ("dark, scale-armored hide"), citando "Eternal Glory" como fonte — faixa em que Tharos
não aparece nem na letra nem na prosa. A capa oficial de *Symphony of Enchanted Lands*
(`docs/assets/covers/02.jpg`), já publicada no próprio site, mostra o Guerreiro montado num dragão
**vermelho** cuspindo fogo. A fonte textual confirma: "the one with Tharos, the **bloody** dragon,
keeper of the second key" e "to obtain the second key you have to cross the **bloody sea**, where the
thirst of Tharos never ends" (Legendary Tales, "Land of Immortals").

**Fonte corrigida:** *Legendary Tales* — "Land of Immortals" (menção antecipada, "mar de sangue",
sede de Tharos); *Symphony of Enchanted Lands* — "Wings of Destiny" (voo com o Guerreiro), "The Dark
Tower of Abyss" (luta contra o guardião ancestral); *Dawn of Victory* — "Dawn of Victory" ("For
Tharos, the dragon"), "The Mighty Ride of the Firelord" ("I call the Tharos' fire"). Capa oficial:
`docs/assets/covers/02.jpg`.

**Prompt corrigido:**
> A great **red dragon with deep crimson and ember-orange scales**, fire glowing faintly between the
> scale plates, vast leathery wings, flying alongside a lone armored warrior over green valleys and
> jagged mountain peaks at golden hour — matching the official album cover of *Symphony of Enchanted
> Lands*, where the warrior rides a red, fire-breathing dragon toward a dark tower. The dragon's eyes
> are intelligent and sorrowful rather than feral — a loyal companion, not a monster. One wing shows
> faint scarring from an old curse now broken. Sweeping, heroic composition, wind in motion, warm red
> and orange glow radiating from the dragon's body. epic fantasy oil painting, warm amber and gold
> lighting, dramatic chiaroscuro, detailed plate armor and linework, painterly rendering in the style
> of 1990s-2000s symphonic power metal album art, dramatic sky, highly detailed, cinematic composition

---

## 2. Airin — captura atribuída à faixa errada

**Problema (report, A3):** o prompt citava "Legendary Tales — Flames of Revenge" como fonte, faixa em
que Airin não é citada (nem na letra, nem na prosa — só "the victims are countless"), e dizia que ela
foi "capturada junto com ele [Arwald]". Airin é capturada sozinha (com uma dúzia de cavaleiros, não
com Arwald), durante o cerco a Ancelot narrado na prosa das Crônicas de Algalord Parte III, revelada
só mais tarde, em *Dawn of Victory*.

**Fonte corrigida:** Crônicas de Algalord Parte III (prosa, entre "Dargor, Shadowlord" e "The Bloody
Rage of the Titans" — *Dawn of Victory*); *Dawn of Victory* — "The Last Winged Unicorn" (morte),
"The Mighty Ride of the Firelord" ("For Airin, my dead friend...").

**Prompt corrigido:**
> A young princess in torn royal robes of pale gold and ivory, standing alone at the edge of a silent
> moonlit lake surrounded by swans, her expression serene and sorrowful rather than victimized — a
> spectral, memorial portrait rather than a scene of violence. No other figures present. Faint golden
> light traces the outline of her figure, as if she is already becoming a memory. Keep the imagery
> dignified and symbolic. epic fantasy oil painting, warm amber and gold lighting, dramatic
> chiaroscuro, detailed royal robes and linework, painterly rendering in the style of 1990s-2000s
> symphonic power metal album art, dramatic sky, highly detailed, cinematic composition

---

## 3. Arwald — fonte errada e leitura como anão

**Problema (report, A3 e E2):** o prompt citava "Legendary Tales — Land of Immortals" como a fonte da
entrega das tropas ao Guerreiro; essa cena está na **prosa** do Capítulo VI ("Virgin Skies"), e Arwald
não é sequer citado na letra de "Land of Immortals". Além disso (E2), a arte atual
(`docs/assets/codex/arwald.jpg`) lê como um anão — baixo, atarracado, barbudo —, o que a fonte não
sustenta: ela não descreve fisicamente Arwald (só "hero of the Middle Lands", "hero of the northern
lands", "Arwald 'the Rock'"). O prompt abaixo evita marcadores de altura/parentesco que empurrem a
leitura para "anão" e deixa claro que ele é humano, um guerreiro adulto de porte normal.

**Fonte corrigida:** prosa do Capítulo VI, "Virgin Skies" ("Consigning his troops to Arwald of
Ancelot") — *Legendary Tales*; *Dawn of Victory* — "Dawn of Victory", "The Last Winged Unicorn", "The
Mighty Ride of the Firelord".

**Prompt corrigido:**
> A tall, human warrior of average build in ornate bronze-and-crimson plate armor bearing the crest
> of a walled city, standing atop war-torn ramparts at dawn, sword raised in a rallying gesture toward
> unseen troops. Clean-shaven or short-bearded, proportions naturalistic and heroic — not stocky, not
> dwarfish, no short/squat proportions. His face shows fierce loyalty and quiet grief beneath the
> resolve. Banners of his city flutter behind him. epic fantasy oil painting, warm amber and gold
> lighting, dramatic chiaroscuro, detailed plate armor and linework, painterly rendering in the style
> of 1990s-2000s symphonic power metal album art, dramatic sky, highly detailed, cinematic composition

---

## 4. Aresius — acompanha o Guerreiro e não reaparece na Dark Secret Saga

**Problema (report, A3):** o prompt dizia que Aresius "guia o Guerreiro à distância" — na verdade ele
viaja fisicamente ao lado dele até os Portões de Marfim, só se despedindo na passagem secreta. E dizia
que ele "reaparece como ancião em *The Frozen Tears of Angels* ('Har-Kuun')... reconhece o nome
Har-Kuun para a nova geração de heróis" — isso é impossível: Aresius já morreu antes do fim da Emerald
Sword Saga ("Our friend Aresius in his passing left our lands in peace and splendour"). Quem lembra do
nome Har-Kuun, de memória, é **Iras Algor** ("my old friend Aresius once told me about it") — Aresius
não aparece na Dark Secret Saga.

**Fonte corrigida:** narrador das "Crônicas de Algalord" ao longo de toda a Emerald Sword Saga;
acompanha o Guerreiro fisicamente de Elgard até os Portões de Marfim (*Symphony of Enchanted Lands* —
"Wisdom of the Kings"); *Dawn of Victory* — "Village of Dwarves". Não aparece na Dark Secret Saga — é
citado de memória por Iras Algor em *The Frozen Tears of Angels*.

**Prompt corrigido:**
> An elderly wizard with a long grey-streaked beard, wearing deep green and gold traveling robes
> marked with the sigil of a green kingdom, walking beside an armored warrior along a mountain path at
> dusk, one hand gesturing forward as if guiding the way in person — not a distant, ethereal presence,
> but a physical traveling companion at his side. A carved wooden staff in his other hand, faint
> golden runes glowing faintly around it. Wise, weathered, paternal expression. epic fantasy oil
> painting, warm amber and gold lighting, dramatic chiaroscuro, detailed traveling robes and linework,
> painterly rendering in the style of 1990s-2000s symphonic power metal album art, highly detailed,
> cinematic composition

---

## O que ainda falta

- Gerar as 4 imagens a partir dos prompts corrigidos acima e salvar por cima de
  `docs/assets/codex/tharos.jpg`, `airin.jpg`, `arwald.jpg` e `aresius.jpg`.
- Depois de gerar o Tharos novo, comparar lado a lado com `docs/assets/covers/02.jpg` para confirmar
  que a cor e a composição batem.
- Atualizar `Prompts de IA - Novas Entradas do Codex.md` com estes textos corrigidos, se quiser manter
  um único arquivo como fonte de verdade dos prompts (hoje ele ainda tem as versões erradas nas
  entradas 1–4).
