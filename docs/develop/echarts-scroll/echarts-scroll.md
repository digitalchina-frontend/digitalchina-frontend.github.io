# Echart 柱状图大量数据实现滚动条的两种方式

## 问题

使用 Echarts 图表库时，例如柱状图，如果数据量过大，往往会发生柱体过细或者坐标轴文会显示不全或者互相遮盖，用户体验感很不好，可选择将其更改为带有滚动条的柱状图来解决这个困扰。那么 Echarts 柱状图如何实现滚动条呢？

## 实现

### 实现 1：dataZoom

在`option`配置项中使用 Echarts 提供的`dataZoom`配置项，实现缩放滚动。

> 详细介绍见[Echarts 官方配置项](https://echarts.apache.org/zh/option.html#dataZoom)

```ts
    option = {
        ...
        dataZoom: [{
                type: 'slider',
                show: true,
                xAxisIndex: [0],
                start: 0,
                end: 50,
            }]
        ...
    }
```

[![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/dataset-in-object-array-forked-n4e55y?file=/index.js)

### 实现 2：overflow

> 详细介绍见[Echarts 官方 API](https://echarts.apache.org/zh/api.html#echarts.init)

在`echarts.init`API 中增加`width`属性，在父容器中设置`overflow：scroll`,实现横向滚动。

```ts
var myChart = echarts.init(dom, null, {
  renderer: 'canvas',
  useDirtyRect: false,
  width: 3000,
})
```

```css
#chart-container {
  position: relative;
  height: 100vh;
  overflow-x: scroll;
  overflow-y: hidden;
}
```

[![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/dataset-in-object-array-forked-rt78kx?file=/index.js)

## 两种方式对比

- dataZoom
  - 可以实现区域缩放以及平滑滚动，配置项参数多，定制化灵活度较高，但功能比较复杂，更改样式难度较高。
- overflow
  - 平滑滚动，更改样式较简单，无缩放功能，定制化灵活度较低。
