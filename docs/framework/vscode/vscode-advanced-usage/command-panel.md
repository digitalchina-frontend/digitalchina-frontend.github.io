# VScode 中命令面板的基本用法

Ctrl shift p 快捷键会显示命令面板，命令面板是一个特殊的 UI 组件，当你用快捷键打开命令面板后，命令面板 输入框会出现一个字符：>(大于号)，输入框出现不同字符有不同用处,我们可以将输入框中字符删除后输入 ? ,会罗列不同功能！

![command-panel](/images/command-panel.png)

### 全局命令

- 文件名，模糊查询，显示所有相关文件

- \>（大于号），用于显示所有可用命令，在输入框中输入汉字或英文即可查找到相应的命令

  ![search-setting](/images/search-setting.gif)

- \# 号，用于显示和跳转工作区中的”符号“（Symbols）。

- edt 是 edit（编辑）的缩写，输入 edt 和一个空格，命令面板就会显示所有已经打开的文件；而 edt active 则只会显示当前活动组中的文件。

  ![search-edt](/images/search-edt.gif)

- ext 是 extension（插件）的缩写，输入 ext 和一个空格，就可以进行插件的管理；ext install 则可以在命令面板中搜索和安装插件。

- task 和 debug 分别对应于任务和调试功能。

- term 是 terminal（终端）的缩写，你可以用这个命令来创建和管理终端实例。

- view 则是用于打开 VS Code 的各个 UI 组件。

### 编辑器命令

- @，显示或跳转到当前文件中的”符号“（Symbols）。在@符后添加冒号:则可以把符号按类别归类

- :（冒号），用于跳转到当前文件某一行。冒号前还可以跟文件名，跳转到要查询文件的某一行

  ![jump-row](/images/jump-row.gif)

### 命令面板设置

下面我们了解一下命令面板的一些设置快捷键打开命令面板 → 输入 settings→ 在搜索设置框中输入 `workbench.commandPalette`

![workbench.commandPalette](/images/workbench.commandPalette.gif)

第一个设置是保留多少个历史记录，第二个是再次打开面板时是否恢复上次输入内容
