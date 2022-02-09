<template>
  <showcomponent
    title="可增删的"
    subtitle="标签页可以动态增加或删除"
    :attributes="['value, label, name, disabled, icon, type']"
    ctname="Tabs"
    :codes="code5"
  >
    <template #showarea>
      <h4>增删标签页</h4>
      <ct-tabs changable type="card" :tabsList="tabsList">
        <ct-tab-pane
          v-for="item in tabsList"
          :key="item.name"
          :label="item.label"
          :name="item.name"
          >{{ item.content }}</ct-tab-pane
        >
      </ct-tabs>
    </template>
    <template #desc>
      <div>
        <code>changable</code>
        属性用于标记该标签页是可增删的，同时在使用的时候提供相应的<code>tabsList</code>数据，并以props形式传入。
      </div>
    </template>
  </showcomponent>
</template>

<script>
import showcomponent from "../../../components/showcomponent";

export default {
  components: {
    showcomponent,
  },
  data() {
    return {
      tabsList: [
        {
          label: "标签一",
          name: "1",
          content: "标签一的内容",
        },
        {
          label: "标签二",
          name: "2",
          content: "标签二的内容",
        },
        {
          label: "标签三",
          name: "3",
          content: "标签三的内容",
        },
      ],
      code5:
        ` <template>
    <ct-tabs changable type="card" :tabsList="tabsList">
      <ct-tab-pane 
          v-for="item in tabsList"
          :key="item.name"
          :label="item.label"
          :name="item.name"
      >{{item.content}}</ct-tab-pane>
    </ct-tabs>
  </template> 

  <script>
    export default {
      data() {
        return {
          tabsList: [
            {
              label: '标签一',
              name: '1',
              content: '标签一的内容'
            }, {
              label: '标签二',
              name: '2',
              content: '标签二的内容'
            }, {
              label: '标签三',
              name: '3',
              content: '标签三的内容'
            }
          ],
        };
      }
    };
  <` +
        `/` +
        `script>
`,
    };
  },
};
</script>

<style lang="less" scoped>
h4 {
  color: #8492a6;
  text-indent: 1rem;
  margin-bottom: 2rem;
}
</style>
