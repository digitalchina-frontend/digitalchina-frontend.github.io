---
sidebar: auto
---

# Vue Grid Layout

一个类似 [Gridster](http://dsmorse.github.io/gridster.js/), 的 Vue.js 的栅格布局系统, 支持拖拽,响应式布局等

[官方文档](https://jbaysolutions.github.io/vue-grid-layout/)

[CodeSandbox](https://codesandbox.io/s/vue-starter-forked-x38xpy?file=/src/App.vue)

## 环境说明

- node: v16.14.0
- yarn: 1.22.19
- vue2

## 快速上手

### 安装

```bash
npm install vue-grid-layout --save
# or
yarn add vue-grid-layout
# or
# cdn link <script src="*/**vue-grid-layout.umd.min.js"></script>
```

### 使用

```vue
<template>
  <grid-layout :layout="layout" {...options}>
    <grid-item></grid-item>
  </grid-layout>
</template>

<script>
import {GridLayout, GridItem} from 'vue-grid-layout';
export default {
 data() {
     return {
         layout: [{...}]
     }
 }
};
</script>
```

## GridLayout 属性配置

[参考](https://jbaysolutions.github.io/vue-grid-layout/guide/properties.html#gridlayout)

`layout`： initial layout of the grid, must be an `Array`, Each item must have `i`, `x`, `y`, `w` and `h` properties.

```ts
interface LayoutItemProps {
    i: string; // just like id(identity)
	x: number; // x-axis,
    x: number; // y-axis,
    w: number; // width,
    h: number; // height
    ...
}
const layout: LayoutItemProps[] | [] = []
```

<img src="D:\md\vue-grid-layout.image\axis.jpg" alt="axis" style="zoom: 50%;" />

### 响应式相关属性

| key               | type    | default                                         | specification                                           |
| ----------------- | ------- | ----------------------------------------------- | ------------------------------------------------------- |
| responsive        | boolean | false                                           | Says if the layout should be responsive to window width |
| breakpoints       | object  | { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 } | Defines each breakpoint                                 |
| responsiveLayouts | object  | { lg: [layout items], md:[layout items] }       | Defines layout for each breakpoint                      |
| cols              | object  | { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }        | Defines number of columns for each breakpoint           |

## GridItem 属性配置

[参考](https://jbaysolutions.github.io/vue-grid-layout/guide/properties.html#griditem)
