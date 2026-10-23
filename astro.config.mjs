import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwindcss from "@tailwindcss/vite"

// Troque `site` quando o domínio final for definido.
export default defineConfig({
  site: "https://tasguercimaia.netlify.app",
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
})
