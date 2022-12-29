# 解构函数参数，提高代码可读性

## 不推荐

```js
const myFuction = (one,two,three,four) = {
    // ...
}
myFuction(1,[2],'3',{})
```

过多的参数会使用户难以使用函数

## 推荐

```js
const myFuction = ({ one, two, three, four }) => {
  // ...
}
myFuction({
  one: 1,
  two: [2],
  three: '3',
  four: {},
})
```

解构函数参数允许用户传递一个单独对象，每个参数都有名称

## 问题

若函数参数更多还有其他方法吗？
