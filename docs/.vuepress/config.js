module.exports = {
  serviceWorker: true,
  locales: {
    "/": {
      lang: "zh-CN",
      title: "现代前端开发指南",
      description: "大道至简，让前端开发更简单",
    },
  },
  head: [],
  themeConfig: {
    logo: "/assets/img/logo.png",
    nav: [
      { text: "Home", link: "/" },
      {
        text: "UI/UX",
        link: "/uiux/",
      },
      {
        text: "Javascript",
        link: "/javascript/",
      },
      {
        text: "H5/CSS",
        items: [
          {
            text: "H5",
            link: "/h5/",
          },
          {
            text: "CSS3",
            link: "/css3/",
          },
        ],
      },
      {
        text: "技术栈",
        items: [
          {
            text: "React",
            link: "/react/",
          },
          {
            text: "Vue",
            link: "/vue2/",
          },
          {
            text: "Vue3",
            link: "/vue3/",
          },
          {
            text: "Node",
            link: "/node/",
          },
        ],
      },
      {
        text: "More",
        items: [
          {
            text: "子站点",
            items: [
              {
                text: "Tailwind",
                link: "https://digitalchina-frontend.github.io/tailwind/",
              },
              {
                text: "Data Vis",
                link: "https://digitalchina-frontend.github.io/2d/",
              },
            ],
          },
          {
            text: "更多",
            items: [
              {
                text: "Retina",
                link: "/more/retina-display",
              },
              {
                text: "Buffet",
                link: "/more/buffet",
              },
              {
                text: "VuePress",
                link: "/more/vuepress",
              },
            ],
          },
        ],
      },
    ],
    sidebar: {
      "/javascript/": [""],
      "/react/": ["", "mobile-h5"],
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
    require("./plugins/contributors"),
  ],
};
