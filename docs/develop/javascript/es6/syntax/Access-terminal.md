# 访问数组末尾段元素

## array[xxx] 获取元素（不推荐）

```js
const array = [1, 2, 3, 4, 5]

array[0] // => 1

array[1] // => 2

array[array.length - 1] // => 5

array[array.length - 2] // => 4
```

array[xxx]方法获取数组元素是可行的

## array.at 获取元素（推荐）

at() 方法接收一个整数值并返回该索引对应的元素，允许正数和负数。负整数从数组中的最后一个元素开始倒数。

```js
const array = [1, 2, 3, 4, 5]

array.at(0) // =>1

array.at(1) // =>2

array.at(-1) // =>5

array.at(-2) // =>4
```

## 问题

如果想同时获取数组中多个元素如何实现？
