<template>
  <div>
    <!-- 按钮部分 -->
    <div class="ct_dropdown" ref="triggerElm">
      <slot></slot>
       <!-- 隐藏菜单部分 -->
      <div class="ct_dromdown_position">
        <slot name="dropdown"></slot>
      </div>
  
    </div>

  </div>
</template>

<script>
export default {
    name:'CtDropdown',
    props:{
      trigger:{
        type:String,
        default:'hover'
      },
      HideNoShow:{
        type:Boolean,
        default:false
      }
    },
     provide(){
      return{
        dropdown:this
      }
    },
    data() {
      return {
        isshowlist:false
      }
    },
    mounted(){
      //事件处理 hover  click  
        this.initEvent()
    },
    methods:{
        //初始化事件
        initEvent(){
            const target=this.$refs.triggerElm

             if(this.trigger=='click'){

               target.addEventListener('click',(e)=>{
                 if(this.HideNoShow){
                    this.isshowlist=true
                 }
                 else{
                   this.isshowlist=!this.isshowlist
                 }
                 e.stopPropagation()
               })
               //全局监听
                window.addEventListener('click',()=>{
                   this.isshowlist=false
              })
             }
            else{
            
              target.addEventListener('mouseenter',()=>{
                    this.isshowlist=true
              })

               target.addEventListener('mouseleave',()=>{
                    this.isshowlist=false
              })
            }
            
        }
    },
}
</script>

<style lang='less'>
.ct_dropdown{
  display: inline-block;
}
.ct_dromdown_position{
  position: relative;
}
.ct_dropdown_block{
  background-color:white;
  box-shadow: 3px 3px 10px gainsboro;
}
</style>