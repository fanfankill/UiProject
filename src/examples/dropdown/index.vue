<template>
  <div>
    <h1>Dropdown 下拉框</h1>
    <p>动态下拉的形式展示各种菜单</p>
    <mybase></mybase>
    <icon></icon>
    <disable></disable>
    <nohide></nohide>
    <showpara :parameter="parameter"></showpara>
  </div>
</template>

<script>
import mybase from "./children/base";
import icon from "./children/icon";
import disable from "./children/disable";
import nohide from "./children/nohide";
import showpara from "../../components/showparameter";
export default {
  name: "dropdown",
  chName: "下拉框",
  components: {
    mybase,
    icon,
    disable,
    nohide,
    showpara,
  },
  data() {
    return {
      parameter: {
        title: ["参数", "说明", "类型", "可选值", "默认值"],
        contents: [
          ["trigger", "触发下拉的行为", "string", "hover, click", "hover"],
          ["icon", "图标类名", "string", "", ""],
          ["disabled", "禁用", "Boolean", "true/false", "false"],
          [
            "hide-no-show",
            "是否在点击菜单项后隐藏菜单",
            "Boolean",
            "true/false",
            "false",
          ],
        ],
      },
    };
  },
  created() {
    console.log(Date.now());
  },
};
</script>

<style scoped>
.flex_col {
  height: 80px;
  color: #8492a6;
}
</style>
