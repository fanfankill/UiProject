<template>
  <transition name="ct-scaleFade">
    <div
      v-show="visible"
      class="ct-loading"
      :style="{
        '--bgColor': bgColor,
        '--spinnerColor': spinnerColor,
        '--fontColor': fontColor,
      }"
    >
      <div class="ct-loading-box">
        <div
          v-if="spinner === ''"
          :class="'ct-loading-anime-' + animeStyle"
        ></div>
        <div v-else class="ct-loading-spinner" :class="spinner"></div>

        <div v-if="text !== ''" class="ct-loading-title">{{ text }}</div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      text: "Loading...",
      animeStyle: "normal",
      spinner: "",
      spinnerColor: "#0ba5f8",
      fontColor: "#008fdb",
      bgColor: "rgba(0, 0, 0, 0.6)",
    };
  },
};
</script>

<style lang="less" scoped>
@import url(../../../theme/loading.less);
</style>
