export interface Article {
  publication: string
  title: string
  link: string
}

// TODO: incluir aqui o artigo acadêmico do HCII 2026 (Springer CCIS 3047)
// quando o título e o link estiverem definidos.
export const articles: Article[] = [
  {
    publication: "UX Planet",
    title:
      "Easily calculate SUS Score, a quick tutorial to automate this task and save time",
    link: "https://uxplanet.org/easily-calculate-sus-score-a464d753e5aa",
  },
  {
    publication: "UX Collective 🇧🇷",
    title:
      "An information architecture methodology, organizing and making sense of things",
    link: "https://brasil.uxdesign.cc/arquitetura-da-informa%C3%A7%C3%A3o-d057cf7301a",
  },
  {
    publication: "UX Collective 🇧🇷",
    title:
      "Developing a design centric culture, ways to amplify the design team's actions",
    link: "https://brasil.uxdesign.cc/cultura-centrada-no-design-16fdcfe9f47e",
  },
]
