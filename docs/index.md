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
  <div :class="$style.articles" >
    <a :class="$style.article" v-for="(value,key,index) in theme.sidebar" :href="'/note' + value[0].link">
      <h6>{{capitalize(key)}}</h6>
    </a>
  </div>
 </div>

 <style module>
/* 样式容器 */
.container {
    padding: 20px;
    background-color: #f5f5f5; /* 背景色 */
    border-radius: 8px; /* 圆角 */
}


/* 文章列表 */
.articles {
    display: flex;
    flex-wrap: wrap; /* 换行 */
    margin: -10px; /* 调整负边距以创建间隔 */
}

/* 单个文章链接 */
.article {
    flex: 1 1 calc(33.33% - 20px); /* 三列布局，适应宽度 */
    margin: 10px; /* 间距 */
    padding: 15px; /* 内边距 */
    background-color: #fff; /* 白色背景 */
    border-radius: 5px; /* 圆角 */
    text-decoration: none; /* 去掉下划线 */
    color: #333; /* 字体颜色 */
    transition: transform 0.2s; /* 动画效果 */
}

/* 悬停效果 */
.article:hover {
    transform: scale(1.05); /* 鼠标悬停时放大 */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* 添加阴影 */
}

/* 文章标题样式 */
.article h6 {
    margin: 0; /* 去掉默认外边距 */
    font-size: 16px; /* 字体大小 */
    font-weight: bold; /* 加粗 */
    color: #007bff; /* 标题颜色 */
}


</style>
