<script setup>
import { onMounted, inject } from 'vue'
import { nanoid } from 'nanoid'
import { ROUGH_NOTATION_OBSERVER } from '../context/keys'

const props = defineProps({
  type: {
    type: String,
    default: 'underline',
  },
})

const id = `notation-${nanoid()}`

onMounted(() => {
  const e = document.querySelector(`#${id}`)
  const observer = inject(ROUGH_NOTATION_OBSERVER)
  e.dataset.notationType = props.type
  observer.observe(e)
})
</script>

<template>
  <span :id="id"><slot /></span>
</template>

<style scoped></style>
