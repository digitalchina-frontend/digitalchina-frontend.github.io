# 执行时间

## new Date() （不推荐）

```js
const t0 = new Date()
for (var i = 0; i < 10000; i++) {
  m++
}
const t1 = new Date()
console.log(t1 - t0)
```

## performance.now() （推荐）

```js
const t0 = window.performance.now()
var m = 0
for (var i = 0; i < 10000; i++) {
  m++
}
const t1 = window.performance.now()
console.log(t1 - t0)
```

## 问题

你还知道哪些测试性能的方法？
