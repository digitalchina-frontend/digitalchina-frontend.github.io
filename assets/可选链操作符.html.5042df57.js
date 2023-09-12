import{_ as a,o as n,c as s,e}from"./app.cd040b68.js";const p={},t=e(`<h1 id="可选链操作符" tabindex="-1"><a class="header-anchor" href="#可选链操作符" aria-hidden="true">#</a> 可选链操作符</h1><p>允许读取位于对象链深处的属性，而不必明确验证链中的每个引用是否有效。</p><h2 id="使用-不推荐" tabindex="-1"><a class="header-anchor" href="#使用-不推荐" aria-hidden="true">#</a> 使用&amp;&amp;（不推荐）</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">cat</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;xiaohua&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> temp <span class="token operator">=</span> obj<span class="token punctuation">.</span>dog<span class="token punctuation">.</span>name <span class="token comment">// 报错</span>
<span class="token keyword">let</span> demo <span class="token operator">=</span> obj<span class="token punctuation">.</span>dog <span class="token operator">&amp;&amp;</span> obj<span class="token punctuation">.</span>dog<span class="token punctuation">.</span>name <span class="token comment">// undifined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用-推荐" tabindex="-1"><a class="header-anchor" href="#使用-推荐" aria-hidden="true">#</a> 使用?.（推荐）</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">cat</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;xiaohua&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> temp <span class="token operator">=</span> obj<span class="token punctuation">.</span>dog<span class="token operator">?.</span>name <span class="token comment">// undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过使用 ?. 操作符取代 . 操作符，JavaScript 会在尝试访问 obj.dog.name 之前，先隐式地检查并确定 obj.dog 既不是 null 也不是 undefined。如果 obj.dog 是 null 或者 undefined，表达式将会短路计算直接返回 undefined。</p><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><p>可选链操作符(?.)可以连用吗</p>`,9),o=[t];function c(i,l){return n(),s("div",null,o)}const d=a(p,[["render",c],["__file","可选链操作符.html.vue"]]);export{d as default};
