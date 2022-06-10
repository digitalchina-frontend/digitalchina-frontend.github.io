# 使用 React-Grid-Layout 来实现响应式布局

React-Grid-Layout （简称：RGL）是一个适用于 React 的栅格布局系统，你只需要提供简单的配置即可生成一个栅格布局。

RGL 特别适用于比较灵活的布局需求，比如响应式布局和可拖拽、可调节大小的仪表盘。

## 示例

<iframe src="https://codesandbox.io/embed/loving-fog-n7rg2g?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="loving-fog-n7rg2g"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## 用法

### 安装

```bash
npm install react-grid-layout
```

```js
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
```

### 基础用法

使用 RGL 最少需要传入参数：

```jsx
import GridLayout from "react-grid-layout";

export default function App() {
  return (
    <GridLayout width={window.screen.width}>
      <div key="a">a</div>
      <div key="b">b</div>
      <div key="c">c</div>
    </GridLayout>
  );
}
```

**GridLayoutProps：**
| 名称 | 类型 | <div style="width:50px">默认值</div> | 描述 |
| - | - | - | - |
| width | `number` | | 这个参数是必传的，除非使用类似 `<WidthProvider>` 的高阶组件来提供宽度 |
| children | `ReactNode` | | 希望由 GridLayout 控制其大小和位置的信息区块，Ant Design 在介绍栅格布局时称之为『盒子』，每个『盒子』必须拥有一个 `key`，建议横向排列的『盒子』数量为 1 ~ 4 个。 |

通常，你还需要传入 `layout` 对『盒子』的大小和位置进行配置：

```jsx
export default function App() {
  const layout: GridItemProps[] = [
    { i: "a", x: 0, y: 0, w: 1, h: 2 }
    // ...
  ];
  return (
    <GridLayout
      width={window.screen.width}
      layout={layout}
      cols={12}
      rowHeight={100}
      compactType="vertical"
      margin={[0, 0]}
    >
      <div key="a">a</div>
      <div key="b">b</div>
      <div key="c">c</div>
    </GridLayout>
  );
}
```

**GridLayoutProps：**
| 名称 | 类型 | <div style="width:120px">默认值</div> | 描述 |
| - | - | - | - |
| layout | `Array<GridItemProps>` | 见 [layout-默认值](#layout-默认值) | 布局相关配置 |
| cols | `number` | 12 | 栅格列数 |
| rowHeight | `number` | 150 | 行高，影响『盒子』的高度 |
| compactType | `'vertical'`<br/>`| 'horizontal'`<br/>`| null` | 'vertical' | 压实效果的方向，null 代表关闭该效果 |
| margin | Array | `[10, 10]` | 『盒子』之间的x轴、y轴外边距 |

**GridItemProps：**
| 名称 | 类型 | <div style="width:50px">默认值</div> | 描述 |
| -------- | --------- | -- | -- |
| i | `string` | | 与『盒子』的 key 对应 |
| x | `number` | | 数字表示格数，控制 X 轴位置，总格数由 cols 决定 |
| y | `number` | | 数字表示格数，控制 Y 轴位置，每格对应像素值由 rowHeight 决定，实际渲染的 Y 轴位置受 compactType 和 static 影响 |
| w | `number` | | 数字表示格数，控制『盒子』宽度，实际渲染的宽度受 margin 影响 |
| h | `number` | | 数字表示格数，控制『盒子』高度，实际渲染的高度受 margin 影响 |

其他参数请参考 [grid-item-props](https://github.com/react-grid-layout/react-grid-layout#grid-item-props)、[grid-layout-props](https://github.com/react-grid-layout/react-grid-layout#grid-layout-props)。

#### layout 默认值

在没有提供 `layout` 的情况下，RGL 会根据 `children` 生成一个默认值，即每行显示一个宽高均为 1 格的『盒子』；如果提供了 `layout` ，但是没有完整地传入 `x, y, w, h` 4 个值， RGL 会抛出异常。

```js
const layout = [
  { i: "a", x: 0, y: 0, w: 1, h: 1 },
  { i: "b", x: 0, y: 1, w: 1, h: 1 },
  { i: "c", x: 0, y: 2, w: 1, h: 1 }
];
```

### 响应式用法

如果你想要让你的网页在所有设备上都能正常显示，仅仅使用 `<GridLayout>` 是不够的，你还需要 `<Responsive>` 和 `<WidthProvider>` 来确保布局在不同屏幕尺寸下的一致性：

```jsx
import { Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);

export default function App() {
  const layouts = {
    sm: layout1, // GridItemProps[]
    xs: layout2 // GridItemProps[]
  };
  return (
    <ResponsiveGridLayout
      layouts={layouts}
      breakpoints={{ sm: 576, xs: 480 }}
      cols={{ sm: 4, xs: 2 }}
    >
      <div key="a">a</div>
      <div key="b">b</div>
      <div key="c">c</div>
    </ResponsiveGridLayout>
  );
}
```

**ResponsiveProps：**
| 名称 | 类型 | 默认值 | 描述 |
| - | - | - | - |
| layouts | `Object` | 类似于 [layout-默认值](#layout-默认值) | 将断点映射为布局配置的 map，形如：`{lg: Array<GridItemProps>, md: ... }` |
| breakpoints | `Object` | `{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}` | 断点名称是任意的，只需要与 layouts 和 cols 对应即可 |
| cols | `Object` | `{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}` | 将断点映射为列数的 map |

其他参数请参考 [responsive-grid-layout-props](https://github.com/react-grid-layout/react-grid-layout#responsive-grid-layout-props)。

## 踩坑

#### 将 GridLayout 组件更换为 Responsive 后，布局失效了。

`<Responsive>` 的布局参数是 `layouts` 而不是 `layout`，请确保传入了正确的参数。

#### 为什么『盒子』实际渲染的高度大于 rowHeight × h？

经过试验，你会发现：
+ 当 h === 1 时：height = rowHeight * h
+ 当 h > 1 时：height > rowHeight * h

这和栅格系统的有意设计有关，出于这种设计，`height` 的实际计算公式为：

```js
height = h * rowHeight + (h - 1) * margin[1]
// or
height = h * (rowHeight + margin[1]) - margin[1]
```
更详细的讨论可以参考 issue [#233](https://github.com/react-grid-layout/react-grid-layout/issues/233)

#### 为什么不能用 y 来控制『盒子』之间的间距，而 x 可以？

该问题和 `compactType` 属性有关，开启该属性会在横向/纵向上压实『盒子』之间的间距，默认值为纵向，因此通过 `y` 控制的间距会被压实。

如果希望使用 `x` 和 `y` 来控制『盒子』之间的间距，可以将 `compactType` 设置为 `null`；对于支持拖拽的场景来说，不推荐这样做，因为用户可以通过拖拽『盒子』来破坏初始设置的间距。

如果不希望用户的拖拽行为破坏间距，最好使用 `margin` 属性控制，或者使用 `CSS` 为『盒子』设置 `padding`。

## 源代码

[Source](https://github.com/zlxiao97/react-grid-layout-demo) • [Demo](https://n7rg2g.csb.app/) • [Docs](https://github.com/digitalchina-frontend/digitalchina-frontend.github.io/tree/main/docs/others/react-grid-layout/README.md)

## 参考资料

- [React-Grid-Layout](https://github.com/react-grid-layout/react-grid-layout)
- [Antd Grid](https://ant.design/components/grid-cn/)
- [MUI Grid](https://mui.com/zh/material-ui/react-grid/)
