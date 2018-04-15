---
home: true
heroImage: /hero.png
actionText: 起步 →
actionLink: /guide/
features:
- title: 简洁优先
  details: 对于以 markdown 为中心的项目结构，做最简化的配置，帮助你专注于编写文档。
- title: Vue 驱动
  details: 使用 Vue + webpack 开发环境，在 markdown 中使用 Vue 组件，并通过 Vue 开发自定义主题。
- title: 性能出色
  details: VuePress 将为每个页面生成预渲染的静态 HTML，每个页面加载之后，会作为单页面应用程序(SPA)运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
---

### 起步就像数 1, 2, 3 一样容易

``` bash
# 安装
npm install -g vuepress

# 创建一个 markdown 文件
echo "# Hello VuePress" > README.md

# 开始编写文档
vuepress dev

# 构建为静态文件
vuepress build
```
