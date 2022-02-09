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
          <ct-button @click="open">打开消息提示</ct-button>
        </div>
      </template>
      <template v-slot:desc>
        使用<code>size</code>属性来定义rate的大小。
      </template>
    </showcomponent>
  </div>
</template>

<script>
import showcomponent from "@/components/showcomponent/index";

export default {
  name: "message",
  chName: "消息提示",
  components: {
    showcomponent,
  },
  methods: {
    open() {
      this.$message.info("sss");
    },
  },
  data() {
    return {
      code1: ``,
    };
  },
};
</script>

<style scoped></style>
