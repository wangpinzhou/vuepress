# markdown 扩展

## 标题锚点(header anchors)

标题会自动获取锚点链接。可以使用 [`markdown.anchor`](../config/#markdownanchor) 选项来配置锚点的渲染。

## 链接(links)

### 内部链接(internal links)

以 `.md` 或 `.html` 结尾的内部链接，会被转换为 `<router-link>`，用于单页面应用程序(SPA)导航。

静态网站的每个子目录都应该包含一个 `README.md`。这个文件会自动转换为 `index.html`。

::: tip 提示
在编写「链接到某个目录下 `index.html`」的相对路径时，不要忘记在结尾用 `/` 闭合，否则你将得到一个 404。例如，使用 `/config/` 而不是 `/config`。
:::

如果你想要链接到另一个 markdown 文件，记得：

1.  在链接后面添加 `.html` 或 `.md`
2.  确保大小写对应正确，因为路径匹配是区分大小写的

#### 示例

给定以下目录结构：

```
.
├─ README.md
├─ foo
│  ├─ README.md
│  ├─ one.md
│  └─ two.md
└─ bar
   ├─ README.md
   ├─ three.md
   └─ four.md
```

```md
[Home](/) <!-- 将根目录下的 README.md 发送给用户 -->
[foo](/foo/) <!-- 将 foo 目录下的 README.md 发送给用户 -->
[foo 标题锚点](/foo/#heading) <!-- 跳转到 foo 目录下的 README.md 文件中的特定锚点位置 -->
[foo - one](/foo/one.html) <!-- 追加 .html -->
[foo - two](/foo/two.md) <!-- 或者追加 .md -->
```

### 外部链接(external links)

外部链接会被自动地设置为 `target="_blank"`：

- [vuejs.org](https://vuejs.org)
- [VuePress on GitHub](https://github.com/vuejs/vuepress)

## front matter

提供开箱即用的 [YAML front matter](https://jekyllrb.com/docs/frontmatter/)：

``` yaml
---
title: Blogging Like a Hacker
lang: en-US
---
```

数据在页面的其余部分也可以使用，包括所有自定义和主题组件，通过 `$page` 访问。

`title` 和 `lang` 会在当前页面自动设置。另外，你可以指定额外的 meta 标签进行注入：

``` yaml
---
meta:
  - name: description
    content: hello
  - name: keywords
    content: super duper SEO
---
```

### 其他格式的 front matter

除了 YAML 之外，VuePress 也支持 JSON 或者 [TOML](https://github.com/toml-lang/toml) 格式的 front matter。

JSON 格式的 front matter 需要以花括号开头和结尾：

```
---
{
  "title": "Blogging Like a Hacker",
  "lang": "en-US"
}
---
```

TOML 格式的 front matter 需要显式标注出是 TOML：

```
---toml
title = "Blogging Like a Hacker"
lang = "en-US"
---
```

## GitHub 风格的表格

**输入**

```
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
```

**输出**

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

## Emoji :tada:

**输入**

```
:tada: :100:
```

**输出**

:tada: :100:

可以在 [这里](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json) 查看所有可用的 emoji 列表。

## 目录(table of contents)

**输入**

```
[[toc]]
```

**输出**

[[toc]]

可以使用 [`markdown.toc`](../config/#markdowntoc) 选项，来配置目录(table of contents - TOC)的渲染。

## 自定义容器(custom containers)

**输入**

```
::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::
```

**输出**

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous thing
:::

你还可以自定义块的标题：

```
::: danger STOP
Danger zone, do not proceed
:::
```

::: danger STOP
Danger zone, do not proceed
:::

## 在代码块中高亮显示行(line highlighting in code blocks)

**输入**

````
``` js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**输出**

``` js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## 高级配置(advanced configuration)

VuePress 使用 [markdown-it](https://github.com/markdown-it/markdown-it)作为 markdwon 渲染器。上面的许多扩展都是通过定制插件实现的。你可以使用 `.vuepress/config.js` 中的 `markdown` 选项进一步自定义 `markdown-it` 实例：

``` js
module.exports = {
  markdown: {
    // markdown-it-anchor 的选项
    anchor: { permalink: false },
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2] },
    config: md => {
      // 使用更多 markdown-it 插件！
      md.use(require('markdown-it-xxx'))
    }
  }
}
```

***

> 原文：[https://vuepress.vuejs.org/guide/markdown.html](https://vuepress.vuejs.org/guide/markdown.html)

***
