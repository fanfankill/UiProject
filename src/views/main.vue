<template>
  <div class="mycontainer">
    <!-- <showdiv
    title="容器"
    derection="小容器组件"
    detailcode="<code><h3>hh</h3></code>">
          <ct-container>
        <ct-aside></ct-aside>
      <ct-container>
          <ct-header></ct-header>
        <ct-main></ct-main>
        <ct-footer></ct-footer>
      </ct-container>
      </ct-container>
    </showdiv> -->
    <div class="box">
      <div class="row">
        <ct-skeleton  type="circle" color="green" size="100px" animated> 圆</ct-skeleton>
        <div style="width:200px">
          <ct-skeleton>默认</ct-skeleton>
          <ct-skeleton  type="text" color="pink">文本 </ct-skeleton>
        </div>
      </div>
       <ct-skeleton  type="rect" color="skyblue" animated>矩形 </ct-skeleton>
      <div class="column">
        <ct-skeleton  type="badge" color="red"> 标记</ct-skeleton>
        <ct-skeleton  type="btn" color="skyblue"> 按钮</ct-skeleton>
        <ct-skeleton  type="chip" color="yellow">Chip</ct-skeleton>
      </div>
     
    </div>
     
     <!-- <ct-badge  :value="12" type="success"></ct-badge> -->
  </div>
</template>

<script>
// import showdiv from '../components/showcompont'
export default {
    name:'showcompont',
    // components:{
    //   showdiv
    // }
  
}

</script>

<style scoped lang="less">
// .container {
//   // border: 2px solid @vice-color1;
//   // background-color: @blue-bg-color1;
// }
.box{
  width: 300px;
  height: 400px;
  padding: 20px;
  border: 1px solid #ccc;
}
.showdiv{
  height: 400px;
  width: 80%;
}
.row{
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.column{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

}
</style>
