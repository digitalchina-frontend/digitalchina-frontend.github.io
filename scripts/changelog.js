const simpleGit = require("simple-git");
const _ = require("lodash");
const {
  groupBy,
  split,
  map,
  trim,
  flow,
  filter,
  get,
  orderBy
} = require("lodash");

const git = simpleGit({
  maxConcurrentProcesses: 200
});

const SRC_NAME = "docs"; // 文章所在目录名

/**
 * 使用 git log 获取指定页面的提交记录：
 * 1. 到页面的对应目录下获取提交记录
 * 2. 将提交记录转换为合理的格式并过滤空数据
 * 3. 将提交记录按作者分组并按提交数量降序排序
 * @param  {Object} $page API 参考 https://vuepress.vuejs.org/zh/guide/global-computed.html#page
 * @returns {Array} 贡献者列表
 */
const getMdContributors = async ($page) => {
  const { relativePath } = $page;
  const rowLog = await git.raw([
    "log",
    '--pretty=format:"%an|%ae"',
    "--",
    `${SRC_NAME}/${relativePath}`
  ]);
  const contributors = flow(
    (data) => split(data, "\n"),
    (data) =>
      map(data, (item) =>
        flow(
          (item) => trim(item, '"'),
          (item) => split(item, "|"),
          (item) => filter(item, "[1]")
        )(item)
      ),
    (data) => groupBy(data, "[1]"),
    (data) => Object.values(data),
    (data) =>
      map(data, (item) => ({
        name: get(item, "[0][0]"),
        email: get(item, "[0][1]"),
        count: item.length
      })),
    (data) => orderBy(data, ["count"], ["desc"])
  )(rowLog);

  return contributors;
};

module.exports = {
  getMdContributors
};
