# 判断一个数是否为 2 的幂

## 暴力解法（不推荐）

```js
function check(num) {
  if (num != 1) {
    while (num != 1) {
      if (num % 2 == 0) {
        num = num / 2
      } else {
        return false
      }
    }
    return true
  } else {
    return true
  }
}
console.log(check(xxx))
```

## 利用位运算符（推荐）

```js
function fn(num) {
  if (num < 1) {
    return false
  }
  return (num & (num - 1)) === 0
}
console.log(fn(xxx))
```

## 问题

一个数是否为 2 的幂可以利用位运算符判断，其它数的呢？比如 3 的幂
