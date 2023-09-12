import{_ as i,r as o,o as n,c as m,a as t,b as e,d as r,e as s}from"./app.cd040b68.js";const l="/images/emmet1.gif",c="/images/emmet2.gif",p="/images/emmet3.gif",d="/images/emmet4.gif",_="/images/emmet5.gif",g="/images/emmet6.gif",h="/images/emmet7.gif",u="/images/emmet8.gif",f="/images/emmet9.gif",v="/images/emmet02.png",b="/images/emmet12.gif",E="/images/emmet10.gif",k="/images/emmet11.gif",x="/images/emmet01.png",N="/images/emmet13.gif",q={},T=s('<h1 id="emmet-相关介绍-vscode-内置" tabindex="-1"><a class="header-anchor" href="#emmet-相关介绍-vscode-内置" aria-hidden="true">#</a> Emmet 相关介绍(vscode 内置)</h1><h2 id="主题" tabindex="-1"><a class="header-anchor" href="#主题" aria-hidden="true">#</a> 主题</h2><p>这里主要介绍 vscode 中 HTML、CSS 的常用 Emmet 语法。</p><h2 id="html" tabindex="-1"><a class="header-anchor" href="#html" aria-hidden="true">#</a> HTML</h2><h3 id="emmet-的基本语法规则如下-输入完按-tab-键生成" tabindex="-1"><a class="header-anchor" href="#emmet-的基本语法规则如下-输入完按-tab-键生成" aria-hidden="true">#</a> emmet 的基本语法规则如下：（输入完按 Tab 键生成）:</h3><div class="custom-container tip"><p class="custom-container-title">提示</p><ul><li>E 代表 HTML 标签。</li><li>E#id 代表 id 属性。</li><li>E.class 代表 class 属性。</li><li>E[attr=foo] 代表某一个特定属性。</li><li>E{foo} 代表标签包含的内容是 foo。</li><li>E&gt;N 代表 N 是 E 的子元素。</li><li>E+N 代表 N 是 E 的同级元素。</li><li>E^N 代表 N 是 E 的上级元素。</li></ul></div><ol><li>输入！初始化 HTML5 结构类型</li></ol><p><img src="'+l+'" alt=""></p><ol start="2"><li>输入元素名称生成对应标签</li></ol><p><img src="'+c+'" alt=""></p><ol start="3"><li>输入 &gt; 创建后代（子级）</li></ol><p><img src="'+p+'" alt=""></p><ol start="4"><li>输入{}可添加文本</li></ol><p><img src="'+d+'" alt=""></p><ol start="5"><li>输入 *数字 创建多个标签</li></ol><p><img src="'+_+'" alt=""></p><ol start="6"><li>输入 .class 创建带类名标签</li></ol><p><img src="'+g+'" alt=""></p><ol start="7"><li>输入 #id 创建带 id 标签</li></ol><p><img src="'+h+'" alt=""></p><ol start="8"><li>所有 emmet 语法都可以连续写</li></ol><p><img src="'+u+'" alt=""></p><ol start="9"><li>自增符号：输入 $生成有序数字</li></ol><p><img src="'+f+'" alt=""></p><p>10.通过设置键盘快捷键试用缩写包围</p><p><img src="'+v+'" alt="emmet02"></p><p><img src="'+b+'" alt=""></p><h2 id="css" tabindex="-1"><a class="header-anchor" href="#css" aria-hidden="true">#</a> CSS</h2><p>1.写样式有提示（每输入一个字母，都在进行一定范围的模糊搜索）</p><p><img src="'+E+'" alt=""></p><p>2.字母+数字可以直接得到 px，字母+数字+p 可以得到百分比（+r 得到 rem，+e 得到 em）</p><p><img src="'+k+'" alt=""></p><p>3.通过设置键盘快捷键通过键盘增减样式数值</p><p><img src="'+x+'" alt="emmet01"></p><p><img src="'+N+'" alt=""></p>',35),L={id:"更多简写方式-cheat-sheet-emmet-io",tabindex:"-1"},S=t("a",{class:"header-anchor",href:"#更多简写方式-cheat-sheet-emmet-io","aria-hidden":"true"},"#",-1),j={href:"https://docs.emmet.io/cheat-sheet/",target:"_blank",rel:"noopener noreferrer"},C=s(`<p>相关设置：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;emmet.triggerExpansionOnTab&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">//当文本不是 Emmet 缩写时，此设置允许使用 Tab 键进行缩进。</span>
 <span class="token property">&quot;emmet.includeLanguages&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token property">&quot;javascript&quot;</span><span class="token operator">:</span> <span class="token string">&quot;javascriptreact&quot;</span><span class="token comment">//可以在JSX中使用普通html里的标签自动补全功能</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function H(M,V){const a=o("ExternalLinkIcon");return n(),m("div",null,[T,t("h2",L,[S,e(" 更多简写方式：("),t("a",j,[e("Cheat Sheet (emmet.io)"),r(a)]),e(")")]),C])}const B=i(q,[["render",H],["__file","Emmet相关介绍.html.vue"]]);export{B as default};
