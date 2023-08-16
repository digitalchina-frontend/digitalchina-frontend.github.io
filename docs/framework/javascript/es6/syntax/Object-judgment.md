# 判断对象是否存在某属性

## 点(.)或方括号方法([])（不推荐）

```js
const obj = {
  a: 1,
  b: undefined,
}
console.log(obj.a) // 1
console.log(obj.b) // undefined
```

## hasOwnProperty 或 in（推荐）

hasOwnProperty() 方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性

如果指定的属性在指定的对象或其原型链中，则 in 运算符返回 true

```js
const obj = {
  a: 1,
  b: undefined,
}
console.log('a' in obj) // true
console.log('b' in obj) // true

console.log(obj.hasOwnProperty('a')) // true
console.log(obj.hasOwnProperty('b')) // true
```

## 问题

hasOwnProperty 和 in 都能检测对象中是否存在某属性，那他们俩有什么区别呢？
