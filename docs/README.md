# VuePress V2 搭建过程记录

1. 安装

```
yarn init
yarn add -D vuepress@next
```

2. 添加脚本

```
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

3. 用 `vue` 的 [模板](https://erresen.github.io/vue/js/git/2020/07/08/vue-js-gitigore.html) 添加一个 `.gitignore` 文件，额外为 `VuePress` 添加以下内容：

```
# VuePress
.temp
.cache
```

4. 创建文档目录 `/docs` 用于存放文档内容

5. 创建并提交第一篇文档 `/docs/README.md`