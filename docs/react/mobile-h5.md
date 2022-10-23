# Mobile H5 开发脚手架搭建

## 问题

搭建一个 Mobile H5 开发脚手架。

## 设计思想

盖两层楼的房子 和 盖 20 层楼的房子 乃至 200 层楼的房子的方法必然是完全不同的。

当问题足够大 任何 技术领域都是需要 设计思想以及架构来支撑 整个应用的研发。

### 高内聚，低耦合与分层

以物理文件为单位，内聚专一的功能，继而暴露成组件 再而 和其他组件 的 组合形成 模块乃至页面。 组件与组件之间 基于 接口协议进行 组合。接口与协议不轻易变化。

分层 适合举例子说明， 例如 我会选择在不同的 响应式方案 之间进行切换， 不管怎么切换 我希望 对整个程序中尽可能少的文件带来影响。 甚至把这个影响范围减小到 一个文件。 这个实现起来需要 满足上一段的设计思想。

这种跨 页面级别的 功能 和 页面 之间 有明显的边界 这个就叫 分层。每个层次里面聚焦的问题和业务完全不同。但是也可以是同一个业务问题的不同技术维度。

### 代理

代理是很多著名的 前端库的 主要设计思想。 例如 `redux` 和 `react-query` 还有 `axios`， 本质上来说，以前我们手写代码完成同样的事情 例如 对应 `redux` 我们需要写管理程序级别的状态的代码， 对应 `react-query` 我们需要写管理数据请求的代码， 以及 对应 `axios` 管理 我们需要些具体请求配置发送异常处理的代码。

这些工作过去我们自己实现 和 UI 业务高度耦合， 没有进一步做更高层次的抽象。 而这不仅仅让前端的程序不容易测试，因为每一块业务都深度依赖于其他业务， 你很难构造测试上下文。同时没有抽象你也会编写大量重复的代码。

这好比 顾客要直面餐厅的厨师，如果餐厅很小小到一次只能服务一个客户这不是问题。否则 这可是非常糟糕的餐厅。

举一个经典的例子， `Redux 的 Action` 就是一个非常棒的抽象。 它把 DOM 的事件模型 抽象成了一个 `action` 这可不得了，了不得。 想象一下以前你需要 手动触发的事件 因为有了 `抽象代理`， 我们可以完全脱离 DOM 的情况下去 测试 事件发生后的业务逻辑。

同样的 `React-Query` 作为 请求发送的代理，接管了 前端程序发送请求，什么时候发，发送的策略它全权帮你接管。 大大提高了 用户体验。

## 架构设计

架构就是井井有条的堆砌。 我们从基本和业务需求无关的方面开始，逐步深入到和需求相关的架构部分。

### 渲染方案

现代前端就渲染机制而言，一般分为 [CSR 客户端渲染]()， [SSR 服务端渲染]()， [SSG 静态网站生成]() ，[增量静态生成]() 四种类型。

:::warning
项目交付给甲方一定要考虑客户的生产环境和后期运维团队能力。 技术上最优方案，并不一定是可行方案。
:::

考虑到 部署的问题，我们选择 [CSR 客户端渲染]()。

### 组件库

:::tip
前端 核心的工作是 渲染， 选择合适的 组件库 相当于把 一个项目最核心的工作交给了可靠的开源组件库来完成。

前端项目客户要的是业务逻辑，而不是组件库。一个项目大部分工作其实不是实现渲染，而是实现前端业务逻辑以及 常常还要实现数据层面的业务逻辑。
:::

以项目交付为目标，我们不会自己开发组件库，所以组件库的选择往往会反过来决定 `技术栈` 的选择，考虑到 开发成本 我们常选择 国产的组件库，例如 用 [Ant Mobile](https://mobile.ant.design/zh) 来打底。 结合到该项目的实际需求，我们还加入了 [AntV f2](https://f2.antv.vision/zh) 组件库 来做 报表渲染。也正因为组件库的选择， 我们选择了 `React` 技术栈。

当然 `Vue` 技术栈也有相应的 `移动组件库` 可以选择。这里我们暂且不去深究。

### 前端脚手架

脚手架包含什么? 可以从前端到底是干啥来考虑。

- 渲染

  - 组件库
    - `antd-mobile`
    - `antv f2`
  - 技术栈
    - `react 18`

- 程序结构

  - 页面
    - 路由
      - `react-router`
  - 布局
    - 可以稍后决定

- 交互
  - 响应式
    - 可以稍后决定
  - 数据请求
    - `axios`
  - 数据代理
    - `react-query`

到此为止一个最基础的脚手架需要的 `原材料` 都基本确定了。这个离 `无数个` 还差很远， 但是 井井有条 堆砌的第一步可以就从此开始。

## 基础脚手架实施

### 基础脚手架

:::tip
`vite` 也是 很好的选择
:::

基于 [create react app](https://create-react-app.dev/docs/getting-started) 创建的 基于 [React 18.2]() 的开发环境

```shell
npx create-react-app my-app
cd my-app
yarn start
```

### 程序结构路由

基于 [react router](https://reactrouter.com/docs/en/v6/getting-started/tutorial) 最新版本 `v6`

- 安装

```shell
cd my-app
yarn add react-router-dom@6
```

- 范例

  - [嵌套路由 与 Outlet](https://reactrouter.com/docs/en/v6/getting-started/tutorial#nested-routes)

  - [commit](https://github.com/fancn21th/1-React-Mobile-H5/commit/54d4e1912ff0162f968e75fef4120a86364ef091)

- 目录结构

  > src 目录

  ```shell
  .
  ├── App.css
  ├── App.js
  ├── App.test.js
  ├── components
  ├── hooks
  ├── index.css
  ├── index.js
  ├── layouts
  ├── pages
  │   ├── Bar
  │   │   └── index.js
  │   └── Foo
  │       └── index.js
  ├── reportWebVitals.js
  ├── setupTests.js
  └── utils
  ```

### Ant Design Mobile v5

- 安装

```shell
yarn add antd-mobile
```

- 范例

  - [commit](https://github.com/fancn21th/1-React-Mobile-H5/commit/8b73477ce9c7dc7a2d4385470a58cecd3aa65841)

### AntV F2

- 安装

参考 [如何在 React 中使用](https://f2.antv.vision/zh/docs/tutorial/react)

```shell
yarn add @antv/f2
yarn add @antv/f2-react
```

- 范例

  - [commit](https://github.com/fancn21th/1-React-Mobile-H5/pull/2/commits/b61e4a8196ddb2b14585b6f49ab3aa986c1bb890)

### 文件规范（文件夹）

### Mock Server 代理

[Proxying](https://create-react-app.dev/docs/proxying-api-requests-in-development/)

## 架构设计文档参考

- [Understanding Next.js Data Fetching](https://theodorusclarence.com/blog/nextjs-fetch-method#csr-vs-ssr)

- [react-admin](https://github.com/marmelab/react-admin)
