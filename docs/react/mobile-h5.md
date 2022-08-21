# Mobile H5 开发脚手架搭建

## 问题

搭建一个 Mobile H5 开发脚手架。

## 方案

### 架构设计

- 架构设计

  前端架构 一般分为 [CSR 客户端渲染]()， [SSR 服务端渲染]()， [SSG 静态网站生成]() ，[增量静态生成]() 四种类型。

  :::warning
  项目交付给甲方一定要考虑客户的生产环境和后期运维团队能力。 技术上最优方案，并不一定是可行方案。
  :::

  考虑到 部署的问题，我们选择 [CSR 客户端渲染]()。

- 组件库

  组件库的选择往往会反过来决定 `技术栈` 的选择，考虑到 开发成本 我们常选择 国产的组件库，例如 用 [Ant Mobile](https://mobile.ant.design/zh) 来打底。 结合到该项目的实际需求，我们还加入了 [AntV f2](https://f2.antv.vision/zh) 组件库 来做 报表渲染。也正因为组件库的选择， 我们选择了 `React` 技术栈。

  :::tip
  前端 核心的工作是 渲染， 选择合适的 组件库 相当于把 一个项目最核心的工作交给了可靠的开源组件库来完成。

  前端项目客户要的是业务逻辑，而不是组件库。一个项目大部分工作其实不是实现渲染，而是实现业务逻辑。
  :::

- 前端脚手架

  脚手架包含什么?

  - 基础脚手架
    - 前端技术栈（React）
    - 包括 开发服务器，代码打包 等等
  - 组件库 （上文覆盖）
    - UI 组件库
    - 工具 组件库
  - 路由 （React-Router）
    - 菜单联动
    - 布局
    - 权限访问
  - 布局

  - 其他
    - ...

## 实施

::: tip
基于 `yarn`
:::

### 基础脚手架

[create react app](https://create-react-app.dev/docs/getting-started) 创建的 基于 [React 18.2]()

```shell
npx create-react-app my-app
cd my-app
yarn start
```

### 路由

[react router v6](https://reactrouter.com/docs/en/v6/getting-started/tutorial)

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

## 参考

- [Understanding Next.js Data Fetching](https://theodorusclarence.com/blog/nextjs-fetch-method#csr-vs-ssr)

- [react-admin](https://github.com/marmelab/react-admin)
