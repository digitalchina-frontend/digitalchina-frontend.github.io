import { path } from '@vuepress/utils'

export const DcTheme = (options) => (app) => {
  return {
    name: 'vuepress-theme-dc',
    clientConfigFile: path.resolve(__dirname, 'client.js'),
  }
}
