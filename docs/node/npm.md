# NPM

## Config

NPM 有很多 [配置 Config](https://docs.npmjs.com/cli/v6/using-npm/config#proxy)

```shell
code ~/.npmrc
```

执行上面的命令，可以在 `vscode` 打开如下的配置：

```javascript
editor=code
init-author-name=fancn21th
init-author-email=fancn21th@aliyun.com
init-author-url=http://fancn21th.cn/
init-license=MIT
save-exact=true
scripts-prepend-node-path=true
proxy=http://localhost:port/
https-proxy=http://localhost:port/
```

## Publish

- push to `git`

```shell
git push
```

- tag

  update `version` in `package.json`

```shell
git tag 1.1.1
git push --tags
```

- publish to `npm`

```shell
npm publish
```

- publish as beta

  update `version` in `package.json` in format `1.1.1-beta.1`

```shell
git tag 1.1.1-beta.1
git push --tags
```

- publish to `npm`

```shell
npm publish --tag beta
```

## Install

```shell
npm install your-package

# or

npm install your-package@beta
```
