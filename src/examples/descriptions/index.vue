<template>
  <div>
    <h1>Descriptions 描述列表</h1>
    <p>常用的描述列表用法。</p>
    <!--常用转义符号:&gt=>'>',&lt=>'<',&quot=>'"',&amp=>'&'-->
    <showcomponent
        title="基础用法"
        subtitle="基础的描述列表。"
        :attributes="['type, size']"
        ctname="Descriptions"
        :codes="code1"
    >
      <template v-slot:showarea>
        <div class="block_show_div">
          <div class="flex_col">
            <ct-descriptions title="User Info" column="3">
              <ct-descriptions-item label="Username">{{
                  info.name
                }}</ct-descriptions-item>
              <ct-descriptions-item label="Age"
              ><code>{{ info.age }}</code></ct-descriptions-item
              >
              <ct-descriptions-item label="Gender">{{
                  info.sex
                }}</ct-descriptions-item>
              <ct-descriptions-item label="School">{{
                  info.school
                }}</ct-descriptions-item>
              <ct-descriptions-item label="Profession">{{
                  info.major
                }}</ct-descriptions-item>
              <ct-descriptions-item label="Hobby">{{
                  info.hobby
                }}</ct-descriptions-item>
              <ct-descriptions-item label="Telephone">{{
                  info.phone
                }}</ct-descriptions-item>
              <ct-descriptions-item label="Address">{{
                  info.address
                }}</ct-descriptions-item>
            </ct-descriptions>
          </div>
        </div>
      </template>
      <template v-slot:desc>
        使用<code>title</code>,<code>column</code>，<code>label</code>属性来定义
        Descriptions 的样式
      </template>
    </showcomponent>
    <showcomponent
        title="不同尺寸"
        subtitle="不同尺寸的描述列表。"
        :attributes="['type, size']"
        ctname="Descriptions"
        :codes="code2"
    >
      <template v-slot:showarea>
        <div class="block_show_div">
          <div class="flex_col">
            <ct-row>
              <ct-radio v-model="radio1" label="large">Large</ct-radio>
              <ct-radio v-model="radio1" label="medium">Default</ct-radio>
              <ct-radio v-model="radio1" label="small">Small</ct-radio>
            </ct-row>
            <ct-descriptions :size="radio1" title="User info" column="3">
              <ct-descriptions-item label="Username">{{
                  info.name
                }}</ct-descriptions-item>
              <ct-descriptions-item label="Age"
              ><code>{{ info.age }}</code></ct-descriptions-item
              >
              <ct-descriptions-item label="Gender">{{
                  info.sex
                }}</ct-descriptions-item>
              <ct-descriptions-item label="School">{{
                  info.school
                }}</ct-descriptions-item>
              <ct-descriptions-item label="Profession">{{
                  info.major
                }}</ct-descriptions-item>
              <ct-descriptions-item label="Hobby">{{
                  info.hobby
                }}</ct-descriptions-item>
              <ct-descriptions-item label="Telephone">{{
                  info.phone
                }}</ct-descriptions-item>
              <ct-descriptions-item label="Address">{{
                  info.address
                }}</ct-descriptions-item>
            </ct-descriptions>
          </div>
        </div>
      </template>
      <template v-slot:desc>
        使用<code>size</code>属性来定义 Descriptions 的样式
      </template>
    </showcomponent>
    <showcomponent
        title="有无边框"
        subtitle="有无边框的描述列表。"
        :attributes="['type, size']"
        ctname="Descriptions"
        :codes="code3"
    >
      <template v-slot:showarea>
        <div class="block_show_div">
          <div class="flex_col">
            <ct-row>
              <ct-radio v-model="radio2" label="border">有边框</ct-radio>
              <ct-radio v-model="radio2" label="borderless">无边框</ct-radio>
            </ct-row>
            <ct-descriptions
                :borderless="'borderless' === radio2"
                title="User info"
                column="3"
            >
              <ct-descriptions-item label="Username">{{
                  info.name
                }}</ct-descriptions-item>
              <ct-descriptions-item label="Age"
              ><code>{{ info.age }}</code></ct-descriptions-item
              >
              <ct-descriptions-item label="Gender">{{
                  info.sex
                }}</ct-descriptions-item>
              <ct-descriptions-item label="School">{{
                  info.school
                }}</ct-descriptions-item>
              <ct-descriptions-item label="Profession">{{
                  info.major
                }}</ct-descriptions-item>
              <ct-descriptions-item label="Hobby">{{
                  info.hobby
                }}</ct-descriptions-item>
              <ct-descriptions-item label="Telephone">{{
                  info.phone
                }}</ct-descriptions-item>
              <ct-descriptions-item label="Address">{{
                  info.address
                }}</ct-descriptions-item>
            </ct-descriptions>
          </div>
        </div>
      </template>
      <template v-slot:desc>
        使用<code>borderless</code>属性来定义 Descriptions 的样式
      </template>
    </showcomponent>
    <showcomponent
        title="垂直列表"
        subtitle="是否垂直排列的描述列表。"
        :attributes="['type, size']"
        ctname="Descriptions"
        :codes="code4"
    >
      <template v-slot:showarea>
        <div class="block_show_div">
          <div class="flex_col">
            <ct-row>
              <ct-radio v-model="radio3" label="large">Large</ct-radio>
              <ct-radio v-model="radio3" label="medium">Default</ct-radio>
              <ct-radio v-model="radio3" label="small">Small</ct-radio>
            </ct-row>
            <ct-descriptions
                direction="vertical"
                :size="radio3"
                title="User info"
                column="3"
            >
              <ct-descriptions-item label="Username">{{
                  info.name
                }}</ct-descriptions-item>
              <ct-descriptions-item label="Age"
              ><code>{{ info.age }}</code></ct-descriptions-item
              >
              <ct-descriptions-item label="Gender">{{
                  info.sex
                }}</ct-descriptions-item>
              <ct-descriptions-item label="School">{{
                  info.school
                }}</ct-descriptions-item>
              <ct-descriptions-item label="Profession">{{
                  info.major
                }}</ct-descriptions-item>
              <ct-descriptions-item label="Hobby">{{
                  info.hobby
                }}</ct-descriptions-item>
              <ct-descriptions-item label="Telephone">{{
                  info.phone
                }}</ct-descriptions-item>
              <ct-descriptions-item label="Address">{{
                  info.address
                }}</ct-descriptions-item>
            </ct-descriptions>
          </div>
        </div>
      </template>
      <template v-slot:desc>
        使用<code>direction</code>属性来定义 Descriptions 的样式
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
  name: "descriptions",
  chName: "描述列表",
  components: {
    showcomponent,
    showpara,
  },
  data() {
    return {
      code1: `<ct-descriptions title="User Info" column="3">
    <ct-descriptions-item label="Username">ephemera</ct-descriptions-item>
    <ct-descriptions-item label="Age">20</ct-descriptions-item>
    <ct-descriptions-item label="Gender">male</ct-descriptions-item>
    <ct-descriptions-item label="School">Scut</ct-descriptions-item>
    <ct-descriptions-item label="Profession">computer</ct-descriptions-item>
    <ct-descriptions-item label="Hobby">Movies</ct-descriptions-item>
    <ct-descriptions-item label="Telephone">18888888888</ct-descriptions-item>
    <ct-descriptions-item label="Address">No.1188, Xiaoguwei Avenue, Xiaoguwei District, Guangzhou, Guangdong Province</ct-descriptions-item>
    <ct-descriptions-item label="Self-descriptions" :span="1">Pursue my inner peace!</ct-descriptions-item>
</ct-descriptions>`,
      code2: `<ct-row>
    <ct-radio v-model="radio1" label="large">Large</ct-radio>
    <ct-radio v-model="radio1" label="medium">Default</ct-radio>
    <ct-radio v-model="radio1" label="small">Small</ct-radio>
</ct-row>
<ct-descriptions  :size="radio1" title="User info" column="3">
    <ct-descriptions-item label="Username">ephemera</ct-descriptions-item>
    <ct-descriptions-item label="Age">20</ct-descriptions-item>
    <ct-descriptions-item label="Gender">male</ct-descriptions-item>
    <ct-descriptions-item label="School">Scut</ct-descriptions-item>
    <ct-descriptions-item label="Profession">computer</ct-descriptions-item>
    <ct-descriptions-item label="Hobby">Movies</ct-descriptions-item>
    <ct-descriptions-item label="Telephone">18888888888</ct-descriptions-item>
    <ct-descriptions-item label="Address">No.1188, Xiaoguwei Avenue, Xiaoguwei District, Guangzhou, Guangdong Province</ct-descriptions-item>
    <ct-descriptions-item label="Self-descriptions" :span="1">Pursue my inner peace!</ct-descriptions-item>
</ct-descriptions>
export default{
    data(){
        return{
            radio1: 'medium'
        }
    }
}
`,
      code3: `<ct-row>
    <ct-radio v-model="radio2" label="border">有边框</ct-radio>
    <ct-radio v-model="radio2" label="borderless">无边框</ct-radio>
</ct-row>
<ct-descriptions  :borderless="'borderless'===radio2" title="User info" column="3">
    <ct-descriptions-item label="Username">ephemera</ct-descriptions-item>
    <ct-descriptions-item label="Age">20</ct-descriptions-item>
    <ct-descriptions-item label="Gender">male</ct-descriptions-item>
    <ct-descriptions-item label="School">Scut</ct-descriptions-item>
    <ct-descriptions-item label="Profession">computer</ct-descriptions-item>
    <ct-descriptions-item label="Hobby">Movies</ct-descriptions-item>
    <ct-descriptions-item label="Telephone">18888888888</ct-descriptions-item>
    <ct-descriptions-item label="Address">No.1188, Xiaoguwei Avenue, Xiaoguwei District, Guangzhou, Guangdong Province</ct-descriptions-item>
    <ct-descriptions-item label="Self-descriptions" :span="1">Pursue my inner peace!</ct-descriptions-item>
</ct-descriptions>
export default{
    data(){
        return{
            radio2: 'border'
        }
    }
}`,
      code4: `<ct-row>
    <ct-radio v-model="radio1" label="large">Large</ct-radio>
    <ct-radio v-model="radio1" label="medium">Default</ct-radio>
    <ct-radio v-model="radio1" label="small">Small</ct-radio>
</ct-row>
<ct-descriptions  direction="vertical" title="User info" column="3">
    <ct-descriptions-item label="Username">ephemera</ct-descriptions-item>
    <ct-descriptions-item label="Age">20</ct-descriptions-item>
    <ct-descriptions-item label="Gender">male</ct-descriptions-item>
    <ct-descriptions-item label="School">Scut</ct-descriptions-item>
    <ct-descriptions-item label="Profession">computer</ct-descriptions-item>
    <ct-descriptions-item label="Hobby">Movies</ct-descriptions-item>
    <ct-descriptions-item label="Telephone">18888888888</ct-descriptions-item>
    <ct-descriptions-item label="Address">No.1188, Xiaoguwei Avenue, Xiaoguwei District, Guangzhou, Guangdong Province</ct-descriptions-item>
    <ct-descriptions-item label="Self-descriptions" :span="1">Pursue my inner peace!</ct-descriptions-item>
</ct-descriptions>
export default{
    data(){
        return{
            radio3: 'medium'
        }
    }
}
`,
      info: {
        name: "ephemera",
        age: 20,
        sex: "male",
        school: "Scut",
        major: "computer",
        address:
            "No.1188, Xiaoguwei Avenue, Xiaoguwei District, Guangzhou, Guangdong Province",
        hobby: "Movies",
        phone: 18888888888,
        intro: "Pursue my inner peace!",
      },
      radio1: "medium",
      radio2: "border",
      radio3: "medium",
      parameter: {
        title: ["参数", "说明", "类型", "可选值", "默认值"],
        contents: [
          ["borderless", "是否不带边框", "Boolean", "true/false", "false"],
          ["column", "列数", "Number", "", "3"],
          [
            "direction",
            "排列的方向",
            "String",
            "vertical/horizontal",
            "horizontal",
          ],
          [
            "size",
            "列表的尺寸",
            "String",
            "large/default/small",
            "default(medium)",
          ],
          ["title", "标题文本，显示在左上方", "String", "", ""],
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
