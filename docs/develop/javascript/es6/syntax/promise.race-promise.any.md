# promise.race vs promise.any

## promise.race()

适用场景：在请求数据时，显示加载动画

```js
function getUserInfo(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('user data!'), Math.floor(900 * Math.random()))
  })
}
function showUserInfo(user) {
  return getUserInfo().then((info) => {
    console.log('user info:', info)
    return true
  })
}
function showSpinner() {
  console.log('please wait…')
}
function timeout(delay, result) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(result), delay)
  })
}
Promise.race([showUserInfo(), timeout(300)]).then((displayed) => {
  if (!displayed) showSpinner()
})
```

## promise.any()

适用场景：适合用在通过不同路径请求同一个资源的需求上，可以使用 Promise.any()方法从最快的服务器接收响应

```js
const promise1 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, 'promise 1 rejected')
})
const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 400, 'promise 2 resolved at 400 ms')
})
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 700, 'promise 3 resolved at 800 ms')
})
;(async () => {
  try {
    let value = await Promise.any([promise1, promise2, promise3])
    console.log(value)
  } catch (error) {
    console.log(error)
  }
})() // "promise 2 resolved at 400 ms"
```

## 问题

我们了解了 promise.race 和 promise.any，那么如果创造一个可取消的 promise 使用哪个呢？
