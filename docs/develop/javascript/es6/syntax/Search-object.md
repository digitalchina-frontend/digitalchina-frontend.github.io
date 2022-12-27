# 使用 findIndex 查找对象

有时我们需要知道在数组中是否存在某个对象，并且知道它的位置，我们该怎么做呢

## indexOf(不推荐)

indexOf() 方法返回在数组中可以找到给定元素的第一个索引，如果不存在，则返回 -1。

```js
const arr = [{ pre: 1 }, { pre: 2 }]
const index = arr.indexOf({ pre: 1 })
console.log(index) // -1
```

这里 indexOf 查找不到数组中是否存在某个对象

### findIndex(推荐)

findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回 -1。

```js
const arr = [{ prop: 1 }, { prop: 2 }]
const index = arr.findIndex((item) => item.prop === 1)
console.log(index) // 0
```

## 问题

你还知道哪些可以查找数组中对象的方法
