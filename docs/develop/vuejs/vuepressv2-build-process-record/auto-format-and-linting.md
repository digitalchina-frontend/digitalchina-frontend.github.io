# 自动格式化和 Linting

## 自动格式化

使用 Git hook 中的 `pre-commit` hook 可以在提交更改之前运行脚本，使用 Prettier 等代码格式化程序可以确保代码格式一致并遵循项目的样式指南。

Husky 是一个用于在 Git 项目中管理 hooks 的工具，它可以帮助你更方便地管理和使用 Git hook，并且可以让你的项目更加可维护。

使用 lint-staged 可以在提交代码之前仅对已修改文件运行 linting 或格式化工具，相比于全量的自动格式化，具有更快的提交速度和更好的可维护性，

下面介绍如何使用 Git hook 在提交前自动格式化暂存的 git 文件：

### 1. 安装 Prettier

```sh
yarn add --dev --exact prettier
```

### 2. 安装并配置 lint-staged

- 安装 lint-staged

```sh
npm install --save-dev lint-staged
```

- 配置 `package.json`

```json
{
  "lint-staged": {
    "*.{js,md,css,scss,yaml,yml}": ["prettier --write"]
  }
}
```

### 3. 添加 pre-commit hook

- 安装 Husky

```sh
npm install husky --save-dev
```

- 初始化

```sh
npm pkg set scripts.prepare="husky install"
npm run prepare
```

- 添加 pre-commit hook

```sh
npx husky add .husky/pre-commit "npx --no lint-staged"
```

### 4. 配置 `.editorconfig` 和 `.prettierrc.js`

#### 配置 EditorConfig

- EditorConfig 是用来定义代码编写风格的配置文件。它可以在不同的编辑器和 IDE 之间保持一致的代码风格，从而提高代码的可读性和可维护性。
- 创建 `.editorconfig` 文件，并输入以下内容：

```
# EditorConfig is awesome: https://EditorConfig.org

# top-most EditorConfig file
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

- 常见规则

| 规则                     | 说明                                   |
| ------------------------ | -------------------------------------- |
| indent_style             | 指定缩进使用的方式                     |
| indent_size              | 指定缩进使用的空格数或制表符数         |
| end_of_line              | 指定行末的换行符                       |
| charset                  | 指定文件的字符编码                     |
| trim_trailing_whitespace | 指定是否在保存文件时删除行尾的空白字符 |
| insert_final_newline     | 指定是否在文件末尾插入一个空行         |

#### 配置 .prettierrc

- 创建 `.prettierrc.js` 文件，并输入以下内容：

```js
module.exports = {
  endOfLine: 'lf',
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  printWidth: 100,
}
```

## commitlint

Commitlint 是一个用于检查 Git 提交信息的工具，它可以帮助你强制执行提交信息的格式规范，比如标题长度、标签使用等。

`EMOJI-LOG` 是一个 git commit 标准，`commitlint-config-emoji-log` 是一组适用于 `EMOJI-LOG` 标准的校验规则，详情参考 [EMOJI-LOG](https://github.com/ahmadawais/Emoji-Log)。

### 1. 安装 commitlint

```sh
yarn add -D @commitlint/cli commitlint-config-emoji-log
```

### 2. 配置 commitlint

```json
{
  "commitlint": {
    "extends": ["emoji-log"]
  }
}
```

### 3. 添加 commit-msg hook

```sh
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit $1'
```
