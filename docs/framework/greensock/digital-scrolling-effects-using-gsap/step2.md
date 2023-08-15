# 2. 实现单个数字的滚动效果

## 2.1 动画分析

- 首先，HTML 元素应该由两部分组成：一个宽高固定并隐藏溢出部分的舞台、一个从 0 到 9 的数字列表，不停移动数字列表即可实现基础的数字滚动效果；
- 在大部分场景下，需要让用户产生数字滚动速度快到模糊的感觉，可以给滚动中的数字加上一层模糊滤镜，在滚动时间结束后再撤除；
- 在滚动时间结束后，需要将特定的数字显示到舞台正中的位置，为了制造一种自然滚动直至停下的感觉，这里有两种做法：
  - 视图驱动：将动画时间分为两个部分，第一个部分将数字列表滚动 `n` 圈,第二部分从当前位置缓慢滚动至目标数字，在这整个过程中，数字的滚动速度应该是从一个精准计算的初始速度不断递减直至为零的。
  - 数据驱动：预留一个较短的时间播放收尾的动画，用较长的时间以恒定的、较快的速度无限滚动列表，时间到后，不论列表目前滚动到哪个位置，立即将列表移动到目标数字附近并播放一个收尾动画。

## 2.2 准备静态的 HTML 元素

- 准备舞台和数字列表：

```jsx
const NumberScrollItem = () => {
  const numbers = new Array(10)
    .fill(null)
    .map((_, index) => index)
    .concat(0)
  return (
    <div className="number-scroll__stage">
      <div className="number-scroll__gimmick ">
        {numbers.map((number) => (
          <div key={uuidV4()}>{number}</div>
        ))}
      </div>
    </div>
  )
}
```

![static](/images/number-scroll/static.png)

:::tip
这里我们在 0~9 的末尾额外添加了一个 0 ，这样做的目的是让列表从尾部（显示数字 9）切换到头部（显示数字 0）的过程不那么生硬。
:::

## 2.3 让数字列表滚动起来

这里用到的 `GSAP API` 是 [gsap.fromTo()](<https://greensock.com/docs/v3/GSAP/gsap.fromTo()>)，只需指定 `fromVars`（动画的起始属性）、`toVars`（动画的目标属性）和 `duration` 即可让 `gsap` 补齐中间的动画过程，完成一个基础的滚动效果。

```jsx
const COUNT_OF_NUMBERS = 10 // 隐藏在舞台外的数字个数
const HEIGHT_PER_NUMBER = 32 // 每个数字所占高度
const ONE_LAP = HEIGHT_PER_NUMBER * COUNT_OF_NUMBERS // 列表滚动一圈的位移

const useNumberScroll = (dependencies = []) => {
  const ref = useRef()

  const animate = () => {
    const gimmicSelector = '.number-scroll__gimmick'
    gsap.fromTo(
      gimmicSelector,
      { y: 0 },
      {
        y: -ONE_LAP,
        duration: 3,
        ease: 'none',
      }
    )
  }

  useGSAP({
    animate,
    ref,
    dependencies,
  })

  return ref
}

const NumberScrollItem = () => {
  const ref = useNumberScroll()
  return (
    <div className="number-scroll__stage" ref={ref}>
      {/* ... */}
    </div>
  )
}
```

:::tip
`useGSAP` 是基于 `useLayoutEffect` 封装的 `hook`：

```jsx
const useGSAP = ({ animate, ref, dependencies = [] }) => {
  return useLayoutEffect(() => {
    let ctx = gsap.context(animate, ref)
    return () => {
      ctx.revert()
    }
  }, dependencies)
}
```

`gsap.context` 指定了动画的上下文，在 `animate` 函数中书写的选择器都将作用于指定的元素范围内，并且其中出现的所有 `gsap animation` 都可以通过 `ctx.revert()` 或 `ctx.kill()` 统一重置或销毁，而无需手动跟踪一堆变量、数组。
:::

![dynamic-number](/images/number-scroll/dynamic-number.gif)

## 2.4 让数字列表可以无限滚动

`repeat` 属性可以控制动画重复的次数，`-1` 代表无限次。

```jsx
const animate = () => {
  gsap.fromTo(
    gimmicSelector,
    { y: 0 },
    {
      y: -ONE_LAP,
      duration: 3,
      ease: 'none',
      repeat: -1, // 无限重复
    }
  )
}
```

:::tip
duration 表示每一次的动画时间，而不是总的动画时间
:::

![infinite-scroll](/images/number-scroll/infinite-scroll.gif)

## 2.5 给滚动中的数字加上一层模糊滤镜

为了让数字在滚动的过程中给用户一种滚动得非常快的感觉，我们需要设置一个较大的滚动速度，并且给滚动中的数字加上一层高斯模糊。

- 如何控制运动速度  
  `gsap` 的运动速度取决于我们传入的位移 `y` 和时间 `duration`，相当于：`speed = y / duration`，在 `y` 确定的情况下，计算一个 `duration` 传给 `gsap` 即可。

- 高斯模糊（利用 [CSS filter](https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter#filter_%E5%87%BD%E6%95%B0) 属性实现）  
  通常，我们可以简单地使用 `blur()` 函数产生高斯模糊，比如：`filter: blur(1px)`，这里的 `1px` 指定了 [SVG 滤镜 feGaussianBlur](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/feGaussianBlur) 的标准差。

```jsx
const getScrollSpeed = () => 320 // 设置一个较快的速度即可，单位：px / s
const getDuration = (s, v) => s / v // 时间 = 位移 / 速度

const animate = () => {
  gsap.fromTo(
    gimmicSelector,
    { y: 0 },
    {
      y: -ONE_LAP,
      duration: getDuration(ONE_LAP, getScrollSpeed()),
      ease: 'none',
      repeat: -1, // 无限重复
      onStart() {
        // 添加模糊滤镜
        gsap.set(gimmicSelector, {
          css: {
            filter: 'blur(1px)',
          },
        })
      },
    }
  )
}
```

![blur](/images/number-scroll/blur.gif)

## 2.6 让数字列表停止滚动

在做 [动画分析](#_2-1-动画分析) 时，我们提到了缓慢停下和急停两种停止滚动的做法，这里我们都尝试一下。

### 视图驱动

缓慢停下是个很符合现实逻辑的做法，整个运动过程相当于一个匀减速直线运动。

要让数字在指定的时间正好滚动至指定位置并停下，我们就需要设定一个初始速度和负的加速度，使运动结束时速度正好等于零；并且总位移在减去从初始值滚至目标值的部分后，必须是滚动一圈的整数倍，否则停止的位置就会偏离我们的目标值。

下面我们用公式梳理下上述条件：

假设初始速度为 `Vο`，加速度为 `a`，总位移为 `s`，运动时间为 `t`，至少需要位移的距离为 `S1`，数字滚动一圈的距离为 `S2`，则：

1. 指定时间后停下：`Vο + at = 0`；
2. 停下时总位移减去必要的位移正好是滚动一圈的整数倍：`(s - S1) % S2 = 0`；
3. 带入位移公式 `s = Vοt + at² / 2` 可以得到：`(Vοt / 2 - S1) % S2 = 0`。

其中，`S2` 是常量，`t` 和 `S1` 是已知的，求 `Vο` 的解，显然 `Vο` 不止一个解，选择一个较大的速度作为初始运动速度即可。

在确定 `Vο` 后，带入 `a = -(Vο / t)` 即可算出对应的加速度。

这一做法确实是可行的，但是显而易见，这种做法会极大增加我们代码的实现难度，而且很难满足一些常见的需求，比如多位数的滚动速度保持一致（因为每个数字的 `S1` 都不相同）。

### 数据驱动

与缓慢停下的做法相比，急停的做法无疑简单许多：

1. 设定一个播放收尾动画的时间，比如总时长的 `75%` 播放无限滚动，`25%` 播放收尾动画；
2. 通过 `onUpdate`（每次动画更新时触发）和 [this.pause()](<https://greensock.com/docs/v3/GSAP/Tween/pause()>) 控制无限滚动的时间；
3. 为 `NumberScrollItem` 绑定一个 `data-value` 属性，表示最后滚动到哪个数字；
4. 停止无限滚动后：
   1. 撤除滤镜；
   2. 通过 [HTMLElement.dataset](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/dataset) 获取目标数字的值；
   3. 用剩下的时间播放一个从目标数字上方滚动至目标数字的动画，使用 [gsap Eases](https://greensock.com/docs/v3/Eases) 中内置的时间函数 `elastic.out()`（ 类似于 [CSS animation-timing-function](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-timing-function)）使动画效果更有弹性。

:::tip
第 2 步提到的 `this` 对应一个 [Tween](https://greensock.com/docs/v3/GSAP/Tween/)，可以简单地把它理解为一个高性能的属性设置器。
:::

```jsx
const NumberScrollItem = (props) => {
  const ref = useNumberScroll({
    duration: 5,
  })
  return (
    <div className="number-scroll__stage" ref={ref}>
      <div className="number-scroll__gimmick" data-value={0}>
        {/* ... */}
      </div>
    </div>
  )
}

const ENDING_ANIMATION_PERCENT = 0.25 // 收尾动画的时间占比

const useNumberScroll = ({ duration }, dependencies = []) => {
  const startTime = useRef() // 用于控制无限滚动的时间
  const endingDuration = min([duration * ENDING_ANIMATION_PERCENT, 2]) // 收尾动画最多播放 2 秒
  const loopDuration = duration - endingDuration

  const endAnimate = (ctx) => {
    // 停止无限滚动
    ctx.pause()
    const ele = ctx.targets()[0]
    // 获取目标数字的值
    const value = +ele.dataset.value
    const valueOffset = value === 0 ? 10 : value
    // 撤除滤镜
    gsap.set(ele, {
      css: {
        filter: '',
      },
    })
    // 播放一个从目标数字上方滚动至目标数字的动画
    gsap.fromTo(
      ele,
      {
        y: -((valueOffset - 1) * HEIGHT_PER_NUMBER), // 目标数字的上一个数字
      },
      {
        y: -(valueOffset * HEIGHT_PER_NUMBER),
        duration: endingDuration,
        ease: 'elastic.out(1, 0.3)',
      }
    )
  }

  const animate = () => {
    gsap.fromTo(
      gimmicSelector,
      { y: 0 },
      {
        onStart() {
          startTime.current = Date.now()
        },
        onUpdate() {
          const isEnd = Date.now() - startTime.current >= loopDuration * 1000
          if (isEnd) endAnimate(this)
        },
      }
    )
  }
}
```

![stop](/images/number-scroll/stop.gif)
![stop1](/images/number-scroll/stop1.gif)
