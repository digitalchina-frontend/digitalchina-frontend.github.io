import{_ as t,r as l,o as d,c,a as e,b as n,d as i,e as s}from"./app.cd040b68.js";const r="/images/vuepress-source-code-research/issue-template.png",o="/images/vuepress-source-code-research/issue-form-template.png",u="/images/vuepress-source-code-research/pr-template.png",p={},v=s(`<h1 id="git-相关" tabindex="-1"><a class="header-anchor" href="#git-相关" aria-hidden="true">#</a> Git 相关</h1><p>项目搭建的第一步往往是初始化 Git 仓库并且进行必要的配置，对于开源项目，还需要考虑：</p><ul><li>团队成员所使用的操作系统带来的差异</li><li>开源协议的选择</li><li>规范化 issue 的提交形式</li></ul><p>下面就 VuePress V2 在项目搭建阶段所做的配置进行介绍。</p><h2 id="gitignore-介绍" tabindex="-1"><a class="header-anchor" href="#gitignore-介绍" aria-hidden="true">#</a> .gitignore 介绍</h2><p><code>.gitignore</code> 文件是代码仓库的必要配置之一，用于告诉 Git 忽略哪些文件或目录。它通常用来忽略编译生成的文件、临时文件、日志文件以及第三方库文件。</p><p>常见的 <code>.gitignore</code> 配置有：</p><ul><li>编译生成的文件</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>dist
build

# Typescript build info
*.tsbuildinfo

# vuepress build output
.vuepress/dist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>临时文件</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># parcel-bundler cache (https://parceljs.org/)
.cache
.parcel-cache

# Gatsby files
.cache/

# vuepress v2.x temp and cache directory
.temp
.cache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>日志文件</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*
.pnpm-debug.log*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>第三方库文件</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Dependency directories
node_modules/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>测试报告</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Test coverage files
coverage/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>操作系统生成的文件</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># MacOS Desktop Services Store
.DS_Store
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,19),m=e("code",null,".gitignore",-1),b={href:"https://github.com/github/gitignore/blob/main/Node.gitignore",target:"_blank",rel:"noopener noreferrer"},h=s(`<h2 id="gitattributes-介绍" tabindex="-1"><a class="header-anchor" href="#gitattributes-介绍" aria-hidden="true">#</a> .gitattributes 介绍</h2><p><code>.gitattributes</code> 是一种用来定义 Git 项目中不同文件的 <code>Git Attributes</code> 的配置文件，可以影响到 Git 的多种行为细节。它位于 Git 项目的根目录下，代表了项目级配置，优先级较高。</p><p>在 <code>.gitattributes</code> 中，你可以通过设置文件路径模式和规则来配置 Git 的行为。例如:</p><ul><li>设置文件编码</li><li>忽略特定文件或目录</li><li>设置文件换行符</li><li>启用文件历史记录修剪等。</li></ul><p><code>.gitattributes</code> 中的每一行配置都符合以下形式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pattern attr1 attr2 ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>Git Attributes</code> 可以影响到 Git 的部分行为，比如：</p><ul><li>通过 <code>eol</code> 属性指定 <code>Checking-out &amp; checking-in</code> 时应该用 <code>crlf</code> 还是 <code>lf</code> 作为行尾结束符；</li><li>通过 <code>binary</code> 属性指定 <code>Merge</code> 时是否保持本地分支的二进制文件内容不变。</li></ul>`,8),g={class:"custom-container tip"},k=e("p",{class:"custom-container-title"},"提示",-1),f={href:"https://git-scm.com/docs/gitattributes",target:"_blank",rel:"noopener noreferrer"},x=s(`<h3 id="vuepress-v2-gitattributes-文件示例" tabindex="-1"><a class="header-anchor" href="#vuepress-v2-gitattributes-文件示例" aria-hidden="true">#</a> VuePress V2 <code>.gitattributes</code> 文件示例：</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>* text eol=lf
*.txt text eol=crlf

*.png binary
*.jpg binary
*.jpeg binary
*.ico binary
*.tff binary
*.woff binary
*.woff2 binary
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其作用为：</p><ul><li>除 <code>.txt</code> 外的所有文本文件使用 <code>lf</code> 作为行尾结束符</li><li><code>.txt</code> 文件使用 <code>crlf</code> 作为行尾结束符</li><li>图片、字体文件在合并时总是保留本地分支的版本</li></ul><h2 id="开源协议" tabindex="-1"><a class="header-anchor" href="#开源协议" aria-hidden="true">#</a> 开源协议</h2><p>LICENSE 文件描述开源协议，LICENSE 文件包含了有关版权所有者的信息、使用条款以及有关软件使用方式的任何限制。</p><p>LICENSE 文件通常存放在软件根目录下，供用户在使用该软件之前阅读。 它是一份重要文件，有助于保护软件创建者的权利，并确保以公平合法的方式使用软件。</p><p>常见的开源协议包括：</p><ul><li>MIT 许可证：这是一种较宽松的许可证，允许任何人自由使用、复制、修改和再发布软件。</li><li>Apache 许可证 2.0：这是一种流行的许可证，允许任何人自由使用、复制、修改和再发布软件，但要求在使用和再发布软件时保留许可证声明和版权声明。</li><li>GPL 许可证：这是一种流行的自由软件许可证，要求使用和再发布软件的人必须向软件使用者提供源代码。</li><li>LGPL 许可证：这是一种较宽松的自由软件许可证，允许使用和再发布软件，但要求在使用和再发布软件时保留许可证声明和版权声明。</li><li>BSD 许可证：这是一种较宽松的许可证，允许任何人自由使用、复制、修改和再发布软件，但要求在使用和再发布软件时保留许可证声明和版权声明。</li></ul><h2 id="github-issue-template" tabindex="-1"><a class="header-anchor" href="#github-issue-template" aria-hidden="true">#</a> GitHub issue template</h2><p>GitHub 问题模板是一个有用的工具，它：</p><ul><li>可以为项目中的错误报告、功能请求和其他类型的问题提供一致的结构；</li><li>可以帮助确保重要信息不会被遗漏；</li><li>可以让项目维护者和贡献者更容易理解和分类问题；</li><li>可以帮助贡献者更好地推动项目向前发展</li></ul><p>要创建一个 GitHub 问题模板，只需在 <code>.github/ISSUE_TEMPLATE/</code> 目录下创建模板文件即可，GitHub 问题模板有两种形式可选。</p><h3 id="普通议题模板" tabindex="-1"><a class="header-anchor" href="#普通议题模板" aria-hidden="true">#</a> 普通议题模板</h3><p>为用户提供默认的内容，用户可以自由编辑；模板内容使用 Markdown 编写，模板元数据使用 YAML Frontmatter 编写，比如 <code>feature_request.md</code>：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">name</span><span class="token punctuation">:</span> Feature request
<span class="token key atrule">about</span><span class="token punctuation">:</span> Suggest an idea for this project
<span class="token key atrule">title</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span>
<span class="token key atrule">labels</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span>
<span class="token key atrule">assignees</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span></span>
<span class="token punctuation">---</span></span>

<span class="token bold"><span class="token punctuation">**</span><span class="token content">Is your feature request related to a problem? Please describe.</span><span class="token punctuation">**</span></span>
A clear and concise description of what the problem is. Ex. I&#39;m always frustrated when [...]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),y={class:"custom-container tip"},_=e("p",{class:"custom-container-title"},"提示",-1),w={href:"https://docs.github.com/zh/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository",target:"_blank",rel:"noopener noreferrer"},G=s('<h4 id="效果图" tabindex="-1"><a class="header-anchor" href="#效果图" aria-hidden="true">#</a> 效果图：</h4><p><img src="'+r+`" alt="issue-template"></p><h3 id="表单式议题模板-beta" tabindex="-1"><a class="header-anchor" href="#表单式议题模板-beta" aria-hidden="true">#</a> 表单式议题模板（Beta）</h3><p>以表单的形式为用户提供默认的内容结构，用户只能在表单允许的范围内编辑，不能随意更改内容结构；模板内容使用 YAML 配置，比如 <code>feature_request.yml</code>：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> Bug Report
<span class="token key atrule">description</span><span class="token punctuation">:</span> File a bug report
<span class="token key atrule">title</span><span class="token punctuation">:</span> <span class="token string">&#39;[Bug]: &#39;</span>
<span class="token key atrule">labels</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;bug&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;triage&#39;</span><span class="token punctuation">]</span>
<span class="token key atrule">assignees</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> octocat
<span class="token key atrule">body</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> input
    <span class="token key atrule">id</span><span class="token punctuation">:</span> contact
    <span class="token key atrule">attributes</span><span class="token punctuation">:</span>
      <span class="token key atrule">label</span><span class="token punctuation">:</span> Contact Details
      <span class="token key atrule">description</span><span class="token punctuation">:</span> How can we get in touch with you if we need more info<span class="token punctuation">?</span>
      <span class="token key atrule">placeholder</span><span class="token punctuation">:</span> ex. email@example.com
    <span class="token key atrule">validations</span><span class="token punctuation">:</span>
      <span class="token key atrule">required</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="效果图-1" tabindex="-1"><a class="header-anchor" href="#效果图-1" aria-hidden="true">#</a> 效果图：</h4><p><img src="`+o+`" alt="issue-form-template"></p><h2 id="github-pull-request-template" tabindex="-1"><a class="header-anchor" href="#github-pull-request-template" aria-hidden="true">#</a> GitHub Pull Request Template</h2><p>PR 模板是创建 PR 时的预填充消息。模板可以包含各种信息的占位符，例如正在实现的功能的名称、正在修复的错误或更改背后的原因。</p><p>模板文件示例：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">##</span> Description</span>

Please include a summary of the change and which issue is fixed. Please also include relevant motivation and context. List any dependencies that are required for this change.

Fixes # (issue)

<span class="token title important"><span class="token punctuation">##</span> How Has This Been Tested?</span>

Please describe the tests that you ran to verify your changes. Provide instructions so we can reproduce. Please also list any relevant details for your test configuration

<span class="token list punctuation">-</span> [ ] Test A
<span class="token list punctuation">-</span> [ ] Test B

<span class="token bold"><span class="token punctuation">**</span><span class="token content">Test Configuration</span><span class="token punctuation">**</span></span>:

<span class="token list punctuation">-</span> Hardware:
<span class="token list punctuation">-</span> OS:
<span class="token list punctuation">-</span> Browser:

<span class="token title important"><span class="token punctuation">##</span> Types of changes</span>

What types of changes does your code introduce?

<span class="token list punctuation">-</span> [ ] Bug fix (non-breaking change which fixes an issue)
<span class="token list punctuation">-</span> [ ] New feature (non-breaking change which adds functionality)
<span class="token list punctuation">-</span> [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)

<span class="token title important"><span class="token punctuation">##</span> Checklist:</span>

<span class="token list punctuation">-</span> [ ] My code follows the style guidelines of this project
<span class="token list punctuation">-</span> [ ] I have performed a self-review of my own code
<span class="token list punctuation">-</span> [ ] I have commented my code, particularly in hard-to-understand areas
<span class="token list punctuation">-</span> [ ] I have made corresponding changes to the documentation
<span class="token list punctuation">-</span> [ ] My changes generate no new warnings
<span class="token list punctuation">-</span> [ ] I have added tests that prove my fix is effective or that my feature works
<span class="token list punctuation">-</span> [ ] New and existing unit tests pass locally with my changes
<span class="token list punctuation">-</span> [ ] Any dependent changes have been merged and published in downstream modules
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>您可以通过在存储库的 <code>.github</code> 目录中创建名为 <code>PULL_REQUEST_TEMPLATE.md</code> 的文件来为存储库自定义拉取请求模板，当有人创建拉取请求时，他们将看到模板并可以填写相关信息。</p><h4 id="效果图-2" tabindex="-1"><a class="header-anchor" href="#效果图-2" aria-hidden="true">#</a> 效果图：</h4><p><img src="`+u+'" alt="pr-template"></p>',14);function E(L,P){const a=l("ExternalLinkIcon");return d(),c("div",null,[v,e("p",null,[n("完整的 "),m,n(" 模板可以参考："),e("a",b,[n(".gitignore Node template"),i(a)])]),h,e("div",g,[k,e("p",null,[n("了解更多请参考："),e("a",f,[n("gitattributes"),i(a)])])]),x,e("div",y,[_,e("p",null,[n("对于普通模板，除了用 Markdown 自定义模板外，还可以使用 GitHub Website 直接选用标准的问题模板，详细图文步骤请参考："),e("a",w,[n("为仓库配置问题模板"),i(a)])])]),G])}const S=t(p,[["render",E],["__file","about-git.html.vue"]]);export{S as default};
