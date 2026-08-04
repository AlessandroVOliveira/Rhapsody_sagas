// Dados da The Dark Secret Saga (Rhapsody of Fire)
// ATENÇÃO: conteúdo de faixas/história ainda é placeholder (Estágio B do plano).
// Álbuns, anos, capas-alvo e links do Spotify já são reais.

const SAGA_DARK_SECRET = {
  id: "dark_secret",
  meta: {
    nome: { pt: "A Saga do Segredo Sombrio", en: "The Dark Secret Saga" },
    subtitulo: { pt: "Rhapsody of Fire — mapa interativo de {n} álbuns", en: "Rhapsody of Fire — interactive map of {n} albums" },
    tema: "cold",
    icone: "❄️"
  },

  ALBUMS: {
    dark_secret: {
      id: "dark_secret",
      nome: "Symphony of Enchanted Lands II – The Dark Secret",
      ano: 2004,
      cover: "assets/covers-dark-secret/01.jpg",
      spotify: "https://open.spotify.com/album/1F00IfSonyqFfTn7OXrdnV",
      cor: "#5aa9c9"
    },
    triumph_or_agony: {
      id: "triumph_or_agony",
      nome: "Triumph or Agony",
      ano: 2006,
      cover: "assets/covers-dark-secret/02.jpg",
      spotify: "https://open.spotify.com/album/4mfUBjbHpj6Z9lmnonfGFI",
      cor: "#8f7fd6"
    },
    frozen_tears: {
      id: "frozen_tears",
      nome: "The Frozen Tears of Angels",
      ano: 2010,
      cover: "assets/covers-dark-secret/03.jpg",
      spotify: "https://open.spotify.com/album/7eKYAHhP0hxREmokX3aGQJ",
      cor: "#6fd6e8"
    },
    cold_embrace: {
      id: "cold_embrace",
      nome: "The Cold Embrace of Fear – A Dark Romantic Symphony",
      ano: 2010,
      cover: "assets/covers-dark-secret/04.jpg",
      spotify: "https://open.spotify.com/album/0PnKhJQZcCgwLytBMn73zQ",
      cor: "#3f5a75"
    },
    chaos_to_eternity: {
      id: "chaos_to_eternity",
      nome: "From Chaos to Eternity",
      ano: 2011,
      cover: "assets/covers-dark-secret/05.jpg",
      spotify: "https://open.spotify.com/album/3bgJoUhfOlKfauhC1xYYvC",
      cor: "#4472a0"
    }
  },

  // PLACEHOLDER: uma faixa de exemplo por álbum, só para validar o mecanismo de troca de saga.
  // Tracklist completa, resumos reais e mapeamento de localização entram no Estágio B.
  SONGS: [
    { album: "dark_secret", faixa: 1, titulo: "(placeholder — a definir)", local: null,
      resumo: { pt: "Conteúdo desta saga ainda não foi pesquisado/adicionado. Isto é um placeholder para validar a troca de saga.",
        en: "This saga's content hasn't been researched/added yet. This is a placeholder to validate the saga switcher." },
      letraUrl: LETRAS_BASE + "/rhapsody/" },
    { album: "triumph_or_agony", faixa: 1, titulo: "(placeholder — a definir)", local: "algalord",
      resumo: { pt: "Conteúdo desta saga ainda não foi pesquisado/adicionado. Isto é um placeholder para validar a troca de saga.",
        en: "This saga's content hasn't been researched/added yet. This is a placeholder to validate the saga switcher." },
      letraUrl: LETRAS_BASE + "/rhapsody/" },
    { album: "frozen_tears", faixa: 1, titulo: "(placeholder — a definir)", local: "elgard",
      resumo: { pt: "Conteúdo desta saga ainda não foi pesquisado/adicionado. Isto é um placeholder para validar a troca de saga.",
        en: "This saga's content hasn't been researched/added yet. This is a placeholder to validate the saga switcher." },
      letraUrl: LETRAS_BASE + "/rhapsody/" },
    { album: "cold_embrace", faixa: 1, titulo: "(placeholder — a definir)", local: null,
      resumo: { pt: "Conteúdo desta saga ainda não foi pesquisado/adicionado. Isto é um placeholder para validar a troca de saga.",
        en: "This saga's content hasn't been researched/added yet. This is a placeholder to validate the saga switcher." },
      letraUrl: LETRAS_BASE + "/rhapsody/" },
    { album: "chaos_to_eternity", faixa: 1, titulo: "(placeholder — a definir)", local: "algalord",
      resumo: { pt: "Conteúdo desta saga ainda não foi pesquisado/adicionado. Isto é um placeholder para validar a troca de saga.",
        en: "This saga's content hasn't been researched/added yet. This is a placeholder to validate the saga switcher." },
      letraUrl: LETRAS_BASE + "/rhapsody/" }
  ],

  // PLACEHOLDER: capítulos de exemplo (Estágio B traz a história completa).
  STORY: [
    { id: "ds-ch1", album: "dark_secret",
      titulo: { pt: "(placeholder) Início da saga", en: "(placeholder) Saga begins" },
      texto: { pt: "Capítulo de exemplo — a história completa da Dark Secret Saga ainda será pesquisada e escrita.",
        en: "Example chapter — the full story of the Dark Secret Saga is still to be researched and written." },
      faixas: [{ album: "dark_secret", faixa: 1 }] },
    { id: "ds-ch2", album: "chaos_to_eternity",
      titulo: { pt: "(placeholder) Desfecho", en: "(placeholder) Conclusion" },
      texto: { pt: "Capítulo de exemplo — representa o encerramento da saga em From Chaos to Eternity.",
        en: "Example chapter — represents the saga's conclusion in From Chaos to Eternity." },
      faixas: [{ album: "chaos_to_eternity", faixa: 1 }] }
  ]
};
