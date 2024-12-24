import { defineConfig } from "vitepress"
import { generateSidebar } from "./siderBar.mjs"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/note/",
  title: "Note",
  description: "Note site",
  cleanUrls: true,
  // head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    search: {
      provider: "local",
    },
    // https://vitepress.dev/reference/default-theme-config
    // nav: set_sidebar("/docs/posts"),

    sidebar: generateSidebar("/docs/posts"),
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
})
