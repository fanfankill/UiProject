<template>
  <div>
    <h1>Animate 视口出现</h1>
    <p>控制视口出现的自定义指令</p>
    <div style="width:100%;height:600px">
     <h2> 请下滑</h2>
    </div>

    <showcomponent
        title="基础用法"
        subtitle="元素出现在可视区域的基本动画效果"
        :attributes="['type, size']"
        ctname="Animate"
        :codes="code1"

        v-animate="'queue-top'"
        class="iscenter"
    >
      <template v-slot:showarea  >
        <div class="block_show_div">
          <div class="flex_col">
            <p v-animate="'queue-right'">元素出现在可视区域后的渐变动画</p>
          </div>
        </div>
      </template>
      <template v-slot:desc>
        使用<code>v-animate</code>、<code>class</code>属性来定义视口出现的效果，可以自定义视口出现的效果
      </template>
    </showcomponent>

    <showcomponent
        title="基础用法"
        subtitle="元素出现在可视区域的基本动画效果"
        :attributes="['type, size']"
        ctname="Animate"
        :codes="code2"
    >
      <template v-slot:showarea  >
        <div class="block_show_div">
          <div class="flex_col">
            <p v-animate="'queue-left'">元素出现在可视区域后的渐变动画</p>
          </div>
        </div>
      </template>
      <template v-slot:desc>
        使用<code>v-animate</code>、<code>class</code>属性来定义视口出现的效果，可以自定义视口出现的效果
      </template>
    </showcomponent>

    <showpara
        title="Attribute"
        :parameter="parameter"
        style="margin-top: 150px"
        v-animate="'queue-bottom'"
    ></showpara>

  </div>
</template>

<script>
import showcomponent from "../../components/showcomponent";
import showpara from "../../components/showparameter";
export default {
  name:"animate",
  chName:"视口出现",
  components:{showcomponent,showpara},
  data(){
    return{
      code1:`<h5 v-animate="'queue-left'">元素出现在可视区域后的渐变动画</h5>
<style scoped lang="less">

.queue-left {
     transform: translate(10%,0);
    transition: 2s all;
  }
  .queue-right {
     transform: translate(-10%,0);
    transition: 2s all;
  }
   .queue-bottom {
     transform: translate(0,-20%);
    transition: 2s all;
  }
</style>`,
code2:`<h5 v-animate="'queue-right'" class="iscenter">元素出现在可视区域后的渐变动画</h5>
<style scoped lang="less">

.queue-left {
      opacity: 1;
     transform: translate(10%,0);
    transition: 2s all;
  }
  .queue-right {
      opacity: 1;
     transform: translate(-10%,0);
    transition: 2s all;
  }
   .queue-bottom {
      opacity: 1;
     transform: translate(0,-20%);
    transition: 2s all;
  }
</style>`,
      parameter: {
        title: ["参数", "说明", "类型", "可选值", "默认值"],
        contents: [
          ["class", "初始样式", "String", "", "iscenter"],
          ["v-animate", "视口出现样式", "String", "", "'queue-top'"],
        ],
      },
    }
  }
}
</script>

<style scoped lang="less">

.queue-left {
      opacity: 1;
     transform: translate(10%,0);
    transition: 2s all;
  }
  .queue-right {
      opacity: 1;
     transform: translate(-10%,0);
    transition: 2s all;
  }
   .queue-bottom {
      opacity: 1;
     transform: translate(0,-20%);
    transition: 2s all;
  }
</style>