module.exports = {
  title: "神码前端",
  description: "什么前端?",
  themeConfig: {
    sidebar: "auto",
    sidebarDepth: 2,
    nav: [
      { text: "Home", link: "/" },
      { text: "Odoo", link: "/odoo/" },
      { text: "React", link: "/react/" },
      { text: "Vue", link: "/vue/" },
      { text: "Vue3", link: "/vue3/" },
    ],
    plugins: [
      [
        "@vuepress/google-analytics",
        {
          ga: "UA-226963490-2",
        },
      ],
    ],
  },
};
