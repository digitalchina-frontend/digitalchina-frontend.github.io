# 创造一个可取消的 promise

## Promise.reject 不推荐

```js
function getPromise() {
  let _res, _rej
  const promise = new Promise((resolve, reject) => {
    _res = resolve
    _rej = reject
    setTimeout(() => {
      resolve('123')
    }, 5000)
  })
  return {
    promise,
    abort: () => {
      _rej({
        name: 'abort',
        message: 'the promise is aborted',
        aborted: true,
      })
    },
  }
}
const { promise, abort } = getPromise()
promise.then((value) => console.log(value)).catch((e) => console.log(e))
abort()
```

## 推荐

```js
function getPromiseWithAbort(p) {
  let obj = {}
  let p1 = new Promise(function (resolve, reject) {
    obj.abort = reject
  })
  obj.promise = Promise.race([p, p1])
  return obj
}

var promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve('123')
  }, 5000)
})

var obj = getPromiseWithAbort(promise)

obj.promise
  .then((res) => {
    console.log(res)
  })
  .catch((e) => {
    console.log(e)
  })

//如果要取消
obj.abort('取消执行')
```

## 问题

Promise.race 与 Promise.any 方法有什么区别
