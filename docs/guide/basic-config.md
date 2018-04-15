# 配置

## 配置文件（Config File）

没有任何配置的话，页面会非常小，用户也无法方便地浏览网站。要定制你的网站，首先需要在你的文档目录中创建一个 `.vuepress` 目录。这是所有 VuePress 特定文件将被放入的地方。

配置 VuePress 站点的基本文件是 `.vuepress/config.js`，它应该导出一个 JavaScript 对象：

``` js
module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around'
}
```

如果你有开发服务器在运行，你应该看到该页面现在有一个标题和一个搜索框。VuePress 带有内置的基于标题的搜索功能 - 它会自动从所有页面的标题，`h2` 和 `h3` 标题中建立一个简单的搜索索引。

请查阅[配置参考](../config/)以获取完整的选项列表。

## 主题配置（Theme Configuration）

VuePress 主题负责你网站的所有布局和交互细节。VuePress 附带一个默认主题（你现在正在查看的），它是专门为技术文档设计的。它公开了许多选项，且允许你自定义导航栏，侧边栏和主页等。有关详细信息，请查看[默认主题配置](../default-theme-config/)页面。

如果你想开发自定义主题，请参考[自定义主题](./custom-themes.md)。
