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

         <ct-table :title="title" :contents="contents"></ct-table>
        </div>
      </div>
    </div>

        </div>

</template>

<script>
import "../assets/basecss/layout.css";
import headul from "./page/top";
import HeadTitle from "./page/HeadTitle";
import AsideUl from "./aside/AsideUl";
import CtTable from './cttable/CtTable.vue';
export default {
  components: {
    headul,
    HeadTitle,
    AsideUl,
    CtTable
  },

  data(){
    return{
      title:['<code>ss</code>','ss','ss'],
      contents:[['aaa','bbb'],['ccc','dddsssssssssssssssss'],['ccc','文字换行文字换行文字换行文字换行文字换行文字换行']]
    }
  }

};

 


</script>

<style>
.mainrightshowdiv {
  height: 1000px;
  width: 100%;
  background-color: white;
}

.showdiv {
  height: 500px;
  text-align: center;
}
</style>




