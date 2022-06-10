<template>
  <div class="page-contributor">
    <h2>Contributors</h2>
    <div class="flex flex-wrap gap-4 pt-2">
      <div
        v-for="c of contributors"
        :key="c.avatar"
        class="flex gap-2 items-center"
      >
        <img :src="c.avatar" class="w-8 h-8 rounded-full" />
        {{ c.name }}
      </div>
    </div>
  </div>
</template>
<script>
import { get } from "lodash";

export default {
  name: "Contributors",
  data: () => ({
    contributors: []
  }),
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      // 使用 GitHub API 根据邮箱获取用户信息中的头像链接
      this.contributors = await Promise.all(
        this.$page.contributors.map(async (contributor) => {
          const data = await this.queryGitHubAvatar(contributor);
          return {
            ...contributor,
            avatar: this.resolveAvatar(data)
          };
        })
      );
    },
    async queryGitHubAvatar(contributor) {
      // 非官方文档：http://docs2.lfe.io/v3/search/#search-users，官方文档暂时找不到对应 API
      const response = await fetch(
        `https://api.github.com/search/users?q=${contributor.email}`
      );
      return await response.json();
    },
    resolveAvatar(data) {
      return get(
        data,
        "items[0].avatar_url",
        "https://gravatar.com/avatar" // 如果作者的 email 没有对应的 GitHub 账号，则使用 Gravatar 默认头像
      );
    }
  }
};
</script>

<style lang="stylus">
.page-contributor {
  max-width: $contentWidth
  margin: 0 auto
}
.flex {
  display: flex
}
.flex-wrap {
  flex-wrap: wrap
}
.items-center {
  align-items: center
}
.gap-4 {
  grid-gap: 1rem
}
.gap-2 {
  grid-gap: 0.5rem
}
.pt-2 {
  padding-top: 0.5rem
}
.w-8 {
  width: 2rem
}
.h-8 {
  height: 2rem
}
.rounded-full {
  border-radius: 9999px
}
</style>
