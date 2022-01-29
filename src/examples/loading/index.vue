<template>
  <div>
    <div v-loading="loading" class="container"></div>
    <ct-button @click="toggleLoading">开/关</ct-button>

    <div v-loading.fullscreen="loading2" class="container"></div>
    <ct-button @click="toggleLoading2">开开</ct-button>

    <div v-loading:[options3]="loading3" class="container"></div>
    <ct-button @click="toggleLoading3">开/关</ct-button>

    <div ref="loading4" class="container"></div>
    <ct-button @click="toggleLoading4">开开</ct-button>
  </div>
</template>

<script>
export default {
  name: "loading",
  chName: "进度条",
  data() {
    return {
      loading: true,
      loading2: false,
      loading3: true,
      options3: {
        text: "自定义加载文字",
        animeStyle: "moon",
      },
    };
  },
  methods: {
    toggleLoading() {
      this.loading = !this.loading;
    },
    toggleLoading2() {
      this.loading2 = true;
      setTimeout(() => {
        this.loading2 = false;
      }, 2000);
    },
    toggleLoading3() {
      this.loading3 = !this.loading3;
    },
    toggleLoading4() {
      let instance = this.$loading({
        fullscreen: false,
        target: this.$refs.loading4,
        data: {
          text: "自定义文字",
          spinner: "iconfont icon-jiazai",
          fontColor: "white",
        },
      });
      setTimeout(() => {
        instance.close();
      }, 2000);
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  width: 800px;
  height: 200px;
  background-color: @main-color3;
}
</style>
