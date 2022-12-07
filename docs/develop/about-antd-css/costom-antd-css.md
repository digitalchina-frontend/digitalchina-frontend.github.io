# 基于 Ant Design Pro of Vue 定制化 CSS

## 问题

如何在 antd pro 框架上实现样式自定义

## 描述

- antd 已经有完善的 UI 组件及设计风格，但在项目中客户经常提出需要有独特的 UI 设计，如不同的主题色、布局、卡片等，本次不涉及探讨 antd 设计系统，仅分享从哪些角度可以对组件进行样式修改。
- 本次演示代码环境
  - ant design vue 1.7.8
  - vue antd pro 3.0.2
  - less
  - vue/cli 4.5.17

## 实操

### 全局修改

- antd 官网介绍了几种修改已定义变量的方法，在项目里为了方便查看我个人习惯集中修改 `vue.config.js` 。这里可以对任何 antd 已经定义好的[变量](https://github.com/vueComponent/ant-design-vue/blob/master/components/style/themes/default.less)进行全局修改

  ```js
    css: {
    loaderOptions: {
      less: {
        modifyVars: {
          // less vars，customize ant design theme

          'primary-color': '#21B0AF',
          // 'link-color': '#F5222D',
          'border-radius-base': '2px',
          'layout-header-background': '#21B0AF',
          'menu-dark-item-active-bg': '#f3fbfb',
          'menu-dark-submenu-bg': '#21B0AF',
          'card-shadow': '0px 4px 28px rgba(68, 57, 168, 0.15)',
          'card-head-color': '#fff',
          'card-head-background': 'linear-gradient(180deg, #21B0AF 8.33%, #26D3D2 100%)',
        },
        // DO NOT REMOVE THIS LINE
        javascriptEnabled: true,
      },
    },
  },
  ```

- 对于超出变量外其余的样式覆盖，我通常选在 `src/global.js` 进行覆盖修改，也可以自己定义文件在 `main.js` 中引入。需要注意的是，由于 antd 组件 css 使用 `less` ，对控制台中仅选中元素 类名修改会由于权重问题不生效，个人一般不建议直接使用 `!important`，可以参照原组件样式层级结构来修改。
  ```less
  // src/global.js 修改菜单样式
  .ant-menu {
    &-dark&-inline &-item,
    &-dark&-inline &-submenu-title {
      border-radius: 20px 0 0 20px;
    }
    &-dark &-item-selected {
      > a,
      > a:hover {
        color: #21b0af;
      }
    }
    &&-dark &-item-selected,
    &-submenu-popup&-dark &-item-selected {
      border-radius: 20px 0 0 20px;
    }
  }
  ```

### 单页面修改

单页面修改时需要避免对全局造成污染，需要使用 `scoped` 局部样式方案。同时为了覆盖 antd 组件类名，需 使用 `scss, less` 搭配 `/deep/` 进行样式穿透，或使用 `css` 搭配 `<<<` 进行样式穿透。

```less
<style lang="less" scoped>
  .ant-pro-pages-account-projects-cardList {
    margin-top: 24px;

    /deep/ .ant-card-meta-title {
      margin-bottom: 4px;
    }

    /deep/ .ant-card-meta-description {
      height: 44px;
      overflow: hidden;
      line-height: 22px;
    }

    .cardItemContent {
      display: flex;
      height: 20px;
      margin-top: 16px;
      margin-bottom: -4px;
      line-height: 20px;

      > span {
        flex: 1 1;
        color: rgba(0,0,0,.45);
        font-size: 12px;
      }

      /deep/ .ant-pro-avatar-list {
        flex: 0 1 auto;
      }
    }
  }
</style>
```

## 参考

- [https://pro.antdv.com/docs/style](https://pro.antdv.com/docs/style)
- [https://1x.antdv.com/docs/vue/customize-theme-cn/](https://1x.antdv.com/docs/vue/customize-theme-cn/)
