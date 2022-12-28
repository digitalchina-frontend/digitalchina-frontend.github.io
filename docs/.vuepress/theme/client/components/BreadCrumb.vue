<script setup>
import { RouterLink } from 'vue-router'
import useBreadCrumbConfig from '../composables/useBreadCrumbConfig'

const { config } = useBreadCrumbConfig()
</script>

<template>
  <nav class="breadcrumb">
    <ol>
      <li
        v-for="(item, index) in config"
        :key="index"
        :class="index === config.length - 1 ? 'is-active' : ''"
      >
        <RouterLink :to="item.path">
          <span>{{ item.title }}</span>
        </RouterLink>
        <meta property="position" :content="index + 1" />
      </li>
    </ol>
  </nav>
</template>

<style scoped>
.breadcrumb {
  max-width: var(--content-width);
  margin-right: auto;
  margin-left: auto;
  padding-right: 2.5rem;
  padding-left: 2.5rem;
  position: relative;
  z-index: 2;
  padding-top: 0.5rem;
  font-size: 15px;
}
.breadcrumb ol {
  margin: 0;
  padding-left: 0;
  list-style: none;
}
.breadcrumb li {
  display: inline-block;
}
.breadcrumb li:first-child a {
  padding-left: 0;
}
.breadcrumb a {
  display: inline-block;
  padding: 0 0.5em;
  line-height: 2;
}
.breadcrumb .icon {
  margin-right: 0.25em;
}
.icon-home:before {
  content: '\e6bb';
}
.breadcrumb li + li:before {
  content: '/';
  color: var(--light-grey);
}
a {
  color: var(--theme-color);
}
.breadcrumb li.is-active a {
  color: var(--light-grey);
  cursor: default;
  pointer-events: none;
}
</style>
