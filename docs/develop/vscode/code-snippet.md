# VScode 片段代码设置

有些代码片段是需要经常写的，所以为了提高效率，减少重复工作，我们可以在 VS Code 中设置代码片段，通过自定义的触发条件快速生成对应的代码片段

那么如何设置呢？

在 VScode 中我们可以打开文件 → 首选项 → 选择配置用户片段代码，比如我们这里想要创建 html 的代码片段，那就选择 html.json

![open-json](/images/open-json.gif)

我们可以看到配置片段代码是 JSON 格式，我们可以一个一个写，但是这样太麻烦了，我们可以借助一个在线代码片段工具来生成，配置步骤如下

1. 复制需要生成的片段代码，我这里给大家准备了一个

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta http-equiv="X-UA-Compatible" content="IE=edge" />
       <meta name="viewport" content="width=device-width,  initial-scale=1.0" />
       <title>${TM_FILENAME_BASE}</title>
       <script src="../js/vue.js"></script>
     </head>
     <body>
       <div id="root">$0</div>
       <script>
         Vue.config.productionTip = false
         const vm = new Vue({
           el: '#root',
           data: {
             $1, //光标出现的第一个位置
           },
         })
       </script>
     </body>
   </html>
   ```

2. 打开 [代码片段在线生成工具](https://snippet-generator.app/)，在其中设置生成代码片段

   ![snippet](/images/snippet.png)

   填写 Description、Tab trigger，把刚才复制的代码拷贝进 Your snippet 一栏，然后点击右下角的 Copy snippet 按钮复制生成的设置代码片段的代码； 在 VScode 中配置片段

   ![setting-snippet](/images/setting-snippent.gif)

这样，一个代码片段就设置好了（记得保存文件哦），那么我们编写代码时只要输入了前缀（prefix）的内容，就可以选择自动生成 body 对应的代码片段了。如果还想设置别的 html 代码片段，还是按照之前的步骤，最后把设置代码放到这个配置文件中，每个代码片段之间用 , 分隔即可；
