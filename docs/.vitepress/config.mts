import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Note",
  description: "Note site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/example/markdown-examples" },
      { text: "Note", link: "/home/index" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/example/markdown-examples" },
          { text: "Runtime API Examples", link: "/example/api-examples" },
        ],
      },
      {
        text: "Note",
        items: [{ text: "Note", link: "/home/index" }],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
})
