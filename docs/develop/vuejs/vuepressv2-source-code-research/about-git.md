# Git 相关

项目搭建的第一步往往是初始化 Git 仓库并且进行必要的配置，对于开源项目，还需要考虑：

- 团队成员所使用的操作系统带来的差异
- 开源协议的选择
- 规范化 issue 的提交形式

下面就 VuePress V2 在项目搭建阶段所做的配置进行介绍。

## .gitignore 介绍

`.gitignore` 文件是代码仓库的必要配置之一，用于告诉 Git 忽略哪些文件或目录。它通常用来忽略编译生成的文件、临时文件、日志文件以及第三方库文件。

常见的 `.gitignore` 配置有：

- 编译生成的文件

```
dist
build

# Typescript build info
*.tsbuildinfo

# vuepress build output
.vuepress/dist
```

- 临时文件

```
# parcel-bundler cache (https://parceljs.org/)
.cache
.parcel-cache

# Gatsby files
.cache/

# vuepress v2.x temp and cache directory
.temp
.cache
```

- 日志文件

```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*
.pnpm-debug.log*
```

- 第三方库文件

```
# Dependency directories
node_modules/
```

- 测试报告

```
# Test coverage files
coverage/
```

- 操作系统生成的文件

```
# MacOS Desktop Services Store
.DS_Store
```

完整的 `.gitignore` 模板可以参考：[.gitignore Node template](https://github.com/github/gitignore/blob/main/Node.gitignore)

## .gitattributes 介绍

`.gitattributes` 是一种用来定义 Git 项目中不同文件的 `Git Attributes` 的配置文件，可以影响到 Git 的多种行为细节。它位于 Git 项目的根目录下，代表了项目级配置，优先级较高。

在 `.gitattributes` 中，你可以通过设置文件路径模式和规则来配置 Git 的行为。例如:

- 设置文件编码
- 忽略特定文件或目录
- 设置文件换行符
- 启用文件历史记录修剪等。

`.gitattributes` 中的每一行配置都符合以下形式：

```
pattern attr1 attr2 ...
```

`Git Attributes` 可以影响到 Git 的部分行为，比如：

- 通过 `eol` 属性指定 `Checking-out & checking-in` 时应该用 `crlf` 还是 `lf` 作为行尾结束符；
- 通过 `binary` 属性指定 `Merge` 时是否保持本地分支的二进制文件内容不变。

:::tip
了解更多请参考：[gitattributes](https://git-scm.com/docs/gitattributes)
:::

### VuePress V2 `.gitattributes` 文件示例：

```
* text eol=lf
*.txt text eol=crlf

*.png binary
*.jpg binary
*.jpeg binary
*.ico binary
*.tff binary
*.woff binary
*.woff2 binary
```

其作用为：

- 除 `.txt` 外的所有文本文件使用 `lf` 作为行尾结束符
- `.txt` 文件使用 `crlf` 作为行尾结束符
- 图片、字体文件在合并时总是保留本地分支的版本

## 开源协议

LICENSE 文件描述开源协议，LICENSE 文件包含了有关版权所有者的信息、使用条款以及有关软件使用方式的任何限制。

LICENSE 文件通常存放在软件根目录下，供用户在使用该软件之前阅读。 它是一份重要文件，有助于保护软件创建者的权利，并确保以公平合法的方式使用软件。

常见的开源协议包括：

- MIT 许可证：这是一种较宽松的许可证，允许任何人自由使用、复制、修改和再发布软件。
- Apache 许可证 2.0：这是一种流行的许可证，允许任何人自由使用、复制、修改和再发布软件，但要求在使用和再发布软件时保留许可证声明和版权声明。
- GPL 许可证：这是一种流行的自由软件许可证，要求使用和再发布软件的人必须向软件使用者提供源代码。
- LGPL 许可证：这是一种较宽松的自由软件许可证，允许使用和再发布软件，但要求在使用和再发布软件时保留许可证声明和版权声明。
- BSD 许可证：这是一种较宽松的许可证，允许任何人自由使用、复制、修改和再发布软件，但要求在使用和再发布软件时保留许可证声明和版权声明。

## GitHub issue template

GitHub 问题模板是一个有用的工具，它：

- 可以为项目中的错误报告、功能请求和其他类型的问题提供一致的结构；
- 可以帮助确保重要信息不会被遗漏；
- 可以让项目维护者和贡献者更容易理解和分类问题；
- 可以帮助贡献者更好地推动项目向前发展

要创建一个 GitHub 问题模板，只需在 `.github/ISSUE_TEMPLATE/` 目录下创建模板文件即可，GitHub 问题模板有两种形式可选。

### 普通议题模板

为用户提供默认的内容，用户可以自由编辑；模板内容使用 Markdown 编写，模板元数据使用 YAML Frontmatter 编写，比如 `feature_request.md`：

```md
---
name: Feature request
about: Suggest an idea for this project
title: ''
labels: ''
assignees: ''
---

**Is your feature request related to a problem? Please describe.**
A clear and concise description of what the problem is. Ex. I'm always frustrated when [...]
```

:::tip
对于普通模板，除了用 Markdown 自定义模板外，还可以使用 GitHub Website 直接选用标准的问题模板，详细图文步骤请参考：[为仓库配置问题模板](https://docs.github.com/zh/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository)
:::

#### 效果图：

![issue-template](/images/vuepress-source-code-research/issue-template.png)

### 表单式议题模板（Beta）

以表单的形式为用户提供默认的内容结构，用户只能在表单允许的范围内编辑，不能随意更改内容结构；模板内容使用 YAML 配置，比如 `feature_request.yml`：

```yml
name: Bug Report
description: File a bug report
title: '[Bug]: '
labels: ['bug', 'triage']
assignees:
  - octocat
body:
  - type: input
    id: contact
    attributes:
      label: Contact Details
      description: How can we get in touch with you if we need more info?
      placeholder: ex. email@example.com
    validations:
      required: false
```

#### 效果图：

![issue-form-template](/images/vuepress-source-code-research/issue-form-template.png)
