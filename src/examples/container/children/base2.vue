<template>
  <div>
       <showcom
    title="不同布局"
    subtitle="页面搭建"
    ctname="滚动区域"
    :codes="mycode"
    >
 <template v-slot:showarea>
  

<ct-container>
  <ct-header>Header</ct-header>
  <ct-container>
    <ct-aside width="200px">Aside</ct-aside>
    <ct-container>
      <ct-main>Main</ct-main>
      <ct-footer>Footer</ct-footer>
    </ct-container>
  </ct-container>
</ct-container>

<ct-container>
  <ct-aside width="200px">Aside</ct-aside>
  <ct-container>
    <ct-header>Header</ct-header>
    <ct-main>Main</ct-main>
  </ct-container>
</ct-container>

<ct-container>
  <ct-aside width="200px">Aside</ct-aside>
  <ct-container>
    <ct-header>Header</ct-header>
    <ct-main>Main</ct-main>
    <ct-footer>Footer</ct-footer>
  </ct-container>
</ct-container>
 </template>

  <template v-slot:desc>
    <div>
        通过不同的组合方式来搭建页面
       
  </div>
 </template>
   
    </showcom>
    

  </div>
</template>

<script>
import showcom from '../../../components/showcomponent'
export default {
    components:{
        showcom
    },
    data() {
        return {
            mycode:`<ct-container>
  <ct-header>Header</ct-header>
  <ct-container>
    <ct-aside width="200px">Aside</ct-aside>
    <ct-container>
      <ct-main>Main</ct-main>
      <ct-footer>Footer</ct-footer>
    </ct-container>
  </ct-container>
</ct-container>

<ct-container>
  <ct-aside width="200px">Aside</ct-aside>
  <ct-container>
    <ct-header>Header</ct-header>
    <ct-main>Main</ct-main>
  </ct-container>
</ct-container>

<ct-container>
  <ct-aside width="200px">Aside</ct-aside>
  <ct-container>
    <ct-header>Header</ct-header>
    <ct-main>Main</ct-main>
    <ct-footer>Footer</ct-footer>
  </ct-container>
</ct-container>


<style>
  .ct-header, .ct-footer {

    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .ct-aside {
    
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .ct-main {
   
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .ct-container {
    margin-bottom: 40px;
  }
  
  .ct-container:nth-child(5) .ct-aside,
  .ct-container:nth-child(6) .ct-aside {
    line-height: 260px;
  }
  
  .ct-container:nth-child(7) .ct-aside {
    line-height: 320px;
  }
</style>`
        }
    },
}
</script>

<style>
  .ct-header, .ct-footer {

    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .ct-aside {
    
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .ct-main {
   
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .ct-container {
    margin-bottom: 40px;
  }
  
  .ct-container:nth-child(5) .ct-aside,
  .ct-container:nth-child(6) .ct-aside {
    line-height: 260px;
  }
  
  .ct-container:nth-child(7) .ct-aside {
    line-height: 320px;
  }
</style>