module.exports = {
  description: "神州数码前端技术组",
  serviceWorker: true,
  themeConfig: {
    logo: "/assets/img/logo.png",
    sidebar: "auto",
    sidebarDepth: 2,
    nav: [
      { text: "设计系统", link: "/designsys/" },
      { text: "Odoo", link: "/odoo/" },
      { 
        text: "React", 
        link: "/react/",
        items: [{ text: "使用 React-Grid-Layout 来实现响应式布局", link: "/react/react-grid-layout/"}],
      },
      {
        text: "Vue",
        link: "/vue/",
        items: [{ text: "Vue Press", link: "/vue/vuepress/" }],
      },
      { text: "Others", link: "/others/" },
    ],
  },
  plugins: [
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-226963490-2",
      },
    ],
  ],
};
