import { path } from '@vuepress/utils'
import { gitPlugin } from '@vuepress/plugin-git'
import { extendsPagePlugin } from './node/plugins/extendsPagePlugin'

export const DcTheme = (options) => (app) => {
  return {
    name: 'vuepress-theme-dc',
    clientConfigFile: path.resolve(__dirname, 'client.js'),
    plugins: [
      gitPlugin({
        // 配置项
      }),
      extendsPagePlugin(),
    ],
  }
}
