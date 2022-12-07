# VScode 下载与中文化

## 主题

这里主要教我们如何解决 VScode 下载慢的问题和了解 VScode 页面并且配置中文汉化版

<!-- ## 为什么选择 VScode

- 轻量级：VScode 是一款轻量级的编辑器，安装包小，且启动速度快，可以提高用户体验

- 开源、免费且功能强大，VScode 免费即可使用远程开发功能。

- 支持多种语言：支持几乎所有主流程序语言的语法高亮、智能代码补全、代码片段、代码对比 Diff、支持插件扩展并针对云端开发和网页开发做了优化

- 插件丰富：VScode 拥有丰富的插件系统，可以编辑 HTML、CSS、JS、TS、Vue、React 等前端代码和 JAVA、Python 等后端代码。

 -->

## VScode 下载与安装

- 首先点击下方链接，进入 VScode 官网可以选择下载安装程序或直接下载压缩包

  [https://code.visualstudio.com/Download](https://code.visualstudio.com/Download)。

  ![VScode-DownLoad](/images/VScode-DownLoad.png)

- 注：VScode 下载过程缓慢

  - 如图所示，暂停后复制链接地址

    ![VScode-DownLoad-Slow](/images/VScode-DownLoad-slow.png)

  - 将链接中的 `az764295.vo.msecnd.net` 替换为国内源 `vscode.cdn.azure.cn`即可。

    ![Vscode-DownLoad-replace](/images/Vscode-DownLoad-replace.png)

## VScode 了解基本界面配置中文汉化

- VScode 的默认语言是英语，如果不熟悉英语的同学，或者是希望更加熟练掌握 VScode 的小白同学可以选择配置 Chinese 语言插件，如下图所示，点击扩展包进行安装，搜索 Chinese 语言扩展包，安装完成之后需要重启程序

  ![chinese](/images/chinese.png)

- 首先我们来熟悉一下 VScode 基本操作、了解整个界面，如图所示

  ![panel](/images/panel.png)

  - 最左侧是活动栏，活动栏由上到下分别是打开侧边栏，搜索，使用 git，debug，使用插件；
  - 侧边栏，新建项目文件和文件夹；
  - 编辑栏，编写代码的区域；
  - 面板栏，从左到右依次为，问题，输出，调试栏，终端（terminal），最重要的是 terminal，用来输入相关命令；
  - 状态栏，点击错误和警告区域可以调出面板栏；
