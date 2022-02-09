<template>
  <showcomponent
    title="基础用法"
    subtitle="标签页的基础使用"
    :attributes="['value, label, name, disabled, icon, type']"
    ctname="Tabs"
    :codes="code1"
  >
    <template #showarea>
      <h4>普通、简洁的标签页</h4>
      <ct-tabs value="tow">
        <ct-tab-pane label="标签一" name="one">标签一的内容</ct-tab-pane>
        <ct-tab-pane label="标签二" name="tow">标签二的内容</ct-tab-pane>
        <ct-tab-pane label="标签三" name="three">标签三的内容</ct-tab-pane>
      </ct-tabs>
    </template>
    <template #desc>
      <div>
        <code>value</code> 与 CtTabPane 的
        <code>name</code> 对应，用于标识当前激活的是哪一项，<code>name</code>
        值默认从 0 开始，默认激活第一项。
      </div>
    </template>
  </showcomponent>
</template>

<script>
import showcomponent from "../../../components/showcomponent";

export default {
  components: {
    showcomponent,
  },
  data() {
    return {
      code1: `  <ct-tabs value="tow">
    <ct-tab-pane label="标签一" name="one">标签一的内容</ct-tab-pane>
    <ct-tab-pane label="标签二" name="tow">标签二的内容</ct-tab-pane>
    <ct-tab-pane label="标签三" name="three">标签三的内容</ct-tab-pane>
  </ct-tabs>
      `,
    };
  },
};
</script>

<style lang="less" scoped>
h4 {
  color: #8492a6;
  text-indent: 1rem;
  margin-bottom: 2rem;
}
</style>
