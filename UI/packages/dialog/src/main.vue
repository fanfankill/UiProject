<template>
  <div v-show="visible" class="ct-dialog__wrapper">
    <div
      role="dialog"
      :key="key"
      aria-modal="true"
      :aria-label="title || 'dialog'"
      :class="[
        'ct-dialog',
        { 'is-fullscreen': fullscreen },
        customClass,
      ]"
      ref="dialog"
      :style="style"
    >
      <div :class="['ct-dialog__header', {'ct-dialog--center': center}]">
        <slot name="title">
          <span class="ct-dialog__title">{{ title }}</span>
        </slot>
        <button
          type="button"
          class="ct-dialog__headerbtn"
          aria-label="Close"
          v-if="showClose"
          @click="handleClose"
        >
          <i class="iconfont icon-closedialog"></i>
        </button>
      </div>
      <div class="ct-dialog__body" v-if="rendered"><slot></slot></div>
      <div :class="['ct-dialog__footer', {'ct-dialog--center': center}]" v-if="$slots.footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CtDialog",
  props: {
    title: {
      type: String,
      default: "",
    },
    visible: {
      type: Boolean,
      default: false,
    },
    rendered: {
      type: Boolean,
      default: true,
    },
    modal: {
      type: Boolean,
      default: true,
    },
    modalAppendToBody: {
      type: Boolean,
      default: true,
    },
    appendToBody: {
      type: Boolean,
      default: false,
    },
    lockScroll: {
      type: Boolean,
      default: true,
    },
    closeOnClickModal: {
      type: Boolean,
      default: true,
    },
    closeOnPressEscape: {
      type: Boolean,
      default: true,
    },
    showClose: {
      type: Boolean,
      default: true,
    },
    width: String,
    fullscreen: Boolean,
    customClass: {
      type: String,
      default: "",
    },
    top: {
      type: String,
      default: "15vh",
    },
    beforeClose: Function,
    center: {
      type: Boolean,
      default: false,
    },
    destroyOnClose: Boolean,
  },
  data() {
    return {
      closed: false,
      key: 0,
    };
  },
  watch: {
    visible(val) {
      if (val) {
        this.closed = false;
        this.$emit("open");
        this.$el.addEventListener("scroll", this.updatePopper);
        this.$nextTick(() => {
          this.$refs.dialog.scrollTop = 0;
        });
        if (this.appendToBody) {
          document.body.appendChild(this.$el);
        }
      } else {
        this.$el.removeEventListener("scroll", this.updatePopper);
        if (!this.closed) this.$emit("close");
        if (this.destroyOnClose) {
          this.$nextTick(() => {
            this.key++;
          });
        }
      }
    },
  },
  computed: {
    style() {
      let style = {};
      if (!this.fullscreen) {
        style.marginTop = this.top;
        if (this.width) {
          style.width = this.width;
        }
      }
      return style;
    },
  },
  methods: {
    getMigratingConfig() {
      return {
        props: {
          size: "size is removed.",
        },
      };
    },
    handleWrapperClick() {
      if (!this.closeOnClickModal) return;
      this.handleClose();
    },
    handleClose() {
      if (typeof this.beforeClose === "function") {
        this.beforeClose(this.hide);
      } else {
        this.hide();
      }
    },
    hide(cancel) {
      if (cancel !== false) {
        this.$emit("update:visible", false);
        this.$emit("close");
        this.closed = true;
      }
    },
    updatePopper() {
      this.broadcast("ElSelectDropdown", "updatePopper");
      this.broadcast("ElDropdownMenu", "updatePopper");
    },
    afterEnter() {
      this.$emit("opened");
    },
    afterLeave() {
      this.$emit("closed");
    },
  },
  mounted() {
    if (this.visible) {
      this.rendered = true;
      this.open();
      if (this.appendToBody) {
        document.body.appendChild(this.$el);
      }
    }
  },
  destroyed() {
    if (this.appendToBody && this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }
  },
};
</script>
<style lang="less" scoped>
.ct-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  background-color: rgba(8,8,8,0.35);
  z-index: 999;
}
.ct-dialog {
  position: relative;
  margin: 0 auto 50px;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 30%);
  box-sizing: border-box;
  width: 50%;
}
.ct-dialog__header {
  padding: 20px 20px 10px;
  .ct-dialog__title {
    line-height: 24px;
    font-size: 18px;
    color: #303133;
  }
  .ct-dialog__headerbtn {
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 0;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 16px;
  }
}
.ct-dialog__body {
  padding: 30px 20px;
  color: #606266;
  font-size: 14px;
  word-break: break-all;
}
.ct-dialog__footer {
  padding: 10px 20px 20px;
  text-align: right;
  box-sizing: border-box;
}
.ct-dialog--center {
    text-align: center;
}
</style>