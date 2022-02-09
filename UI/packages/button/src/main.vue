
<template>
  <!--
  封装一个element-ui风格的按钮
  组件通讯，组件插槽，props校验
  slot插槽可以直接输入文本
  动态控制样式，通过绑定类名的方式,plain类型是布尔值，因此使用对象的形式控制样式
  使用v-on指令（@）监听DOM事件，动态绑定
  -->
  <button class="ct-button" v-bind:class="[`ct-button--${type}`,`ct-button--${size}`,
  {'is-plain':plain},
  {'is-round':round},
  {'is-circle':circle},
  {'is-disabled':disabled},
  {'is-loading':loading}]"
  @click="handleClick"
          :disabled="disabled || loading"
          :loading="loading"
  >
    <i class="ct-icon-loading" v-if="loading"></i>
    <i  v-if="icon&&!loading" :class="`iconfont icon-${icon} `"></i>
    <!--如果没有传入文本插槽，则不显示span内容-->
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: "CtButton",
  //利用provide和inject可以实现父子或父孙组件值的传递，数据追踪较为困难
  inject:{
    ctForm:{
      default:'',
    },
    ctFormItem:{
      default:'',
    }
  },
  //对props进行校验，值接收string类型的type的值
  props:{
    size:{
      type:String,
      default:'14px',
    },
    type:{
      type:String,
      //设置默认值：如果不传值，那么使用default
      default:'default',
    },
    plain:{
      type:Boolean,
      default:false
    },
    round:{
      type:Boolean,
      default:false,
    },
    circle:{
      type:Boolean,
      default:false,
    },
    loading:{
      type:Boolean,
      default:false,
    },
    disabled:{
      type:Boolean,
      default:false,
    },
    icon:{
      type:String,
      default:"",
    },
    autofocus:{
      type:Boolean,
      default:false,
    }
  },
  created() {
    console.log(this.type);
  },
  computed:{
    _ctFormItemSize(){
      return (this.ctFormItem||{}).ctFornItemSize;
    },
    buttonSize() {
      return this.size || this._ctFormItemSize || (this.$ELEMENT || {}).size;
    },
    buttonDisabled() {
      return this.disabled || (this.ctForm || {}).disabled;
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  }
}
</script>

<style lang="less">
  @import "./UI/theme/button.less";
</style>