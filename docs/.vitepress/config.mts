import { defineConfig } from "vitepress"
import { generateSidebar } from "./siderBar.mjs"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/note/",
  title: "Note",
  description: "Note site",
  cleanUrls: true,
  head: [
    ["link", { rel: "icon", type: "image/png", href: "/favicon.ico" }], 
    ['link',{ href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css', rel: 'stylesheet' }]
  ],
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
