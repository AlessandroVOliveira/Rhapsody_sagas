# Localidades citadas no Mapa do Mundo Conhecido (Known World)

Levantamento feito a partir do `RhapsodySagas.md` (compêndio de ~200 páginas), para ajudar a
restaurar seu mapa de baixa qualidade do **Known World / Northern Realms** — os apêndices D/2 e
D/3 do compêndio (mapas de "Northern Realms" e "Known World") perderam as imagens na conversão
de PDF para MD, só sobrou o título da página, então não há como extrair os nomes diretamente da
arte do mapa. Esta lista foi montada varrendo todo o texto da Dark Secret Saga (e um pouco da
Emerald Sword Saga) atrás de topônimos.

Os nomes abaixo estão como aparecem no texto original (inglês/italiano) — não traduzi, já que são
rótulos de mapa, seguindo a mesma convenção do `data-common.js` do site.

> Nota: nosso mapa atual (`resize.png` / `mapa_mundo.jpeg`) cobre as **Terras Encantadas**
> (Enchanted Lands). Vários nomes abaixo já têm marcador lá (ex.: Nordic Plains, Hargor, Elgard) —
> deixei isso indicado. O que interessa mais pro seu mapa Known World são os nomes **sem** marcador
> atual, sobretudo os do bloco "Northern Realms".

---

## 0. Atualização — conferido direto no `Known_World.png`

Você conseguiu o mapa real (`mapas/Known_World.png`, aqui em `referencias/`) e ele está em boa qualidade —
recortei e ampliei várias regiões pra ler os nomes com precisão. **Grande achado: esse mapa não é
uma região separada — é o Mundo Conhecido inteiro, e o cluster "Enchanted Lands" nele contém quase
todos os pontos do nosso mapa atual.** Ou seja, `resize.png`/`mapa_mundo.jpeg` provavelmente é só um
recorte ampliado do centro deste mapa maior.

O mapa é dividido em grandes regiões rotuladas à mão: **Unknown Realms** (topo), **Icy Realms** /
**Northern Lands**, **Dwarves' Underworld** / **Deadlands** (oeste), **Enchanted Lands** (centro),
**Elves' Ancient Realms** (leste), **Southern Lands** / **Forgotten Lands** (sul), **Shadowlands**
e **Barbarians' Realms** (sudeste).

### ✅ Confirmados no mapa (localização por região)

| Nome | Região no mapa | Vizinhos próximos |
|---|---|---|
| **Hargor** | Enchanted Lands, dentro da mancha "Darklands" | Elnor, Thorald, Algalord (ao lado, um pouco a sudeste) |
| **Elgard** — *não achei o rótulo "Elgard" isolado*, mas **Elnor** e **Thorald** estão exatamente onde esperávamos | Enchanted Lands | ao lado de Hargor/Darklands |
| **Algalord** | Enchanted Lands, junto ao "Algalord Sea" | Thorald, Loregard, Irengard |
| **Loregard** | Enchanted Lands, a leste de Algalord | Kanor, Holy Lakes |
| **Irengard** (grafado "Ivengard"/"Irengard") | Enchanted Lands, entre Algalord e Loregard | — |
| **Kanor** | Enchanted Lands, nordeste de Algalord | Holy Lakes, Middle Desert |
| **Holy Lakes** | Enchanted Lands | entre Loregard e Middle Desert |
| **Ancelot** | Enchanted Lands, canto direito do cluster | perto de "Land of Chaos"/Chaosands |
| **Nordic Plains** | Northern Lands, ao norte do cluster Enchanted Lands | logo ao lado de **Ainor** |
| **Ainor** | Northern Lands | colado no rótulo "Nordic Plains" — confirma que Ainor fica bem na borda norte |
| **White Mountains** | Northern Lands, faixa de montanhas ao norte | entre Nordic Plains e Har-Kuun |
| **Har-Kuun** | Northern Lands / Icy Realms, no meio das White Mountains | isolado, cercado de montanhas — bate com a fortaleza perdida no gelo |
| **White Sea** / **White Forest** / **Middle Sea** | Northern Lands, mar/floresta entre Nordic Plains e o Reino das Cachoeiras | — |
| **Kingdom of the Ancient Waterfalls** | Elves' Ancient Realms (nordeste), rotulado por extenso | perto de "Sacred Hills", "Forest of Anorin" — confirma a identificação com Waterfalls' Kingdom |
| **Urienor** (grafado "Uvienor" na caligrafia) | fronteira Dwarves'/Trolls' Realms, oeste | perto de "Trolls' Realms", "Sea of Trolls" |
| **Ghostlands** | Southern Lands (sudeste), perto de "Mystic Lands"/"Dragons' Hills" | ao lado de "Shadowlands" |
| **Seth** | Southern Lands, no sopé das Silver Mountains | perto de "Silver Mountains", "Land of Fire" |
| **Golden Plains** | Southern Lands (sudoeste) — o texto fala em "Golden **Sea**", o mapa rotula **Golden Plains** na mesma região; deve ser a mesma referência | perto de "Dusty Lands" |

### ❌ Confirmado: não estão no mapa

Conferido a dois (eu no recorte digital, você no original) — **Dar-Kunor, Nair-Kaan, Nairin,
Fenor, Orin, Erloria, Hor-Lad, Town of the Gods e Arinen/Erinor não existem na arte do mapa**,
mesmo ampliado. São lugares que só existem na narrativa/letras — o artista original do mapa não
chegou a desenhá-los (ou ficaram só nos apêndices D/2 e D/3, que perdemos). Pra restaurar o mapa,
esses nomes ficam de fora: não tem rótulo original pra recuperar. Se um dia você quiser inclui-los
mesmo assim, seria criar um rótulo novo do zero, não restaurar um apagado — vale decidir isso
separado, com calma.

### Recortes gerados

Os recortes ampliados usados pra essa conferência (e pra calibrar as coordenadas que hoje estão em
`docs/data-dark-secret.js`) já cumpriram sua função e foram removidos — as coordenadas finais estão
salvas no código do site. Se precisar reconferir algum ponto, é só recortar `mapas/Known_World.png`
de novo na região correspondente.

---

## 1. Northern Realms (o gelo além das Terras Encantadas)

Região onde se passa a maior parte de *The Frozen Tears of Angels* e *The Cold Embrace of Fear* —
provavelmente o núcleo do seu mapa Known World/Northern Realms.

| Nome | O que é | Onde aparece |
|---|---|---|
| **Nordic Plains** | Planície ao norte; já tem marcador no mapa atual (`nordic_plains`) — mas no Known World deve aparecer de novo, como ponto de entrada para o norte | *Dark Frozen World*, *Sea of Fate*; batalha antiga entre "army of the Nordic Plains" e os senhores das Terras Sombrias (Age of the Red Moon) — ✅ confirmado no mapa |
| **White Mountains (of the Northlands)** | Cadeia de montanhas geladas nas bordas do Mundo Conhecido; onde o Livro Branco de Erian estava escondido | narração de Uriel antes de *Frozen Tears of Angels* — ✅ confirmado no mapa |
| **Ainor** | Salão/cidade onde o Livro de Erian ficava guardado originalmente, antes de ser roubado 3000 anos atrás | *On the Way to Ainor*; citada por Eloin — ✅ confirmado no mapa |
| ~~**Nair-Kaan**~~ | Passo de montanha sagrado nas White Mountains, onde anjos e demônios lutaram nos tempos antigos | *The Pass of Nair-Kaan* (Cold Embrace, Ato I) — ❌ não está no mapa |
| **Har-Kuun** | Fortaleza/portão do Inferno perdido no gelo, com sete torres negras guardadas por sete demônios de pedra; onde o Livro de Erian foi escondido pela Ordem Negra | *The Ancient Fires of Har-Kuun*, citada em quase todo Frozen Tears/Cold Embrace — ✅ confirmado no mapa |
| ~~**Nairin**~~ | Vila élfica no lado leste das White Mountains, onde o grupo se recupera após a batalha em Har-Kuun | narração de Uriel em *The Betrayal* — ❌ não está no mapa |

---

## 2. Região de Hargor / Terras Sombrias (já parcialmente no mapa atual)

| Nome | O que é | Onde aparece | Observação |
|---|---|---|---|
| ~~**Dar-Kunor**~~ | Cavernas/submundo logo abaixo de Hargor, onde o sétimo Livro Negro foi encontrado | *Dar-Kunor*, *Unholy Warcry*, capítulo central de *Triumph or Agony* | ❌ não está no mapa (checamos a área minúscula perto de Hargor e não tem rótulo) |
| **Irith** | Nome antigo da região que hoje é a Darklands, antes da 6ª Guerra Primordial | *Old Age of Wonders* | Mesma área do marcador `darklands` atual — é história, não um lugar novo no mapa |
| ~~**Fenor**~~ | Cidade/ponto no rio, na rota de fuga depois do roubo do livro | *Dark Reign of Fire* | ❌ não está no mapa |
| ~~**Orin**~~ | Cidade governada pelo Rei Hanos, aliado da Ordem do Dragão Branco | *Dark Reign of Fire* | ❌ não está no mapa |
| ~~**Erloria**~~ | Caminho/rota alternativa mencionada uma única vez, indo em direção às Grey Mountains e às cavernas de Dar-Kunor | *The Last Angels' Call* | ❌ não está no mapa |

---

## 3. Outros reinos do Mundo Conhecido (fora do mapa atual)

| Nome | O que é | Onde aparece |
|---|---|---|
| **Waterfalls' Kingdom** / **Kingdom of the Ancient Waterfalls** | Reino natal da princesa Lothen; provavelmente a mesma região do marcador `green_valleys` atual (é o mesmo lugar de "Heroes of the Lost Valley" na Emerald Sword Saga — "Entering the Waterfalls' Realm") | *Heroes of the Waterfalls' Kingdom*, prólogo de *Triumph or Agony* — ✅ confirmado no mapa |
| ~~**Arinen**~~ / ~~**Erinor**~~ | O "monte" sagrado do Reino das Cachoeiras, palco da batalha final contra os sete demônios — os dois nomes aparecem em músicas diferentes (inglês vs. italiano) para o que parece ser o mesmo pico | *Heroes of the Waterfalls' Kingdom* (Arinen); *Guardiani del destino* (Erinor) — ❌ não está no mapa |
| **Ghostlands** | Região ao sul conquistada pelo Exército das Trevas (Ano 3200 dos Anjos), depois isolada | Cronologia (Appendix A) — ✅ confirmado no mapa |
| **Golden Sea** | Mar mencionado como limite: "from the rocky mountains to the Golden Sea" | *Unholy Warcry* — ✅ o mapa rotula "Golden Plains" na mesma região; provavelmente a mesma referência |
| **Seth** | Cidade murada citada como um dos limites do mundo conhecido: "to the walls of Seth" | *Unholy Warcry* — ✅ confirmado no mapa |
| **Irengard** | Reino aliado das Terras Encantadas nas guerras antigas (ao lado de Ancelot e Elgard, contra Algalord/Elnor/Thorald) | Cronologia; também citado na Emerald Sword Saga (tropas de Irengard reforçando Algalord) — ✅ confirmado no mapa |
| ~~**Hor-Lad**~~ | Terra natal de Iras Algor, primeiro mago da Ordem do Dragão Branco | Prólogo de *Triumph or Agony* — ❌ não está no mapa |
| **Urienor** | Terra natal de Etherus, cofundador da Ordem do Dragão Branco | *Chapter IV: The White Dragon's Order* — ✅ confirmado no mapa (grafado "Uvienor") |
| ~~**Town of the Gods**~~ | Cidade sagrada para onde o exército de Akron marchou no Ano 5090 dos Anjos — pode coincidir com um local já existente (Algalord? Ancelot?), não fica claro no texto | Cronologia (Appendix A) — ❌ não está no mapa |

---

## 4. Não são lugares físicos (não precisam de marcador)

Pra não confundir na hora de restaurar o mapa — esses nomes aparecem no texto mas são reinos
espirituais/dimensões, não pontos geográficos do Known World:

- **Crystal Realms** — reino celestial dos anjos que petrificaram os sete demônios
- **The Ancient World** — dimensão do próprio Nekron, além do portão em Har-Kuun (não é o "mundo antigo" no sentido histórico)
- **The Abyss** — o abismo/inferno onde Nekron tortura Thanor

---

## Resumo rápido pra edição

Nomes confirmados na arte original, prontos pra restaurar (na ordem em que aparecem indo do centro
das Enchanted Lands rumo ao norte): **Nordic Plains → Ainor → White Mountains → Har-Kuun**. Esses
quatro têm rótulo de verdade no mapa pra recuperar.

**Nair-Kaan e Nairin não existem no desenho** — são pontos da rota de *Frozen Tears of Angels*/*Cold
Embrace of Fear* que ficaram só na letra da música, sem correspondência no mapa oficial. Se quiser
marcá-los mesmo assim (pra fechar a rota da história no seu mapa restaurado), seria posicioná-los
por conta própria entre Ainor e Har-Kuun — mas aí é criação nova, não restauração.
