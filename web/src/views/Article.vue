<template>
  <div class="page-article" v-if="model">
    <div class="d-flex py-3 px-2 border-bottom">
      <div class="iconfont icon-Back text-blue"></div>
      <strong class="flex-1 text-blue">{{ model.title }}</strong>
      <div class="text-grey" fs-sm>2021-05-20</div>
    </div>
    <div v-html="model.body" class="px-3 body fs-lg"></div>
    <div class="px-3 border-top py-2">
      <div class="d-flex ai-center">
        <i class="iconfont icon-menu1"></i>
        <span class="text-blue fs-lg ml-2">相关资讯</span>
      </div>
    </div>
    <div class="pt-2">
      <router-link
        class="py-1 text-ellipsis"
        tag="div"
        :to="`/articles/${item._id}`"
        v-for="item in model.related"
        :key="item.id"
        >{{ item.title }}</router-link
      >
    </div>
  </div>
</template>
<script>
export default {
  props: {
    id: { required: true }
  },
  data() {
    return {
      model: null
    }
  },
  watch: {
    id: 'fetch'
  },
  methods: {
    async fetch() {
      // 多看下
      const res = await this.$http.get(`articles/${this.id}`)
      this.model = res.data
    }
  },
  created() {
    this.fetch()
  }
}
</script>

<style lang="scss" scoped>
.page-article {
  .icon-Back {
    font-size: 1.6rem;
  }
  .body {
    img {
      max-width: 100%;
      height: auto;
    }
    iframe {
      width: 100%;
      height: auto;
    }
  }
}
</style>
