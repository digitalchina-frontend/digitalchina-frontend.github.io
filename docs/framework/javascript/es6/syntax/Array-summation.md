# 数组求和

## for 循环 （不推荐）

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let sum = 0
for (var i = 0; i < arr.length; i++) {
  sum += arr[i]
}
console.log(sum)
```

## reduce 求和（推荐）

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const sum = arr.reduce((acc, cur) => acc + cur, 0)
console.log(sum)
```

## 问题

数组中有 NaN 或者 undefined 时还能正常相加吗
