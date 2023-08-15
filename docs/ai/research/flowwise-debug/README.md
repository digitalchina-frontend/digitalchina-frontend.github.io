---
sidebar: auto
---

# Flowise 本地调试指南

Flowise 是一个具备 3 个不同模块的 monorepo 工程，这 3 个模块分别负责：

- server: Node API 后端服务
- ui: React 前端
- components: Langchain 组件

## 环境要求

- Node.js v16 +
- 安装 yarn v1：

```sh
npm i -g yarn
```

## 开发环境准备

1. Fork [Flowise Github Repository](https://github.com/FlowiseAI/Flowise)
2. Clone 你 Fork 的仓库并 cd 到项目根目录
3. 创建并切换到一个分支，名字随意
4. 安装依赖：
   ```sh
   yarn install
   ```
   :::tip
   安装过程可能要 10 分钟左右，请耐心等待
   :::
5. 构建代码：
   ```sh
   yarn build
   ```
6. 在 [http://localhost:3000](http://localhost:3000) 上启动应用（非开发模式）：
   ```sh
   yarn start
   ```
7. 【可选】配置环境变量：参考 [环境变量](#环境变量配置【非必须】)

8. 使用开发模式启动项目：

   ```sh
   yarn dev
   ```

   :::tip 在开发模式下
   对 `packages/ui` 或 `packages/server` 的所有改动会更新到 [http://localhost:8080](http://localhost:8080)

   如果有对 `packages/components` 的改动，需要重新执行 `yarn build` 使其生效
   :::

## 调试后端代码

1. 在 `.vscode` 目录下创建文件 `launch.json`
2. 在 configurations 数组里创建一个配置对象，主要关注以下配置：
   - type：配置类型
   - name：显示在启动下拉菜单中的名称
   - cwd：执行启动命令的绝对路径，通常会用到表示 vscode 当前工作路径的变量 `workspaceFolder`
   - runtimeExecutable：用什么命令启动，默认为 `node`
   - runtimeArgs：启动命令的参数列表
3. 根据 IntelliSense 设置其他你需要的配置，hover 配置选项可以看到说明
4. 示例配置（启动命令为 yarn dev）：

```json
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Backend",
      "skipFiles": ["<node_internals>/**"],
      "runtimeExecutable": "yarn",
      "runtimeArgs": ["dev"],
      "cwd": "${workspaceFolder}"
    }
  ]
}
```

5. 侧边栏切换至 Run and Debug 一栏，在下拉菜单中选择我们的配置，F5 启动调试
6. 在 `packages/server` 中打断点测试，重启调试后能够正常进入断点即可

## 调试前端代码

1. 这里演示用 `attach` 模式调试前端，因此要先执行 `yarn dev` 手动用开发模式启动前端工程
2. 打开 `.vscode/launch.json` 文件，在 configurations 数组中添加一个配置对象
3. 主要关注以下配置：
   - type：配置类型，这里使用 chrome 而不是 node
   - request：调试的请求类型，可选项为 launch 和 attach，这里选择 attach
   - port：用于远程调试浏览器的端口，chrome 推荐的端口为 9222；注意：这个端口不是前端工程的运行端口，而是和浏览器通信的调试用端口
   - url： 要调试的前端应用的 url，如果不是本地 url 相当于远程调试（远程调试还有一些关键配置，这里不演示）
   - webRoot：表明在哪个本地目录下寻找连接到的进程正在运行的代码（不是构建后的代码，是源代码路径）
4. 示例配置：

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "name": "Launch Frontend",
      "request": "attach",
      "port": 9222,
      "url": "http://localhost:8080",
      "webRoot": "${workspaceFolder}\\packages\\ui\\src"
    }
  ]
}
```

5. 侧边栏切换至 Run and Debug 一栏，在下拉菜单中选择我们的配置，F5 启动调试
6. 在 `packages/ui` 中打断点测试，重启调试后能够正常进入断点即可

## 环境变量配置【非必须】

分别在 `packages/ui` 和 `packages/server` 下创建 `.env` 文件可以配置前端和后端应用的环境变量，所有环境变量参考 [environment-variables](https://docs.flowiseai.com/environment-variables)

- `packages/ui` 环境变量配置示例：

  ```
  PORT=8080

  ```

- `packages/server` 环境变量配置示例：

  ```
  PORT=3000
  OVERRIDE_DATABASE=true
  DATABASE_TYPE=sqlite
  # DATABASE_PATH=/your_database_path/.flowise
  # When database is not sqlite
  # DATABASE_PORT=""
  # DATABASE_HOST=""
  # DATABASE_NAME="flowise"
  # DATABASE_USER=""
  # DATABASE_PASSWORD=""

  # FLOWISE_USERNAME=user
  # FLOWISE_PASSWORD=1234
  # DEBUG=true
  # APIKEY_PATH=/your_api_key_path/.flowise
  # LOG_PATH=/your_log_path/.flowise/logs
  # LOG_LEVEL=debug (error | warn | info | verbose | debug)
  # EXECUTION_MODE=main (child | main)
  # TOOL_FUNCTION_BUILTIN_DEP=crypto,fs
  # TOOL_FUNCTION_EXTERNAL_DEP=moment,lodash

  ```
