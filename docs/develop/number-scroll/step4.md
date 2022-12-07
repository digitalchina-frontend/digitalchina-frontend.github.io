# 4. 完善组件

## 支持多位数

1. 将传入数字拆分为一个数组；
2. 将数组渲染为多个 `<NumberScrollItem />`；
3. 将参数 `value` 绑定至 `data-value`。

```jsx
const NumberScroll = (props) => {
  const numbers = String(props.number).split('')

  return (
    <div className="number-scroll">
      {numbers.map((item) => (
        <NumberScrollItem key={uuidV4()} value={+item} />
      ))}
    </div>
  )
}

const NumberScrollItem = (props) => {
  return (
    <div className="number-scroll__stage" ref={ref}>
      <div className="number-scroll__gimmick" data-value={props.value}>
        {/* ... */}
      </div>
    </div>
  )
}
```

![numbers](/images/number-scroll/numbers.gif)

## 支持负数、浮点数、千分位数字

1. 新建组件 `SymbolItem` 用于显示符号；
2. 添加判断数字的方法；
3. 条件渲染不同的组件。

```jsx
const SymbolItem = (props) => {
  const { value } = props

  return (
    <div className="number-scroll__stage">
      <div className="number-scroll__gimmick ">{value}</div>
    </div>
  )
}

const isNumber = (value) => /^\d$/g.test(value)

const NumberScroll = (props) => {
  return (
    <div className="number-scroll">
      {numbers.map((item) =>
        isNumber(item) ? (
          <NumberScrollItem key={uuidV4()} value={+item} />
        ) : (
          <SymbolItem key={uuidV4()} value={item} />
        )
      )}
    </div>
  )
}
```

![float](/images/number-scroll/float.gif)

## 支持在传入数字改变时重新滚动

1. 将 `useNumberScroll` 从 `<NumberScrollItem />` 提升至 `<NumberScroll />`（避免 `props.number` 更改时，某位数的值和更改前一样，导致个别数字没有触发动画）；
2. 将 `props.number` 作为触发动画的依赖项；
3. 为 `<NumberScrollItem />` 添加一个 `className` 以区分数字和符号；
4. 传给 `gsap.fromTo` 的选择器只选择类型为数字的子项，使用 `ctx.targets().forEach()` 逐个为选中的元素添加结尾动画。

```jsx
const NumberScroll = (props) => {
  // 提升至父组件
  const ref = useNumberScroll(
    {
      duration: props.duration,
    },
    [props.number]
  )

  return (
    <div className="number-scroll" ref={ref}>
      {/* ... */}
    </div>
  )
}

const NumberScrollItem = (props) => {
  return (
    <div className="number-scroll__stage">
      <div
        className="number-scroll__gimmick number-scroll__gimmick--scroll"
        data-value={props.value}
        style={{
          transform: `translateY(-${props.value * HEIGHT_PER_NUMBER}px)`,
        }}
      >
        {/* ... */}
      </div>
    </div>
  )
}

const endAnimate = (ctx) => {
  // 为所有类型为数字的子项添加收尾动画
  ctx.targets().forEach((ele) => {
    const value = +ele.dataset.value
    // end animate
  })
}

const animate = () => {
  // 只选择类型为数字的子项
  const gimmicSelector = '.number-scroll__gimmick--scroll'
  gsap
    .fromTo
    // ...
    ()
}
```

![number-scroll](/images/number-scroll/number-scroll.gif)
