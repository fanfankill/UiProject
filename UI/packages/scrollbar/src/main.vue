<template>
  <div
    ref="ctscrollbar"
    class="ct-scrollbar"
    :style="[{ height: height + 'px' }, { width: width + 'px' }]"
  >
    <div ref="scrollblock" class="ct-srcollbar-block"
    :style="{backgroundColor:backcolor}">
      <div ref="scrollcontain" 
      :style="{color:fontcolor}"
      class="ct-srcollbar-contain">
        <slot></slot>
      </div>
    </div>

    <div 
    ref="bar" 
    class="ct-scrollbar-bar ct-scrollbar-togeter"
    :style="[
     /**控制自定义样式 */
    barstyle?barstyle:{
       width: '10px',
    },
   isenter
          ? ''
          : {
              opacity: '0',
            },
    ]"></div>

    <div
      :class="['ct-scrollbar-thumb ct-scrollbar-togeter',{'ct-scrollbar-thumb-dark':dark}]"
      ref="thumb"
      :style="[
        /**控制自定义样式 */
        thumbstlye? thumbstlye: 
            {
              width: '10px',
              height: '40px',
              
            },
        /**控制enter后出现的样式 */
        isenter
          ? ''
          : {
              opacity: '0',
            },
        /**动态top */
        {
          top: thumbtop + 'px',
        },
      ]"
    ></div>
  </div>
</template>

<script>
export default {
  name: "CtScrollbar",
  props: {
    height: {
      type: Number,
      default: 80,
    },
    width: {
      type: Number,
      default: 400,
    },
    dark:{
      type:Boolean,
      default:false
    },   
    thumbstlye:{
      type:Object,
    },

     barstyle:{
      type:Object,
    },
    delay:{
      type:Number,
      default:0
    },
    visible:{
      type:Boolean,
      default:false
    }
  },

  data() {
    return {
      myenter: false,
      thumbtop: 0,
      timer:'',
      clearemitter:true
    };
  },
  watch: {
  
  },
  computed:{
    backcolor(){
      return this.dark?'#000':'#fff'
    },
    fontcolor(){
       return !this.dark?'#000':'#fff'
    },

    isenter(){
      return this.myenter||this.visible
    }
  },

  mounted() {
    this.handleenter();
    this.handlebar();
    this.thumbdraw();
    console.log(this.$refs.scrollcontain.scrollTop=200);
  },

  methods: {
    handleenter() {
      this.$refs.ctscrollbar.addEventListener("mouseenter", () => {
        clearTimeout(this.timer)
          this.myenter=true
      });

      this.$refs.ctscrollbar.addEventListener("mouseleave", () => {
     
          if(this.timer){ 
            clearTimeout(this.timer)
          }
          this.timer=setTimeout(()=>{
         
          this.myenter = false;
          clearTimeout(this.timer)
        },this.delay)
     
      });
      //滚动区域的监听
      this.$refs.scrollblock.addEventListener("scroll", () => {
        this.thumbtop = this.computedthumbheight();
      });
    },
    /**滚动bar的监听事件 */
    handlebar() {
      this.$refs.bar.addEventListener("mousedown", (e) => {
        this.computedclickheight(e.offsetY);
      });
    },
    /**拖拽 */
    thumbdraw() {
      this.$refs.bar.addEventListener("mousedown", () => {
        this.clearemitter=false
        this.$refs.bar.addEventListener("mousemove", this.handledraw);
      });

      document.body.addEventListener("mouseup", () => {
         if(!this.clearemitter)
        {
          this.$refs.bar.removeEventListener("mousemove", this.handledraw);
          this.clearemitter=true
        }
      });
    
    },
    /**拖拽方法 */
    handledraw(e){

      this.computeddrawheight(e.offsetY)
    },
    /**拖拽高度计算 */
    computeddrawheight(offsetY){
      
        this.computedclickheight(offsetY)
    },

    /**滚动的计算 */
    computedthumbheight() {
      const blockheight = this.$refs.scrollblock.offsetHeight;
      const scrollheigh = this.$refs.scrollblock.scrollTop;
      const totalheight = this.$refs.scrollcontain.offsetHeight;
      const thumbheight = this.$refs.thumb.offsetHeight;
      // console.log(blockheight, scrollheigh, totalheight, thumbheight);
      /**整个的高度就应该是盒子高度减去滚动条高度 *滚动的百分比 */
      return (
        (blockheight - thumbheight) *
        (scrollheigh / (totalheight - blockheight))
      );
    },
    /** 点击区域的计算*/
    computedclickheight(offsety) {
      /**对应内容滚动top也应该改变  也会触发scroll事件*/
      this.$refs.scrollblock.scrollTop =(offsety / this.$refs.bar.offsetHeight)*(this.$refs.scrollcontain.offsetHeight-this.$refs.scrollblock.offsetHeight);
    },
    
  },
};
</script>

<style>
.ct-scrollbar {
  position: relative;
  transition: all .3s;
  -webkit-tap-highlight-color: transparent;
}

.ct-srcollbar-block {
  overflow: auto;
  width: 100%;
  height: 100%;

  scrollbar-width: none; /**firefox */
  -ms-overflow-style: none; /**IE */
}
.ct-srcollbar-block::-webkit-scrollbar {
  display: none;
}

.ct-srcollbar-contain {
  position: relative;
  transition: all .5s;
}

.ct-scrollbar-bar {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
  z-index: 1990;
    transition: opacity 0.3s;
}
.ct-scrollbar-togeter {
  width: 20px;
}
.ct-scrollbar-thumb {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  height: 50px;
  background: #000;
  opacity: 0.2;
  width: 10px;
  cursor: pointer;
  transition: all 0.1s;
  transition: opacity 0.3s;
}
.ct-scrollbar-thumb-dark{
  background: #fff;
}
.ct-scrollbar-thumb:active {
  background: #000;
  opacity: 0.5;
}
.ct-scrollbar-thumb:hover {
  color: gold;
}
</style>