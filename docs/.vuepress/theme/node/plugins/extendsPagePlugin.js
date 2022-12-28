export const injectPageInfo = (page) => {
  page.routeMeta['title'] = page.title
}

export const extendsPagePlugin = () => ({
  name: 'vuepress-theme-dc-extends-page',

  extendsPage: (page, app) => {
    injectPageInfo(page)
  },
})
