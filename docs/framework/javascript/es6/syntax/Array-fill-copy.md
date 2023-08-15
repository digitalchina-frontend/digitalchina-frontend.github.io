# 数组复制填充

## fill()方法

fill() 方法用于将一个固定值替换数组的元素。

```js
array.fill(value, start, end)
```

value 必需。填充的值。
start 可选。开始填充位置。
end 可选。停止填充位置 (默认为 array.length)

```js
var arr = [1, 2, 3, 4, 5, 6]
var newArr = arr.fill(1, 2, 4)
console.log(newArr) // [1, 2, 1, 1, 5, 6]
```

## copyWithin()方法

copyWithin() 方法用于从数组的指定位置拷贝元素到数组的另一个指定位置中。

```js
array.copyWithin(target, start, end)
```

target 必需。复制到指定目标索引位置。
start 可选。元素复制的起始位置。
end 可选。停止复制的索引位置 (默认为 array.length)。如果为负值，表示倒数。

```js
var arr = [1, 2, 3, 4, 5, 6]
var newArr = arr.copyWithin(0, 2, 5)
console.log(newArr) // [3, 4, 5, 4, 5, 6]
```

## 问题

copyWithin()和 slice()都是复制数组，那他们有什么区别吗？
