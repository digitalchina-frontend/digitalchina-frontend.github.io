# 部署

## 配置 GitHub Pages

1. 访问 GitHub 仓库，点击 Settings 栏；
2. 在 Pages 栏目下，使用 Deploy from a branch 方式，设置 master 分支为部署分支。

配置完成后，GitHub 会使用最新的 master 分支源代码作为 GitHub Page 的静态资源，并在 master 分支更新时自动触发 Action 进行部署。

完整的 GitHub Page 配置教程可以参考：[GitHub Pages](https://pages.github.com/)。

## 构建静态文件

```sh
yarn docs:build
```

## 推送静态文件至 master 分支

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

## 使用脚本部署

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
