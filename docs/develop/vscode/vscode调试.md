# vscode调试
本文会介绍vscode中几种调试方式和断点编辑

## 调试的几种方式

### 通过nodemon调试
nodemon调试的项目: [nodejs-shopping-cart](https://github.com/gtsopour/nodejs-shopping-cart)，这是个nodejs搭建的服务端，先把项目clone到本地。

项目中引入nodemon，package.json文件添加nodemon脚本和相关依赖如图：![](https://img-blog.csdnimg.cn/8d18e0c7828c4d8a9b39478146ce21a0.png)

项目一开始没有添加调试配置文件的时候，通过vscode调试菜单的侧边栏create a launch.json新建配置文件, 选择推荐的node.js会生成一个launch.js文件。![在这里插入图片描述](https://img-blog.csdnimg.cn/d0494da3fade4638a085ca1bf9796f76.png)

launch.json生成之后，将文件内容替换成以下代码
```
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "attach",
            "name": "Node: Nodemon",
            "processId": "${command:PickProcess}",
            "restart": true,
        },
    ]
}
```

launch.json文件配置以后，调试侧边栏就会出现调试相关面板如下图:![在这里插入图片描述](https://img-blog.csdnimg.cn/b77d81f548e5499b8fdb302d7262dc07.png)

执行`npm run debug`启动项目，访问localhost:3000![在这里插入图片描述](https://img-blog.csdnimg.cn/f9ff6634d6b64c5da9e06f19591f6c48.png)

在想要调试的位置加上断点，比如下图位置![在这里插入图片描述](https://img-blog.csdnimg.cn/96d7c0e6a85441e89f8b8e4569e091c3.png)

通过vscode调试工具启动调试，附加到node进程进行调试![在这里插入图片描述](https://img-blog.csdnimg.cn/13ce3efdda514c0185b6d2a42fe9e190.png)

在到浏览器对应的web页面中进行一些触发断点的操作，比如点击添加购物车如下图:
![在这里插入图片描述](https://img-blog.csdnimg.cn/9113ce753baa4ac18bb6d34a42be4a09.png)
点击添加到购物车按钮后，就会发现vscode代码停在了断点位置，并且左侧显示了相关变量值如下图:
![在这里插入图片描述](https://img-blog.csdnimg.cn/2ffe06e5e5f7462fb64ceea9ba42a214.png)
以上就是完整的vscode调试的方式了

### nodejs环境调试ES6
nodejs环境中调试纯ES6，只需修改launch.json的配置:
```
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "ES6 debugger",
            "program": "${workspaceFolder}/src/index.js",
            "runtimeExecutable": "${workspaceRoot}/node_modules/./bin/babel-node",
            "runtimeArgs": ["--presets", "env"]
        },
    ]
}
```

### react + chrome调试
node环境启动react前端项目，运行在浏览器中。在chrome中访问react前端，也可以在vscode中调试

首先通过`npx create-react-app my-app`新建一个react工程。 以前一般需要在vscode中安装`debugger for chrome`插件。 但是目前该插件被废弃，提示Use the JavaScript Debugger extension instead。 尝试过后发现不安装该插件也可进行调试。

项目创建成功后，`npm start`启动react项目。这一步很重要，必须先启动项目，否则直接运行调试会出现 non-js module files deprecated错误

配置launch.json文件，内容如下:
```
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "chrome",
            "request": "launch",
            "name": "Launch Chrome + React",
            "url": "http://localhost:3000", // 这里的端口和应用启动的端口保持一致
            "webRoot": "${workspaceFolder}" // 测试${workspaceFolder}/src也可
        }
    ]
}
```
配置成功后启动调试即可。

## 编辑断点
有时候数据量大，并不希望每次都停在断点位置，希望满足一定条件时才停住开始调试，这时候就可以用到编辑断点的功能了。

在断点处右击，选择edit breakpoint，可以通过给断点设置不同的条件，使得该条件满足时才会触发断点。编辑断点有三种条件， 各自意义可以参考[条件断点](https://blog.csdn.net/whahu1989/article/details/125464867)![在这里插入图片描述](https://img-blog.csdnimg.cn/31180484ecb245c293119745348ae775.png)



