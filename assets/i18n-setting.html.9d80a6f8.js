import{_ as s,o as n,c as a,e}from"./app.cd040b68.js";const i={},t=e(`<h1 id="多语言配置" tabindex="-1"><a class="header-anchor" href="#多语言配置" aria-hidden="true">#</a> 多语言配置</h1><ol><li>支持多语言，<code>config.locales</code> 配置中的 <code>/en/</code> 是用于匹配路由以判断当前页面适用哪种语言，<code>config.theme.locales</code> 中的 <code>/en/</code> 则是对选择语言下拉框跳转链接的配置</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;现代前端开发指南&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&#39;大道至简，让前端开发更简单&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;/en/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">&#39;en-US&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;A Guide to Modern Front-End Development&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">description</span><span class="token operator">:</span>
        <span class="token string">&#39;From the road to simplicity, making front-end development easier&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">&#39;images/logo.png&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">locales</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">selectLanguageName</span><span class="token operator">:</span> <span class="token string">&#39;简体中文&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">selectLanguageText</span><span class="token operator">:</span> <span class="token string">&#39;选择语言&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">selectLanguageAriaLabel</span><span class="token operator">:</span> <span class="token string">&#39;选择语言&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// page meta</span>
        <span class="token literal-property property">editLinkText</span><span class="token operator">:</span> <span class="token string">&#39;在 GitHub 上编辑此页&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">lastUpdatedText</span><span class="token operator">:</span> <span class="token string">&#39;上次更新&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">contributorsText</span><span class="token operator">:</span> <span class="token string">&#39;贡献者&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// custom containers</span>
        <span class="token literal-property property">tip</span><span class="token operator">:</span> <span class="token string">&#39;提示&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">warning</span><span class="token operator">:</span> <span class="token string">&#39;注意&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">danger</span><span class="token operator">:</span> <span class="token string">&#39;警告&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// 404 page</span>
        <span class="token literal-property property">notFound</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&#39;这里什么都没有&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;我们怎么到这来了？&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;这是一个 404 页面&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;看起来我们进入了错误的链接&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">backToHome</span><span class="token operator">:</span> <span class="token string">&#39;返回首页&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// a11y</span>
        <span class="token literal-property property">openInNewWindow</span><span class="token operator">:</span> <span class="token string">&#39;在新窗口打开&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">toggleColorMode</span><span class="token operator">:</span> <span class="token string">&#39;切换颜色模式&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">toggleSidebar</span><span class="token operator">:</span> <span class="token string">&#39;切换侧边栏&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">&#39;/en/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">selectLanguageName</span><span class="token operator">:</span> <span class="token string">&#39;English&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// page meta</span>
        <span class="token literal-property property">editLinkText</span><span class="token operator">:</span> <span class="token string">&#39;Edit this page on GitHub&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),p=[t];function l(o,c){return n(),a("div",null,p)}const d=s(i,[["render",l],["__file","i18n-setting.html.vue"]]);export{d as default};
