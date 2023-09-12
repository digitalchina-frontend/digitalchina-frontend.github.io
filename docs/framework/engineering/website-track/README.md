---
sidebar: auto
---

# 使用 Plausible 实现页面埋点

## 业务背景

随着公司自研产品的不断发展，对前端页面的监控和分析变得越发重要。准确了解用户在产品上的行为和操作，以及发现潜在的性能问题或用户体验瓶颈，对于产品的持续优化和用户满意度的提升至关重要。

然而，要实现全面的前端监控并分析这些数据是一项复杂的任务，我们需要采用专业的工具和方法。

## 业务场景描述

在我们的自研产品中，我们面临着前端页面埋点和数据分析的需求。为了达到这一目标，我们决定采用第三方页面埋点工具，而不是选择自己造轮子。

市面上常见的 Web 分析工具能够帮助我们收集用户在页面上触发的各种事件，比如点击、页面跳转、输入等；同时也能捕捉用户在特定流程各个阶段之间的流转情况，帮助我们了解用户流失点并优化转化率。

通过对这些数据进行收集、整理和分析，我们可以深入了解用户的行为习惯，发现用户痛点，以及及时发现并解决用户体验问题。

### 监控指标

在前端页面埋点中，常见的监控指标有：

- 页面浏览量：PV（Page View）
- 用户活跃度：UV（Unique Visitor）
- 用户停留时长
- 页面跳转和流量来源
- 特定功能使用情况
- 地理位置
- 访问设备和浏览器信息

以上只是前端埋点中的一些常见监控指标，实际上我们还可以根据业务需求和目标对指标进行定制。

## 解决方案

我们可以使用 Plausible 作为技术解决方案，Plausible Analytics 是一个简单、开源、轻量级（< 1 KB）且注重隐私的 Google Analytics 替代方案。Plausible 被超过 10,000 名付费订阅用户信任，用于提供网站和业务洞察。

### 如何集成 Plausible ？

为了保证用户在使用公司产品过程中产生的行为数据的安全性，我们使用了私有化部署 Plausible 的方式作为页面埋点和数据分析的解决方案，集成步骤大致有：

1. 在服务器上安装和配置 Plausible 服务器（后端完成）
2. 注册账号并配置要监控的网站域名
3. 在前端页面中集成 Plausible 的前端脚本，用于自动向服务器发送事件，并为手动发送事件提供支持，了解更多请查看 [Add the script to your website](https://plausible.io/docs/plausible-script)
4. 配置前端脚本，指定 Plausible 服务器地址以及当前网站的站点 ID（通常为网站域名）

完成以上步骤后，发布前端应用，并查看 Plausible Dashboard，此时 Plausible 会自动发送页面访问事件并分析数据：

![check-if-plausible-is-working](https://plausible.io/docs/img/check-if-plausible-is-working.png)

### 如何监控特定功能使用情况？

如果需要监控特定功能使用情况，可以参考 [Custom event goals](https://plausible.io/docs/custom-event-goals) 发送自定义事件：

1. Plausible 的默认脚本只会自动监听基于 pushState 的前端路由事件，要发送自定义事件，我们需要组合使用 Plausible 提供的另一个扩展脚本 `script.tagged-events.js`，关于扩展脚本的选项和 url 格式的更多细节，请查看 [Script extensions for enhanced measurement](https://plausible.io/docs/script-extensions)
2. 给需要跟踪的用户行为对应的按钮元素添加 CSS Class，此为 Plausible 监听按钮点击、表单提交事件的依据，其格式为：

```jsx
<button className={`plausible-event-name={MyEventName}`}></button>
// 或者
<button className={`plausible-event-name--{MyEventName}`}></button>
```

:::tip 什么是 MyEventName
以上代码中的 `{MyEventName}` 是在 Plausible Dashboard 上配置的 Custom Event Goal，以下图为例，`{MyEventName}` 为 Signup：

![add-custom-event-goal](https://i.imgur.com/3HSFK51.png)
:::

再次发布前端应用，并查看 Plausible Dashboard，下方会多出一个 Goal Conversions 面板：

![DmGS2Fg](https://i.imgur.com/DmGS2Fg.png)

### 如何向自定义事件传递参数？

Plausible 还支持在触发自定义事件时传入自定义的参数，从而进一步对 Custom Event Goal 进行拆解，你可以使用自定义参数来创建自定义指标，以收集和分析 Plausible 不会自动跟踪的数据，更多请查看 [Attach custom properties to custom events](https://plausible.io/docs/custom-props/for-custom-events)

大致步骤为：

1. 移除上一步为按钮元素添加的 CSS Class，不再自动发送自定义事件
2. 使用 `plausible` API 手动发送事件，第一个参数为事件名，第二个参数中的 `props` 属性为自定义参数：

```js
plausible('Download', { props: { method: 'HTTP', position: 'footer' } })
```

完成后，再次查看 Plausible Dashboard，点击 Goal Conversions 中的一个 Goal，可以看到进一步拆解的统计数据：

![TAyv9r5](https://i.imgur.com/TAyv9r5.png)

## 结语

至此，我们已经使用 Plausible 实现了前端页面埋点和数据分析。

欢迎大家对文章进行更新，探讨交流不一样的心得，互相学习，共同进步！
