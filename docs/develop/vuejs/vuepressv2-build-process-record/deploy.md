# 部署

## 配置 GitHub Pages

1. 访问 GitHub 仓库，点击 Settings 栏；
2. 在 Pages 栏目下，使用 Deploy from a branch 方式，设置 master 分支为部署分支。

配置完成后，GitHub 会使用最新的 master 分支源代码作为 GitHub Page 的静态资源，并在 master 分支更新时自动触发 Action 进行部署。

完整的 GitHub Page 配置教程可以参考：[GitHub Pages](https://pages.github.com/)。

## 方式一：手动构建

### 构建静态文件

```sh
yarn docs:build
```

### 推送静态文件至 master 分支

- 初始化 git submodule

```sh
cd docs/.vuepress/dist
git init
```

- 推送代码

```sh
git add -A
git commit -m 'deploy'
git push -f git@github.com:digitalchina-frontend/digitalchina-frontend.github.io.git master
```

访问 [GitHub Actions](https://github.com/digitalchina-frontend/digitalchina-frontend.github.io/actions) 以查看部署进度。

### 使用脚本部署

- 创建文件 `deploy.sh` 并输入以下内容：

```sh
 #!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:digitalchina-frontend/digitalchina-frontend.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
```

- 添加至 `package.json`

```json
{
  "scripts": {
    "deploy": "sh ./deploy.sh"
  }
}
```

## 方式二：持续集成

1. Github 进入 Settings - Actions - General
2. 配置 Workflow permissions 为 Read and write permissions 权限
3. 创建文件 `/.github/workflows/docs.yml`
4. 参考 [官方文档](https://docs.github.com/zh/actions/using-workflows) 配置工作流：

- 触发时机：发布 release 时（降低部署频率）
- 部署步骤：
  - 检出代码
  - 搭建 Node 环境
  - 安装依赖包并构建 docs 工程
  - 部署至 master 分支

```yaml
name: Build and Deploy VuePress Site

# 控制工作流触发的时机
on:
  # 在版本状态为 published 时运行工作流
  release:
    types: [published]

  # 允许从 Actions tab 手动触发工作流
  workflow_dispatch:

# 一个工作流由一个或多个可并行或串行执行的 jobs 组成
jobs:
  # 这个工作流只包含一个名为 "build-and-deploy" 的 job
  build-and-deploy:
    # job 的运行环境类型
    runs-on: ubuntu-latest

    # Steps 表示 job 中将要执行的一系列任务
    steps:
      # 在 $GITHUB_WORKSPACE 下检出仓库代码
      - name: Checkout 🛎️
        uses: actions/checkout@v3
        with:
          fetch-depth: 0

      # 搭建 Node 环境
      - name: Setup Node.js 🔧
        uses: actions/setup-node@v3
        with:
          node-version: 16
          cache: 'npm'

      # 安装依赖包并构建
      - name: Install and Build 🔧
        run: |
          npm i
          npm run build:docs
      # 部署至 master 分支
      - name: Deploy 🚀
        uses: crazy-max/ghaction-github-pages@v3.1.0
        with:
          target_branch: master
          build_dir: docs/.vuepress/dist
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
