---
sidebar: auto
---

# Vue3.x 中 hooks 函数封装和使用

## hooks 是什么

vue3  中的  hooks  就是函数的一种写法，就是将文件的一些单独功能的 js 代码进行抽离出来进行封装使用。

它的主要作用是 Vue3 借鉴了 React 的一种机制，用于在函数组件中共享状态逻辑和副作用，从而实现代码的可复用性。

注意：其实  hooks  和  vue2  中的  mixin  有点类似，但是相对  mixins  而言， hooks  更清楚复用功能代码的来源, 更清晰易懂。

## hooks 的优点

- hooks 作为独立逻辑的组件封装，其内部的属性、函数等和外部组件具有响应式依附的作用。
- 自定义 hook 的作用类似于 vue2 中的 mixin 技术，使用方便，易于上手。
- 使用 Vue3 的组合 API 封装的可复用，高内聚低耦合。

## 自定义 hook 需要满足的规范

1、具备可复用功能，才需要抽离为 hooks 独立文件

2、函数名/文件名以 use 开头，形如: useXX

3、引用时将响应式变量或者方法显式解构暴露出来；

示例如下：

```js
const { nameRef, Fn } = useXX()
```

## hooks 和 utils 区别

**相同点：** 通过 hooks 和 utils 函数封装， 可以实现组件间共享和复用，提高代码的可重用性和可维护性。

**异同点：**

**1.表现形式不同：** hooks 是在 utils 的基础上再包一层组件级别的东西(钩子函数等)；utils 一般用于封装相应的逻辑函数，没有组件的东西；

**2.数据是否具有响应式：** hooks 中如果涉及到 ref，reactive，computed 这些 api 的数据，是具有响应式的；而 utils 只是单纯提取公共方法就不具备响应式；

**3.作用范围不同：** hooks 封装，可以将组件的状态和生命周期方法提取出来，并在多个组件之间共享和重用；utils 通常是指一些辅助函数或工具方法，用于实现一些常见的操作或提供特定功能。

**总结：**

utils 是通用的工具函数，而 hooks 是对 utils 的一种封装，用于在组件中共享状态逻辑和副作用。

通过使用 hooks，您可以简化代码，并使其更具可读性和可维护性。

## hooks 和 mixin 区别

**相同点：** hooks 和 mixin，都是常用代码逻辑抽离手段，方便进行代码复用；

**异同点：**

**1. 语法和用法不同：** Hooks 是在 Vue 3 的 Composition API 中引入的一种函数式编程的方式，而 Mixins 是在 Vue 2 中的一种对象混入机制。Hooks 使用函数的方式定义和使用，而 Mixins 则是通过对象的方式进行定义和应用。

**2. 组合性和灵活性不同：** Hooks 允许开发者根据逻辑功能来组合代码，封装为自定义 Hook 函数，提高代码复用率。而 Mixins 在组件中的属性和方法会与组件本身的属性和方法进行合并，可能会导致命名冲突或不可预料的行为。

**3. 响应式系统不同：** Vue 3 的 Composition API 使用了一个新的响应式系统，可以通过 reactive 和 ref 来创建响应式数据，可以更精确地控制组件的更新和依赖追踪。而 Mixins 使用 Vue 2 的响应式系统，对数据的追踪和更新较为简单，可能存在一些性能上的问题。

**4. 生命周期钩子不同：** 在 Vue 3 的 Composition API 中，可以使用 onMounted、onUpdated 等钩子函数来替代 Vue 2 中的生命周期钩子，可以更灵活地管理组件的生命周期。Mixins 依然使用 Vue 2 的生命周期钩子。

### mixins 的优缺点

优点：组件中相同代码逻辑复用；

缺点：

1.  变量来源不明确：变量来源不明确（隐式传入），不利于阅读，使代码变得难以维护。
1.  命名冲突：多个 mixins 的生命周期会融合到一起运行，但是同名属性、同名方法无法融合，可能会导致冲突。
1.  滥用会造成维护问题：mixins 和组件可能出现多对多的关系，复杂度较高（即一个组件可以引用多个 mixins，一个 mixins 也可以被多个组件引用）。

注：VUE3 提出的 Composition API 旨在解决这些问题。mixins 的缺点是 Composition API 背后的主要动因之一，Composition API 受到 React Hooks 的启发。

**hooks 代码：**

useCount.ts 函数示例：

```js
import { ref, onMounted, computed } from 'vue';

export default function useCount {

    const count = ref(0);

    const doubleCount = computed(
      () => count.value * 2
    );

     const increase = (delta) => {
        return count.value + delta;
    }

    return {
      count,
      doubleCount,
      increase
    };

}
```

useCount 在组件中调用：

```js
  import useCount from "@/hooks/useCount";
  const {(count, doubleCount, increase)} = useCount;
  const newCount = increase(10); // 输出: 10
```

**Mixins 的代码:**

```js
export default const countMixin = {
  data() {
    return {
      count: 0
    };
  },
  computed: {
    doubleCount() {
      return this.count * 2;
    }
  },
  methods: {
      increase(delta){
        return this.count + delta;
    }
};

```

Mixins 在组件中调用：

```js
<script setup lang="ts">
import countMixin from '@/mixin/countMixin'
export default {
  mixins: [countMixin],
  mounted() {
    console.log(this.doubleCount) // 输出: 0
    const newCount = this.setIncrease(10) // 输出: 10
  },
  methods: {
    setIncrease(count) {
      this.increase(count)
    },
  },
}
</script>
```

这两个示例展示了使用 Hooks 和 Mixins 的代码风格和组织方式的不同。Hooks 使用函数式的方式来定义逻辑和状态，而 Mixins 则是通过对象的方式进行组合和共享代码。

Vue3 自定义 Hooks 是组件下的函数作用域的，而 Vue2 时代的 Mixins 是组件下的全局作用域。全局作用域有时候是不可控的，就像 var 和 let 这些变量声明关键字一样，const 和 let 是 var 的修正。Composition Api 正是对 Vue2 时代 Option Api 高耦合和随处可见 this 的黑盒的修正，Vue3 自定义 Hooks 是一种进步。

## hooks 函数封装示例

### 示例 1：数据导出(useDownload)

useDownload 函数封装：

```js
import { ElNotification } from 'element-plus'
/**
 * @description 接收数据流生成 blob，创建链接，下载文件
 * @param {any} data 导出的文件blob数据 (必传)
 * @param {String} tempName 导出的文件名 (必传)
 * @param {Boolean} isNotify 是否有导出消息提示 (默认为 true)
 * @param {String} fileType 导出的文件格式 (默认为.xlsx)
 * */
interface useDownloadParam {
  data: any;
  tempName: string;
  isNotify?: boolean;
  fileType?: string;
}

export const useDownload = async ({
  data,
  tempName,
  isNotify = true,
  fileType = '.xlsx',
}: useDownloadParam) => {
  if (isNotify) {
    ElNotification({
      title: '温馨提示',
      message: '如果数据庞大会导致下载缓慢哦，请您耐心等待！',
      type: 'info',
      duration: 3000,
    })
  }
  try {
    const blob = new Blob([data])
    // 兼容 edge 不支持 createObjectURL 方法
    if ('msSaveOrOpenBlob' in navigator)
      return window.navigator.msSaveOrOpenBlob(blob, tempName + fileType)
    const blobUrl = window.URL.createObjectURL(blob)
    const exportFile = document.createElement('a')
    exportFile.style.display = 'none'
    exportFile.download = `${tempName}${fileType}`
    exportFile.href = blobUrl
    document.body.appendChild(exportFile)
    exportFile.click()
    // 去除下载对 url 的影响
    document.body.removeChild(exportFile)
    window.URL.revokeObjectURL(blobUrl)
  } catch (error) {
    console.log(error)
  }
}
```

useDownload 在组件中使用：

```js
<script setup lang="ts">
import { useDownload } from "@/hooks/useDownload";

const userForm = reactive({})
const userListExport = () => {
    new Promise(resolve => {
        $Request({
            url: $Urls.userListExport,
            method: "post",
            data: userForm,
            responseType: "blob"
        }).then((res: any) => {
            useDownload({
                data: res.data,
                tempName："用户列表"
            });
            resolve(res);
        });
    });
};
</script>
```

### 示例 2：加减计数(useCount)

useCount 函数封装：

```js
import { computed, ref, Ref } from 'vue'
// 定义hook方法
type CountResultProps = {
  count: Ref<number>,
  multiple: Ref<number>, // 计算属性
  increase: (delta?: number) => void,
  decrease: (delta?: number) => void,
}

export default function useCount(initValue = 1): CountResultProps {
  const count = ref(initValue)

  const multiple = computed(() => count.value * 2)

  const increase = (delta?: number): void => {
    if (typeof delta !== 'undefined') {
      count.value += delta
    } else {
      count.value += 1
    }
  }

  const decrease = (delta?: number): void => {
    if (typeof delta !== 'undefined') {
      count.value -= delta
    } else {
      count.value -= 1
    }
  }
  return {
    count,
    increase,
    decrease,
    multiple,
  }
}
```

useCount 函数在组件中使用：

```js

<template>
   <p>count:{{count}}</p>
   <p>倍数:{{multiple}}</p>
   <div>
     <button @click="increase(1)">加一</button>
     <button @click="decrease(1)">减一</button> // 在模版中直接使用hooks中的方法作为回调函数
   </div>
</template>

<script setup lang="ts">
    import useCount from "@/hooks/useCount"
    const {count,multiple,increase,decrease}  = useCount(10)
</script>
```

### 示例 3：获取鼠标触发点坐标(useMousePosition)

useMousePosition 函数封装：

```js
import { ref, onMounted, onUnmounted, Ref } from 'vue'

interface MousePosition {
  x: Ref<number>;
  y: Ref<number>;
}

export default function useMousePosition(): MousePosition {
  const x = ref(0)
  const y = ref(0)

  const updateMouse = (e: MouseEvent) => {
    x.value = e.pageX
    y.value = e.pageY
  }

  onMounted(() => {
    document.addEventListener('click', updateMouse)
  })

  onUnmounted(() => {
    document.removeEventListener('click', updateMouse)
  })

  return { x, y }
}
```

useMousePosition 在组件中使用：

```js
<template>
  <div>
    <p>X: {{ x }}</p>
    <p>Y: {{ y }}</p>
  </div>
</template>
<script lang="ts">
    import useMousePosition from '@/hooks/useMousePosition'
    const { x, y } = useMousePosition();
</script>

```

## hooks 函数封装细节归纳

1.  hooks 函数接收参数写法；

写法 1：参数通过 props 接收，先定义参数类型，内部再解构；

```js
export function commonRequest(params: Axios.AxiosParams) {
  let { url, method, data, responseType = 'json' } = params
}
```

写法 2：接收传参对象，先设置默认值，再定义参数类型

```js
interface DeprecationParam {
  from: string;
  replacement: string;
  type: string;
}
export const useDeprecated = ({ from, replacement, type = 'API' }: DeprecationParam) => {}
```

2.  解构重命名写法

```js
// setup中

const { list: goodsList, getList: getGoodsList } = useList(axios.get('/url/get/goods'))
const { list: recommendList, getList: getRecommendList } = useList(
  axios.get('/url/get/recommendGoods')
)
```

3.KeyboardEvent 为鼠标按键类型

```js
export const useEscapeKeydown = (handler: (e: KeyboardEvent) => void) => {}
```

## 总结

Vue2 时代 Option Api ，data、methos、watch.....分开写，这种是碎片化的分散的，代码一多就容易高耦合，维护时来回切换代码是繁琐的！

Vue3 时代 Composition Api，通过利用各种 Hooks 和自定义 Hooks 将碎片化的响应式变量和方法按功能分块写，实现高内聚低耦合。
