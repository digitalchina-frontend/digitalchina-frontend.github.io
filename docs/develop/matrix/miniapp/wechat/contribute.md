# 贡献指南

## 准备工作

1. 安装 [node.js](https://nodejs.org/zh-cn/)
2. 安装 [git](https://git-scm.com/downloads)
3. 安装 [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)

## 背景

本项目主要是基于开发中遇到的各个业务场景来进行代码实现，并配有详细的文档解说，旨在小白开发中能参考我们业务场景提高工作效率、减少学习成本

## 贡献流程

### 1.fork 主仓库

- [访问小程序仓库](https://github.com/digitalchina-frontend/matrix-miniapp)并`fork`它

  ![fork](/images/wacth-contribute/fork.png)

### 2. fork 后的仓库 clone 到电脑

- 在自己账户中找到 fork 的仓库克隆到电脑安装依赖

  ```bash
  git clone https:/自己的账户名/github.com//matrix-wechat-app.git

  npm i
  ```

### 3. 创建分支运行项目

- 首先使用微信开发者工具导入项目，使用自己的 AppID 打开项目

- 点击编译运行程序观看效果

- 基于 main 分支创建自己的分支，格式 pr/< xxx >

  ```bash
  git checkout -b pr/< xxx >
  ```

### 4. 了解步骤贡献代码

- 敏捷开发---首先我们提出了很多待办故事，每个故事都是现实开发中常遇到的问题,

  ![kanban](/images/wacth-contribute//kanban.png)

- issues---项目中已集成 issues 模板，代码中有什么问题或者新想法都可以在其中提出来我们进行讨论

  ![issues](/images/wacth-contribute//issues.png)

- commit 规范---基于项目使用了 git-cz 帮助编写 commit，并添加了检查不合法提交，推荐使用 npm run commit 或 npx git-cz 进行提交

  ![commit](/images/wacth-contribute//commit.png)

### 5. 工作流程

- 首先查看看板挑选待办故事

- 提出 issues 进行讨论这个业务场景的可行性和要具备的功能

- 更新看板故事

- 构思业务场景如何实现，写出一个简单的路文档

- 按照文档实现 demo

- 提交 pr

### 6. 发起 pr

- npm run commit 提交你的更改

- 将修改提交到远程仓库 git push

- 在 fork 后的仓库中点击`Compare & pull request`

- 在提交拉取请求之前,添加描述性标题和描述!
