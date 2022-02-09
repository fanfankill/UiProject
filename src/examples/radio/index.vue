<template>
  <div>
    <h1>Radio 单选框</h1>
    <p>常用的单选框用法。</p>
    <!--常用转义符号:&gt=>'>',&lt=>'<',&quot=>'"',&amp=>'&'-->

    <Showcomponent title="基础用法">
      <ct-row>
        <ct-radio v-model="radio" label="large">large</ct-radio>
        <ct-radio v-model="radio" label="default">default</ct-radio>
        <ct-radio v-model="radio" label="small">small</ct-radio>
      </ct-row>
    </Showcomponent>
  </div>
</template>

<script>
export default {
  name: "radio",
  chName: "单选框",
  components: {},
  data() {
    return {
      radio: 1,
      info: {
        name: "fanfan",
        age: 20,
        sex: "男",
        school: "scut",
        major: "computer",
        address: "China Guangzhou",
        hobby: "Movies",
        phone: 18888888888,
        intro: "dddd",
      },
    };
  },
};
</script>

<style lang="less">
@import "./src/hljsplugin/color-brewer.less";
.flex_col {
  height: auto;
  color: #8492a6;
}
</style>
