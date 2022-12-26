# 导航配置

## navbar

1. 在 `.vuepress` 目录下创建目录 `configs` 用于存放 `navbar` 、`sidebar`、`meta` 等配置

2. 接着在 `configs` 目录下创建目录 `navbar`，用于存放多语言的 navbar 配置，配置参考 [navbar](https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#navbar)

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

3. 在配置文件 `config.js` 中引入 `navbar` 配置：

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

## sidebar

1. 在 `configs` 目录下创建目录 `sidebar`，用于存放多语言的 sidebar 配置，配置参考 [sidebar](https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#sidebar)

```js
export const sidebarZh = {
  '/develop/develop-log': [
    {
      text: 'VuePress V2 搭建过程记录',
      children: ['/develop/develop-log/quick-start.md', '/develop/develop-log/setting.md'],
    },
  ],
}
```

2. 在配置文件 `config.js` 中引入 `sidebar` 配置：

```js{1,6-7,10-11}
import { navbarZh, navbarEn, sidebarZh, sidebarEn } from './configs/index.js'

  theme: defaultTheme({
    locales: {
      '/': {
        // sidebar
        sidebar: sidebarZh,
      },
      '/en/': {
        // sidebar
        sidebar: sidebarEn,
      },
    },
  }),
```
