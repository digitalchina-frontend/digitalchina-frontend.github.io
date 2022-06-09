module.exports = {
  description: "神州数码前端技术组",
  serviceWorker: true,
  themeConfig: {
    logo: "/assets/img/logo.png",
    nav: [
      {
        text: "Web Console",
        link: "/console/",
      },
      {
        text: "Tailwind",
        link: "https://digitalchina-frontend.github.io/tailwind/",
      },
      { text: "Odoo", link: "/odoo/" },
      {
        text: "Data Vis",
        link: "https://digitalchina-frontend.github.io/2d/",
      },
      {
        text: "Others",
        link: "/others/",
      },
    ],
    sidebar: {
      "/console/": ["", "dev-env", "git", "stack", "ui-lib", "framework"],
      "/others/": ["", "vuepress"],
    },
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
