import{_ as c,r as i,o as p,c as d,a as s,b as n,d as a,w as o,e as t}from"./app.cd040b68.js";const u="/images/88.png",r="/images/99.gif",v="/images/100.gif",m="/images/110.gif",b={},k=t('<h1 id="前端和设计共性知识—经验篇" tabindex="-1"><a class="header-anchor" href="#前端和设计共性知识—经验篇" aria-hidden="true">#</a> 前端和设计共性知识—经验篇</h1><h2 id="本篇需要解决的问题" tabindex="-1"><a class="header-anchor" href="#本篇需要解决的问题" aria-hidden="true">#</a> 本篇需要解决的问题</h2><p>（1）知道盒子模型宽度、高度的计算方法<br> （2）理解自适应、弹性布局、响应式</p><h2 id="_1-设计师为什么要学习代码-html、css-等知识" tabindex="-1"><a class="header-anchor" href="#_1-设计师为什么要学习代码-html、css-等知识" aria-hidden="true">#</a> 1. 设计师为什么要学习代码（html、css 等知识）</h2><h3 id="_1-1-学习的目的" tabindex="-1"><a class="header-anchor" href="#_1-1-学习的目的" aria-hidden="true">#</a> 1.1 学习的目的</h3>',5),h=t('<h2 id="_2-前端的基础知识" tabindex="-1"><a class="header-anchor" href="#_2-前端的基础知识" aria-hidden="true">#</a> 2. 前端的基础知识</h2><h3 id="_2-1-前端的盒子模型" tabindex="-1"><a class="header-anchor" href="#_2-1-前端的盒子模型" aria-hidden="true">#</a> 2.1 前端的盒子模型</h3><blockquote><p>在 CSS 中，术语“盒子模型”用于讨论设计和布局。CSS 盒子模型本质上是一个包裹每个 HTML 元素的盒子。它包括：边距、边框、填充和实际内容。下图说明了盒子模型：</p></blockquote><p><img src="'+u+`" alt="VScode-DownLoad"></p><ul><li>一个元素的总宽高应该这样计算：</li><li>总元素宽度 = 宽度 + 左填充 + 右填充 + 左边框 + 右边框 + 左边距 + 右边距</li><li>总元素高度 = 高度 + 上边距 + 下边距 + 上边框 + 下边框 + 上边距 + 下边距</li></ul><h3 id="_2-2-从前端技术角度理解-自适应、弹性布局、响应式的-——非常重要" tabindex="-1"><a class="header-anchor" href="#_2-2-从前端技术角度理解-自适应、弹性布局、响应式的-——非常重要" aria-hidden="true">#</a> 2.2 从前端技术角度理解“自适应、弹性布局、响应式的”——非常重要</h3><blockquote><p>对上述的三种的叫法，我们深刻探讨一下 弹性布局：说到弹性布局，如果用 html 和 css 的语法写，我们首先会想到那个语法——去解决这个问题，我想肯定是&quot;flex&quot;(实现的方法还有别的）那么我们看下下面的这个 case（鼠标拖拽，会发生什么效果/code）</p></blockquote><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;style&gt;
.flex-container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> DodgerBlue<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> space<span class="token operator">-</span>between<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.flex-container &gt; div</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #f1f1f1<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>

<span class="token punctuation">}</span>
&lt;<span class="token operator">/</span>style&gt;
&lt;<span class="token operator">/</span>head&gt;

&lt;body&gt;
&lt;h1&gt;Create a Flex Container&lt;<span class="token operator">/</span>h1&gt;
&lt;div class=<span class="token string">&quot;flex-container&quot;</span>&gt;
  &lt;div&gt;1&lt;<span class="token operator">/</span>div&gt;
  &lt;div&gt;2&lt;<span class="token operator">/</span>div&gt;
  &lt;div&gt;3&lt;<span class="token operator">/</span>div&gt;
&lt;<span class="token operator">/</span>div&gt;
&lt;p&gt;A Flexible Layout must have a parent element with the &lt;em&gt;display&lt;<span class="token operator">/</span>em&gt; property set to &lt;em&gt;flex&lt;<span class="token operator">/</span>em&gt;.&lt;<span class="token operator">/</span>p&gt;
&lt;p&gt;Direct child <span class="token function">elements</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> of the flexible container automatically becomes flexible items.&lt;<span class="token operator">/</span>p&gt;
&lt;<span class="token operator">/</span>body&gt;
&lt;<span class="token operator">/</span>html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+r+'" alt="VScode-DownLoad"></p>',9),g=s("em",null,"667）去自适应（390",-1),f=s("em",null,"1080）去自适应（1440",-1),_=t(`<p>（1）不要把 em（父元素而言的）和 rem（根字体）混淆了<br> （2）怎么去动态的设置 font-size（这样的话才可以切换不同的屏幕，元素才可以等比例的放大缩小<br> （3）实现的方式@js+rem@媒体查询+rem</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;

&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;title&gt;Document&lt;/title&gt;
    &lt;script&gt;

        var c = () =&gt;</span> <span class="token punctuation">{</span>
            let w = document.documentElement.clientWidth<span class="token punctuation">;</span>
            let n = <span class="token punctuation">(</span>18<span class="token operator">*</span><span class="token punctuation">(</span>w<span class="token operator">/</span>640<span class="token punctuation">)</span>&gt;40?40<span class="token operator">+</span><span class="token string">&quot;px&quot;</span><span class="token punctuation">:</span><span class="token punctuation">(</span>18<span class="token operator">*</span><span class="token punctuation">(</span>w<span class="token operator">/</span>640<span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot;px&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            document.documentElement.style.fontSize=n<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
            window.<span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;load&quot;</span><span class="token punctuation">,</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
            window.<span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;resize&quot;</span><span class="token punctuation">,</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token selector">&lt;/script&gt;
&lt;/head&gt;
&lt;style&gt;
    div</span> <span class="token punctuation">{</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
&lt;<span class="token operator">/</span>style&gt;
&lt;body&gt;
    &lt;div&gt;我的名字叫李军&lt;<span class="token operator">/</span>div&gt;
&lt;<span class="token operator">/</span>body&gt;

&lt;<span class="token operator">/</span>html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+v+`" alt="VScode-DownLoad"></p><ul><li>响应式：我们先用媒体查询做一个 case 展示</li></ul><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;

&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;title&gt;Document&lt;/title&gt;
&lt;/head&gt;
&lt;style&gt;
    #div0</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">#div0 div</span> <span class="token punctuation">{</span>
        <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">#div0 div:nth-child(1)</span> <span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> aqua<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">#div0 div:nth-child(2)</span> <span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">#div0 div:nth-child(3)</span> <span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token selector">&lt;/style&gt;

&lt;style media=&quot;(min-device-width:0px) and (max-device-width:300px)&quot;&gt;
    #div0 div</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token selector">&lt;/style&gt;

&lt;style media=&quot;(min-device-width:301px) and (max-device-width:700px)&quot;&gt;
    #div0 div</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token selector">&lt;/style&gt;
&lt;style media=&quot;(min-device-width:701px) and (max-device-width:1920px)&quot;&gt;
    #div0 div</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 33.3%<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
&lt;<span class="token operator">/</span>style&gt;

&lt;body&gt;
    &lt;div id=<span class="token string">&quot;div0&quot;</span>&gt;
        &lt;div&gt;&lt;<span class="token operator">/</span>div&gt;
        &lt;div&gt;&lt;<span class="token operator">/</span>div&gt;
        &lt;div&gt;&lt;<span class="token operator">/</span>div&gt;
    &lt;<span class="token operator">/</span>div&gt;
&lt;<span class="token operator">/</span>body&gt;

&lt;<span class="token operator">/</span>html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+m+'" alt="VScode-DownLoad"></p>',6),y={href:"http://lijxse.gitee.io/caomaolayout/",target:"_blank",rel:"noopener noreferrer"},x=s("h2",{id:"_3-设计师学习-html-和-css-需要注意的点",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_3-设计师学习-html-和-css-需要注意的点","aria-hidden":"true"},"#"),n(" 3. 设计师学习 html 和 css 需要注意的点")],-1),q={href:"https://www.w3schools.com/",target:"_blank",rel:"noopener noreferrer"},w=t('<table><thead><tr><th style="text-align:left;">各个标签的含义</th><th style="text-align:left;">div\\a\\input......</th></tr></thead><tbody><tr><td style="text-align:left;">布局方式</td><td style="text-align:left;">rem/媒体查询</td></tr><tr><td style="text-align:left;">自适应/响应式/弹性布局</td><td style="text-align:left;">分割线、删格、layout、space</td></tr><tr><td style="text-align:left;">容器查询</td><td style="text-align:left;">锚点、面包屑、下拉菜单、导航菜单、分页、步骤条</td></tr><tr><td style="text-align:left;">数据录入</td><td style="text-align:left;">https://ishadeed.com/article/say-hello-to-css-container-queries/（看看和“媒体查询之间的区别</td></tr></tbody></table><h2 id="_4-思考" tabindex="-1"><a class="header-anchor" href="#_4-思考" aria-hidden="true">#</a> 4. 思考</h2><ul><li>对于设计师的我，如果学习有什么体会的话，那就是一定要“实践动手”，当遇到一个不懂的问题的时候，一定要去核查 code 的语法，不断的加深和理解</li></ul>',3);function E(C,D){const e=i("font"),l=i("ExternalLinkIcon");return p(),d("div",null,[k,s("blockquote",null,[s("p",null,[n("就是理解前端的书写逻辑，更加好的对接前端，提高设计和前端的彼此之前的效率问题 "),a(e,{color:"red"},{default:o(()=>[n("（多层次、多维度的去理解前端说实现不了的问题）")]),_:1}),n("，我们可以浅显的理解“html 相当于界面的层次结构脉络、css 相当于美化/装饰、js 添加交互事件（交互”）")])]),h,s("ul",null,[s("li",null,[n("自适应：自适应的语意说法很多，这里主要说明“一个界面（375"),g,n("844/或者别的尺寸的）、一个 web 界面（1920"),f,n("900）”的问题，这里我们涉及到前端的技术 rem 等技术，这个地方要特别的说明 rem，"),a(e,{color:"red"},{default:o(()=>[n("rem 是相对于 html 根字体 font size 而言的（一套图满足不同尺寸、分辨率视口），呈现出良好的效果")]),_:1})])]),_,s("ul",null,[s("li",null,[n("（如果上面的展示不明显点击"),s("a",y,[n("http://lijxse.gitee.io/caomaolayout/"),a(l)]),n("，看看响应式的魅力吧）")])]),x,s("blockquote",null,[s("p",null,[n("我们在学习的时候，一定要理解 html 和 css 本质的问题"),s("a",q,[n("https://www.w3schools.com/"),a(l)]),n("，从我们设计和开发的角度出发——设计出来的界面，前端是怎么还原（还原的程度你可以提前做个预判），怎么方便他们进行复用组件")])]),w])}const S=c(b,[["render",E],["__file","common-knowledge.html.vue"]]);export{S as default};
