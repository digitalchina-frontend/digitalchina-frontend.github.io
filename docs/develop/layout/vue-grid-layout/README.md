---
sidebar: auto
---

# Vue Grid Layout

一个类似 [Gridster](http://dsmorse.github.io/gridster.js/), 的 Vue.js 的栅格布局系统, 支持拖拽,响应式布局等

[官方文档](https://jbaysolutions.github.io/vue-grid-layout/)

## 概览

<iframe src="https://codesandbox.io/embed/vue-grid-layout-vue2-x38xpy?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vue-grid-layout-vue2"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## 环境说明

- node: v16.14.0
- yarn: 1.22.19
- vue2

## 快速开始

### 安装依赖

**包管理**

```bash
npm install vue-grid-layout --save
# or
yarn add vue-grid-layout
```

**cdn**

```html
<script src="https://cdn.jsdelivr.net/npm/vue-grid-layout@2.4.0/dist/vue-grid-layout.umd.min.js"></script>

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/vue-grid-layout@2.4.0/public/app.min.css"
/>
```

### 基本使用

<iframe src="https://codesandbox.io/embed/vue-grid-layout-vue2-base-v523nf?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vue-grid-layout-vue2-base"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

### Resizable

`可调整大小`

```vue
<grid-layout :isResizable="true" :layout.sync="layout" :col-num="12" <grid-item>...</grid-item>   
>
</grid-layout>
```

### Draggable

`支持可拖拽`

```vue
<grid-layout :is-draggable="true" :layout.sync="layout" :col-num="12" <grid-item>...</grid-item>   
>
</grid-layout>
```

### Responsive

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

## 重要属性配置

### GridLayout

[参考官网](https://jbaysolutions.github.io/vue-grid-layout/guide/properties.html#gridlayout)

#### layout

`layout`： initial layout of the grid, must be an `Array`, Each item must have `i`, `x`, `y`, `w` and `h` properties.

```ts
interface LayoutItemProps {
    i: string; // just like id(identity)
	x: number; // x-axis,
    y: number; // y-axis,
    w: number; // width,
    h: number; // height
    static: boolean; //  won't be draggable, resizable or moved by other items
    ...
}
const layout: LayoutItemProps[] | [] = []
```

<img src="https://i.imgur.com/epLzkhl.png" alt="请打开代理访问" style="zoom: 50%;" />

#### margin

`:margin="[10, 10]": 分别为水平间距和垂直间距`


#### 响应式


| key               | type    | default                                         | specification                                           |
| ----------------- | ------- | ----------------------------------------------- | ------------------------------------------------------- |
| responsive        | boolean | false                                           | Says if the layout should be responsive to window width |
| breakpoints       | object  | { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 } | Defines each breakpoint                                 |
| responsiveLayouts | object  | { lg: [layout items], md:[layout items] }       | Defines layout for each breakpoint                      |
| cols              | object  | { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }        | Defines number of columns for each breakpoint           |

### GridItem

[参考官网](https://jbaysolutions.github.io/vue-grid-layout/guide/properties.html#griditem)
