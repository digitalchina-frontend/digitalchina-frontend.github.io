---
sidebar: auto
---

# 前端网站目录结构规范

## 目录结构介绍

基于 [VuePress V2 的目录结构](https://v2.vuepress.vuejs.org/zh/guide/page.html) 扩展，前端网站的文档目录结构如下：

```text
└─ docs
  ├─design // 设计类文章
  │  ├─TECHNOLOGY-STACK-NAME // 技术栈名称，比如 `figma`
  │  │      README.md
  ├─develop // 研发类文章
  │  ├─TECHNOLOGY-STACK-NAME
  │  │      README.md
  └─en // 文档英文版，下级目录结构与 `docs` 下级结构一致
  │    ├─README.md // 英文版网站首页
  │    ├─design
  │    └─develop
  └─README.md // 网站首页
```

## 目录结构规范

### 一级目录

一级目录数量不能太多，暂定为：`design`、`develop`，如果有其他类型文章可以提 [issue](https://github.com/digitalchina-frontend/digitalchina-frontend.github.io/issues/new) 进行提案。

### 二级目录

二级目录为所属技术栈名称，目录名称全小写，全部技术栈参考 [egghead topics](https://egghead.io/topics)，格式为 `kebab-case`，比如所属技术栈为 Vue.js 的文章应该放在 `vuejs` 目录下，同时属于 Babel 和 Gatsby 的文章应该放在 `babel-gatsby` 目录下，目录不存在应该创建目录。

### 三级目录

三级目录为具体文章主题，格式为 `kebab-case`，文章可以是单篇，可以是系列；如果是单篇文章，目录下 `README.md` 即为文章内容，如果为系列文章，目录下 `README.md` 为系列介绍，也可以不提供 `README.md` 文件，系列文章需要参考 [sidebar](https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#sidebar) 配置侧边栏导航；不论是单篇还是系列文章，都需要参考 [navbar](https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#navbar) 配置头部导航栏。
