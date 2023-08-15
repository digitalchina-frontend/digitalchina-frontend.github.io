# 3. 组件接口设计

根据需求可以很容易设计出组件接口：

| 参数     | 说明                               | 类型                 | 默认值 |
| -------- | ---------------------------------- | -------------------- | ------ |
| number   | 可以包含符号的数字                 | `number` \| `string` | 0      |
| duration | 滚动时间（包括收尾动画），单位：秒 | `number`             | 5      |

```jsx
NumberScroll.propTypes = {
  number: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  duration: PropTypes.number,
}

NumberScroll.defaultProps = {
  number: 0,
  duration: 5,
}
```

- 客户端代码：

```jsx
function App() {
  return (
    <div className="App">
      <NumberScroll number={'1,231,232.00'} duration={5} />
    </div>
  )
}
```
