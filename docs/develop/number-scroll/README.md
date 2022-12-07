# 使用 GSAP 实现数字滚动特效

## 介绍

在阅读完本文后，您将：

- 对实现数字滚动特效的实现思路有基本的了解。
- 对 `GSAP` 的用途和常用 `API` 有基本的了解。
- 对如何设计并实现一个 `React` 组件的流程有基本的了解。

## 背景知识

本文旨在让初级前端开发人员能够使用 [GSAP（The GreenSock Animation Platform）](https://greensock.com/) 替代 [CSS Animation](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Animations/Using_CSS_animations) 实现一些简单的特效以获得更优的开发体验和性能表现，并尽可能减少学习成本。

本文以开发一个数字滚动组件的形式对特效开发的步骤进行演示，组件基于 `React` 和 `GSAP` 实现，并附上了关键部分的代码。

如果您是初次听说 `React` 或 `GSAP` 的新手，先学习一些基础知识会有所帮助。

- `React`: 一个用于构建用户界面的代码库。`React` 组件就像是一个自定义、可重用的 `HTML` 元素一样，能够帮助开发者快速有效地构建用户界面。

  - 通过 [React course on freeCodeCamp](https://www.freecodecamp.org/learn/front-end-development-libraries/#react) 了解有关 `React` 的更多信息。

- `GSAP`：一个业界知名的动画平台，你可以使用 `GSAP` 为 `JavaScript` 可以触及的几乎所有内容制作动画，无论您是想要为 `UI`、`SVG`、`Three.js` 还是 `React` 组件制作动画，`GSA​​P` 都能满足您的需求。
  - 通过 [Getting Started with GSAP](https://greensock.com/get-started/) 了解有关 `GSAP` 的更多信息。

## 目标效果

![demo](/images/number-scroll/demo.gif)

[![Edit demo-number-scroll](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/demo-number-scroll-73w3s2?fontsize=14&hidenavigation=1&theme=dark)
