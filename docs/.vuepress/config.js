module.exports = {
  title: "神码前端",
  description: "神州数码前端技术组",
  themeConfig: {
    sidebar: "auto",
    sidebarDepth: 2,
    nav: [
      { text: "设计系统", link: "/designsys/" },
      { text: "Odoo", link: "/odoo/" },
      { text: "React", link: "/react/" },
      { text: "Vue", link: "/vue/" },
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
