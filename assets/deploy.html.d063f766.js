import{_ as t,r as l,o as c,c as o,a as n,b as s,d as e,e as i}from"./app.cd040b68.js";const p={},u=n("h1",{id:"部署",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#部署","aria-hidden":"true"},"#"),s(" 部署")],-1),d=n("h2",{id:"配置-github-pages",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置-github-pages","aria-hidden":"true"},"#"),s(" 配置 GitHub Pages")],-1),r=n("ol",null,[n("li",null,"访问 GitHub 仓库，点击 Settings 栏；"),n("li",null,"在 Pages 栏目下，使用 Deploy from a branch 方式，设置 master 分支为部署分支。")],-1),v=n("p",null,"配置完成后，GitHub 会使用最新的 master 分支源代码作为 GitHub Page 的静态资源，并在 master 分支更新时自动触发 Action 进行部署。",-1),m={href:"https://pages.github.com/",target:"_blank",rel:"noopener noreferrer"},k=i(`<h2 id="方式一-手动构建" tabindex="-1"><a class="header-anchor" href="#方式一-手动构建" aria-hidden="true">#</a> 方式一：手动构建</h2><h3 id="构建静态文件" tabindex="-1"><a class="header-anchor" href="#构建静态文件" aria-hidden="true">#</a> 构建静态文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> docs:build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="推送静态文件至-master-分支" tabindex="-1"><a class="header-anchor" href="#推送静态文件至-master-分支" aria-hidden="true">#</a> 推送静态文件至 master 分支</h3><ul><li>初始化 git submodule</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> docs/.vuepress/dist
<span class="token function">git</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>推送代码</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-A</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;deploy&#39;</span>
<span class="token function">git</span> push <span class="token parameter variable">-f</span> git@github.com:digitalchina-frontend/digitalchina-frontend.github.io.git master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),b={href:"https://github.com/digitalchina-frontend/digitalchina-frontend.github.io/actions",target:"_blank",rel:"noopener noreferrer"},h=i(`<h3 id="使用脚本部署" tabindex="-1"><a class="header-anchor" href="#使用脚本部署" aria-hidden="true">#</a> 使用脚本部署</h3><ul><li>创建文件 <code>deploy.sh</code> 并输入以下内容：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token comment">#!/usr/bin/env sh</span>

<span class="token comment"># 确保脚本抛出遇到的错误</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span>

<span class="token comment"># 生成静态文件</span>
<span class="token function">npm</span> run docs:build

<span class="token comment"># 进入生成的文件夹</span>
<span class="token builtin class-name">cd</span> docs/.vuepress/dist

<span class="token comment"># 如果是发布到自定义域名</span>
<span class="token comment"># echo &#39;www.example.com&#39; &gt; CNAME</span>

<span class="token function">git</span> init
<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-A</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;deploy&#39;</span>

<span class="token comment"># 如果发布到 https://&lt;USERNAME&gt;.github.io</span>
<span class="token function">git</span> push <span class="token parameter variable">-f</span> git@github.com:digitalchina-frontend/digitalchina-frontend.github.io.git master

<span class="token comment"># 如果发布到 https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;</span>
<span class="token comment"># git push -f git@github.com:&lt;USERNAME&gt;/&lt;REPO&gt;.git master:gh-pages</span>

<span class="token builtin class-name">cd</span> -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>添加至 <code>package.json</code></li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;deploy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sh ./deploy.sh&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方式二-持续集成" tabindex="-1"><a class="header-anchor" href="#方式二-持续集成" aria-hidden="true">#</a> 方式二：持续集成</h2>`,6),g=n("li",null,"Github 进入 Settings - Actions - General",-1),_=n("li",null,"配置 Workflow permissions 为 Read and write permissions 权限",-1),y=n("li",null,[s("创建文件 "),n("code",null,"/.github/workflows/docs.yml")],-1),f={href:"https://docs.github.com/zh/actions/using-workflows",target:"_blank",rel:"noopener noreferrer"},x=i(`<ul><li>触发时机：发布 release 时（降低部署频率）</li><li>部署步骤： <ul><li>检出代码</li><li>搭建 Node 环境</li><li>安装依赖包并构建 docs 工程</li><li>部署至 master 分支</li></ul></li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> Build and Deploy VuePress Site

<span class="token comment"># 控制工作流触发的时机</span>
<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token comment"># 在版本状态为 published 时运行工作流</span>
  <span class="token key atrule">release</span><span class="token punctuation">:</span>
    <span class="token key atrule">types</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>published<span class="token punctuation">]</span>

  <span class="token comment"># 允许从 Actions tab 手动触发工作流</span>
  <span class="token key atrule">workflow_dispatch</span><span class="token punctuation">:</span>

<span class="token comment"># 一个工作流由一个或多个可并行或串行执行的 jobs 组成</span>
<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token comment"># 这个工作流只包含一个名为 &quot;build-and-deploy&quot; 的 job</span>
  <span class="token key atrule">build-and-deploy</span><span class="token punctuation">:</span>
    <span class="token comment"># job 的运行环境类型</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest

    <span class="token comment"># Steps 表示 job 中将要执行的一系列任务</span>
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token comment"># 在 $GITHUB_WORKSPACE 下检出仓库代码</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout 🛎️
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span>

      <span class="token comment"># 搭建 Node 环境</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup Node.js 🔧
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token number">16</span>
          <span class="token key atrule">cache</span><span class="token punctuation">:</span> <span class="token string">&#39;npm&#39;</span>

      <span class="token comment"># 安装依赖包并构建</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install and Build 🔧
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          npm i
          npm run build:docs</span>
      <span class="token comment"># 部署至 master 分支</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy 🚀
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> crazy<span class="token punctuation">-</span>max/ghaction<span class="token punctuation">-</span>github<span class="token punctuation">-</span>pages@v3.1.0
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">target_branch</span><span class="token punctuation">:</span> master
          <span class="token key atrule">build_dir</span><span class="token punctuation">:</span> docs/.vuepress/dist
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token key atrule">GITHUB_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITHUB_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function E(w,N){const a=l("ExternalLinkIcon");return c(),o("div",null,[u,d,r,v,n("p",null,[s("完整的 GitHub Page 配置教程可以参考："),n("a",m,[s("GitHub Pages"),e(a)]),s("。")]),k,n("p",null,[s("访问 "),n("a",b,[s("GitHub Actions"),e(a)]),s(" 以查看部署进度。")]),h,n("ol",null,[g,_,y,n("li",null,[s("参考 "),n("a",f,[s("官方文档"),e(a)]),s(" 配置工作流：")])]),x])}const A=t(p,[["render",E],["__file","deploy.html.vue"]]);export{A as default};
