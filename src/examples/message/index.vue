<template>
  <div>
    <h1>Message 消息提示</h1>
    <p>
      常用于主动操作后的反馈提示。与 Notification
      的区别是后者更多用于系统级通知的被动提醒。
    </p>
    <showcomponent
      title="基础用法"
      subtitle="从顶部出现，3 秒后自动消失。"
      :attributes="['size']"
      ctname="Message"
      :codes="code1"
    >
      <template v-slot:showarea>
        <div class="block_show_div">
          <ct-button @click="open" :plain="true">打开消息提示</ct-button>
        </div>
      </template>
      <template v-slot:desc>
        Message 在配置上与 Notification 非常类似，可以结合 Notification
        的文档理解它们。Create 注册了一个
        <code>$message</code> 方法用于调用，Message
        可以接收一个字符串作为参数，它会被显示为正文内容。
      </template>
    </showcomponent>

    <showcomponent
      title="不同状态"
      subtitle="用来显示「成功、警告、消息、错误」类的操作反馈。"
      ctname="Message"
      :codes="code2"
    >
      <template v-slot:showarea>
        <div class="block_show_div">
          <ct-button :plain="true" @click="open2">成功</ct-button>
          <ct-button :plain="true" @click="open3">警告</ct-button>
          <ct-button :plain="true" @click="open1">消息</ct-button>
          <ct-button :plain="true" @click="open4">错误</ct-button>
        </div>
      </template>
      <template v-slot:desc>
        Message 在配置上与 Notification 非常类似，可以结合 Notification
        的文档理解它们。Create 注册了一个
        <code>$message</code> 方法用于调用，Message
        可以接收一个字符串作为参数，它会被显示为正文内容。
      </template>
    </showcomponent>

    <h3>全局方法</h3>
    <p>
      CreateUI 为 Vue.prototype 添加了全局方法 $message。因此在 vue instance
      中可以采用本页面中的方式调用 Message。
    </p>

    <showpara
      title="Options"
      :parameter="parameter"
      style="margin-top: 150px"
    ></showpara>
  </div>
</template>

<script>
import showcomponent from "@/components/showcomponent/index";
import showpara from "@/components/showparameter/index";

export default {
  name: "message",
  chName: "消息提示",
  components: {
    showcomponent,
    showpara,
  },
  methods: {
    open() {
      this.$message.warning("这是一条消息提示");
    },
    open1() {
      this.$message("这是一条消息提示");
    },
    open2() {
      this.$message({
        message: "恭喜你，这是一条成功消息",
        type: "success",
      });
    },
    open3() {
      this.$message({
        message: "警告哦，这是一条警告消息",
        type: "warning",
      });
    },
    open4() {
      this.$message.error("错了哦，这是一条错误消息");
    },
  },
  data() {
    return {
      code1:
        `
      <template>
        <ct-button :plain="true" @click="open">打开消息提示</ct-button>
    </template>

<script>
  export default {
    methods: {
      open() {
        this.$message('这是一条消息提示');
      },
    }
  }
<` + `/script>`,
      code2:
        `
      <template>
        <ct-button :plain="true" @click="open2">成功</ct-button>
        <ct-button :plain="true" @click="open3">警告</ct-button>
        <ct-button :plain="true" @click="open1">消息</ct-button>
        <ct-button :plain="true" @click="open4">错误</ct-button>
</template>

<script>
  export default {
    methods: {
      open1() {
        this.$message('这是一条消息提示');
      },
      open2() {
        this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
      },
      open3() {
        this.$message({
          message: '警告哦，这是一条警告消息',
          type: 'warning'
        });
      },
      open4() {
        this.$message.error('错了哦，这是一条错误消息');
      }
    },

  }
<` + `/script>`,
      parameter: {
        title: ["参数", "说明", "类型", "可选值", "默认值"],
        contents: [
          ["message", "消息文字", "String", "——", "——"],
          ["type", "主题", "string", "success/warning/info/error", "info"],
        ],
      },
    };
  },
};
</script>

<style scoped>
h3 {
  margin: 55px 0 20px;
  font-size: 22px;
  color: #1f2f3d;
  font-weight: 400;
}

p {
  font-size: 14px;
  font-weight: 400;
  color: #5e6d82;
  margin: 14px 0;
}
</style>
