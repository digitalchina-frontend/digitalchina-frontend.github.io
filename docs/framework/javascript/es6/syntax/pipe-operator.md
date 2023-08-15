# 管道操作符

## 链式函数调用

```js
const pipe = (...args) => args.reduce((acc, el) => el(acc))
const title = 'Front End Interview'
const toLowerCase = (str) => str.toLowerCase()
const addHyphens = (str) => str.replace(/\s/g, '-')
console.log(pipe(title, toLowerCase, addHyphens)) // "front-end-interview"
```

## 管道操作符（推荐）

现如今管道操作符还在提案阶段，所有浏览器不兼容

```js
const pipe = (...args) => args.reduce((acc, el) => el(acc))
const title = 'Front End Interview'
const toLowerCase = (str) => str.toLowerCase()
const addHyphens = (str) => str.replace(/\s/g, '-')
console.log(title |> toLowerCase |> addHyphens)
```
