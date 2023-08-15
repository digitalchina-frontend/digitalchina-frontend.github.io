# 避免自动分号插入

## 不推荐

```js
const myFunction = () => {
  // ...
  return
  {
    prop: 1
  }
}
console.log(myFunction()) // undefined
```

由于 javascript 中定义的自动分号插入规则，如果一个 return 语句要正确返回一个值，这个值的表达式的开始部分必须和 return 位于同一行。

## 推荐

```js
const myFunction = () => {
  // ...
  return {
    prop: 1,
  }
}
console.log(myFunction()) // { prop:1 }
```

## 问题

javascript 分号自动插入规则有什么用？
