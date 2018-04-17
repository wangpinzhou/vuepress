# 配置

## 配置文件(config file)

不做任何配置的话，页面会显得过于简单，用户也无法方便地浏览网站。想要定制你的网站，首先需要在文档目录中创建一个 `.vuepress` 目录。这是放置所有 VuePress 特有(VuePress-specific) 文件的地方。

配置 VuePress 站点的基本文件是 `.vuepress/config.js`，其中导出一个 JavaScript 对象：

``` js
module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around'
}
```

如果开发服务器正常运行，你应该看到该页面现在有一个 title 标题和一个搜索框。VuePress 带有内置的 基于 header 搜索(headers-based search) 的功能 - 它会自动从所有页面的 title, `h2` 和 `h3` header 标签中，建立一个简单的搜索索引。（译者注：此搜索是遍历 pages 数组的每一项，取出其中的 headers 数组，其中数组每项对应 markdown 标题，具体代码查看 /lib/default-theme/SearchBox.vue 的 suggestions 函数）

请查阅 [配置参考](../config/) 以获取完整的选项列表。

## 主题配置(theme configuration)

VuePress 主题，负责网站的所有布局和交互细节。VuePress 附带一个默认主题（你现在看到的就是），专门为技术文档设计。它暴露许多选项，允许你自定义导航栏(navbar)、侧边栏(sidebar)和主页(homepage)等。详细信息请查看 [默认主题配置](../default-theme-config/) 页面。

如果你想开发自定义主题，请参考 [自定义主题](./custom-themes.md)。

## 应用程序级别增强(app level enhancements)

Since the VuePress app is a standard Vue app, you can apply app-level enhancements by creating a file `.vuepress/enhanceApp.js`, which will be imported into the app if it is present. The file should `export default` a hook function which will receive an object containing some app level values. You can use this hook to install additional Vue plugins, register global components, or add additional router hooks:

``` js
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router // the router instance for the app
}) => {
  // ...apply enhancements to the app
}
```

***

> 原文：[https://vuepress.vuejs.org/guide/basic-config.html](https://vuepress.vuejs.org/guide/basic-config.html)

***
