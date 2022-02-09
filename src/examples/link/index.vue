<template>
  <div>
    <h1>Link 链接</h1>
    <p>不同形式的链接</p>
    <showcomponent
      title="基础用法"
      subtitle="基础的文字链接用法。"
      :attributes="['type，size']"
      ctname="Link"
      :codes="code1"
    >
      <template v-slot:showarea>
        <div class="block_show_div">
          <div class="link_col">
            <ct-link href="https://element.eleme.io" target="_blank"
              >默认链接</ct-link
            >
            <ct-link type="primary">主要链接</ct-link>
            <ct-link type="success">成功链接 </ct-link>
            <ct-link type="warning">警告链接 </ct-link>
            <ct-link type="danger">危险链接 </ct-link>
            <ct-link type="info">信息链接 </ct-link>
          </div>
        </div>
      </template>
      <template v-slot:desc>
        设置<code>type</code>属性定义 Link 的展示类型。
      </template>
    </showcomponent>
    <showcomponent
      title="禁用状态"
      subtitle="文字链接不可用状态。"
      :attributes="['type']"
      ctname="Link"
      :codes="code2"
    >
      <template v-slot:showarea>
        <div class="block_show_div">
          <div class="link_col">
            <ct-link disabled :underline="false">默认链接</ct-link>
            <ct-link type="primary" disabled :underline="false"
              >主要链接</ct-link
            >
            <ct-link type="success" disabled :underline="false"
              >成功链接</ct-link
            >
            <ct-link type="warning" disabled :underline="false"
              >警告链接</ct-link
            >
            <ct-link type="danger" disabled :underline="false"
              >危险链接</ct-link
            >
            <ct-link type="info" disabled :underline="false">信息链接</ct-link>
          </div>
        </div>
      </template>
      <template v-slot:desc>
        设置<code>disabled</code>、<code>underline</code>属性定义 Link
        的禁用状态。
      </template>
    </showcomponent>
    <showcomponent
      title="下划线"
      subtitle="文字链接下划线"
      :attributes="['type']"
      ctname="Link"
      :codes="code3"
    >
      <template v-slot:showarea>
        <div class="block_show_div">
          <div class="link_col">
            <ct-link :underline="false">无下划线</ct-link>
            <ct-link>有下划线</ct-link>
          </div>
        </div>
      </template>
      <template v-slot:desc>
        设置<code>underline</code>属性定义 Link 有无下划线状态。
      </template>
    </showcomponent>
    <showcomponent
      title="图标"
      subtitle="带图标的文字链接可增强辨识度"
      :attributes="['type']"
      ctname="Link"
      :codes="code4"
    >
      <template v-slot:showarea>
        <div class="block_show_div">
          <div class="link_col">
            <ct-link icon="iconfont icon-bianji1">编辑</ct-link>
            <ct-link
              >查看<i class="iconfont icon-check-line el-icon--right"></i
            ></ct-link>
          </div>
        </div>
      </template>
    </showcomponent>
    <h2 style="margin: 55px 0 20px; font-size: 22px">Attributes</h2>
    <showpara :parameter="parameter"></showpara>
  </div>
</template>

<script>
import showcomponent from "../../components/showcomponent";
import showpara from "../../components/showparameter";
export default {
  name: "link",
  chName: "链接",
  components: {
    showcomponent,
    showpara,
  },
  data() {
    return {
      code1: `  <div>
    <el-link href="https://element.eleme.io" target="_blank">默认链接</el-link>
    <el-link type="primary">主要链接</el-link>
    <el-link type="success">成功链接</el-link>
    <el-link type="warning">警告链接</el-link>
    <el-link type="danger">危险链接</el-link>
    <el-link type="info">信息链接</el-link>
  </div>`,
      code2: `  <div>
    <el-link disabled>默认链接</el-link>
    <el-link type="primary" disabled>主要链接</el-link>
    <el-link type="success" disabled>成功链接</el-link>
    <el-link type="warning" disabled>警告链接</el-link>
    <el-link type="danger" disabled>危险链接</el-link>
    <el-link type="info" disabled>信息链接</el-link>
  </div>`,
      code3: `  <div>
    <el-link :underline="false">无下划线</el-link>
    <el-link>有下划线</el-link>
  </div>`,
      code4: `  <div>
    <el-link icon="el-icon-edit">编辑</el-link>
    <el-link>查看<i class="el-icon-view el-icon--right"></i> </el-link>
  </div>`,
      parameter: {
        title: ["参数", "说明", "类型", "可选值", "默认值"],
        contents: [
          [
            "type",
            "类型",
            "string",
            "primary/success/warning/danger/info",
            "default",
          ],
          ["width", "switch 的宽度（像素）", "number	", "—", "40"],
          ["active-text", "switch打开时的文字描述", "string", "—", "—"],
          ["inactive-text", "switch 关闭时的文字描述", "string	", "—", "—"],
          [
            "active-value",
            "switch 打开时的值",
            "boolean / string / number",
            "—",
            "true",
          ],
          [
            "inactive-value",
            "switch 关闭时的值",
            "boolean / string / number",
            "—",
            "true",
          ],
          ["active-color", "switch 打开时的背景色", "string", "—	", "#409EFF"],
          ["active-color", "switch 打开时的背景色", "string", "—	", "#C0CCDA"],
          ["name", "switch 对应的 name 属性", "string", "—	", "—"],
        ],
      },
    };
  },
};
</script>

<style lang="less" scoped>
.flex_col {
  height: 80px;
  color: #8492a6;
}
.link_col {
  display: flex;
  flex-direction: row;
}
</style>
