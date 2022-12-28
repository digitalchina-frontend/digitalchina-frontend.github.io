import { defineClientConfig } from '@vuepress/client'
import Layout from './client/layouts/Layout.vue'
import NotFound from './client/layouts/NotFound.vue'
import './client/styles/index.scss'

export default defineClientConfig({
  layouts: {
    Layout,
    NotFound,
  },
})
