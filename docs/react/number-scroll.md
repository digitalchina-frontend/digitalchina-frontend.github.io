# 使用 GSAP 实现数字滚动特效

## 介绍

在阅读完本文后，您将：
+ 对于如何实现数字滚动特效有基本的了解。

## 背景知识

本文旨在让初级前端开发人员能够使用 [GSAP（The GreenSock Animation Platform）](https://greensock.com/) 替代 [CSS Animation](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Animations/Using_CSS_animations) 实现一些简单的特效以获得更优的开发体验和性能表现，并尽可能减少学习成本。

如果您是初次听说 GSAP 的新手，先学习一些基础知识会有所帮助。

+ GSAP：一个业界知名的动画平台，你可以使用 GSAP 为 JavaScript 可以触及的几乎所有内容制作动画，无论您是想要为 UI、SVG、Three.js 还是 React 组件制作动画，GSA​​P 都能满足您的需求。
    + 通过 [Getting Started with GSAP](https://greensock.com/get-started/) 了解有关 GSAP 的更多信息。

## 目标效果



## 封装 React 组件

### 需求
该组件接受数字用于展示，数字可能是千分位格式的，在组件接受到的数字改变后，需要展示一个数字滚动的过渡动画，并在指定的时间后显示出最新的数字。（在动画过程中，最后要展示的数字是可以改变的）

### 实现数字滚动视觉效果

#### 动画分析： 
+ 首先，HTML 元素应该由两部分组成，即一个带有 `overflow: hidden` 属性的舞台和一个从 0 到 9 的数字列表，不停移动数字列表即可实现基础的数字滚动效果；
+ 为了让用户产生数字滚动速度特别快的感觉，可以给滚动中的数字加上一层模糊滤镜；
+ 在滚动一段时间后，需要将特定的数字显示到舞台正中的位置并撤除滤镜  ，这里有两种做法：
  - 缓慢停下：将组件参数指定的动画时间分为三个部分，第一部分将数字列表复位至初始位置；第二个部分将数字列表滚动 `n` 圈；第三部分从初始位置由快到慢逐渐滚动至目标数字。
  - 急停：从指定的动画时间中预留一个较短的时间播放收尾的动画，用较长的时间无限滚动列表，时间到后（不论列表目前滚动到哪个位置）立即将列表移动到目标数字附近并播放一个收尾动画。

#### 准备静态的 HTML 元素

+ 准备舞台和数字列表：  
![static](../assets/static.png)

```jsx
const RollingItem = () => {
  const numbers = new Array(10)
    .fill(null)
    .map((_, index) => index)
    .concat(0);
  return (
    <div className="stage">
      <div className="gimmick">
        {numbers.map((number, index) => (
          <div key={index}>{number}</div>
        ))}
      </div>
    </div>
  );
};
```

:::tip
这里我们在 0~9 的末尾额外添加了一个 0 ，这样做的目的是让列表从尾部（显示数字 9）切换到头部（显示数字 0）的过程不那么生硬。
:::

#### 让数字列表滚动起来

![dynamic-number](../assets/dynamic-number.gif)

让列表动起来的核心方法是 `gsap.to()`，只需指定一个 `toVars`（动画目标属性/值）和一个 `duration` 就可以让 `gsap` 补齐中间的动画过程，完成一个基础的滚动效果。

```jsx
import gsap from 'gsap';

const RollingItem = (props) => {
  const stageRef = useRef();
  const animate = () => {
    gsap.to('.gimmick', {
      y: -32 * 10,
      duration: props.duration,
      ease: 'none',
    });
  }
  useLayoutEffect(() => {
    let ctx = gsap.context(animate, stageRef);
    return () => ctx.revert();
  }, []);
  return (
    <div className="stage" ref={stageRef}>
      <div className="gimmick">
        {/* ... */}
      </div>
    </div>
  );
};

```

:::tip
我们暂时不为舞台设置 `overflow: hidden` 属性以便于我们对动画过程有一个直观的认识，在其他开发工作完成后，我们将在最后添加这一属性。
:::

#### 让数字列表可以无限滚动

![infinite-scroll](../assets/infinite-scroll.gif)

`repeat` 属性可以控制动画重复的次数，`-1` 代表无限次。

```jsx
const animate = () => {
  gsap.to('.gimmick', {
    y: -32 * 10,
    duration: props.duration,
    ease: 'none',
    repeat: -1, // 无限重复
  });
}
```
:::tip
每次重复都将消耗 duration 对应的时间。
:::

#### 给滚动中的数字加上一层模糊滤镜

为了让数字在滚动的过程中给用户一种滚动得非常快的感觉，我们需要设置一个最小滚动速度，并且给滚动中的数字加上一层高斯模糊。

+ 最小滚动速度：
  对于 `gsap` 来说，运动速度取决于参数 `y` 和 `duration`，相当于：`speed = y / duration`，因此，要控制运动速度，我们在确定好最小滚动速度和运动一圈的距离后，根据 `duration = y / speed` 计算出一个 `duration` 传递给 `gsap` 即可。

+ 高斯模糊（利用 [CSS filter](https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter#filter_%E5%87%BD%E6%95%B0) 属性实现）：通常，我们可以简单地使用 `blur()` 函数产生高斯模糊，比如：`filter: blur(1px)`，这里的 `1px` 指定了 [SVG 滤镜 feGaussianBlur](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/feGaussianBlur) 的标准差。
  
![blur](../assets/blur.gif)

```jsx
const COUNT_OF_NUMBERS = 10; // 隐藏在舞台外的数字个数
const HEIGHT_PER_NUMBER = 32; // 每个数字的行高
const ONE_LAP = HEIGHT_PER_NUMBER * COUNT_OF_NUMBERS; // 列表运动一圈的运动距离

const RollingItem = (props) => {
  const target = props.value;
  const stage = useRef();

  useGSAP(stage, () => {
    gsap.set('.gimmick', {
      css: {
        filter: 'blur(1px)',
      },
    });
    gsap.to('.gimmick', {
      y: -ONE_LAP,
      duration: ONE_LAP / getMinSpeed(HEIGHT_PER_NUMBER),
      ease: 'none',
      repeat: -1, // 无限重复
    });
  });
  // ...
};
```

:::tip
分享一个计算最小速度的方法：
1. 假设一个较快的滚动给人眼带来的体验是：数字进场、数字位于正中、数字离场，即一个数字从进场到离场需要3帧
2. 从 24FPS / 30FPS / 60FPS 这几个常见帧率中选择一个作为平均运动速度
3. 每个数字的高度 = 字体大小 * 行高 = 16 * 2 = 32
4. 一帧需要运动的距离 = 数字的高度 / 3帧
5. 最小速度 = 一帧需要运动的距离 / 一帧在指定 FPS 下对应的时间  

以上思路仅代表个人看法，大家完全可以先随意设置一个再根据效果调整
:::

#### 让数字列表停止滚动

根据我们刚刚分析的两种将数字列表滚动至指定数字并停下的思路，我们分别进行讨论：

##### 缓慢停下

就像我们真的转动了一个大转盘并预言了我们将要停下的数字一样，我们需要根据转盘当前显示的数字和我们预言的数字之间的距离来计算运动速度，为了不让这个速度显得太慢，我们还要设法让转盘在确定的时限内多转几圈。

##### 急停



#### 让组件支持多位数、小数、千分位数字



### 状态设计

### 组件接口设计

+ 客户端代码：

```
```

### 内部实现

## 结语

## 参考


