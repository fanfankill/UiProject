<template>
  <showcomponent
    title="类型可选的"
    subtitle="可选择不同类型的标签页"
    :attributes="['value, label, name, disabled, icon, type']"
    ctname="Tabs"
    :codes="code4"
  >
    <template #showarea>
      <h4>卡片类型</h4>
      <ct-tabs type="card">
        <ct-tab-pane label="标签一" name="one">标签一的内容</ct-tab-pane>
        <ct-tab-pane label="标签二" name="tow">标签二的内容</ct-tab-pane>
        <ct-tab-pane label="标签三" name="three">标签三的内容</ct-tab-pane>
      </ct-tabs>
    </template>
    <template #desc>
      <div>
        <code>type</code
        >属性用于设置标签页的类型，除了默认类型外，还有<code>none</code>和<code
          >card</code
        >
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
      code4: `  <ct-tabs type="card">
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
