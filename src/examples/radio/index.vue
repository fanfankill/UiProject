<template>
  <div>
    <h1>Radio 单选框</h1>
    <p>常用的单选框用法。</p>
    <!--常用转义符号:&gt=>'>',&lt=>'<',&quot=>'"',&amp=>'&'-->
    <showcomponent
        title="基础用法"
        subtitle="基础的单选框用法。"
        :attributes="['type, size']"
        ctname="Radio"
        :codes="code1"
    >
      <template v-slot:showarea>
        <div class="block_show_div">
          <div class="flex_col">
            <ct-row >
              <ct-radio v-model="radio" label="Large" >Large</ct-radio>
              <ct-radio v-model="radio" label="Medium">Medium</ct-radio>
              <ct-radio v-model="radio" label="Small">Small</ct-radio>
            </ct-row>
          </div>
        </div>
      </template>
      <template v-slot:desc>
        使用<code>v-model</code>、<code>label</code>属性来控制单选框。
      </template>
    </showcomponent>
    <showpara
        title="Attribute"
        :parameter="parameter"
        style="margin-top: 150px"

    ></showpara>

  </div>
</template>

<script>
import showcomponent from "../../components/showcomponent"
import showpara from "../../components/showparameter"
export default {

  name: "radio",
  chName: "单选框",
  components: {
    showcomponent,
    showpara
  },
  data () {
    return {
      radio: 'Medium',
      info: {
        name: 'fanfan',
        age: 20,
        sex: '男',
        school: 'scut',
        major: 'computer',
        address: 'China Guangzhou',
        hobby: 'Movies',
        phone: 18888888888,
        intro: 'dddd'
      },
      code1:`<ct-row>
    <ct-radio v-model="radio" label="large" >large</ct-radio>
    <ct-radio v-model="radio" label="default">default</ct-radio>
    <ct-radio v-model="radio" label="small">small</ct-radio>
</ct-row>`,
      parameter: {
        title: ["参数", "说明", "类型", "可选值", "默认值"],
        contents: [
          ["label", "标签值", "String", "", ""],
          ["v-model", "绑定属性", "String", "", ""],

        ],
      },
    }
  }
};
</script>

<style lang="less">
@import "./src/hljsplugin/color-brewer.less";
.flex_col {
  height: auto;
  color: #8492a6;
}
</style>


