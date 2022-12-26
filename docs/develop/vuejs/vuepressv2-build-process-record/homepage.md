# 首页配置

## 介绍

VuePress 的默认主题提供了一套主题模板，可以通过在 Markdown 文件顶部配置 [YAML](https://yaml.org/) Frontmatter 指明该页面为主页以应用主题模板：

```md
---
home: true
---
```

首页中可以配置的 Frontmatter API 可以参考 [Frontmatter 首页](https://v2.vuepress.vuejs.org/zh/reference/default-theme/frontmatter.html#%E9%A6%96%E9%A1%B5)，除了 Frontmatter 外的 Markdown 内容会被渲染至主题模板之后。

## 已配置的 Frontmatter

```md
---
home: true
title: Home
heroImage: /images/home.avif
actions:
  - text: 开始
    link: /develop/develop-log/
    type: primary
features:
  - title: 疾如风
    details: 熟练掌握开发工具 比如 VsCode, Git; 熟练掌握前端技术栈 比如 HTML, CSS, JavaScript; 熟练掌握开发技术栈 比如 Vue, React; 交付快如闪电;
  - title: 徐如林
    details: 开发标准化，规范化，3人一组，15人一群，协同开发步调一致;
  - title: 不动如山
    details: JQ, React, Vue 万变不离其宗，抓住前端本质， 一套思路 各类项目
footer: Copyright © 2016 - 2022 Digitalchina. All Rights Reserved. 神州数码集团股份有限公司 版权所有。
---
```
