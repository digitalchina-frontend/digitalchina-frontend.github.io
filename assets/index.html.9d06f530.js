import{_ as p,r as o,o as i,c as l,a as n,b as s,d as t,e as a}from"./app.cd040b68.js";const c={},r=a('<h1 id="基于-ant-design-pro-of-vue-定制化-css" tabindex="-1"><a class="header-anchor" href="#基于-ant-design-pro-of-vue-定制化-css" aria-hidden="true">#</a> 基于 Ant Design Pro of Vue 定制化 CSS</h1><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><p>如何在 antd pro 框架上实现样式自定义</p><h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h2><ul><li>antd 已经有完善的 UI 组件及设计风格，但在项目中客户经常提出需要有独特的 UI 设计，如不同的主题色、布局、卡片等，本次不涉及探讨 antd 设计系统，仅分享从哪些角度可以对组件进行样式修改。</li><li>本次演示代码环境 <ul><li>ant design vue 1.7.8</li><li>vue antd pro 3.0.2</li><li>less</li><li>vue/cli 4.5.17</li></ul></li></ul><h2 id="实操" tabindex="-1"><a class="header-anchor" href="#实操" aria-hidden="true">#</a> 实操</h2><h3 id="全局修改" tabindex="-1"><a class="header-anchor" href="#全局修改" aria-hidden="true">#</a> 全局修改</h3>',7),u=n("code",null,"vue.config.js",-1),d={href:"https://github.com/vueComponent/ant-design-vue/blob/master/components/style/themes/default.less",target:"_blank",rel:"noopener noreferrer"},v=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">loaderOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">less</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">modifyVars</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// less vars，customize ant design theme</span>

        <span class="token string-property property">&#39;primary-color&#39;</span><span class="token operator">:</span> <span class="token string">&#39;#21B0AF&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// &#39;link-color&#39;: &#39;#F5222D&#39;,</span>
        <span class="token string-property property">&#39;border-radius-base&#39;</span><span class="token operator">:</span> <span class="token string">&#39;2px&#39;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;layout-header-background&#39;</span><span class="token operator">:</span> <span class="token string">&#39;#21B0AF&#39;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;menu-dark-item-active-bg&#39;</span><span class="token operator">:</span> <span class="token string">&#39;#f3fbfb&#39;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;menu-dark-submenu-bg&#39;</span><span class="token operator">:</span> <span class="token string">&#39;#21B0AF&#39;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;card-shadow&#39;</span><span class="token operator">:</span> <span class="token string">&#39;0px 4px 28px rgba(68, 57, 168, 0.15)&#39;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;card-head-color&#39;</span><span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;card-head-background&#39;</span><span class="token operator">:</span> <span class="token string">&#39;linear-gradient(180deg, #21B0AF 8.33%, #26D3D2 100%)&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// DO NOT REMOVE THIS LINE</span>
      <span class="token literal-property property">javascriptEnabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),k=a(`<li><p>对于超出变量外其余的样式覆盖，我通常选在 <code>src/global.js</code> 进行覆盖修改，也可以自己定义文件在 <code>main.js</code> 中引入。需要注意的是，由于 antd 组件 css 使用 <code>less</code> ，对控制台中仅选中元素 类名修改会由于权重问题不生效，个人一般不建议直接使用 <code>!important</code>，可以参照原组件样式层级结构来修改。</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token comment">// src/global.js 修改菜单样式</span>
<span class="token selector">.ant-menu</span> <span class="token punctuation">{</span>
  <span class="token selector">&amp;-dark&amp;-inline &amp;-item,
  &amp;-dark&amp;-inline &amp;-submenu-title</span> <span class="token punctuation">{</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 20px 0 0 20px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">&amp;-dark &amp;-item-selected</span> <span class="token punctuation">{</span>
    <span class="token selector">&gt; a,
    &gt; a:hover</span> <span class="token punctuation">{</span>
      <span class="token property">color</span><span class="token punctuation">:</span> #21b0af<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token selector">&amp;&amp;-dark &amp;-item-selected,
  &amp;-submenu-popup&amp;-dark &amp;-item-selected</span> <span class="token punctuation">{</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 20px 0 0 20px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),m=a(`<h3 id="单页面修改" tabindex="-1"><a class="header-anchor" href="#单页面修改" aria-hidden="true">#</a> 单页面修改</h3><p>单页面修改时需要避免对全局造成污染，需要使用 <code>scoped</code> 局部样式方案。同时为了覆盖 antd 组件类名，需 使用 <code>scss, less</code> 搭配 <code>/deep/</code> 进行样式穿透，或使用 <code>css</code> 搭配 <code>&lt;&lt;&lt;</code> 进行样式穿透。</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">&lt;style lang=&quot;less&quot; scoped&gt;
  .ant-pro-pages-account-projects-cardList</span> <span class="token punctuation">{</span>
    <span class="token property">margin-top</span><span class="token punctuation">:</span> 24px<span class="token punctuation">;</span>

    <span class="token selector">/deep/ .ant-card-meta-title</span> <span class="token punctuation">{</span>
      <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">/deep/ .ant-card-meta-description</span> <span class="token punctuation">{</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 44px<span class="token punctuation">;</span>
      <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
      <span class="token property">line-height</span><span class="token punctuation">:</span> 22px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.cardItemContent</span> <span class="token punctuation">{</span>
      <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
      <span class="token property">margin-top</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
      <span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token operator">-</span>4px<span class="token punctuation">;</span>
      <span class="token property">line-height</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>

      <span class="token selector">&gt; span</span> <span class="token punctuation">{</span>
        <span class="token property">flex</span><span class="token punctuation">:</span> 1 1<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>.45<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token selector">/deep/ .ant-pro-avatar-list</span> <span class="token punctuation">{</span>
        <span class="token property">flex</span><span class="token punctuation">:</span> 0 1 auto<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
&lt;<span class="token operator">/</span>style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,4),b={href:"https://pro.antdv.com/docs/style",target:"_blank",rel:"noopener noreferrer"},h={href:"https://1x.antdv.com/docs/vue/customize-theme-cn/",target:"_blank",rel:"noopener noreferrer"};function g(y,x){const e=o("ExternalLinkIcon");return i(),l("div",null,[r,n("ul",null,[n("li",null,[n("p",null,[s("antd 官网介绍了几种修改已定义变量的方法，在项目里为了方便查看我个人习惯集中修改 "),u,s(" 。这里可以对任何 antd 已经定义好的"),n("a",d,[s("变量"),t(e)]),s("进行全局修改")]),v]),k]),m,n("ul",null,[n("li",null,[n("a",b,[s("https://pro.antdv.com/docs/style"),t(e)])]),n("li",null,[n("a",h,[s("https://1x.antdv.com/docs/vue/customize-theme-cn/"),t(e)])])])])}const _=p(c,[["render",g],["__file","index.html.vue"]]);export{_ as default};
