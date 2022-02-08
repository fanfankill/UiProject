<template>
  <div>
    <Showcomponent title="基础用法" subtitle="简单的步骤条" :codes="code1">
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
  </div>
</template>

<script>
import Showcomponent from "../../components/showcomponent/index.vue";
export default {
  name: "steps",
  chName: "步骤条",
  data() {
    return {
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
  components: { Showcomponent },
};
</script>

<style lang="less" scoped></style>
