# 介绍

VuePress 由两部分组成：一个带有强大 Vue 主题系统的简约静态网站生成器，以及为编写技术文档而优化的默认主题。它是为了支持 Vue 子项目的文档需求而创建的。

由 VuePress 生成的每个页面都有自己的预渲染静态 HTML，它们能提供出色的加载性能，并且对 SEO 友好。然而，一旦页面被加载，Vue 就会接管静态内容并将其转换为完整的单页面应用程序（SPA）。当用户在站点周围导航时，可以根据需要提取其他页面。

## 运行原理（How It Works）

VuePress 网站实际上是由 [Vue](http://vuejs.org/)，[Vue Router](https://github.com/vuejs/vue-router) 和 [webpack](http://webpack.js.org/) 制作的 SPA。如果你以前使用过 Vue，那么在编写或开发自定义主题时（甚至可以使用 Vue DevTools 来调试你的自定义主题！），你会感受到熟悉的开发经验！

在构建过程中，我们创建应用程序的服务器渲染版本，并通过虚拟访问每条路线来渲染相应的 HTML。这种方式受到 [Nuxt](https://nuxtjs.org/) 的 `nuxt generate` 命令以及 [Gatsby](https://www.gatsbyjs.org/) 等其他项目的启发。

每个 markdown 文件都使用 [markdown-it](https://github.com/markdown-it/markdown-it) 编译为 HTML，然后作为 Vue 组件的模板进行处理。这允许你直接在 markdown 文件中使用 Vue，并且在需要嵌入动态内容时非常有用。

## 特性（Features）

- 针对技术文档进行了优化的 [内置 markdown 扩展](./markdown.md)
- [能够利用内嵌在 markdown 文件中的 Vue 代码](./using-vue.md)
- [以 Vue 为动力的自定义主题系统](./custom-themes.md)
- 支持 PWA
- Google Analytics 集成
- 一个默认主题：
  - 响应式布局
  - 可选的主页
  - 简单的现成基于标题的搜索功能
  - 可定制的导航栏和边栏
  - 自动生成的 GitHub 链接和页面编辑链接

## Todo 特性

VuePress仍在进行中。有几件事目前不支持但计划做：

- 在 Navbar 中能够下拉项
- 多语言支持
- Algolia DocSearch 集成
- 博客支持

欢迎贡献！

## 为什么不是 ...？（Why Not ...?）

### Nuxt

Nuxt 能够做 VuePress 的工作，但它是为构建应用程序而设计的。VuePress 专注于以内容为中心的静态网站，并为开箱即用的技术文档提供量身定制的功能。

### Docsify / Docute

两者都是伟大的项目，也是 Vue 驱动的。但它们都是完全运行时驱动的，因此不适合 SEO 优化。如果你不关心 SEO 优化，也不想被安装依赖关系扰乱心神，这些仍然是不错的选择。

### Hexo

Hexo 一直在为 Vue 文档提供服务 - 事实上，我们可能还有很长的路要走，从我们的主站点迁移出去。最大的问题是它的主题系统非常静态且基于字符串 - 我们真的想要利用 Vue 来实现布局和交互。此外，Hexo 的 markdown 渲染不是最灵活的配置。
