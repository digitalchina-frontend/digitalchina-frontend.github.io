<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
import { provide } from 'vue'
import { ROUGH_NOTATION_OBSERVER } from '../context/keys'
import useRoughNotationObserver from './useRoughNotationObserver'

const { roughNotationObserver } = useRoughNotationObserver()

provide(ROUGH_NOTATION_OBSERVER, roughNotationObserver)
</script>

<template>
  <ParentLayout />
</template>
