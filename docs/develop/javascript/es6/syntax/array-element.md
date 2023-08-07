# 迭代数组元素

## keys() values() （不推荐）

```js
const arr1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']
for (let index of arr1.keys()) {
  console.log(index)
} // 0,1,2,3,4,5,6,7,8,9,10
for (let val of arr1.values()) {
  console.log(val)
} // a,b,c,d,e,f,g,h,i,j,k
```

## Array.entries() （推荐）

entries() 方法返回一个新的数组迭代器对象，该对象包含数组中每个索引的键/值对。

```js
const arr1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']
for (const [index, element] of arr1.entries()) {
  console.log(index, element)
}
//  0 'a'
//  1 'b'
//  2 'c'
//  3 'd'
//  4 'e'
//  5 'f'
//  6 'g'
//  7 'h'
//  8 'i'
//  9 'j'
//  10 'k'
```

## 问题

当数组内有空字符串时 entries()会返回什么？
