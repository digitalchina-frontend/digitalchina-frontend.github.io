---
sidebar: auto
---

# 基于 Echarts 实现离线地图下钻动画

## Source & Demo

<br/>
<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);border-radius:2px;" width="800" height="450" src="https://codesandbox.io/p/sandbox/xia-zuan-hui-su-wan-zheng-ban-x3pklh?embed=1" allowfullscreen></iframe>

## 开始之前

你可能需要了解：

- echarts 基本用法，参考 [echarts 快速上手](https://echarts.apache.org/handbook/zh/get-started)
- 地理坐标系的概念，并且知道什么是 GeoJSON，参考 [地理坐标系](https://zh.wikipedia.org/wiki/%E5%9C%B0%E7%90%86%E5%9D%90%E6%A0%87%E7%B3%BB)、[GeoJSON](https://zh.wikipedia.org/zh-cn/GeoJSON)

## 准备工作

要使用 echarts 绘制地图，就必须给 echarts 提供一个 GeoJSON，GeoJSON 可以理解为一个包含了地名、边界线和一堆经纬度的树形结构。

本文演示湖北省地图下钻，因此需获取湖北省以及省内市级、县级行政区划的 GeoJSON，免费获取 GeoJSON 的途径包括但不限于：

1. [DataV](http://datav.aliyun.com/portal/school/atlas/area_selector#&lat=37.502671988384854&lng=107.40368932006544&zoom=4.5)
2. [开源项目贡献](https://geojson.hxkj.vip/)
3. [高德](https://malagis.com/gis-tutorial-get-amap-online-geojson.html)

## 怎么用 GeoJSON 渲染地图？

1. 引入 ecahrts 并创建地图容器
2. 使用 [registerMap](https://echarts.apache.org/zh/api.html#echarts.registerMap) API 注册地图（向 echarts 提供 GeoJSON）
3. 使用已注册地图作为地理坐标系并给底图上色

示例如下：

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);border-radius:2px;" width="800" height="450" src="https://codesandbox.io/p/sandbox/zen-me-yong-geojson-xuan-ran-di-tu-6czdxh?embed=1" allowfullscreen></iframe>

此时，我们的地图上已经渲染出了湖北省内所有的市级行政区划，接下来，我们尝试在点击后渲染对应城市的地图（后面统称为“下级地图”）。

## 点击某个区域怎么渲染下级地图？

1. 给 echarts 地图实例绑定点击事件
2. 事件处理函数的第一个参数为 `params`，可以通过 `params.name` 取到被点击区域的名称，通过名称可以计算出下级地图应该用哪个行政区划的 GeoJSON
3. 注册新的 GeoJSON 并通过 [setOption](https://echarts.apache.org/zh/api.html#echartsInstance.setOption) API 更新地理坐标系（底图会随坐标系一同更新）

示例如下，点击武汉可渲染武汉市地图，点击洪山区可渲染洪山区地图，其他地区不做演示：

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);border-radius:2px;" width="800" height="450" src="https://codesandbox.io/p/sandbox/dian-ji-mou-ge-qu-yu-zen-me-xuan-ran-xia-yi-ji-di-tu-cdhw7w?embed=1" allowfullscreen></iframe>

## 下钻后在展示下级地图的同时，怎么展示周边地区？

1. echarts 支持在一个容器内配置多个地理坐标系，也就可以渲染多个地图的底图，并且可以叠加
2. 我们配置两个地理坐标系，分别为 L1，L2，L1 用于渲染湖北省地图，L2 用于渲染市级、和区县级地图
3. L1、L2 初始都使用湖北省的 GeoJSON，L1 的 zLevel 为 1，L2 的 zLevel 为 2
4. 这时在界面上只会看到一个湖北省地图，L2 叠加在了 L1 上方
5. 点击事件触发后，用新注册的 GeoJSON 更新 L2，达到同时渲染两级地图的效果

示例如下：

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);border-radius:2px;" width="800" height="450" src="https://codesandbox.io/p/sandbox/chu-liao-xian-shi-xia-yi-ji-di-tu-huan-xi-wang-kan-dao-zhou-bian-di-qu-zen-me-tong-shi-xuan-ran-liang-ji-di-tu-k5g969?embed=1" allowfullscreen></iframe>

## 两层地图是割裂的，怎么让它们显得完整？

首先，我们需要找到是什么导致了两层地图的割裂。

先说结论：L1、L2 两个地理坐标系的逻辑坐标转像素坐标的转化比例的不一致，导致了两层地图的割裂，下面分析原因：

### 原因分析

在 echarts 地理坐标系的相关配置中，有一个关键属性叫做 [boundingCoords](https://echarts.apache.org/zh/option.html#geo.boundingCoords)

简单来理解，这个属性代表了一个矩形区域，单位是经纬度，其形式为这个矩形区域左上角和右下角两点的经纬度坐标，比如 `boundingCoords: [[30,60],[120,0]]` 表示一个如下的矩形区域：

![8J32QYZ](https://i.imgur.com/8J32QYZ.png)

这一属性表示你希望 echarts 将地理坐标系中的哪一区域渲染到我们的地图容器中，也就是说，我们不一定要将整个 GeoJSON 表示的经纬度范围全部渲染到地图容器中，而是可以只渲染一部分。

这个属性的默认值就是将整个 GeoJSON 表示的经纬度范围全部渲染到地图容器中，那么，在我们为 L1、L2 两个图层设置了不同的 GeoJSON 时：

1. L1、L2 对应 GeoJSON 的经纬度范围不同
2. 这导致 L1、L2 的 `boundingCoords` 默认值不同。以湖北省下钻武汉市为例，L1 为湖北省的经纬度范围，L2 为武汉市的经纬度范围
3. L1、L2 使用的地图容器大小相同，但是展示的经纬度范围却不同，这势必导致 echarts 在将 L1、L2 的经纬度坐标转化为像素坐标时，转化的比例不同
4. 由于 L1、L2 使用的 GeoJSON 代表的都是真实世界的经纬度数据，这些坐标点决定了武汉市能够和相邻市无缝地拼接在一起，但是当经纬度坐标经过不同的转化比例变成像素坐标后，它们原本的比例平衡就被破坏了
5. 比如原本武汉市和鄂州市的边界里都有 `[113.710002, 30.388924]` 这一点，但在乘以不同的乘数变成像素坐标后，它们就不再是同一点了，因此才显得割裂

### 方案

同步 L1、L2 展示的经纬度范围，从而同步其逻辑坐标和像素坐标的转化比例，以解决地图割裂问题：

1. 点击事件触发时，获取下级地图的经纬度范围
2. 通过 [setOption](https://echarts.apache.org/zh/api.html#echartsInstance.setOption) API 更新 L1 的 `boundingCoords` 为 下级地图的经纬度范围，L2 的 `boundingCoords` 不需要修改，因为默认值就是下级地图的经纬度范围
3. 此时，L1、L2 的 `boundingCoords` 相同，在经纬度范围相同的情况下，两个图层看起来就是“完整”的，这个完整性是由 GeoJSON 这一数据来保证的

### 细节

#### 怎么获取下级地图的经纬度范围？

echarts 没有直接的 API 可以帮助我们计算这一范围，过程会比较曲线救国

之前提到了 `boundingCoords` 的默认值为 GeoJSON 的经纬度范围，可以利用这个默认值来达成目的：

1. 先用下级地图的 GeoJSON 更新 L2
2. 需要用到 [convertFromPixel](https://echarts.apache.org/zh/api.html#echartsInstance.convertFromPixel) API 将像素值转换为逻辑值，第一个参数传坐标系缩写，第二个参数传像素值点
3. 将当前地图容器的左上角、右下角两点传给 `convertFromPixel`，可以得到代表经纬度的两点

```js
myChart.convertFromPixel('geo', [0, 0])
myChart.convertFromPixel('geo', [1200, 600])
```

4. 转化为 `boundingCoords` 格式即可

:::warning
这一方法在数据精准度上存在问题，更准确的方法请参考 [怎么根据 GeoJSON 计算经纬度范围](#怎么根据-geojson-计算经纬度范围)
:::

### 示例

<br/>
<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);border-radius:2px;" width="800" height="450" src="https://codesandbox.io/p/sandbox/liang-ceng-di-tu-shi-ge-lie-de-zen-me-rang-ta-men-xian-de-wan-zheng-jcdkxm?embed=1" allowfullscreen></iframe>

## 地图虽然完整了，但是下钻前后的变化显得很突兀

我们可以通过添加下钻动画的方式解决这一问题，地图下钻动画是一种在地图上进行层级逐渐深入展示的动画效果，相比添加动画之前，可以让用户从宏观的视角逐步进入到细节的层面，而不会感到突兀。

### 方案

使用 [GSAP](https://greensock.com/get-started/) 制作动画的一般流程：

1. 确定动画执行时机
2. 确定动画关键属性：`boundingCoords`
3. 确定动画的起点、终点（即关键帧渲染，更复杂的动画会有更多的关键帧）
4. 集成 gsap，使用 `gsap.to()` 补齐中间帧，并配置动画时间、缓动函数等

### 细节

#### 怎么确定动画执行时机

首先，下钻动画显然是在点击事件触发后执行，但是还有一些细节问题要考虑：

在上一小节中，点击事件处理函数的执行顺序为：

1. 渲染下级地图
2. 统一两个图层的 `boundingCoords`

其中，第 1 步是获取下级地图经纬度范围的前置步骤，第 2 步是通过调整缩放比例和中心点让两层地图显得完整。

在加入下钻动画后，第 2 步变成了动画的终点，可以去掉，执行顺序更新为：

1. 渲染下级地图
2. 播放下钻动画

这个顺序看起来没有问题，只要两个步骤之间执行的间隔时间不超过一帧，用户应该不会感知到第一步的存在，但是经过实际测试后发现，echarts 的 `setOption` 即使是同步执行上述步骤，第一步也会明显的被观察到，在视觉上产生闪烁的效果。

看起来有两个思路可以绕过或解决这一问题：

1. 想办法让用户感知不到渲染下级地图这一过程，我们可以将地图区域和描边颜色改为透明，直到开始执行动画时再恢复
2. 不再依赖 echarts API 获取下级地图经纬度范围，而是改为通过对下级地图 GeoJSON 中的地域边界坐标分别求最大最小值，来计算出经纬度范围

实际测试下来，两个思路都可以解决问题，但是第一个思路从点击事件触发到动画开始之间有一小段延迟，而第二个思路则不会，给用户带来的反馈速度更快，用户体验更顺畅，所以本节的示例演示了第二个思路的实现方式。

:::tip
虽然 GeoJSON 中的边界坐标可能数量上千，但是计算对性能的消耗并不大，因为计算频率不高，如果想要优化，还可以缓存计算结果
:::

#### 怎么确定动画的起点？

为了保证用户在点击某一区块前后不会在视觉上感觉到突兀的变化，下钻动画的第一帧应该是这样的：

- 保持点击前的缩放比例和中心点不变
- 在 L2 上渲染下级地图
- 保证 L1 和 L2 的 `boundingCoords` 是一致的

假设当前展示的为湖北省地图，点击武汉后，下钻动画的第一帧效果如下：

![YavpzOF](https://i.imgur.com/YavpzOF.png)

第一帧对应的 Option 如下：

```js
{
  geo: [
    {
      map: '武汉',
      // 由湖北省 GeoJSON 计算得出
      boundingCoords: [[108.366964, 33.275616], [116.135188, 29.029488]],
    },
    {
      // 由湖北省 GeoJSON 计算得出
      boundingCoords: [[108.366964, 33.275616], [116.135188, 29.029488]],
    },
  ],
}
```

#### 怎么根据 GeoJSON 计算经纬度范围

:::tip 根据 GeoJSON 计算经纬度范围的算法

```js
export const calcBoundingCoords = (geoJsonData) => {
  const boundingCoords = [
    [Infinity, -Infinity],
    [-Infinity, Infinity],
  ]
  geoJsonData.features.forEach(function (feature) {
    const coordinates = feature.geometry.coordinates
    coordinates.forEach(function ([coords]) {
      coords.forEach(function (coord) {
        boundingCoords[0][0] = Math.min(boundingCoords[0][0], coord[0])
        boundingCoords[0][1] = Math.max(boundingCoords[0][1], coord[1])
        boundingCoords[1][0] = Math.max(boundingCoords[1][0], coord[0])
        boundingCoords[1][1] = Math.min(boundingCoords[1][1], coord[1])
      })
    })
  })
  return boundingCoords
}
```

:::

#### 怎么确定动画的终点？

动画的最后一帧，两个图层的 `boundingCoords` 应该都设置为武汉市的经纬度范围，效果如下：

![VhQT7Fq](https://i.imgur.com/VhQT7Fq.png)

对应的 Option 如下：

```js
{
  geo: [
    {
      map: '武汉',
      // 由武汉市 GeoJSON 计算得出
      boundingCoords: [[113.702281, 31.36126], [115.082378, 29.969132]],
    },
    {
      // 由武汉市 GeoJSON 计算得出
      boundingCoords: [[113.702281, 31.36126], [115.082378, 29.969132]],
    },
  ],
}
```

#### 怎么补齐中间帧

[GSAP](https://greensock.com/get-started/) 可以根据我们给定的起点和终点，自动计算生成中间帧来实现平滑的过渡，这一过程叫做 [补间](https://en.wikipedia.org/wiki/Inbetweening)

1. 参考 [GSAP Installation](https://greensock.com/docs/v3/Installation) 集成 GSAP
2. 由于 [gsap.to()](<https://greensock.com/docs/v3/GSAP/gsap.to()>) 接收的参数格式为 `Object`，因此需要将起点和终点的 `boundingCoords` 从二维数组转换为 `Object`，对应算法如下：

```js
import { flattenDeep, values, pick } from 'lodash'

export const boundingCoords2Object = (boundingCoords) => ({
  ...flattenDeep(boundingCoords),
})

export const object2BoundingCoords = (obj) => [
  values(pick(obj, ['0', '1'])),
  values(pick(obj, ['2', '3'])),
]
```

1. 将起点 `target` 和终点 `vars` 作为参数传给 `gsap.to()`，并在 `vars` 对象中配置动画时间 `duration` 和缓动函数 `ease`，GSAP 会不断修改传入的 `target` 对象直至动画时间结束，代码如下：

```js
const playAnimation = (start, end) => {
  const target = boundingCoords2Object(start)
  const vars = boundingCoords2Object(end)
  gsap.to(target, {
    ...vars,
    duration: 1,
    ease: 'power1.inOut',
  })
}
```

4. 通过 `onUpdate` 回调，将中间帧同步到 echarts option

```js{4-7}
const playAnimation = (name, start, end) => {
  gsap.to(target, {
    // ...
    onUpdate() {
      const updatedBoundingCoords = object2BoundingCoords(target);
      syncToMap({ name, boundingCoords: updatedBoundingCoords });
    },
  });
};
```

:::tip 缓动函数（Easing Function）

也称为缓动曲线（Easing Curve）或过渡函数（Transition Function）。它是一种数学函数，用于控制动画的变化速度，使动画在开始和结束时更加平滑和自然。缓动函数通常应用于动画的时间轴，以调整动画属性随时间变化的方式。

GSAP 缓动函数的可选值请参考 [Eases](https://greensock.com/docs/v3/Eases)
:::

### 示例

<br/>
<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);border-radius:2px;" width="800" height="450" src="https://codesandbox.io/p/sandbox/di-tu-sui-ran-wan-zheng-liao-dan-shi-xia-zuan-qian-hou-de-bian-hua-xian-de-hen-tu-wu-zqqgn9?embed=1" allowfullscreen></iframe>

## 地图可以下钻了，但是怎么向上回溯呢？

与下钻类似，向上回溯依然分为：确定起点、确定终点、使用 GSAP 补齐中间帧这 3 步，唯一的不同是，我们要根据需求将终点从下级地图的经纬度范围，改为湖北省的经纬度范围或是由需求决定的具体行政区划的经纬度范围 。

同理，如果你想实现市级与市级之间的切换，也是相同的步骤，修改终点的经纬度范围即可，下面分别演示：

- 下钻：湖北省地图->武汉市地图->洪山区地图
- 回溯：洪山区地图->湖北省地图、武汉市地图->湖北省地图

示例如下，下钻后，点击武汉、洪山之外的地块即可回溯至湖北省：

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);border-radius:2px;" width="800" height="450" src="https://codesandbox.io/p/sandbox/xia-zuan-hui-su-wan-zheng-ban-x3pklh?embed=1" allowfullscreen></iframe>

## 小结

至此，我们已经实现了我们最初的需求，基于 Echarts 以 GeoJSON 的方式实现了离线地图的下钻动画和回溯动画，进一步地，我们还可以从以下方面优化这一动画：

- 控制 GSAP 动画的帧率，优化动画对性能的开销
- 通过调节动画时间和缓动函数，优化动画效果，使动画更平滑或更具戏剧性
- 处理动画过程中，用户更换下钻目标的情况，让用户拥有更大的控制权
- 其他你能想到的点

最后，感谢阅读，欢迎大家对文章进行更新，探讨交流不一样的心得，互相学习，共同进步！
