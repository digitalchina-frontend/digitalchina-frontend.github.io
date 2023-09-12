import{_ as e,o as n,c as i,e as s}from"./app.cd040b68.js";const a={},d=s(`<h1 id="对象解构" tabindex="-1"><a class="header-anchor" href="#对象解构" aria-hidden="true">#</a> 对象解构</h1><p>如何将 js 对象的各个属性值赋值给另外单独的变量？</p><h2 id="不推荐方式" tabindex="-1"><a class="header-anchor" href="#不推荐方式" aria-hidden="true">#</a> 不推荐方式</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const user = {
    name: &#39;zhangsan&#39;,
    age: 10,
    gender: &#39;male&#39;
};
const name = user.name;
const age = user.age;
const gender = user.gender;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="推荐方式-对象解构" tabindex="-1"><a class="header-anchor" href="#推荐方式-对象解构" aria-hidden="true">#</a> 推荐方式: 对象解构</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const user = {
    name: &#39;zhangsan&#39;,
    age: 10,
    gender: &#39;male&#39;
};
const { name, age, gender } = user
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><p>假设前端通过 API 调用返回了 response 如下，如何获取 data 下的 id，title，fileName 等字段?</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;code&quot;: 200,
  &quot;msg&quot;: &quot;SUCCESS&quot;,
  &quot;timestamp&quot;: 1671778459028,
  &quot;data&quot;: {
    &quot;id&quot;: 1,
    &quot;title&quot;: &quot;测试“,
    &quot;fileName&quot;: &quot;test.pdf&quot;,
    &quot;score&quot;: 100,
    &quot;number&quot;: 10,
    &quot;questions&quot;: [],
    &quot;createBy&quot;: &quot;admin&quot;,
    &quot;createTime&quot;: &quot;2022-12-23 14:11:42&quot;
  },
  &quot;success&quot;: true
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),t=[d];function u(r,l){return n(),i("div",null,t)}const o=e(a,[["render",u],["__file","Destructuring-Assignment.html.vue"]]);export{o as default};
