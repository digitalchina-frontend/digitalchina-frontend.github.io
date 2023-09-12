import{_ as n,o as a,c as s,e}from"./app.cd040b68.js";const t={},p=e(`<h1 id="展开运算符合并对象" tabindex="-1"><a class="header-anchor" href="#展开运算符合并对象" aria-hidden="true">#</a> 展开运算符合并对象</h1><p>javascript 合并对象</p><h2 id="手动赋值-不推荐" tabindex="-1"><a class="header-anchor" href="#手动赋值-不推荐" aria-hidden="true">#</a> 手动赋值（不推荐）</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;haha&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">&#39;男&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
obj2<span class="token punctuation">.</span>name <span class="token operator">=</span> obj1<span class="token punctuation">.</span>name
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span> <span class="token comment">// {sex:&#39;男&#39;，name:&#39;haha&#39;}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="展开运算符合并对象-推荐" tabindex="-1"><a class="header-anchor" href="#展开运算符合并对象-推荐" aria-hidden="true">#</a> 展开运算符合并对象（推荐）</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;haha&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">&#39;男&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> obj3 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span>obj1<span class="token punctuation">,</span> <span class="token operator">...</span>obj2 <span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj3<span class="token punctuation">)</span> <span class="token comment">// {name:&#39;haha&#39;,sex:&#39;男&#39;}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><p>事实上 es6 之前我们更多的用 Object.assign()，展开运算符和 Object.assign()哪个更好用一点呢</p>`,8),o=[p];function c(i,l){return a(),s("div",null,o)}const d=n(t,[["render",c],["__file","展开运算符合并对象.html.vue"]]);export{d as default};
