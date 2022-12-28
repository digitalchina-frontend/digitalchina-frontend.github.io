<script setup>
import { computed } from 'vue'
import { usePageData } from '@vuepress/client'

const page = usePageData()
const updateTime = computed(() => new Date(page.value.git.updatedTime).toLocaleString())
const contributors = computed(() => page.value.git.contributors)
</script>

<template>
  <footer class="page-meta">
    <div class="meta-item edit-link"></div>
    <div v-if="updateTime" class="meta-item update-time">
      <span class="label">上次编辑于：</span>
      <span class="info">{{ updateTime }}</span>
    </div>
    <div v-if="contributors && contributors.length" class="meta-item contributors">
      <span class="label">贡献者：</span>
      <span
        v-for="({ email, name }, index) in contributors"
        :key="index"
        :title="email"
        class="contributor"
      >
        {{ name }}
        <span v-if="index !== contributors.length - 1">,</span>
      </span>
    </div>
  </footer>
</template>

<style scoped>
.page-meta {
  max-width: var(--content-width);
  margin-right: auto;
  margin-left: auto;
  padding: 0.75rem 2.5rem;
  overflow: auto;
}
.page-meta .edit-link {
  display: inline-block;
  margin-right: 0.25rem;
  font-size: 14px;
}
.page-meta .update-time {
  float: right;
  font-size: 14px;
}
.page-meta .contributors {
  font-size: 14px;
  text-align: right;
}
.page-meta .meta-item {
  margin-top: 0.5rem;
}
</style>
