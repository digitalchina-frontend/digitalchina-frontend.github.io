# VuePress V2 搭建过程记录

## 快速上手

1. 安装

```bash
yarn init
yarn add -D vuepress@next
```

2. 添加脚本

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

3. 用 `vue` 的 [模板](https://erresen.github.io/vue/js/git/2020/07/08/vue-js-gitigore.html) 添加一个 `.gitignore` 文件，额外为 `VuePress` 添加以下内容：

```
# VuePress
.temp
.cache
```

4. 创建文档目录 `/docs` 用于存放文档内容，此为 `VuePress` 文档根目录

5. 创建并提交第一篇文档 `/docs/README.md`，由于直接存放到了文档根目录下，对应路由为 `/`

## 配置

1. 创建目录 `/docs/.vuepress`，目录名称是 `VuePress` 的约定，用于存放网站本身相关的文件
2. 在 `.vuepress` 目录下创建配置文件 `config.js`，配置文件名称也是 `VuePress` 的约定
3. 配置网站标题等内容
```js
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '现代前端开发指南',
      description: '大道至简，让前端开发更简单',
    },
  },
})
```
4. 配置 Logo
```js{1,11-13}
import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '现代前端开发指南',
      description: '大道至简，让前端开发更简单',
    },
  },
  theme: defaultTheme({
    logo: 'images/logo.png',
  }),
})
```
5. 支持多语言，`config.locales` 配置中的 `/en/` 是用于匹配路由以判断当前页面适用哪种语言，`config.theme.locales` 中的 `/en/` 则是对选择语言下拉框跳转链接的配置
```js{4-9,13-44}
      title: '现代前端开发指南',
      description: '大道至简，让前端开发更简单',
    },
    '/en/': {
      lang: 'en-US',
      title: 'A Guide to Modern Front-End Development',
      description:
        'From the road to simplicity, making front-end development easier',
    },
  },
  theme: defaultTheme({
    logo: 'images/logo.png',
    locales: {
      '/': {
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',
        // page meta
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',
        // custom containers
        tip: '提示',
        warning: '注意',
        danger: '警告',
        // 404 page
        notFound: [
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',
        // a11y
        openInNewWindow: '在新窗口打开',
        toggleColorMode: '切换颜色模式',
        toggleSidebar: '切换侧边栏',
      },
      '/en/': {
        selectLanguageName: 'English',
        // page meta
        editLinkText: 'Edit this page on GitHub',
      },
    },
  }),
})
```
6. 在 `.vuepress` 目录下创建目录 `configs` 用于存放 `navbar` 、`sidebar`、`meta` 等配置

7. 接着在 `configs` 目录下创建目录 `navbar`，用于存放多语言的 navbar 配置，配置参考 [navbar](https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#navbar)
```js
// configs/navbar/zh.js
export const navbarZh = [
  {
    text: '设计',
    children: [],
  },
  {
    text: '开发',
    children: [
      {
        text: 'VuePress V2 搭建过程记录',
        link: '/develop/develop-log.md',
      },
    ],
  },
]
```
8. 在配置文件 `config.js` 中引入 `navbar` 配置：
```js{1,8,12}
import { navbarZh, navbarEn } from './configs/index.js'

  theme: defaultTheme({
    logo: 'images/logo.png',
    locales: {
      '/': {
        selectLanguageName: '简体中文',
        navbar: navbarZh,
      },
      '/en/': {
        selectLanguageName: 'English',
        navbar: navbarEn,
      },
    },
  }),
```