<template>
  <div>
    <h1>Steps 步骤条</h1>
    <p>以不同形式展示步骤的进行</p>
    <Showcomponent title="基础用法" subtitle="简单的步骤条" :codes="code1">
      <template v-slot:desc>
        <div>控制<code>active</code>来切换步骤</div>
      </template>
      <template v-slot:showarea>
        <div>
          <ct-steps :active="activeIndex">
            <ct-step title="步骤 1"></ct-step>
            <ct-step title="步骤 2"></ct-step>
            <ct-step title="步骤 3"></ct-step>
          </ct-steps>
          <ct-button @click="next">下一步</ct-button>
        </div>
      </template>
    </Showcomponent>

    <Showcomponent
      title="选择颜色的步骤条"
      subtitle="可以传入状态色"
      :codes="code2"
    >
      <template v-slot:desc>
        <div>通过<code>space</code>控制宽度</div>
        <div>通过<code>finishStatus</code>控制完成时的状态色</div>
        <div>通过<code>processStatus</code>控制进行时的状态色</div>
      </template>
      <template v-slot:showarea>
        <div>
          <ct-steps
            :active="activeIndex"
            space="199"
            finishStatus="error"
            processStatus="warning"
          >
            <ct-step title="步骤 0"></ct-step>
            <ct-step title="步骤 1"></ct-step>
            <ct-step title="步骤 2"></ct-step>
          </ct-steps>
          <ct-button @click="next">下一步</ct-button>
        </div>
      </template>
    </Showcomponent>

    <Showcomponent
      title="可描述的步骤条"
      subtitle="在每一步中可有说明"
      :codes="code3"
    >
      <template v-slot:desc>
        <div>通过<code>description</code>来填入具体的步骤信息</div>
      </template>
      <template v-slot:showarea>
        <div>
          <ct-steps :active="activeIndex" space="200" finishStatus="error">
            <ct-step title="步骤 1" description="注册你的个人账号"></ct-step>
            <ct-step title="步骤 2" description="填写你的个人信息"></ct-step>
            <ct-step title="步骤 3" description="撰写并发表文章"></ct-step>
          </ct-steps>
          <ct-button @click="next">下一步</ct-button>
        </div>
      </template>
    </Showcomponent>

    <Showcomponent title="垂直步骤条" :codes="code4">
      <template v-slot:desc>
        <div>通过<code>direction</code>来控制进度条展示的行或列</div>
      </template>
      <template v-slot:showarea>
        <div style="height: 300px">
          <ct-steps
            :active="activeIndex"
            space="200"
            finishStatus="error"
            direction="column"
          >
            <ct-step title="步骤 1" description="注册你的个人账号"></ct-step>
            <ct-step title="步骤 2" description="填写你的个人信息"></ct-step>
            <ct-step title="步骤 3" description="撰写并发表文章"></ct-step>
          </ct-steps>
        </div>
      </template>
    </Showcomponent>

    <Showcomponent
      title="带图标的进度条"
      subtitle="按类名传入图标"
      :codes="code5"
    >
      <template v-slot:desc>
        <div>通过<code>icon</code>来传入显示的图标类</div>
      </template>
      <template v-slot:showarea>
        <div>
          <ct-steps :active="activeIndex" space="199" finishStatus="error">
            <ct-step
              title="步骤 1"
              description="注册你的个人账号"
              icon="icon-bianji"
            ></ct-step>
            <ct-step
              title="步骤 2"
              description="填写你的个人信息"
              icon="icon-yunshangchuan"
            ></ct-step>
            <ct-step
              title="步骤 3"
              description="撰写并发表文章"
              icon="icon-tupian"
            ></ct-step>
          </ct-steps>
          <ct-button @click="next">下一步</ct-button>
        </div>
      </template>
    </Showcomponent>

    <h1 style="margin: 50px 0 30px 0">Attribution</h1>

    <h2>CtSteps</h2>
    <Showparameter :parameter="stepsParams"></Showparameter>

    <h2 style="margin: 50px 0 0 0">CtStep</h2>
    <Showparameter :parameter="stepParams"></Showparameter>
  </div>
</template>

<script>
import Showcomponent from "../../components/showcomponent/index.vue";
import Showparameter from "../../components/showparameter/index.vue";
export default {
  name: "steps",
  chName: "步骤条",
  data() {
    return {
      stepsParams: {
        title: ["参数", "说明", "类型", "可选值", "默认值"],
        contents: [
          ["active", "生效的步骤数", "Number", "——", "必填"],
          ["direction", "步骤条的展示方向", "String", "row/column", "row"],
          ["space", "步骤条的占用宽度", "Number", "——", "auto"],
          [
            "finishStatus",
            "步骤完成时状态色",
            "String",
            "success/process/warning/error",
            "success",
          ],
          [
            "processStatus",
            "步骤进行时状态色",
            "String",
            "success/process/warning/error",
            "process",
          ],
        ],
      },
      stepParams: {
        title: ["参数", "说明", "类型", "可选值", "默认值"],
        contents: [
          ["title", "步骤的标题", "String", "——", "——"],
          ["description", "步骤的描述", "String", "——", "——"],
          ["icon", "步骤对应的图标", "String", "导入的图标类名", "——"],
        ],
      },
      activeIndex: 0,
      code1:
        ' <ct-steps :active="activeIndex">\n\
  <ct-step title="步骤 1"></ct-step>\n\
  <ct-step title="步骤 2"></ct-step>\n\
  <ct-step title="步骤 3"></ct-step>\n\
</ct-steps>\n\
<ct-button @click="next">下一步</ct-button>',
      code2:
        '<ct-steps\n\
        :active="activeindex"\n\
        space="199"\n\
        finishstatus="error"\n\
        processstatus="warning"\n\
      >\n\
  <ct-step title="步骤 0"></ct-step>\n\
  <ct-step title="步骤 1"></ct-step>\n\
  <ct-step title="步骤 2"></ct-step>\n\
</ct-steps>\n\
<ct-button @click="next">下一步</ct-button>',
      code3:
        '<ct-steps\n\
      :active="activeIndex"\n\
      space="199"\n\
      finishStatus="error"\n\
      processStatus="warning"\n\
    >\n\
  <ct-step title="步骤 0"></ct-step>\n\
  <ct-step title="步骤 1"></ct-step>\n\
  <ct-step title="步骤 2"></ct-step>\n\
</ct-steps>\n\
<ct-button @click="next">下一步</ct-button>',
      code4:
        '<ct-steps\n\
      :active="activeIndex"\n\
      space="199"\n\
      finishStatus="error"\n\
      processStatus="warning"\n\
      direction="column"\n\
    >\n\
  <ct-step title="步骤 0"></ct-step>\n\
  <ct-step title="步骤 1"></ct-step>\n\
  <ct-step title="步骤 2"></ct-step>\n\
</ct-steps>\n\
<ct-button @click="next">下一步</ct-button>',
      code5:
        '<ct-steps :active="activeIndex" space="199" finishStatus="error">\n\
  <ct-step\n\
      title="步骤 1"\n\
      description="注册你的个人账号"\n\
      icon="icon-bianji"\n\
  ></ct-step>\n\
  <ct-step\n\
      title="步骤 2"\n\
      description="填写你的个人信息"\n\
      icon="icon-yunshangchuan"\n\
  ></ct-step>\n\
  <ct-step\n\
      title="步骤 3"\n\
      description="撰写并发表文章"\n\
      icon="icon-tupian"\n\
  ></ct-step>\n\
</ct-steps>\n\
<ct-button @click="next">下一步</ct-button>',
    };
  },
  methods: {
    next() {
      this.activeIndex = (this.activeIndex + 1) % 4;
    },
  },
  components: { Showcomponent, Showparameter },
};
</script>

<style lang="less" scoped></style>
