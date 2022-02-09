<template>
  <div>
    <h1>Scrollbar 滚动条</h1>
    <p>展示一片滚动区域</p>
    <basecom></basecom>
    <basecom2></basecom2>
    <darkcom></darkcom>
    <delay></delay>
    <visible></visible>
    <showpara :parameter="parameter"></showpara>
  </div>
</template>

<script>
import basecom from "./children/base.vue";
import basecom2 from "./children/base2.vue";
import darkcom from "./children/dark.vue";
import delay from "./children/delay.vue";
import visible from "./children/visible.vue";
import showpara from "../../components/showparameter";
export default {
  name: "scrollbar",
  chName: "滚动条",
  components: {
    basecom,
    basecom2,
    darkcom,
    delay,
    visible,
    showpara,
  },
  data() {
    return {
      parameter: {
        title: ["参数", "说明", "类型", "可选值", "默认值"],
        contents: [
          ["delay", "延迟时间", "number", " ", "0"],
          ["dark", "暗色模式", "Boolean", "true/false", "false"],
          ["visiable", "滚动条可见性", "Boolean", "true/false", "false"],
          ["thumbstlye", "滚动条样式", "Object", "", "{}"],
          ["barstyle", "滚动条区域样式", "Object", "", "{}"],
        ],
      },
    };
  },
};
</script>

<style></style>
