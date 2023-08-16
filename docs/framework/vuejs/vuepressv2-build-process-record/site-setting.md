# 站点配置

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
