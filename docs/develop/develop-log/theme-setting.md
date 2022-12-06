# 主题配置

## 配置 Logo
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

### 深色主题 Logo
```js{4}
  },
  theme: defaultTheme({
    logo: 'images/logo.png',
    logoDark: 'images/logo-dark.gif',
    locales: {
      '/': {
        // navbar
```

## 添加 “在 GitHub 上编辑此页” 链接
```js{4,5}
  theme: defaultTheme({
    logo: 'images/logo.png',
    logoDark: 'images/logo-dark.gif',
    repo: 'digitalchina-frontend/digitalchina-frontend.github.io',
    docsDir: 'docs',
    locales: {
      '/': {
        // navbar
```
