# flat 多维数组扁平化

当出现一个多维数组如何做数据处理

## 利用递归实现扁平化（不推荐）

```js
let arr = [1, [2, [3, 4, 5]]]
function flatten(arr) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]))
    } else {
      result.push(arr[i])
    }
  }
  return result
}
console.log(flatten(arr)) //  [1, 2, 3, 4，5]
```

## 利用 Array.prototype.flat（推荐）

Array.prototype.flat()接收一个参数，参数是指定要提取嵌套数组的深度，默认为 1

```js
let arr = [1, [2, [3, 4, 5]]]
function flatten(arr) {
  return arr.flat(Infinity)
}
console.log(flatten(arr)) //  [1, 2, 3, 4，5]
```

## 问题

更深层次多维数组、更复杂的还能用 flat 吗？ 比如[1, [2, [3, [1, 2, 3], 4, 5, [6, 7, [8, 9, 0]]]], [1, 2, [3, 4]]]
