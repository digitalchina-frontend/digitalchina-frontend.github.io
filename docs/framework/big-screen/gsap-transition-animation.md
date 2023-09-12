---
sidebar: auto
---

# 基于 GSAP 实现大屏进出场动效

## Source & Demo

<br/>
<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);border-radius:2px;" width="800" height="450" src="https://codesandbox.io/p/sandbox/gsap-fade-enter-leave-4wfnvt?embed=1" allowfullscreen></iframe>

## 业务背景

随着信息时代的快速发展，数据可视化成为了我们理解和分析复杂信息的重要手段。在许多场景下，我们需要将海量的数据呈现在一个屏幕上，以便用户能够迅速地获取洞察和决策支持。为了吸引用户注意、引导关注以及增加数据的生动性，达到更好的用户体验和数据传达效果，我们可以在数据可视化大屏上引入进出场动画。

## 业务场景

假设我们正在开发一个用于监控实时交通流量的数据可视化大屏，这个大屏将显示各个城市的交通拥堵情况。为了提升用户对数据的理解和关注度，我们计划为大屏上的不同区块添加进出场动画效果。

通过在不同区块应用适合的进出场动画，我们可以使数据可视化大屏更具吸引力和交互性。同时，动画效果也能够增加大屏的现代感和专业性，提升用户对系统的信任度和满意度。

## 解决方案

基于以上业务场景，我们在做设计实施时要考虑两个主要问题：

1. 如何设计并实现动画效果本身
2. 用户进行页面跳转前，如何通知页面组件播放出场动画，在播放完毕后才真正跳转页面

### 动画制作普遍流程

使用 [GSAP](https://greensock.com/get-started/) 制作动画的普遍流程为：

1. 确定动画的目标元素和执行时机
2. 确定动画涉及到的属性
3. 渲染动画关键帧，找到关键帧对应的属性值
4. 调用 GSAP API 补齐中间帧，关于 API 和配置项的更多细节请查看 [GSAP 3 Cheat Sheet](https://greensock.com/cheatsheet/)

### 怎么实现进出场动画效果？

下面我们按照上述流程对进出场动画进行分析：

<table>
  <tr>
    <th></th>
    <th>进场动画</th>
    <th>出场动画</th>
  </tr>
  <tr>
    <td>动画目标元素</td>
    <td colspan="2">大屏中的区块</td>
  </tr>
  <tr>
    <td>动画执行时机</td>
    <td>页面组件加载到 DOM 后播放动画</td>
    <td>页面跳转前 n 秒（n 为出场动画播放时间）</td>
  </tr>
  <tr>
    <td>动画涉及属性</td>
    <td colspan="2">包括但不限于 <code>translateX</code>、<code>translateY</code>、<code>opacity</code>、<code>scale</code> 等</td>
  </tr>
  <tr>
    <td rowspan="2">动画关键帧</td>
    <td>第1帧（初始状态）：<br>
      区块的位置处于屏幕可见区域外，透明度为 0，缩放比例为原来的 30% 或更小</td>
    <td rowspan="2">出场动画的初始状态和结束状态恰好与进场动画相反，进场动画的初始状态即为出场动画的结束状态</td>
  </tr>
  <tr>
    <td>最后1帧（结束状态）：<br>
      区块的位置处于不添加动画时它本来所在的位置，透明度为 1，缩放比例为 100%</td>
  </tr>
  <tr>
    <td>GSAP API</td>
    <td>需要指定动画的初始和结束状态，因此使用 <a href="https://greensock.com/docs/GSAP/gsap.fromTo()">gsap.fromTo()</a> 补齐中间帧</td>
    <td>动画的初始状态即为元素当前状态，只需指定结束状态，因此使用 <a href="https://greensock.com/docs/v3/GSAP/gsap.to()">gsap.to()</a> 补齐中间帧</td>
  </tr>
</table>

#### 动画错位

由于一次动画通常涉及到的目标元素不止一个，默认情况下所有元素会在同一时间开始动画并在同一时间结束动画，为了让动画看起来不那么呆板，我们可以配置 `stagger` 属性表明两个元素的动画开始时间要错开 n 秒，以此达到类似多米诺骨牌依次倒下的动画效果

### 怎么处理出场动画执行时机？

1. 首先，以 React 前端程序为例，在组件层级结构的角度看，所有页面跳转都发生在 `RouterProvider` 对应的 Context 范围内
2. 因此我们可以基于 React Router 的 `useNavigate` hook 封装一个自定义 hook，对于范围内的所有页面跳转需求，我们都可以用 `useNavigate` 提供的页面跳转函数来执行真正的页面跳转，只需在跳转前通知页面组件播放出场动画
3. 我们可以使用发布-订阅模式来满足跨组件层次的通信需求，由页面组件扮演订阅者，在页面挂载后向消息中心注册“页面即将跳转”事件，由触发页面跳转的组件扮演发布者，将事件发布到消息中心
4. 为了减少代码量和重复造轮子，推荐一个发布/订阅库 [pubsub-js](https://www.npmjs.com/package/pubsub-js)

### 实现细节

由于我们已经在超过 3 个项目中集成过进出场动画进行交付，且对应实现细节比较繁琐，我们深感 copy 代码的复用方式效率极低，因此，我们将进出场动画的可复用代码做成了一个 hook 库 `@zlxiao97/gsap-transition-anim` 并发布为 npm 包，其具体用法和配置项请参考：

[@zlxiao97/gsap-transition-anim](https://www.npmjs.com/package/@zlxiao97/gsap-transition-anim)

如果你的项目使用技术栈并非 React，可以基于 [Source Code](https://github.com/zlxiao97/gsap-transition-anim) 做定制开发，并修改对 React Hook、React Router 有依赖的部分代码，你可以将定制开发后的代码发布为新的 npm 包，使其适用于你的项目。

## 结语

至此，我们已经实现了大屏进出场动效，希望你有所收获！

欢迎大家对文章进行更新，探讨交流不一样的心得，互相学习，共同进步！
