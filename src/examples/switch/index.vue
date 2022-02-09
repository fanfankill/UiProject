<template>
  <div>
    <h1>Switch 开关</h1>
    <p>不同样式的开关按钮</p>
    <showcomponent
      title="基础用法"
      :attributes="['active-color,inactive-color']"
      ctname="Switch"
      :codes="code1"
    >
      <template v-slot:showarea>
        <div class="block_show_div">
          <div class="flex_col">
            <ct-switch
              v-model="value"
              active-color="#13ce66"
              inactive-color="#ff4949"
            >
            </ct-switch>
          </div>
        </div>
      </template>
      <template v-slot:desc>
        绑定<code>v-model</code>到一个<code>Boolean</code>类型的变量。可以使用<code>active-color</code>属性与<code>inactive-color</code>属性来设置开关的背景色
      </template>
    </showcomponent>
    <showcomponent
      title="文字描述"
      :attributes="['active-text,inactive-text,active-color,inactive-color']"
      ctname="Switch"
      :codes="code3"
    >
      <template v-slot:showarea>
        <div class="block_show_div">
          <div class="flex_col">
            <ct-switch
              style="margin-bottom: 20px"
              v-model="value2"
              active-text="按月付费"
              inactive-text="按年付费"
            >
            </ct-switch
            >&nbsp;
            <ct-switch
              style="display: block"
              v-model="value3"
              active-color="#13ce66"
              inactive-color="#ff4949"
              active-text="按月付费"
              inactive-text="按年付费"
            >
            </ct-switch>
          </div>
        </div>
      </template>
      <template v-slot:desc>
        使用<code>active-text</code>属性与<code>inactive-text</code>属性来设置开关的文字描述
      </template>
    </showcomponent>
    <showcomponent
      title="禁用状态"
      :attributes="['disabled']"
      ctname="Switch"
      :codes="code2"
    >
      <template v-slot:showarea>
        <div class="block_show_div">
          <div class="flex_col">
            <ct-switch v-model="value1" disabled> </ct-switch>
          </div>
        </div>
      </template>
      <template v-slot:desc>
        绑定<code>v-model</code>到一个<code>Boolean</code>类型的变量。可以使用<code>active-color</code>属性与<code>inactive-color</code>属性来设置开关的背景色
      </template>
    </showcomponent>
    <h3 style="margin: 55px 0 20px; font-size: 22px">Attributes</h3>
    <showpara :parameter="parameter1"></showpara>
    <h3 style="margin: 55px 0 20px; font-size: 22px">Events</h3>
    <showpara :parameter="parameter2"></showpara>
    <h3 style="margin: 55px 0 20px; font-size: 22px">Methods</h3>
    <showpara :parameter="parameter3"></showpara>
  </div>
</template>

<script>
import showcomponent from "../../components/showcomponent";
import showpara from "../../components/showparameter";
export default {
  name: "switch",
  chName: "开关",
  components: {
    showcomponent,
    showpara,
  },
  data() {
    return {
      value: true,
      value1: false,
      value2: true,
      value3: true,
      code1:
        `
  <el-switch
      v-model="value"
      active-color="#13ce66"
      inactive-color="#ff4949">
  </el-switch>
  <script>
      export default {
        data() {
          return {
            value: true
          }
        }
      };
<` +
        `/` +
        `script>`,
      code2:
        `
  <el-switch
        v-model="value1"
        active-text="按月付费"
        inactive-text="按年付费">
  </el-switch>
  <el-switch
        style="display: block"
        v-model="value2"
        active-color="#13ce66"
        inactive-color="#ff4949"
        active-text="按月付费"
        inactive-text="按年付费">
  </el-switch>
  <script>
    export default {
      data() {
        return {
          value1: true,
          value2: true
        }
      }
    };
<` +
        `/` +
        `script>`,
      code3:
        `
  <el-switch
        v-model="value1"
        disabled>
  </el-switch>
  <el-switch
        v-model="value2"
        disabled>
  </el-switch>
  <script>
        export default {
          data() {
            return {
              value1: true,
              value2: false
            }
          }
        };
<` +
        `/` +
        `script>`,
      parameter1: {
        title: ["参数", "说明", "类型", "可选值", "默认值"],
        contents: [
          ["value / v-model", "绑定值", "boolean / string / number", "—", "—"],
          ["disabled", "是否禁用", "boolean", "—", "false"],
          ["plain", "朴素样式", "Boolean", "true/false", "false"],
          ["round", "圆角样式", "Boolean", "true/false", "false"],
          ["circle", "圆形样式", "Boolean", "true/false", "false"],
          ["size", "大小", "String", "large/medium/small/mini", "large"],
          ["icon", "图标", "String", "edit/share/delete/...", "-"],
        ],
      },
      parameter2: {
        title: ["事件名称", "说明", "回调参数"],
        contents: [["change", "switch 状态发生变化时的回调函数", "新状态的值"]],
      },
      parameter3: {
        title: ["方法名", "说明", "参数"],
        contents: [["focus", "使 Switch 获取焦点", "-"]],
      },
    };
  },
};
</script>

<style scoped>
.flex_col {
  height: 80px;
  color: #8492a6;
}
</style>
