module.exports = {
  description: "神州数码云基地前端",
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
    lastUpdated: "Last Updated",
    repo: "digitalchina-frontend/digitalchina-frontend.github.io",
    repoLabel: "GitHub",
    docsRepo: "digitalchina-frontend/digitalchina-frontend.github.io",
    docsDir: "docs",
    docsBranch: "main",
    editLinks: true,
    editLinkText: "帮助我们改善此页面！",
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
