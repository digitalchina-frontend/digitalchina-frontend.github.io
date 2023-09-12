---
sidebar: auto
---

# 基于 Vue-Grid-Layout 的拖拽布局方案

## 业务场景

用户可以对页面上的内容进行**拖拽**、**调整大小**等操作，从而对页面进行自定义布局。

**如下所示：**

<iframe src="https://codesandbox.io/embed/vue-grid-layout-vue2-x38xpy?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vue-grid-layout-vue2"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## Vue-Grid-Layout 是什么？

[Vue-Grid-Layout](https://jbaysolutions.github.io/vue-grid-layout/)就是一款可以实现上述需求的拖拽布局组件，它基于 [Gridster](http://dsmorse.github.io/gridster.js/) 做了二次开发，支持拖拽、缩放、响应式布局等。

## 如何使用？

### 安装

```bash
npm install vue-grid-layout --save
# or
yarn add vue-grid-layout
```

### 使用

非常简单，一个容器组件，一个元素组件,容器组件主要负责布局，元素组件负责展示你想填充的内容。

```vue
<template>
 <grid-layout>
    <grid-item></grid-item>
  </grid-layout>
</template>
<script>
import { GridLayout, GridItem } from "vue-grid-layout";
```

注：上述只是核心伪代码，[完整的基本代码](#section)

注：你现在已经会用了，如果你想了解更多，请继续往下看。

---

## 了解更多

### 两个概念

**容器组件**: GridLayout 有一个重要的属性 layout

- layout 是个数组
- 数组每一项决定着元素组件在容器中的布局
- 数组和元素组件一一对应

**元素组件**: 填充想要显示的内容到元素组件中即可。

注：数组项的字段的含义：

```ts
{
  i: string // id
  x: number // x-axis,
  y: number // y-axis,
  w: number // width,
  h: number // height
  static: boolean //  won't be draggable, resizable or moved by other items
  // 其他自定义属性
}
```

注：元素组件的属性配置：

[参考官网 GridLayout](https://jbaysolutions.github.io/vue-grid-layout/guide/properties.html#gridlayout)

[参考官网 GridLayout-Item](https://jbaysolutions.github.io/vue-grid-layout/guide/properties.html#griditem)

<img src="https://i.imgur.com/epLzkhl.png" alt="请打开代理访问" style="zoom: 40%;" />

### 扩展配置

`可调整大小`

```vue
<grid-layout :isResizable="true" :layout.sync="layout" :col-num="12" <grid-item>...</grid-item>   
>
</grid-layout>
```

`支持可拖拽`

```vue
<grid-layout :is-draggable="true" :layout.sync="layout" :col-num="12" <grid-item>...</grid-item>   
>
</grid-layout>
```

`支持响应式`

```vue
<grid-layout
  :responsive="true"
  :responsiveLayouts="{ lg: [...layout] }"
  :breakpoints="breakpoints"
  :cols="cols"
  :layout.sync="layout"
  :col-num="12"
  <grid-item
>...</grid-item>   
>
</grid-layout>
```

<a id="section"></a>

## 完整的基本代码

```vue
<template>
  <grid-layout :layout.sync="layout">
    <grid-item
      v-for="item in layout"
      :key="item.i"
      :x="item.x"
      :y="item.y"
      :w="item.w"
      :h="item.h"
      :i="item.i"
    >
      12321
    </grid-item>
  </grid-layout>
</template>

<script>
import { GridLayout, GridItem } from 'vue-grid-layout'

export default {
  components: { GridLayout, GridItem },
  data() {
    return {
      layout: [
        { x: 0, y: 0, w: 3, h: 2, i: '1', static: false },
        { x: 6, y: 0, w: 3, h: 2, i: '2', static: false },
      ],
    }
  },
}
</script>
```
