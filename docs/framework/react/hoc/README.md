---
sidebar: auto
---

# React 高阶组件(HOC)

高阶组件不是 React API 的一部分，而是一种用来复用组件逻辑而衍生出来的一种技术。

## 什么是高阶组件

> 高阶组件就是一个函数，且该函数接受一个组件作为参数，并返回一个新的组件。基本上，这是从 React 的组成性质派生的一种模式，我们称它们为“纯”组件， 因为它们可以接受任何动态提供的子组件，但它们不会修改或复制其输入组件的任何行为。

简言之, 高阶组件:

- 是一个函数
- 传入一个组件
- 返回一个新组件

## Example: 给任意组件添加 Tooltip

这里通过一个例子演示高阶组件的用法。

1. 高阶组件核心代码

```javascript
export const withTooltip = (Component: React.FunctionComponent) => {
  return ({ ...props }: any) => {
    return (
      <Flex gap={1}>
        <Component {...props} />
        <Tooltip description="这是提示内容">
          <IconPark type="info" />
        </Tooltip>
      </Flex>
    )
  }
}
```

2. 传入需要添加 Tooltip 的组件

```javascript
const TypographyWithToolTip = withTooltip(Typography)
```

3. 使用上一步返回的高阶组件

```javascript
<TypographyWithToolTip>111</TypographyWithToolTip>
```

效果展示:

![VScode-DownLoad](https://img-blog.csdnimg.cn/f9653d76f27642bab38d7c07e05cfa0e.png)
