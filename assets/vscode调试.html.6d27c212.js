import{_ as d,r as a,o as i,c,a as n,b as e,d as t,e as s}from"./app.cd040b68.js";const r={},u=s('<h1 id="vscode-调试" tabindex="-1"><a class="header-anchor" href="#vscode-调试" aria-hidden="true">#</a> vscode 调试</h1><p>本文会介绍 vscode 中几种调试方式和断点编辑</p><h2 id="调试的几种方式" tabindex="-1"><a class="header-anchor" href="#调试的几种方式" aria-hidden="true">#</a> 调试的几种方式</h2><h3 id="通过-nodemon-调试" tabindex="-1"><a class="header-anchor" href="#通过-nodemon-调试" aria-hidden="true">#</a> 通过 nodemon 调试</h3>',4),l={href:"https://github.com/gtsopour/nodejs-shopping-cart",target:"_blank",rel:"noopener noreferrer"},m=s(`<p>项目中引入 nodemon，package.json 文件添加 nodemon 脚本和相关依赖如图：<img src="https://img-blog.csdnimg.cn/8d18e0c7828c4d8a9b39478146ce21a0.png" alt=""></p><p>项目一开始没有添加调试配置文件的时候，通过 vscode 调试菜单的侧边栏 create a launch.json 新建配置文件, 选择推荐的 node.js 会生成一个 launch.js 文件。<img src="https://img-blog.csdnimg.cn/d0494da3fade4638a085ca1bf9796f76.png" alt="在这里插入图片描述"></p><p>launch.json 生成之后，将文件内容替换成以下代码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;version&quot;: &quot;0.2.0&quot;,
    &quot;configurations&quot;: [
        {
            &quot;type&quot;: &quot;node&quot;,
            &quot;request&quot;: &quot;attach&quot;,
            &quot;name&quot;: &quot;Node: Nodemon&quot;,
            &quot;processId&quot;: &quot;\${command:PickProcess}&quot;,
            &quot;restart&quot;: true,
        },
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>launch.json 文件配置以后，调试侧边栏就会出现调试相关面板如下图:<img src="https://img-blog.csdnimg.cn/b77d81f548e5499b8fdb302d7262dc07.png" alt="在这里插入图片描述"></p><p>执行<code>npm run debug</code>启动项目，访问 localhost:3000<img src="https://img-blog.csdnimg.cn/f9ff6634d6b64c5da9e06f19591f6c48.png" alt="在这里插入图片描述"></p><p>在想要调试的位置加上断点，比如下图位置<img src="https://img-blog.csdnimg.cn/96d7c0e6a85441e89f8b8e4569e091c3.png" alt="在这里插入图片描述"></p><p>通过 vscode 调试工具启动调试，附加到 node 进程进行调试<img src="https://img-blog.csdnimg.cn/13ce3efdda514c0185b6d2a42fe9e190.png" alt="在这里插入图片描述"></p><p>在到浏览器对应的 web 页面中进行一些触发断点的操作，比如点击添加购物车如下图: <img src="https://img-blog.csdnimg.cn/9113ce753baa4ac18bb6d34a42be4a09.png" alt="在这里插入图片描述"> 点击添加到购物车按钮后，就会发现 vscode 代码停在了断点位置，并且左侧显示了相关变量值如下图: <img src="https://img-blog.csdnimg.cn/2ffe06e5e5f7462fb64ceea9ba42a214.png" alt="在这里插入图片描述"> 以上就是完整的 vscode 调试的方式了</p><h3 id="nodejs-环境调试-es6" tabindex="-1"><a class="header-anchor" href="#nodejs-环境调试-es6" aria-hidden="true">#</a> nodejs 环境调试 ES6</h3><p>nodejs 环境中调试纯 ES6，只需修改 launch.json 的配置:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;version&quot;: &quot;0.2.0&quot;,
    &quot;configurations&quot;: [
        {
            &quot;type&quot;: &quot;node&quot;,
            &quot;request&quot;: &quot;launch&quot;,
            &quot;name&quot;: &quot;ES6 debugger&quot;,
            &quot;program&quot;: &quot;\${workspaceFolder}/src/index.js&quot;,
            &quot;runtimeExecutable&quot;: &quot;\${workspaceRoot}/node_modules/./bin/babel-node&quot;,
            &quot;runtimeArgs&quot;: [&quot;--presets&quot;, &quot;env&quot;]
        },
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="react-chrome-调试" tabindex="-1"><a class="header-anchor" href="#react-chrome-调试" aria-hidden="true">#</a> react + chrome 调试</h3><p>node 环境启动 react 前端项目，运行在浏览器中。在 chrome 中访问 react 前端，也可以在 vscode 中调试</p><p>首先通过<code>npx create-react-app my-app</code>新建一个 react 工程。 以前一般需要在 vscode 中安装<code>debugger for chrome</code>插件。 但是目前该插件被废弃，提示 Use the JavaScript Debugger extension instead。 尝试过后发现不安装该插件也可进行调试。</p><p>项目创建成功后，<code>npm start</code>启动 react 项目。这一步很重要，必须先启动项目，否则直接运行调试会出现 non-js module files deprecated 错误</p><p>配置 launch.json 文件，内容如下:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;version&quot;: &quot;0.2.0&quot;,
    &quot;configurations&quot;: [
        {
            &quot;type&quot;: &quot;chrome&quot;,
            &quot;request&quot;: &quot;launch&quot;,
            &quot;name&quot;: &quot;Launch Chrome + React&quot;,
            &quot;url&quot;: &quot;http://localhost:3000&quot;, // 这里的端口和应用启动的端口保持一致
            &quot;webRoot&quot;: &quot;\${workspaceFolder}&quot; // 测试\${workspaceFolder}/src也可
        }
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置成功后启动调试即可。</p><h2 id="编辑断点" tabindex="-1"><a class="header-anchor" href="#编辑断点" aria-hidden="true">#</a> 编辑断点</h2><p>有时候数据量大，并不希望每次都停在断点位置，希望满足一定条件时才停住开始调试，这时候就可以用到编辑断点的功能了。</p>`,21),v={href:"https://blog.csdn.net/whahu1989/article/details/125464867",target:"_blank",rel:"noopener noreferrer"},p=n("img",{src:"https://img-blog.csdnimg.cn/31180484ecb245c293119745348ae775.png",alt:"在这里插入图片描述"},null,-1);function b(h,q){const o=a("ExternalLinkIcon");return i(),c("div",null,[u,n("p",null,[e("nodemon 调试的项目: "),n("a",l,[e("nodejs-shopping-cart"),t(o)]),e("，这是个 nodejs 搭建的服务端，先把项目 clone 到本地。")]),m,n("p",null,[e("在断点处右击，选择 edit breakpoint，可以通过给断点设置不同的条件，使得该条件满足时才会触发断点。编辑断点有三种条件， 各自意义可以参考"),n("a",v,[e("条件断点"),t(o)]),p])])}const f=d(r,[["render",b],["__file","vscode调试.html.vue"]]);export{f as default};
