# VScode 基本设置

VScode 有工作区设置和用户设置，那么这两个有什么区别呢

## 用户设置和工作区设置的区别

- 用户设置：其作用范围是在该用户打开的所有工程或文件

- 工作区设置：其本身是针对文件夹或项目的，是在打开的的文件夹下创建一个名为.vscode 的文件夹，里面包含着仅适用当前目录的 vscode 设置，工作区设置优先级会高于用户的设置

  ![settings-work](/images/setting-work.png)

  当你更改了工作区的第一个关于自动保存的设置后，立马会在此文件夹下生成一个.vscode 文件夹，里面是文件 settings.json,里面内容则是关于这个工程的所有配置

  ![settings-work](/images/settings-work-json.png)

一个项目是有多名开发者一起协同合作的话，那这个时候就会出现一些设置冲突对不对，在这种情况下，其实就是工作区设置突出作用的时候

## 如何打开 settings.json 文件

首先适用快捷键 ctrl+shift+p 打开命令面板 → 输入 setting json→ 选择 `Preferences: Open User Settings (JSON)`；如图所示便是 json 格式的配置文件，演示打开的是用户设置的 JSON 文件，选择`Preferences: Open Workspace Settings (JSON)`则打开工作区设置 JSON 文件

![setting-json](/images/settings-json.gif)

## JSON 文件配置

下面我们来配置一下常用的设置

### 字体

```json
    // 字号
    "editor.fontSize": 13,.

    //编辑器显示缩进参考线
    "editor.renderIndentGuides": true,
```

对于字号，通常屏幕推荐使用 13 码，不会特别大，展示信息量也足够。并且开启编辑器显示缩进参考线

### 插件设置

```json
    //插件是否自动更新

    "extensions.autoUpdate": true,
```

推荐打开插件自动更新

### 文件层次

```json
    // 文件夹紧凑模式显示
    "explorer.compactFolders": false,
```

默认情况下，vscode 和 github 保持一致，即当一个文件夹下只有一个文件夹时，会略过中间部分的文件夹，将显示缩略为一行，这里建议将文件夹缩略关闭

### 图标

```json
    // 开启 material icons
    "workbench.iconTheme": "material-icon-theme",
```

我喜欢使用的 文件/文件夹 icons 图标是 [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)，这一款插件内置大量的图标

### VScode 更新

```json
    // vscode update tips
    "update.mode": "none",
```

关闭 vscode 自动更新提示，我们定期手动升级即可

### 文件格式化

```json
    // 默认格式化方式，统一为 prettier
    "editor.defaultFormatter": "esbenp.prettier-vscode",

    // #每次保存的时候自动格式化
    "editor.formatOnSave": true,
```

prettier 默认配置并非全部都为最佳实践，这里推荐将全局默认行为也配置上，这样在任意文件都可以享受到最佳的格式化行为。

### 窗口设置

```json
    "window.zoomLevel": 0,
```

调整窗口的缩放级别。原始大小是 0，每次递增(例如 1)或递减(例如 -1)表示放大或缩小 20%。也可以输入小数以便以更精细的粒度调整缩放级别。

### 换行

```json
    //超过屏幕视图换行
    "files.autoSave": "afterDelay",
```

打开自动换行，代码超出屏幕自动切换为下一行

### 单双引号设置

```json
    // 设置格式化时，保持单引号，如果设置为false，则单引号会自动变成双引号
    "prettier.singleQuote": true,
```

### 每行末尾是否添加分号

```json
    // 设置是否在每行末尾添加分号，默认为 true
    "prettier.semi": true,
```
