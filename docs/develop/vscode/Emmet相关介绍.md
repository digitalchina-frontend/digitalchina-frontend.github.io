# Emmet 相关介绍(vscode 内置)

## 主题

这里主要介绍 vscode 中 HTML、CSS 的常用 Emmet 语法。

## HTML

### emmet 的基本语法规则如下：（输入完按 Tab 键生成）:

::: tip

- E 代表 HTML 标签。
- E#id 代表 id 属性。
- E.class 代表 class 属性。
- E[attr=foo] 代表某一个特定属性。
- E{foo} 代表标签包含的内容是 foo。
- E>N 代表 N 是 E 的子元素。
- E+N 代表 N 是 E 的同级元素。
- E^N 代表 N 是 E 的上级元素。

:::

1.  输入！初始化 HTML5 结构类型

![](/images/emmet1.gif)

2. 输入元素名称生成对应标签

![](/images/emmet2.gif)

3. 输入 > 创建后代（子级）

![](/images/emmet3.gif)

4.  输入{}可添加文本

![](/images/emmet4.gif)

5.  输入 \*数字 创建多个标签

![](/images/emmet5.gif)

6.  输入 .class 创建带类名标签

![](/images/emmet6.gif)

7.  输入 #id 创建带 id 标签

![](/images/emmet7.gif)

8.  所有 emmet 语法都可以连续写

![](/images/emmet8.gif)

9. 自增符号：输入 $生成有序数字

![](/images/emmet9.gif)

10.通过设置键盘快捷键试用缩写包围

![emmet02](/images/emmet02.png)

![](/images/emmet12.gif)

## CSS

1.写样式有提示（每输入一个字母，都在进行一定范围的模糊搜索）

![](/images/emmet10.gif)

2.字母+数字可以直接得到 px，字母+数字+p 可以得到百分比（+r 得到 rem，+e 得到 em）

![](/images/emmet11.gif)

3.通过设置键盘快捷键通过键盘增减样式数值

![emmet01](/images/emmet01.png)

![](/images/emmet13.gif)

## 更多简写方式：([Cheat Sheet (emmet.io)](https://docs.emmet.io/cheat-sheet/))

相关设置：

```json
"emmet.triggerExpansionOnTab": true //当文本不是 Emmet 缩写时，此设置允许使用 Tab 键进行缩进。
 "emmet.includeLanguages": {
       "javascript": "javascriptreact"//可以在JSX中使用普通html里的标签自动补全功能
    }
```
