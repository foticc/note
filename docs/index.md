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
const capitalize = (str) => {
  if (!str) return '';
  // 处理字符串，去掉 "/posts/" 和 "/"，然后首字母大写
  const processedStr = str.replace("/posts/", "").replace("/", "");
  return processedStr.charAt(0).toUpperCase() + processedStr.slice(1);
};
</script>
<div :class="$style.container">
    <ul :class="$style.list">
        <li :class="$style.item" v-for="(value,key,index) in theme.sidebar">
            <i>🗂️</i>
            <span :class="$style.title">
                <a style="text-decoration: none;" :href="'/note' + value[0].link">{{capitalize(key)}} </a>
            </span>
        </li>
    </ul>
 </div>

 <style module>
    .container {
        font-family: "Segoe UI", system-ui, sans-serif;
        max-width: 800px;
        margin: 1.5rem auto;
        padding: 0 20px;
    }
  .list {
        list-style: none;
        padding: 0;
        display: grid;
        gap: 6px;
    }
    .link{
        text-decoration: none;
    }

    .item {
        background: white;
        padding: 12px 15px;
        border-radius: 6px;
        box-shadow: 0 1px 2px rgba(0,0,0,0.05);
        transition: all 0.2s ease;
        display: flex;
        align-items: center;
        border: 1px solid #f0f0f0;
    }

    .item:hover {
        transform: translateX(4px);
        box-shadow: 0 3px 8px rgba(0,0,0,0.08);
        background: #fcfdff;
        cursor: pointer;
    }

    .folder-icon {
        font-size: 20px;
        color: #7f8fa4;
        margin-right: 12px;
        opacity: 0.8;
    }

    .title {
        font-size: 0.95em;
        font-weight: 500;
        color: #4a5568;
        letter-spacing: 0.02em;
    }

    h1 {
        color: #2d3748;
        font-size: 1.6em;
        margin-bottom: 1.2em;
        padding-bottom: 0.6em;
        border-bottom: 1px solid #e2e8f0;
    }
</style>
