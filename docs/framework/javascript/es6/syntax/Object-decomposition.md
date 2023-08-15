# 将对象分解为变量

## 错误写法

以下写法会报错；如果省略 let/const，则抛出 TypeError。

```js
const obj = {
  a: 1,
  b: 2,
}
let a, b
{ a, b } = obj
console.log(a, b);
```

## 正确写法

```js
const obj = {
  a: 1,
  b: 2,
}
let a, b
;({ a, b } = obj)
console.log(a, b)
```
