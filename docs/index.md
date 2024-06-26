---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  # name: "note"
  # text: "note site"
  # tagline: My great project tagline
  # actions:
  #   - theme: brand
  #     text: Markdown Examples
  #     link: /example/markdown-examples
  #   - theme: alt
  #     text: API Examples
  #     link: /example/api-examples
  #   - theme: alt
  #     text: Note
  #     link: /home/
# features:
#   - title: Note
#     icon: 😁
#     details: 主页
#     link: /posts/example/api-examples
#   - title: Feature B
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#     link: /posts/home/demo
#   - title: Feature C
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#     link: /posts/Netty-讲义/Netty01-nio
---

<script setup>
import { useData } from 'vitepress'

const { theme } = useData()
</script>

{{theme}}

 <div  class="container">
  <div class="articles-grid" >
    <a class="article" v-for="(value,key,index) in theme.sidebar" :href="'/note' + value[0].link">
      <div class="article-title">{{key.replace("/posts","")}}</div>
    </a>
  </div>
 </div>
