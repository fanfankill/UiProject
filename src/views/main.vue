<template>
  <div class="mycontainer">

    <router-view></router-view>
    <!-- <ct-button @click="ys">右上/success</ct-button>
    <ct-button @click="zs">左上/error</ct-button>
    <ct-button @click="hh">左下/info</ct-button>
     <ct-button @click="xx">右下/warning</ct-button>
     <ct-button @click="pian">偏移</ct-button>
     <ct-button @click="tag">使用html片段</ct-button> -->
  </div>
</template>

<script>
// import showdiv from '../components/showcompont'
export default {
    name:'showcompont',
    // components:{
    //   showdiv
    // }
    methods:{
      // hh(){
      //  this.$notify({
      //    content: '你xxWd顶顶顶顶的娃娃打我的的瓦顶顶顶顶顶我的你xxWd顶顶顶顶的娃娃打我的的瓦顶顶顶顶顶我的你xxWd顶顶顶顶的娃娃打我的的瓦顶顶顶顶顶我的你xxWd顶顶顶顶的娃娃打我的的瓦顶顶顶顶顶我的',
      //    title:'提示',
      //    type:'info',
      //    position: 'bottom-left',
      //    showClose:false,
      //    duration:1,

        
      // })
      // },
      // xx(){
      //    this.$notify({
      //    content: '<h1>发发发</h1>瓦顶顶顶顶顶我的',
      //    title:'设置标题',
      //    position: 'bottom-right',
      //    showClose:false,
      //    duration:1,
      //    type:'warning'
      //    })
      // },
      // ys(){
      //   this.$notify({
      //    content: '我在右上角',
      //    title:'设置标题',
      //    position: 'top-right',
      //    duration:1,
      //    type:'success',
      //    })
      // },
      // zs(){
      //   this.$notify({
      //    content: '我在左上角',
      //    title:'设置标题',
      //    position: 'top-left',
      //    duration:1,
      //    type:'error'
      //    })
      // },
      // pian(){
      //    this.$notify({
      //    content: '我向上偏移了100px',
      //    title:'偏移的消息',
      //    position: 'bottom-left',
      //    showClose:false,
      //    offset: 100,
      //    customClass:'.nxx'
      // })
      // },
      // tag(){
      //   this.$notify({
      //    content: '<h2>h2标题</h2>这是<em>html</em>片段',
      //    title:'插入HTML',
      //    position: 'bottom-left',
      //    dangerouslyUseHTMLString:true,
      //    duration:2000,
         
      // })
      // }
    }
}
</script>
<style scoped lang="less">
.nxx{
  background: #CCC;
}
// .mycontainer {
//   border: 2px solid @vice-color1;
//   background-color: @blue-bg-color1;
//   padding-bottom: 80px;
// }

</style>

