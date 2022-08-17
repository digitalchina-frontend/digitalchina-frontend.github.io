<template>
  <ParentLayout>
    <template #page-bottom>
      <Contributors />
    </template>
  </ParentLayout>
</template>

<script>
// 继承并覆盖默认主题的 Layout，参考 https://vuepress.vuejs.org/zh/theme/inheritance.html#%E7%BB%84%E4%BB%B6%E7%9A%84%E8%A6%86%E7%9B%96
import ParentLayout from "@parent-theme/layouts/Layout.vue";
import Contributors from "@theme/components/Contributors.vue";
export default {
  name: "Layout",
  components: {
    ParentLayout,
    Contributors
  }
};
</script>
