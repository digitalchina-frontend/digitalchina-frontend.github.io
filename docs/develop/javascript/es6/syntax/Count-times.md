# 计算数组中元素出现次数

这里我们将来学习如何计算数组中元素出现的次数。

## for of 循环（不推荐）

在 for...of 循环期间，检查元素是否已经在对象中；如果是在的，则将其值加一。否则，它是添加到对象的新元素。

```js
const myArray = [1, 2, 4, 3, 3, 5, 5, 6, 3, 4, 6]
const counts = {}

for (const num of myArray) {
  counts[num] = counts[num] ? counts[num] + 1 : 1
}
console.log(counts[1], counts[2], counts[3], counts[4], counts[5]，counts[6])
```

当然这有很大的局限性，下面我们用 reduce 实现一下

## Array.prototype.reduce（推荐）

Array.prototype.reduce 接受两个参数：一个回调函数和一个初始值。将初始值设置为 Object 时，可以将该对象的属性设置为数组元素。

```js
const arr = [1, 2, 4, 3, 3, 5, 5, 6, 3, 4, 6]
const myArray = arr.reduce(function (accumulator, currentValue) {
  accumulator[currentValue] = ++accumulator[currentValue] || 1
  return accumulator
}, {})
console.log(myArray)
```

## 问题

Array.prototype.reduce 除了计算数组中元素次数还有哪些用法？
