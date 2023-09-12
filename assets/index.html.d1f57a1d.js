import{_ as t,r as i,o as l,c,a as n,b as s,d as o,e as a}from"./app.cd040b68.js";const r={},p=a(`<h1 id="flowise-本地调试指南" tabindex="-1"><a class="header-anchor" href="#flowise-本地调试指南" aria-hidden="true">#</a> Flowise 本地调试指南</h1><p>Flowise 是一个具备 3 个不同模块的 monorepo 工程，这 3 个模块分别负责：</p><ul><li>server: Node API 后端服务</li><li>ui: React 前端</li><li>components: Langchain 组件</li></ul><h2 id="环境要求" tabindex="-1"><a class="header-anchor" href="#环境要求" aria-hidden="true">#</a> 环境要求</h2><ul><li>Node.js v16 +</li><li>安装 yarn v1：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-g</span> <span class="token function">yarn</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="开发环境准备" tabindex="-1"><a class="header-anchor" href="#开发环境准备" aria-hidden="true">#</a> 开发环境准备</h2>`,7),d={href:"https://github.com/FlowiseAI/Flowise",target:"_blank",rel:"noopener noreferrer"},u=a(`<li><p>Clone 你 Fork 的仓库并 cd 到项目根目录</p></li><li><p>创建并切换到一个分支，名字随意</p></li><li><p>安装依赖：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>安装过程可能要 10 分钟左右，请耐心等待</p></div></li><li><p>构建代码：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>`,4),v={href:"http://localhost:3000",target:"_blank",rel:"noopener noreferrer"},m=a(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1),h=n("li",null,[n("p",null,[s("【可选】配置环境变量：参考 "),n("a",{href:"#%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F%E9%85%8D%E7%BD%AE%E3%80%90%E9%9D%9E%E5%BF%85%E9%A1%BB%E3%80%91"},"环境变量")])],-1),b=a(`<p>使用开发模式启动项目：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2),k={class:"custom-container tip"},_=n("p",{class:"custom-container-title"},"在开发模式下",-1),g=n("code",null,"packages/ui",-1),q=n("code",null,"packages/server",-1),E={href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"},f=n("p",null,[s("如果有对 "),n("code",null,"packages/components"),s(" 的改动，需要重新执行 "),n("code",null,"yarn build"),s(" 使其生效")],-1),A=a(`<h2 id="调试后端代码" tabindex="-1"><a class="header-anchor" href="#调试后端代码" aria-hidden="true">#</a> 调试后端代码</h2><ol><li>在 <code>.vscode</code> 目录下创建文件 <code>launch.json</code></li><li>在 configurations 数组里创建一个配置对象，主要关注以下配置： <ul><li>type：配置类型</li><li>name：显示在启动下拉菜单中的名称</li><li>cwd：执行启动命令的绝对路径，通常会用到表示 vscode 当前工作路径的变量 <code>workspaceFolder</code></li><li>runtimeExecutable：用什么命令启动，默认为 <code>node</code></li><li>runtimeArgs：启动命令的参数列表</li></ul></li><li>根据 IntelliSense 设置其他你需要的配置，hover 配置选项可以看到说明</li><li>示例配置（启动命令为 yarn dev）：</li></ol><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token comment">// Use IntelliSense to learn about possible attributes.</span>
  <span class="token comment">// Hover to view descriptions of existing attributes.</span>
  <span class="token comment">// For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.2.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;configurations&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;request&quot;</span><span class="token operator">:</span> <span class="token string">&quot;launch&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Launch Backend&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;skipFiles&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;&lt;node_internals&gt;/**&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;runtimeExecutable&quot;</span><span class="token operator">:</span> <span class="token string">&quot;yarn&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;runtimeArgs&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;dev&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;cwd&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\${workspaceFolder}&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>侧边栏切换至 Run and Debug 一栏，在下拉菜单中选择我们的配置，F5 启动调试</li><li>在 <code>packages/server</code> 中打断点测试，重启调试后能够正常进入断点即可</li></ol><h2 id="调试前端代码" tabindex="-1"><a class="header-anchor" href="#调试前端代码" aria-hidden="true">#</a> 调试前端代码</h2><ol><li>这里演示用 <code>attach</code> 模式调试前端，因此要先执行 <code>yarn dev</code> 手动用开发模式启动前端工程</li><li>打开 <code>.vscode/launch.json</code> 文件，在 configurations 数组中添加一个配置对象</li><li>主要关注以下配置： <ul><li>type：配置类型，这里使用 chrome 而不是 node</li><li>request：调试的请求类型，可选项为 launch 和 attach，这里选择 attach</li><li>port：用于远程调试浏览器的端口，chrome 推荐的端口为 9222；注意：这个端口不是前端工程的运行端口，而是和浏览器通信的调试用端口</li><li>url： 要调试的前端应用的 url，如果不是本地 url 相当于远程调试（远程调试还有一些关键配置，这里不演示）</li><li>webRoot：表明在哪个本地目录下寻找连接到的进程正在运行的代码（不是构建后的代码，是源代码路径）</li></ul></li><li>示例配置：</li></ol><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.2.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;configurations&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;chrome&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Launch Frontend&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;request&quot;</span><span class="token operator">:</span> <span class="token string">&quot;attach&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">9222</span><span class="token punctuation">,</span>
      <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost:8080&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;webRoot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\${workspaceFolder}\\\\packages\\\\ui\\\\src&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>侧边栏切换至 Run and Debug 一栏，在下拉菜单中选择我们的配置，F5 启动调试</li><li>在 <code>packages/ui</code> 中打断点测试，重启调试后能够正常进入断点即可</li></ol><h2 id="环境变量配置【非必须】" tabindex="-1"><a class="header-anchor" href="#环境变量配置【非必须】" aria-hidden="true">#</a> 环境变量配置【非必须】</h2>`,9),y=n("code",null,"packages/ui",-1),x=n("code",null,"packages/server",-1),T=n("code",null,".env",-1),F={href:"https://docs.flowiseai.com/environment-variables",target:"_blank",rel:"noopener noreferrer"},w=a(`<ul><li><p><code>packages/ui</code> 环境变量配置示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PORT=8080

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>packages/server</code> 环境变量配置示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PORT=3000
OVERRIDE_DATABASE=true
DATABASE_TYPE=sqlite
# DATABASE_PATH=/your_database_path/.flowise
# When database is not sqlite
# DATABASE_PORT=&quot;&quot;
# DATABASE_HOST=&quot;&quot;
# DATABASE_NAME=&quot;flowise&quot;
# DATABASE_USER=&quot;&quot;
# DATABASE_PASSWORD=&quot;&quot;

# FLOWISE_USERNAME=user
# FLOWISE_PASSWORD=1234
# DEBUG=true
# APIKEY_PATH=/your_api_key_path/.flowise
# LOG_PATH=/your_log_path/.flowise/logs
# LOG_LEVEL=debug (error | warn | info | verbose | debug)
# EXECUTION_MODE=main (child | main)
# TOOL_FUNCTION_BUILTIN_DEP=crypto,fs
# TOOL_FUNCTION_EXTERNAL_DEP=moment,lodash

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,1);function D(S,O){const e=i("ExternalLinkIcon");return l(),c("div",null,[p,n("ol",null,[n("li",null,[n("p",null,[s("Fork "),n("a",d,[s("Flowise Github Repository"),o(e)])])]),u,n("li",null,[n("p",null,[s("在 "),n("a",v,[s("http://localhost:3000"),o(e)]),s(" 上启动应用（非开发模式）：")]),m]),h,n("li",null,[b,n("div",k,[_,n("p",null,[s("对 "),g,s(" 或 "),q,s(" 的所有改动会更新到 "),n("a",E,[s("http://localhost:8080"),o(e)])]),f])])]),A,n("p",null,[s("分别在 "),y,s(" 和 "),x,s(" 下创建 "),T,s(" 文件可以配置前端和后端应用的环境变量，所有环境变量参考 "),n("a",F,[s("environment-variables"),o(e)])]),w])}const R=t(r,[["render",D],["__file","index.html.vue"]]);export{R as default};
