# tasguercimaia

Portfolio de Tas Guerci Maia. Migrado de Gatsby 2 para Astro 7, Tailwind 4 e MDX.

## Comandos

```bash
npm install
npm run dev       # servidor local em http://localhost:4321
npm run build     # gera ./dist
npm run preview   # serve o build
npm run check     # checagem de tipos
```

## Estrutura

```
src/
  assets/            imagens (otimizadas pelo Astro no build)
  components/        Header, Footer, CaseCard, ArticleItem...
  components/case/   kit dos cases: CaseIntro, CaseCover, Section, Figure, ImageRow, Quote, Stats...
  content/cases/     um .mdx por case (mpos, customer-360; _template.mdx é o modelo)
  data/              site.ts (nome, menu, redes), articles.ts, experience.ts
  layouts/Base.astro head, SEO, GTM, header e footer
  pages/             /, /about, /work, /work/[slug], /writing (fora do menu e do sitemap, noindex), 404
  styles/global.css tokens do design system (cores, fontes)
public/              favicon, imagem OG, robots.txt
```

## Adicionando um case

1. Copie `src/content/cases/_template.mdx` para `src/content/cases/<slug>.mdx`.
2. Preencha o frontmatter. `status: soon` aparece na Home e em `/work` sem link; `status: published` gera `/work/<slug>`.
3. Monte o corpo com os componentes de `src/components/case/` (veja `mpos.mdx`).

## Pendências

- Definir o domínio final e trocar `site` em `astro.config.mjs` e a URL do sitemap em `public/robots.txt`.
- Incluir o artigo do HCII 2026 em `src/data/articles.ts`.
- Novos cases (DSCorp, DTV+) ainda não existem. O Customer 360 não tem seção de Outcomes (o texto original não tinha).
