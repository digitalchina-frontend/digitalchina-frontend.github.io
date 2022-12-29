# 创造一个可取消的延迟 promise

## 不推荐

```js
const delay = (delay, value) => {
  let timeout
  let _rejece = null
  const promise = new Promise((resolve, reject) => {
    _reject = reject
    timeout = setTimeout(resolve.delay, value)
  })
  return {
    promise,
    cancel: () => {
      if (!timeout) {
        return
      }
      clearTimeout(timeout)
      timeout = null
      _reject()
      _reject = null
    },
  }
}
```

## 推荐

```js
const delayed = delay(5000, value)

delayed.promise.then((value) => console.log(value)).catch(() => console.error('Promise rejected'))

delayed.cancel()
```

## 问题

Promise.race 与 Promise.any 方法有什么区别
