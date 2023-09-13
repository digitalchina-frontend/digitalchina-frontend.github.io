<script setup>
import { onMounted, inject } from 'vue'
import { nanoid } from 'nanoid'
import { ROUGH_NOTATION_OBSERVER } from '../context/keys'

const props = defineProps({
  // 标注类型，支持 'underline'、'box'、'circle'、'highlight'、'strike-through'、'crossed-off'、'bracket'
  type: {
    type: String,
    default: 'underline',
  },
  // 是否进行动画
  animate: {
    type: Boolean,
    default: true,
  },
  // 动画持续时间
  animationDuration: {
    type: Number,
    default: 800,
  },
  // 标注颜色
  color: {
    type: String,
    default: 'currentColor',
  },
  // 画笔粗细
  strokeWidth: {
    type: Number,
    default: 2,
  },
  // 与内容之间的间距
  padding: {
    type: [Number, Array],
    default: 5,
  },
  // 只对 inline 元素有效，设置为 true 表示以多行文本中的每一行为单位进行标注，反之表示以整个多行文本为单位
  multiline: {
    type: Boolean,
    default: false,
  },
  // 标注绘制圈数
  iterations: {
    type: Number,
    default: 2,
  },
  // 当标注类型为 'bracket' 时，要在哪些方位绘制括号
  brackets: {
    type: [String, Array],
    default: ['left','right'],
  },
  // 只适用部分标注类型，设置为 true 表示从右往左绘制，反之从左往右
  rtl: {
    type: Boolean,
    default: false,
  },
})

const id = `notation-${nanoid()}`

onMounted(() => {
  const e = document.querySelector(`#${id}`)
  const observer = inject(ROUGH_NOTATION_OBSERVER)
  e.dataset.props = JSON.stringify(props)
  observer.observe(e)
})
</script>

<template>
  <span :id="id"><slot /></span>
</template>

<style scoped></style>
