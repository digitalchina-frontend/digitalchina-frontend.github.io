# 前端和设计共性知识—经验篇

## 本篇需要解决的问题

（1）知道盒子模型宽度、高度的计算方法<br>
（2）理解自适应、弹性布局、响应式

## 1. 设计师为什么要学习代码（html、css 等知识）

### 1.1 学习的目的

> 就是理解前端的书写逻辑，更加好的对接前端，提高设计和前端的彼此之前的效率问题 <font color=red>（多层次、多维度的去理解前端说实现不了的问题）</font>，我们可以浅显的理解“html 相当于界面的层次结构脉络、css 相当于美化/装饰、js 添加交互事件（交互”）

## 2. 前端的基础知识

### 2.1 前端的盒子模型

> 在 CSS 中，术语“盒子模型”用于讨论设计和布局。CSS 盒子模型本质上是一个包裹每个 HTML 元素的盒子。它包括：边距、边框、填充和实际内容。下图说明了盒子模型：

![VScode-DownLoad](/images/88.png)

- 一个元素的总宽高应该这样计算：
- 总元素宽度 = 宽度 + 左填充 + 右填充 + 左边框 + 右边框 + 左边距 + 右边距
- 总元素高度 = 高度 + 上边距 + 下边距 + 上边框 + 下边框 + 上边距 + 下边距

### 2.2 从前端技术角度理解“自适应、弹性布局、响应式的”——非常重要

> 对上述的三种的叫法，我们深刻探讨一下
> 弹性布局：说到弹性布局，如果用 html 和 css 的语法写，我们首先会想到那个语法——去解决这个问题，我想肯定是"flex"(实现的方法还有别的）那么我们看下下面的这个 case（鼠标拖拽，会发生什么效果/code）

```less
<!DOCTYPE html>
<html>
<head>
<style>
.flex-container {
  display: flex;
  background-color: DodgerBlue;
  justify-content: space-between;
}

.flex-container > div {
  background-color: #f1f1f1;
  margin: 10px;
  padding: 20px;
  font-size: 30px;

}
</style>
</head>

<body>
<h1>Create a Flex Container</h1>
<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
<p>A Flexible Layout must have a parent element with the <em>display</em> property set to <em>flex</em>.</p>
<p>Direct child elements(s) of the flexible container automatically becomes flexible items.</p>
</body>
</html>
```

![VScode-DownLoad](/images/99.gif)

- 自适应：自适应的语意说法很多，这里主要说明“一个界面（375*667）去自适应（390*844/或者别的尺寸的）、一个 web 界面（1920*1080）去自适应（1440*900）”的问题，这里我们涉及到前端的技术 rem 等技术，这个地方要特别的说明 rem，<font color=red>rem 是相对于 html 根字体 font size 而言的（一套图满足不同尺寸、分辨率视口），呈现出良好的效果</font>

（1）不要把 em（父元素而言的）和 rem（根字体）混淆了<br>
（2）怎么去动态的设置 font-size（这样的话才可以切换不同的屏幕，元素才可以等比例的放大缩小<br>
（3）实现的方式@js+rem@媒体查询+rem

```less
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>

        var c = () => {
            let w = document.documentElement.clientWidth;
            let n = (18*(w/640)>40?40+"px":(18*(w/640)+"px"));
            document.documentElement.style.fontSize=n;
        }
            window.addEventListener("load",c);
            window.addEventListener("resize",c);
    </script>
</head>
<style>
    div {
        font-size: 1rem;
    }
</style>
<body>
    <div>我的名字叫李军</div>
</body>

</html>
```

![VScode-DownLoad](/images/100.gif)

- 响应式：我们先用媒体查询做一个 case 展示

```less
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    #div0 {
        width: 100%;
        height: 500px;
    }

    #div0 div {
        float: left;
        height: 200px;
    }

    #div0 div:nth-child(1) {
        background-color: aqua;
    }

    #div0 div:nth-child(2) {
        background-color: red;
    }

    #div0 div:nth-child(3) {
        background-color: blue;
    }
</style>

<style media="(min-device-width:0px) and (max-device-width:300px)">
    #div0 div {
        width: 100%;
    }
</style>

<style media="(min-device-width:301px) and (max-device-width:700px)">
    #div0 div {
        width: 50%;
    }
</style>
<style media="(min-device-width:701px) and (max-device-width:1920px)">
    #div0 div {
        width: 33.3%;
    }
</style>

<body>
    <div id="div0">
        <div></div>
        <div></div>
        <div></div>
    </div>
</body>

</html>
```

![VScode-DownLoad](/images/110.gif)

- （如果上面的展示不明显点击[http://lijxse.gitee.io/caomaolayout/](http://lijxse.gitee.io/caomaolayout/)，看看响应式的魅力吧）

## 3. 设计师学习 html 和 css 需要注意的点

> 我们在学习的时候，一定要理解 html 和 css 本质的问题[https://www.w3schools.com/](https://www.w3schools.com/)，从我们设计和开发的角度出发——设计出来的界面，前端是怎么还原（还原的程度你可以提前做个预判），怎么方便他们进行复用组件

| 各个标签的含义         | div\a\input\......                                                                          |
| :--------------------- | :------------------------------------------------------------------------------------------ |
| 布局方式               | rem/媒体查询                                                                                |
| 自适应/响应式/弹性布局 | 分割线、删格、layout、space                                                                 |
| 容器查询               | 锚点、面包屑、下拉菜单、导航菜单、分页、步骤条                                              |
| 数据录入               | https://ishadeed.com/article/say-hello-to-css-container-queries/（看看和“媒体查询之间的区别 |

## 4. 思考

- 对于设计师的我，如果学习有什么体会的话，那就是一定要“实践动手”，当遇到一个不懂的问题的时候，一定要去核查 code 的语法，不断的加深和理解
