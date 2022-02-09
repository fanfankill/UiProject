<template>
  <div>
    <h1>Container 布局容器</h1>
    <p>展示不同种类的布局</p>
    <mybase></mybase>
    <mybase2></mybase2>
    <showpara :parameter="parameter"></showpara>
  </div>
</template>

<script>
import mybase from "./children/base";
import mybase2 from "./children/base2";
import showpara from "../../components/showparameter";
export default {
  name: "container",
  chName: "布局容器",
  components: {
    mybase,
    mybase2,
    showpara,
  },
  data() {
    return {
      parameter: {
        title: ["参数", "说明", "类型", "可选值", "默认值"],
        contents: [
          [
            "direction",
            "子元素的排列方向",
            "string",
            "horizontal / vertical",
            "",
          ],
          ["height", "顶栏高度", "string", "", "60px"],
          ["width", "侧边栏宽度", "string", "", ""],
          ["height", "底栏高度", "string", "", "60px"],
        ],
      },
    };
  },
  beforeDestroy() {
    console.log(Date.now());
  },
  destroyed() {
    console.log(Date.now());
  },
};
</script>

<style></style>
