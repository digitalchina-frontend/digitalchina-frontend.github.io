# vscode常用功能

vscode作为主流的开发工具，本文会介绍一些变成中常用的配置。

## 代码格式化
项目团队合作时，多个人的代码风格不一致可能会导致代码难以维护和阅读。所以需要代码格式化规范代码统一风格。 vscode可以通过以下方式配置代码格式化:
[[toc]]

### 全局格式化配置
按照下图的步骤设置后，保存文件的时候会自动格式化代码![在这里插入图片描述](https://img-blog.csdnimg.cn/275755ed18c841e890cb8bb2350a21a5.png)

### 项目格式化配置
在配置项目之前可以把之前配置的全局格式化去掉勾选。然后在项目.vscode文件夹下(没有.vscode可手动创建)新建一个settings.json文件并添加以下配置。这个配置是简化过的，自测是正常工作的。想要更复杂的格式化可以自行搜索下其他的格式化配置。
```
{
    "editor.formatOnSave": true,
    "[javascript]": {
        "editor.defaultFormatter": "vscode.typescript-language-features"
    },
}
```
除了vscode提供的格式化之外，还有目前比较主流的prettier和eslint。都可以通过配置一定的规则达到统一代码风格的目的，想要学习它们用法的可以自行搜索学习。

## 空格和tab
编程中一般要求编辑器中显示tab和空格字符，防止出现tab和空格字符混用导致项目出错的情况。下面会介绍vscode中设置显示tab和空格字符方式。

1: 还是在setting中， 勾选Render Control Characters, Render Whitespace选择all选项![在这里插入图片描述](https://img-blog.csdnimg.cn/761457c697cc4baf80f89af5cd7c64bf.png)
2: 然后找到Detect Indentation，去掉勾选![在这里插入图片描述](https://img-blog.csdnimg.cn/3f6654f686c942749574f754866426fd.png)
3: 找到Insert Space，箭头那一项配置去掉勾选![在这里插入图片描述](https://img-blog.csdnimg.cn/48d671ed6c6e4a4ab375b92a2c4244fe.png)
配置都修改后再打开编辑器，可以看到tab符显示的`->`, 空格符显示的是`.`![在这里插入图片描述](https://img-blog.csdnimg.cn/7798b767913f422eb465708c491e6a24.png)

