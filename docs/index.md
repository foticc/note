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

 <div :class="$style.container">
  <div :class="$style.articles" >
    <a :class="$style.article" v-for="(value,key,index) in theme.sidebar" :href="'/note' + value[0].link">
      <h6>{{key.replace("/posts","")}}</h6>
    </a>
  </div>
 </div>

 <style module>

.container {
 
}

.articles {
  
}

.article {

}

.article::before {
  
}

.article h3 {

}

.article:hover {
  
}


</style>
