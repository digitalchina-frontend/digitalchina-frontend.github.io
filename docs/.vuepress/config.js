import { defaultTheme, defineUserConfig } from 'vuepress'
import { navbarZh, navbarEn, sidebarZh, sidebarEn } from './configs/index.js'

export default defineUserConfig({
  locales: {
    '/': {
      lang: 'zh-CN',
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
    logoDark: 'images/logo-dark.gif',
    repo: 'digitalchina-frontend/digitalchina-frontend.github.io',
    docsDir: 'docs',
    locales: {
      '/': {
        // navbar
        navbar: navbarZh,
        // sidebar
        sidebar: sidebarZh,
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
        // navbar
        navbar: navbarEn,
        // sidebar
        sidebar: sidebarEn,
        selectLanguageName: 'English',
        // page meta
        editLinkText: 'Edit this page on GitHub',
      },
    },
  }),
})
