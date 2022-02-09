<template>
  <transition name="fade">
    <div class="back-top" @click="backTop" v-show="btnFlag">
      <i></i>
    </div>
  </transition>
</template>

<script>
export default {
    props: ["parent"],
    data() {
        return {
            btnFlag: false,
            timer: null,
            scrollTop: 0,
        }
    },

    methods: {
        // 点击图片回到顶部方法，加计时器是为了过渡顺滑
        backTop() {
            const that = this
            this.timer = setInterval(() => {
                let ispeed = Math.floor(-that.scrollTop / 5)
            if(this.parent){
                   this.$parent.$refs[that.parent].scrollTop = document.body.scrollTop = that.scrollTop + ispeed
                }else{
            document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
                }
                if (that.scrollTop === 0) {
                    clearInterval(this.timer)
                }
            }, 16)
        },

        // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
        scrollToTop() {
            const that = this
            let scrollTop = "";
            if(this.parent){
              scrollTop = this.$parent.$refs[that.parent].scrollTop 
            } else {
              scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
           }
            
            that.scrollTop = scrollTop
            if (that.scrollTop > 500) {
                that.btnFlag = true
            } else {
                that.btnFlag = false
            }
        }
    },
    // vue的两个生命钩子，这里不多解释。
    // window对象，所有浏览器都支持window对象。它表示浏览器窗口，监听滚动事件
    mounted() {
        window.addEventListener('scroll', this.scrollToTop, true)
    },
    destroyed() {
        window.removeEventListener('scroll', this.scrollToTop,true)
    },
}
</script>

<style lang="less" scoped>
.back-top {
  width: 2.7rem;
  height: 2.7rem;
  z-index: 9999;
  position: absolute;
  bottom: 110px;
  right: 60px;
  border-radius: 50%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, .5);
  opacity: .5;
  background-color: #fff;
  transition: all .3s;
  text-align: center;
  &:hover {
    background-color: #d5dbe7;
    opacity: 1;
  }

  &::before {
    content: '';
  }

  i {
    display: inline-block;
    color: #409eff;
    border-bottom: .6rem solid;
    border-top: .6rem solid transparent;
    border-right: .6rem solid transparent;
    border-left: .6rem solid transparent;
    transform: translateY(30%);
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

}
</style>

