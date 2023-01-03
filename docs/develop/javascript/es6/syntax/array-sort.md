# 数组排序

## 冒泡排序（不推荐）

```js
var arr = [3, 5, 1, 4, 2]
for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr.length; j++) {
    if (arr[j] > arr[j + 1]) {
      var tmp = arr[j]
      arr[j] = arr[j + 1]
      arr[j + 1] = tmp
      console.log('i=' + i, arr)
    }
  }
}
console.log('排序结束：', arr)
```

## sort 方法（推荐）

```js
var arr = [3, 5, 1, 4, 2]
var order = arr.sort()
console.log(order)
```

## 问题

sort 可以正序排序，那如何倒序排序呢？
