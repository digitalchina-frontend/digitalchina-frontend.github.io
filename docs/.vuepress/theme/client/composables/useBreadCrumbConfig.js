import { useRoute, useRouter } from 'vue-router'
import { useRouteLocale } from '@vuepress/client'
import { removeEndingSlash } from '@vuepress/shared'
import { ref, onMounted, onUnmounted, watch } from 'vue'

const useBreadCrumbConfig = () => {
  const router = useRouter()
  const route = useRoute()
  const routeLocale = useRouteLocale()

  const config = ref([])

  const getBreadCrumbConfig = () => {
    const routePaths = route.path.replace(routeLocale, '/').split('/')
    const { links } = routePaths.reduce(
      (acc, element, index) => {
        const { link, links } = acc
        const isLastOne = index === routePaths.length - 1
        const newLink = `${link}${element}${isLastOne ? '' : '/'}`
        if (isLastOne && element === '') return acc
        return {
          link: newLink,
          links: [...links, newLink],
        }
      },
      {
        link: removeEndingSlash(routeLocale.value),
        links: [],
      }
    )
    config.value = links
      .map((link) => {
        const route = router.resolve(link)
        return {
          title: route.meta.title,
          path: route.path,
        }
      })
      .filter(({ title }) => title)
  }

  let stopHandler

  onMounted(() => {
    void getBreadCrumbConfig()
    stopHandler = watch(() => route.path, getBreadCrumbConfig)
  })

  onUnmounted(() => {
    stopHandler()
  })

  return { config }
}

export default useBreadCrumbConfig
