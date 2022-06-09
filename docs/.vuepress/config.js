module.exports = {
  description: "神州数码前端技术组",
  serviceWorker: true,
  themeConfig: {
    logo: "/assets/img/logo.png",
    sidebar: "auto",
    sidebarDepth: 2,
    nav: [
      {
        text: "Tailwind",
        link: "https://digitalchina-frontend.github.io/tailwind/",
      },
      { text: "Odoo", link: "/odoo/" },
      { text: "Web Console", link: "/console/" },
      {
        text: "Data Vis",
        link: "https://digitalchina-frontend.github.io/2d/",
      },
      {
        text: "Others",
        link: "/others/",
        items: [{ text: "Vue Press", link: "/others/vuepress/" }],
      },
    ],
    lastUpdated: "Last Updated", // string | boolean
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
