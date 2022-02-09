<template>
  <div>
    <div>
      <h1>Tree 树形控件</h1>
      <div style="padding-top: 1rem">
        对于文件夹、分类目录、组织架构等层级较多的内容，树可以清楚显示他们的层级关系，并具有展开、收起、选择等交互功能。
      </div>
    </div>
    <Base></Base>
    <checkbox></checkbox>
    <init-status></init-status>

    <div class="attr">Attribution</div>
    <h3>Tree props</h3>
    <Showpara :parameter="parameter1"></Showpara>
    <h3>Node data</h3>
    <Showpara :parameter="parameter2"></Showpara>
    <h3>Tree events</h3>
    <Showpara :parameter="parameter3"></Showpara>
  </div>
</template>

<script>
import Base from "./children/base.vue";
import Checkbox from "./children/checkbox.vue";
import InitStatus from "./children/initStatus.vue";
import Showpara from "../../components/showparameter";

export default {
  name: "tree",
  chName: "树形控件",
  components: {
    Base,
    Checkbox,
    InitStatus,
    Showpara,
  },
  data() {
    return {
      parameter1: {
        title: ["参数", "说明", "类型", "可选值", "默认值"],
        contents: [
          ["data", "待展示的数据", "Array", "-", "[]"],
          ["show-checkbox", "是否有复选框", "Boolean", "true/false", "false"],
          ["multiple", "节点是否可以多选", "Boolean", "true/false", "false"],
        ],
      },
      parameter2: {
        title: ["参数", "说明", "类型", "可选值", "默认值"],
        contents: [
          ["title", "节点标题", "String", "-", "-"],
          ["expand", "是否展开直子节点", "Boolean", "true/false", "false"],
          ["selected", "是否选中节点", "Boolean", "true/false", "false"],
          ["checked", "复选框是否选中", "Boolean", "true/false", "false"],
          ["disabled", "是否禁用", "Boolean", "true/false", "false"],
          ["children", "子节点属性数组", "Array", "-", "-"],
        ],
      },
      parameter3: {
        title: ["事件名", "说明", "返回值"],
        contents: [
          ["on-expand", "展开和收起节点时触发", "当前节点的数据"],
          [
            "on-check-change",
            "点击复选框时触发",
            "当前已勾选节点的数组、当前项",
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
