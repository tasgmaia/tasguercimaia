import { defineCollection } from "astro:content"
import { z } from "astro/zod"
import { glob } from "astro/loaders"

// Um arquivo por case em src/content/cases. Arquivos que começam com "_" são ignorados
// (use _template.mdx como ponto de partida).
const cases = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/cases" }),
  schema: ({ image }) =>
    z.object({
      company: z.string(),
      year: z.number(),
      title: z.string(),
      // "soon" aparece na lista, sem link e sem página.
      status: z.enum(["published", "soon"]).default("soon"),
      order: z.number().default(99),
      cover: image(),
      coverAlt: z.string().default(""),
      coverBg: z.string(),
      coverSize: z.string().default("50%"),
      coverAnchor: z.enum(["top", "bottom"]).default("top"),
    }),
})

export const collections = { cases }
