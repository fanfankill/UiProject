<template>
  <div class="ct-steps" :style="{ flexDirection: direction }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CtSteps",
  props: {
    space: {
      default: "auto",
      type: String,
    },
    direction: {
      default: "row",
      type: String,
    },
    active: {
      default: 0,
      type: Number,
    },
    processStatus: {
      default: "process",
      type: String,
    },
    finishStatus: {
      default: "success",
      type: String,
    },
  },
  data() {
    return {
      steps: [],
    };
  },
  watch: {
    steps(steps) {
      steps.forEach((step, index) => {
        step.index = index;
      });
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../../theme/steps.less";
</style>
