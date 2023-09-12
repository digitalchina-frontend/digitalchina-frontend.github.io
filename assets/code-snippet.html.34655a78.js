import{_ as t,r as p,o as e,c as o,a as n,b as s,d as c,e as l}from"./app.cd040b68.js";const u="/images/open-json.gif",i="/images/snippet.png",k="/images/setting-snippent.gif",r={},d=n("h1",{id:"vscode-片段代码设置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vscode-片段代码设置","aria-hidden":"true"},"#"),s(" VScode 片段代码设置")],-1),g=n("p",null,"有些代码片段是需要经常写的，所以为了提高效率，减少重复工作，我们可以在 VS Code 中设置代码片段，通过自定义的触发条件快速生成对应的代码片段",-1),m=n("p",null,"那么如何设置呢？",-1),v=n("p",null,"在 VScode 中我们可以打开文件 → 首选项 → 选择配置用户片段代码，比如我们这里想要创建 html 的代码片段，那就选择 html.json",-1),_=n("p",null,[n("img",{src:u,alt:"open-json"})],-1),h=n("p",null,"我们可以看到配置片段代码是 JSON 格式，我们可以一个一个写，但是这样太麻烦了，我们可以借助一个在线代码片段工具来生成，配置步骤如下",-1),b=l(`<li><p>复制需要生成的片段代码，我这里给大家准备了一个</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width,  initial-scale=1.0<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>\${TM_FILENAME_BASE}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../js/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>root<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>$0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
      Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>productionTip <span class="token operator">=</span> <span class="token boolean">false</span>
      <span class="token keyword">const</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#root&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          $1<span class="token punctuation">,</span> <span class="token comment">//光标出现的第一个位置</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),q={href:"https://snippet-generator.app/",target:"_blank",rel:"noopener noreferrer"},f=n("p",null,[n("img",{src:i,alt:"snippet"})],-1),y=n("p",null,"填写 Description、Tab trigger，把刚才复制的代码拷贝进 Your snippet 一栏，然后点击右下角的 Copy snippet 按钮复制生成的设置代码片段的代码； 在 VScode 中配置片段",-1),V=n("p",null,[n("img",{src:k,alt:"setting-snippet"})],-1),x=n("p",null,"这样，一个代码片段就设置好了（记得保存文件哦），那么我们编写代码时只要输入了前缀（prefix）的内容，就可以选择自动生成 body 对应的代码片段了。如果还想设置别的 html 代码片段，还是按照之前的步骤，最后把设置代码放到这个配置文件中，每个代码片段之间用 , 分隔即可；",-1);function E(S,j){const a=p("ExternalLinkIcon");return e(),o("div",null,[d,g,m,v,_,h,n("ol",null,[b,n("li",null,[n("p",null,[s("打开 "),n("a",q,[s("代码片段在线生成工具"),c(a)]),s("，在其中设置生成代码片段")]),f,y,V])]),x])}const N=t(r,[["render",E],["__file","code-snippet.html.vue"]]);export{N as default};
