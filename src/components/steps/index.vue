<template>
  <div>
    <ct-steps :active="activeIndex">
      <ct-step title="步骤 1"></ct-step>
      <ct-step title="步骤 2"></ct-step>
      <ct-step title="步骤 3"></ct-step>
    </ct-steps>
    <ct-button @click="next">下一步</ct-button>

    <ct-steps
      :active="activeIndex"
      space="200"
      finishStatus="error"
      processStatus="warning"
    >
      <ct-step title="步骤 1"></ct-step>
      <ct-step title="步骤 2"></ct-step>
      <ct-step title="步骤 3"></ct-step>
    </ct-steps>
    <ct-button @click="next">下一步</ct-button>

    <ct-steps :active="activeIndex" space="200" finishStatus="error">
      <ct-step title="步骤 1" description="注册你的个人账号"></ct-step>
      <ct-step title="步骤 2" description="填写你的个人信息"></ct-step>
      <ct-step title="步骤 3" description="撰写并发表文章"></ct-step>
    </ct-steps>
    <ct-button @click="next">下一步</ct-button>

    <!-- <ct-steps :active="activeIndex" space="200" direction="column">
      <ct-step title="步骤 1"></ct-step>
      <ct-step title="步骤 2"></ct-step>
      <ct-step title="步骤 3"></ct-step>
    </ct-steps>
    <ct-button @click="next">下一步</ct-button> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0,
    };
  },
  methods: {
    next() {
      this.activeIndex = (this.activeIndex + 1) % 4;
    },
  },
};
</script>

<style lang="less" scoped></style>
