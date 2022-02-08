<template>
  <div
    class="ct-chatbox"
    :class="sent ? 'ct-chatbox__left' : 'ct-chatbox__right'"
    :style="{ '--bg-color': bgColorCopy }"
  >
    <div class="ct-chatbox__outer">
      <div class="ct-chatbox__avatar" v-if="avatar">
        <img :src="avatar" alt="" />
      </div>
      <div class="ct-chatbox__inner">
        <div class="ct-chatbox__name" v-if="name">{{ name }}</div>
        <div
          class="ct-chatbox__main"
          :class="index === 0 ? 'ct-chatbox__first' : ''"
          v-for="(msg, index) in text"
          :key="index"
        >
          <div class="ct-chatbox__msg">{{ msg }}</div>
          <div
            class="ct-chatbox__stamp"
            v-if="stamp && index + 1 === text.length"
          >
            {{ stamp }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CtChatbox",
  props: {
    text: {
      type: Array,
    },
    sent: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: undefined,
    },
    avatar: {
      type: String,
      default: undefined,
    },
    stamp: {
      type: String,
      default: undefined,
    },
    bgColor: {
      type: String,
      default: undefined,
    },
  },
  data() {
    return {
      bgColorCopy: "",
    };
  },
  mounted() {
    this.bgColorCopy = this.bgColor;
    if (!this.bgColorCopy) {
      this.bgColorCopy = this.sent ? "#a8ddfa" : "#dde3e7";
    }
  },
};
</script>

<style lang="less" scoped>
@import url(../../../theme/chatbox.less);
</style>
