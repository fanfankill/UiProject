<template>
  <showcomponent
    title="带禁用的"
    subtitle="带有禁用选项的标签页使用"
    :attributes="['value, label, name, disabled, icon, type']"
    ctname="Tabs"
    :codes="code2"
  >
    <template #showarea>
      <h4>禁用某一项</h4>
      <ct-tabs>
        <ct-tab-pane label="标签一" name="one">标签一的内容</ct-tab-pane>
        <ct-tab-pane label="标签二" name="tow" disabled
          >标签二的内容</ct-tab-pane
        >
        <ct-tab-pane label="标签三" name="three">标签三的内容</ct-tab-pane>
      </ct-tabs>
    </template>
    <template #desc>
      <div>给对应的CtTabPane选项添加 <code>disabled</code> 属性禁用该选项</div>
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
      code2: `  <ct-tabs>
    <ct-tab-pane label="标签一" name="one">标签一的内容</ct-tab-pane>
    <ct-tab-pane label="标签二" name="tow" disabled>标签二的内容</ct-tab-pane>
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
