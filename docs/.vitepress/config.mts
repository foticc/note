import { defineConfig } from "vitepress"
import { set_sidebar } from "./siderBar.mjs"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/note/",
  title: "Note",
  description: "Note site",
  cleanUrls: true,
  themeConfig: {
    search: {
      provider: "local",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],

    sidebar: set_sidebar("/docs/posts"),
    socialLinks: [
      // { icon: "instagram", link: "https://github.com/vuejs/vitepress" },
    ],
  },
})
