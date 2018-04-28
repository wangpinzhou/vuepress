# 部署

以下指南基于几个共同的假设：

- 将文档放置在项目的 `docs` 目录中；
- 使用默认的构建输出位置（`.vuepress/dist`）。
- VuePress 是在项目本地的依赖中安装的，并且配置如下的 npm scripts:

``` json
{
  "scripts": {
    "docs:build": "vuepress build docs"
  }
}
```

## GitHub 页面

1. 在 `docs/.vuepress/config.js` 中设置正确的 `base`。

   如果你想要部署到 `https://<USERNAME>.github.io/`，则可以省略设置 `base`，因为它默认是 "/"。

   如果你想要部署到 `https://<USERNAME>.github.io/<REPO>/`（，也就是说你的仓库位于 `https://github.com/<USERNAME>/REPO>`），将 `base` 设置为 `"/<REPO>/"`。

2. 在项目中创建 `deploy.sh`，并写入如下内容（根据自己项目的情况，取消高亮行的注释），然后在部署时执行此 shell 脚本：

``` bash{13,20,23}
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 构建
npm run docs:build

# 进入到构建输出目录
cd docs/.vuepress/dist

# 如果你是要部署到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果你想要部署到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果你想要部署到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
```

::: tip 提示
还可以通过 CI 配置，执行以上脚本，以启用在每次推送时的自动部署。
:::

## GitLab pages 和 GitLab CI

1. 在 `docs/.vuepress/config.js` 中设置正确的 `base`。

   如果你想要部署到 `https://<USERNAME or GROUP>.gitlab.io/`，则可以省略设置 `base`，因为它默认是 "/"。

   如果你想要部署到 `https://<USERNAME or GROUP>.gitlab.io/<REPO>/`（，也就是说你的仓库位于 `https://gitlab.com/<USERNAME>/REPO>`），将 `base` 设置为 `"/<REPO>/"`。

2. 将 `.vuepress/config.js` 中的 `dest` 设置为 `public`。

3. 在项目的根目录下，创建一个 `.gitlab-ci.yml` 文件，并写入如下内容。在内容变更之后，GitLab CI 会立刻去构建和部署你的网站。

```
image: node:9.11.1

pages:
  cache:
    paths:
    - node_modules/

  script:
  - npm install
  - npm run docs:build
  artifacts:
    paths:
    - public
  only:
  - master
```


## Netlify

1. 在 Netlify 中, 从 GitHub 创建一个新项目，使用以下设置：

  - **构建命令：** `npm run docs:build` or `yarn docs:build`
  - **发布目录：** `docs/.vuepress/dist`

2. 点击部署按钮！

## Google Firebase

1. 请确保你已经安装了 [firebase-tools](https://www.npmjs.com/package/firebase-tools)。

2. 在项目的根目录下，创建 `firebase.json` 和 `.firebaserc` 文件，并写入如下内容：

   `firebase.json`:
   ```json
   {
     "hosting": {
       "public": "./docs/.vuepress/dist",
       "ignore": []
     }
   }
   ```

   `.firebaserc`:
   ```js
   {
     "projects": {
       "default": "<YOUR_FIREBASE_ID>"
     }
   }
   ```

3. 在执行  `yarn docs:build`  或 `npm run docs:build` 之后, 使用 `firebase deploy` 指令进行部署。

***

> 原文：[https://vuepress.vuejs.org/guide/deploy.html](https://vuepress.vuejs.org/guide/deploy.html)

***
