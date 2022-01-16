<template>
  <div>
      <div class="container is-vertal">
         <div class="head">
           <head-title></head-title>
           <headul></headul>
         </div>
         <div class="container">
            <div class="aside">
              <aside-ul></aside-ul>
            </div>
        <div class="main">
          <ct-container></ct-container>
          <ct-footer></ct-footer>
          <ct-main></ct-main>
          <ct-aside></ct-aside>
        </div>
         </div>
      
      </div>


  </div>
</template>

<script>
import '../assets/basecss/layout.css'
import headul from './page/top'
import HeadTitle from './page/HeadTitle'
import AsideUl from './aside/AsideUl'
export default {
  components:{
    headul,
    HeadTitle,
    AsideUl
  }
}
</script>

<style>
.mainrightshowdiv{
  height: 1000px;
  width: 100%;
  background-color: white;
}


</style>