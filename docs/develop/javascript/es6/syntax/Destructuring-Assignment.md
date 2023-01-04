# 对象解构

如何将 js 对象的各个属性值赋值给另外单独的变量？

## 不推荐方式

```
const user = {
    name: 'zhangsan',
    age: 10,
    gender: 'male'
};
const name = user.name;
const age = user.age;
const gender = user.gender;
```

## 推荐方式: 对象解构

```
const user = {
    name: 'zhangsan',
    age: 10,
    gender: 'male'
};
const { name, age, gender } = user
```

## 问题

假设前端通过 API 调用返回了 response 如下，如何获取 data 下的 id，title，fileName 等字段?

```
{
  "code": 200,
  "msg": "SUCCESS",
  "timestamp": 1671778459028,
  "data": {
    "id": 1,
    "title": "测试“,
    "fileName": "test.pdf",
    "score": 100,
    "number": 10,
    "questions": [],
    "createBy": "admin",
    "createTime": "2022-12-23 14:11:42"
  },
  "success": true
}
```
