import { defineUserConfig } from 'vuepress'
import { DcTheme } from './theme'
import { navbarZh, navbarEn, sidebarZh, sidebarEn } from './configs/index.js'

export default defineUserConfig({
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '现代前端开发指南',
      description: '大道至简，让前端开发更简单',
    },
  },
  theme: DcTheme({
    // options
  }),
})
