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

  - 组件库 （上文覆盖）
  - 前端框架 （React）
  - 路由 （React-Router）
    - 菜单联动
    - 布局
    - 权限访问
  - 布局
    - 菜单
  - 其他
    - ...

## 实施

### create-react-app

## 参考

- [Understanding Next.js Data Fetching](https://theodorusclarence.com/blog/nextjs-fetch-method#csr-vs-ssr)

- [react-admin](https://github.com/marmelab/react-admin)
