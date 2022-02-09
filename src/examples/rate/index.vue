<template>
  <div>
    <h1>Rate 评分</h1>
    <p>评分组件</p>
    <showcomponent
        title="基础用法"
        subtitle="基础的评分用法。"
        :attributes="['size']"
        ctname="Rate"
        :codes="code1"
    >
      <template v-slot:showarea>
        <div class="block_show_div">
          <ct-rate></ct-rate>
          <ct-rate :size="30"></ct-rate>
        </div>
      </template>
      <template v-slot:desc>
        使用<code>size</code>属性来定义rate的大小。
      </template>
    </showcomponent>

    <showcomponent
        title="辅助文字"
        subtitle="用辅助文字直接地表达对应分数。"
        :attributes="['show-text','levels']"
        ctname="Rate"
        :codes="code2"
    >
      <template v-slot:showarea>
        <div class="block_show_div">
          <ct-rate show-text :levels="['1','2','3','4','5']"></ct-rate>
        </div>
      </template>
      <template v-slot:desc>
        使用<code>show-text</code>、<code>levels</code>数组属性配合来定制评分组件的表达分数。
      </template>
    </showcomponent>

    <showcomponent
        title="只读"
        subtitle="只读的评分用来展示分数，不允许修改。"
        :attributes="['read-only']"
        ctname="Rate"
        :codes="code3"
    >
      <template v-slot:showarea>
        <div class="block_show_div">
          <ct-rate read-only :num="4"></ct-rate>
        </div>
      </template>
      <template v-slot:desc>
        使用<code>read-only</code>属性配合来展示评分数，只读不允许修改一般用来展示评分情况。
      </template>
    </showcomponent>

    <showpara title="Attribute" :parameter="parameter" style="margin-top:150px;"></showpara>
  </div>

</template>

<script>
import showcomponent from "@/components/showcomponent/index";
import showpara from "@/components/showparameter/index";

export default {
  name: "rate",
  chName: "评分",
  components: {
    showcomponent,
    showpara,
  },
  data() {
    return {
      code1:
          `<ct-rate
          v-model="size"
        >
        </ct-rate>

        <script>
            export default {
              data() {
                return {
                  size: 30
                }
              }
            }
        <` + `/script>`
      ,
      code2:
          `<ct-rate show-text
          v-model="levels"
        >
        </ct-rate>

        <script>
            export default {
              data() {
                return {
                  levels: ['1','2','3','4','5']
                }
              }
            }
        <` + `/script>`,
      code3:
          `<ct-rate read-only :num="4"
          v-model="size"
        >
        </ct-rate>
       `,
      parameter: {
        title: ['参数', '说明', '类型', '可选值', '默认值'],
        contents: [
          ['num / v-model', '绑定值', 'number', '——', '0'],
          ['read-only', '只读', 'Boolean', 'true/false', 'false'],
          ['size', '大小', 'number', '——', '16'],
          ['show-text', '是否显示辅助文字，若为真，则会从 texts 数组中选取当前分数对应的文字内容', 'Boolean', 'true/false', 'false'],
          ['levels', '等级', 'Array', '——', '[\'极差\', \'失望\', \'一般\', \'满意\', \'惊喜\']']
        ]
      }
    }
  }
}
</script>r

<style scoped>

</style>
