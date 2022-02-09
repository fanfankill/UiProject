<template>
  <div>
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
            <p >元素出现在可视区域后的渐变动画</p>
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
        :codes="code1"
        v-animate="'queue-top'"
        class="iscenter"
    >
      <template v-slot:showarea  >
        <div class="block_show_div">
          <div class="flex_col">
            <p >元素出现在可视区域后的渐变动画</p>
          </div>
        </div>
      </template>
      <template v-slot:desc>
        使用<code>v-animate</code>、<code>class</code>属性来定义视口出现的效果，可以自定义视口出现的效果
      </template>
    </showcomponent>
    
  </div>
</template>

<script>
import showcomponent from "../../../components/showcomponent";
export default {
    components:{
        showcomponent
    }
}
</script>

<style>

</style>