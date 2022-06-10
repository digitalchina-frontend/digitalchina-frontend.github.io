const { getMdContributors } = require("../../../../scripts/changelog");

const Contributors = (options, ctx) => {
  return {
    name: "contributors-plugin",
    async extendPageData($page) {
      // 扩展页面数据，每编译一个页面执行一次（https://vuepress.vuejs.org/zh/plugin/option-api.html#extendpagedata）
      $page.contributors = await getMdContributors($page);
    }
  };
};

module.exports = Contributors;
