# Convention

## glob

glob 是一种主要用于匹配文件路径的规则，比如使用 `'src/**/*.js{,x}'` 可以匹配 `src` 目录下所有 `js` 和 `jsx` 文件。

踩坑记录：

1. 2022-08-15：如果运行环境为 `windows` 操作系统，需要注意 [glob]() 不支持使用 `\` 作为路径分隔符，而仅允许使用 `/`
   
   详情：[strapi]() 源码 `yarn build` 在 `windows` 操作系统上会报错，其原因是 `glob` 接收到了以 `\` 作为文件分隔符的匹配规则，故返回为空，以至于 `webpack esbuild-loader` 的作用范围没有覆盖到部分使用 `JSX` 语法的文件。
   ```js
    // packages/core/admin/utils/get-plugins-path.js
    const { join, resolve } = require('path');
    const glob = require('glob');

    const getPluginsPath = () => {
      ...
      const corePath = join(rootPath, 'core', '*');
      const corePackageDirs = glob.sync(corePath); // 不应该为空
      ...
    };

    // packages/core/admin/webpack.config.js
    {
      test: /\.m?jsx?$/,
      include: pluginsPath, // 不应该为空
      use: {
        loader: require.resolve('esbuild-loader'),
        options: {
          loader: 'jsx',
          target: 'es2015',
        },
      },
    }
   ```
   解决方案：调用 `glob.sync` 前将参数中包含的 `\` 转为 `/`：
   ```js
    const corePath = join(rootPath, 'core', '*').replace(/\\/g,'/');
    const corePackageDirs = glob.sync(corePath); // 不应该为空
   ```