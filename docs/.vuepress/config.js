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
      { text: "React", link: "/react/" },
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
