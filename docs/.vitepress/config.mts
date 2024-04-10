import { defineConfig } from "vitepress"
import {set_sidebar} from './siderBar.mjs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/note/",
  title: "Note",
  description: "Note site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/example/markdown-examples" },
      { text: "Note", link: "/home/index" },
    ],

    sidebar: set_sidebar("/docs/posts"),
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
})
