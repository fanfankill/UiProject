<template>
  <div>
    <h1>Button 按钮</h1>
    <p>常用的操作按钮。</p>
    <!--常用转义符号:&gt=>'>',&lt=>'<',&quot=>'"',&amp=>'&'-->
    <showcomponent
      title="基础用法"
      subtitle="基础的按钮用法。"
      :attributes="['type, size']"
      ctname="Button"
      :codes="code1"
    >
      <template v-slot:showarea>
        <div class="block_show_div">
          <div class="flex_col">
            <ct-row style="margin-bottom: 20px">
              <ct-button
                type="button"
                class="ct-button ct-button--default"
                style="margin-right: 10px"
                ><span>默认按钮</span></ct-button
              >
              <ct-button
                type="button"
                class="ct-button ct-button--main"
                style="margin-right: 10px"
                ><span>主要按钮</span></ct-button
              >
              <ct-button
                type="button"
                class="ct-button ct-button--success"
                style="margin-right: 10px"
                ><span>成功按钮</span></ct-button
              >
              <ct-button
                type="button"
                class="ct-button ct-button--info"
                style="margin-right: 10px"
                ><span>信息按钮</span>
              </ct-button>
              <ct-button
                type="button"
                class="ct-button ct-button--warning"
                style="margin-right: 10px"
                ><span>警告按钮</span></ct-button
              >
              <ct-button
                type="button"
                class="ct-button ct-button--error"
                style="margin-right: 10px"
                ><span>危险按钮</span></ct-button
              >
            </ct-row>
            <ct-row style="margin-bottom: 20px">
              <ct-button
                type="button"
                class="ct-button ct-button--default"
                style="margin-right: 10px"
                plain
                ><span>朴素按钮</span></ct-button
              >
              <ct-button
                type="button"
                class="ct-button ct-button--main"
                style="margin-right: 10px"
                plain
                ><span>主要按钮</span></ct-button
              >
              <ct-button
                type="button"
                class="ct-button ct-button--success"
                style="margin-right: 10px"
                plain
                ><span>成功按钮</span></ct-button
              >
              <ct-button
                type="button"
                class="ct-button ct-button--info"
                style="margin-right: 10px"
                plain
                ><span>信息按钮</span>
              </ct-button>
              <ct-button
                type="button"
                class="ct-button ct-button--warning"
                style="margin-right: 10px"
                plain
                ><span>警告按钮</span></ct-button
              >
              <ct-button
                type="button"
                class="ct-button ct-button--error"
                style="margin-right: 10px"
                plain
                ><span>危险按钮</span></ct-button
              >
            </ct-row>
            <ct-row style="margin-bottom: 20px">
              <ct-button style="margin-right: 10px" round
                ><span>圆角按钮</span></ct-button
              >
              <ct-button type="main" style="margin-right: 10px" round
                ><span>主要按钮</span></ct-button
              >
              <ct-button type="success" style="margin-right: 10px" round
                ><span>成功按钮</span></ct-button
              >
              <ct-button type="info" style="margin-right: 10px" round
                ><span>信息按钮</span>
              </ct-button>
              <ct-button type="warning" style="margin-right: 10px" round
                ><span>警告按钮</span></ct-button
              >
              <ct-button type="error" style="margin-right: 10px" round
                ><span>危险按钮</span></ct-button
              >
            </ct-row>
            <ct-row>
              <ct-button
                style="margin-right: 10px"
                circle
                icon="edit"
              ></ct-button>
              <ct-button
                type="main"
                style="margin-right: 10px"
                circle
                icon="collect"
              ></ct-button>
              <ct-button
                type="success"
                style="margin-right: 10px"
                circle
                icon="share"
              ></ct-button>
              <ct-button
                type="info"
                style="margin-right: 10px"
                circle
                icon="look"
              ></ct-button>
              <ct-button
                type="warning"
                style="margin-right: 10px"
                circle
                icon="correct"
              ></ct-button>
              <ct-button
                type="error"
                style="margin-right: 10px"
                circle
                icon="delete"
              ></ct-button>
            </ct-row>
          </div>
        </div>
      </template>
      <template v-slot:desc>
        使用<code>type</code>、<code>plain</code>、<code>round</code>、<code>circle</code>和<code>icon</code>属性来定义
        Button 的样式。
      </template>
    </showcomponent>
    <showcomponent
      title="禁用状态"
      subtitle="按钮的不可用状态。"
      :attributes="['type, size']"
      ctname="Button"
      :codes="code2"
    >
      <template v-slot:showarea>
        <div class="block_show_div">
          <div class="flex_col">
            <ct-row style="margin-bottom: 20px">
              <ct-button
                type="button"
                class="ct-button ct-button--default"
                style="margin-right: 10px"
                disabled
                ><span>默认按钮</span></ct-button
              >
              <ct-button
                type="button"
                class="ct-button ct-button--main"
                style="margin-right: 10px"
                disabled
                ><span>主要按钮</span></ct-button
              >
              <ct-button
                type="button"
                class="ct-button ct-button--success"
                style="margin-right: 10px"
                disabled
                ><span>成功按钮</span></ct-button
              >
              <ct-button
                type="button"
                class="ct-button ct-button--info"
                style="margin-right: 10px"
                disabled
                ><span>信息按钮</span>
              </ct-button>
              <ct-button
                type="button"
                class="ct-button ct-button--warning"
                style="margin-right: 10px"
                disabled
                ><span>警告按钮</span></ct-button
              >
              <ct-button
                type="button"
                class="ct-button ct-button--error"
                style="margin-right: 10px"
                disabled
                ><span>危险按钮</span></ct-button
              >
            </ct-row>
            <ct-row style="margin-bottom: 20px">
              <ct-button
                type="button"
                class="ct-button ct-button--default"
                style="margin-right: 10px"
                plain
                disabled
                ><span>朴素按钮</span></ct-button
              >
              <ct-button
                type="button"
                class="ct-button ct-button--main"
                style="margin-right: 10px"
                plain
                disabled
                ><span>主要按钮</span></ct-button
              >
              <ct-button
                type="button"
                class="ct-button ct-button--success"
                style="margin-right: 10px"
                plain
                disabled
                ><span>成功按钮</span></ct-button
              >
              <ct-button
                type="button"
                class="ct-button ct-button--info"
                style="margin-right: 10px"
                plain
                disabled
                ><span>信息按钮</span>
              </ct-button>
              <ct-button
                type="button"
                class="ct-button ct-button--warning"
                style="margin-right: 10px"
                plain
                disabled
                ><span>警告按钮</span></ct-button
              >
              <ct-button
                type="button"
                class="ct-button ct-button--error"
                style="margin-right: 10px"
                plain
                disabled
                ><span>危险按钮</span></ct-button
              >
            </ct-row>
          </div>
        </div>
      </template>
      <template v-slot:desc>
        你可以使用<code>disabled</code>属性来定义按钮是否可用，它接受一个<code>Boolean</code>值。
      </template>
    </showcomponent>
    <showcomponent
      title="图标按钮"
      subtitle="带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。"
      :attributes="['type, size']"
      ctname="Button"
      :codes="code3"
    >
      <template v-slot:showarea>
        <div class="block_show_div">
          <div class="flex_col">
            <ct-row style="margin-bottom: 20px">
              <ct-button
                type="main"
                icon="edit"
                style="margin-right: 10px"
              ></ct-button>
              <ct-button
                type="main"
                icon="share"
                style="margin-right: 10px"
              ></ct-button>
              <ct-button
                type="main"
                icon="delete"
                style="margin-right: 10px"
              ></ct-button>
              <ct-button type="main" icon="search" style="margin-right: 10px"
                >搜索</ct-button
              >
            </ct-row>
          </div>
        </div>
      </template>
      <template v-slot:desc> 设置<code>icon</code>属性即可。 </template>
    </showcomponent>
    <showcomponent
      title="加载中"
      subtitle="点击按钮后进行数据加载操作，在按钮上显示加载状态。"
      :attributes="['type, size']"
      ctname="Button"
      :codes="code4"
    >
      <template v-slot:showarea>
        <div class="block_show_div">
          <div class="flex_col">
            <ct-row>
              <ct-button type="main" :loading="true">加载中</ct-button>
            </ct-row>
          </div>
        </div>
      </template>
      <template v-slot:desc>
        要设置为
        <code>loading</code>
        状态，只要设置<code>loading</code>属性为<code>true</code>即可。
      </template>
    </showcomponent>
    <showcomponent
      title="不同尺寸"
      subtitle="Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。"
      :attributes="['type, size']"
      ctname="Button"
      :codes="code5"
    >
      <template v-slot:showarea>
        <div class="block_show_div">
          <div class="flex_col">
            <ct-row style="margin-bottom: 20px">
              <ct-button size="large" style="margin-right: 10px"
                >默认按钮</ct-button
              >
              <ct-button size="medium" style="margin-right: 10px"
                >中等按钮</ct-button
              >
              <ct-button size="small" style="margin-right: 10px"
                >小型按钮</ct-button
              >
              <ct-button size="mini" style="margin-right: 10px"
                >超小按钮</ct-button
              >
            </ct-row>
            <ct-row style="margin-bottom: 20px">
              <ct-button size="large" style="margin-right: 10px" round
                >默认按钮</ct-button
              >
              <ct-button size="medium" style="margin-right: 10px" round
                >中等按钮</ct-button
              >
              <ct-button size="small" style="margin-right: 10px" round
                >小型按钮</ct-button
              >
              <ct-button size="mini" style="margin-right: 10px" round
                >超小按钮</ct-button
              >
            </ct-row>
          </div>
        </div>
      </template>
      <template v-slot:desc>
        默认为大型按钮，额外的尺寸：<code>medium</code>、<code>small</code>、<code>mini</code>，通过设置<code>size</code>属性来配置它们。
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
import showcomponent from "../../components/showcomponent";
import showpara from "../../components/showparameter";
export default {
  name: "button",
  chName: "按钮",
  components: {
    showcomponent,
    showpara,
  },
  data() {
    return {
      code1: `<ct-row>
  <ct-button>默认按钮</ct-button>
  <ct-button type="main">主要按钮</ct-button>
  <ct-button type="success">成功按钮</ct-button>
  <ct-button type="info">信息按钮</ct-button>
  <ct-button type="warning">警告按钮</ct-button>
  <ct-button type="error">危险按钮</ct-button>
</ct-row>

<ct-row>
  <ct-button plain>朴素按钮</ct-button>
  <ct-button type="main" plain>主要按钮</ct-button>
  <ct-button type="success" plain>成功按钮</ct-button>
  <ct-button type="info" plain>信息按钮</ct-button>
  <ct-button type="warning" plain>警告按钮</ct-button>
  <ct-button type="error" plain>危险按钮</ct-button>
</ct-row>

<ct-row>
  <ct-button round>圆角按钮</ct-button>
  <ct-button type="main" round>主要按钮</ct-button>
  <ct-button type="success" round>成功按钮</ct-button>
  <ct-button type="info" round>信息按钮</ct-button>
  <ct-button type="warning" round>警告按钮</ct-button>
  <ct-button type="error" round>危险按钮</ct-button>
</ct-row>

<ct-row>
  <ct-button icon="edit" circle></ct-button>
  <ct-button type="main" icon="collect" circle></ct-button>
  <ct-button type="success" icon="share" circle></ct-button>
  <ct-button type="info" icon="look" circle></ct-button>
  <ct-button type="warning" icon="correct" circle></ct-button>
  <ct-button type="error" icon="delete" circle></ct-button>
</ct-row>`,
      code2: `<ct-row>
  <ct-button disabled>默认按钮</ct-button>
  <ct-button type="main" disabled>主要按钮</ct-button>
  <ct-button type="success" disabled>成功按钮</ct-button>
  <ct-button type="info" disabled>信息按钮</ct-button>
  <ct-button type="warning" disabled>警告按钮</ct-button>
  <ct-button type="error" disabled>危险按钮</ct-button>
</ct-row>

<ct-row>
  <ct-button plain disabled>朴素按钮</ct-button>
  <ct-button type="main" plain disabled>主要按钮</ct-button>
  <ct-button type="success" plain disabled>成功按钮</ct-button>
  <ct-button type="info" plain disabled>信息按钮</ct-button>
  <ct-button type="warning" plain disabled>警告按钮</ct-button>
  <ct-button type="error" plain disabled>危险按钮</ct-button>
</ct-row>`,
      code3: `<ct-button type="main" icon="edit"></ct-button>
<ct-button type="main" icon="share"></ct-button>
<ct-button type="main" icon="delete"></ct-button>
<ct-button type="main" icon="search">搜索</ct-button>`,
      code4: `<ct-button type="primary" :loading="true">加载中</ct-button>`,
      code5: `<ct-row>
  <ct-button>默认按钮</ct-button>
  <ct-button size="medium">中等按钮</ct-button>
  <ct-button size="small">小型按钮</ct-button>
  <ct-button size="mini">超小按钮</ct-button>
</ct-row>
<ct-row>
  <ct-button round>默认按钮</ct-button>
  <ct-button size="medium" round>中等按钮</ct-button>
  <ct-button size="small" round>小型按钮</ct-button>
  <ct-button size="mini" round>超小按钮</ct-button>
</ct-row>`,
      parameter: {
        title: ["参数", "说明", "类型", "可选值", "默认值"],
        contents: [
          [
            "type",
            "类型",
            "String",
            "default/main/success/info/warning/error ",
            "default",
          ],
          ["disabled", "禁用模式", "Boolean", "true/false", "false"],
          ["plain", "朴素样式", "Boolean", "true/false", "false"],
          ["round", "圆角样式", "Boolean", "true/false", "false"],
          ["circle", "圆形样式", "Boolean", "true/false", "false"],
          ["size", "大小", "String", "large/medium/small/mini", "large"],
          ["icon", "图标", "String", "edit/share/delete/...", ""],
        ],
      },
    };
  },
};
</script>

<style lang="less" scoped>
.flex_col {
  height: auto;
  color: #8492a6;
}
</style>
