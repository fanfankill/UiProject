<template>
  <div>
    <div>
      <h1>Tabs 标签页</h1>
      <div style="padding-top: 1rem">
        选项卡切换组件，分隔内容上有关联但属于不同类别的数据集合。
      </div>
    </div>
    <Base></Base>
    <disabled></disabled>
    <type></type>
    <icon></icon>
    <changeable></changeable>

    <div class="attr">Attribution</div>
    <h3>CtTabs props</h3>
    <Showpara :parameter="parameter1"></Showpara>
    <h3>CtTabPane props</h3>
    <Showpara :parameter="parameter2"></Showpara>
  </div>
</template>

<script>
import Base from "./children/base.vue";
import Disabled from "./children/disabled.vue";
import Type from "./children/type.vue";
import Icon from "./children/icon.vue";
import Changeable from "./children/changable.vue";
import Showpara from "../../components/showparameter";

export default {
  name: "tabs",
  chName: "标签页",
  components: {
    Base,
    Disabled,
    Type,
    Icon,
    Changeable,
    Showpara,
  },
  data() {
    return {
      parameter1: {
        title: ["属性", "说明", "类型", "默认值"],
        contents: [
          [
            "value",
            "当前激活 tab 面板的 name，可以使用 v-model 双向绑定数据",
            "String",
            "默认第一项的name",
          ],
          [
            "type",
            "标签页的基本样式，可选值有line、none、card",
            "String",
            "line",
          ],
          [
            "closable",
            '是否可以关闭标签页，仅在 type="card" 时有效',
            "Boolean",
            "false",
          ],
        ],
      },
      parameter2: {
        title: ["属性", "说明", "类型", "默认值"],
        contents: [
          [
            "name",
            "用于标识当前面板，对应 value，默认为其索引值",
            "String",
            "-",
          ],
          ["label", "选项卡头显示文字", "String", "空"],
          ["icon", "选项卡图标，可以通过r、l、t、b设置图标方位", "String", "-"],
          ["disabled", "是否禁用该选项卡", "Boolean", "false"],
          [
            "closable",
            '是否可以关闭标签页，仅在 type="card" 时有效',
            "Boolean",
            "false",
          ],
          [
            "closable",
            '是否可以关闭标签页，仅在 type="card" 时有效',
            "Boolean",
            "false",
          ],
        ],
      },
    };
  },
};
</script>

<style scoped>
.attr {
  margin-top: 6rem;
  font-size: 1.7rem;
}
h3 {
  margin: 3rem 0 -1.5rem 0;
}
</style>
