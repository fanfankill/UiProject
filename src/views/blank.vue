<template>
  <div>
    <div class="showsmlicon">
      <span class="iconfont icon-youceanniushouqi"></span>
    </div>
    <div class="container is-vertal">
      <div class="head">
        <logo></logo>
        <top></top>
      </div>
      <div class="container">
        <div class="aside">
          <asider></asider>
        </div>

        <div class="main" ref="main">
        
            <transition :name="transitionName">
          <router-view> </router-view>
          </transition>
          
          <back-top parent="main"></back-top>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import top from "../components/top";
import logo from "../components/logo";
import asider from "../components/asider";
import backTop from "./backTop.vue";

export default {
  components: {
    top,
    logo,
    asider,

    backTop
   },
   data() {
     return {
       transitionName:''
     }
   },
  watch:{
       $route(to,from){
      if(to.meta.index>from.meta.index){
        console.log(1);
        this.transitionName = 'slide-left';
      }else{
        this.transitionName = 'slide-right';
      }
    }
  },
   computed:{
    
  }
}



</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  flex: 1;
}

.is-vertal {
  flex-direction: column;
}

.head {
  width: 100%;
  height: 80px;
  position: relative;
  z-index: 998;
  top: 0;
  background-color: #fff;
  border-bottom: solid 1px gainsboro;
}

.aside {
  overflow: auto;
  height: calc(100vh - 80px);
  width: 240px;
  border-right: solid 1px gainsboro;
}

.main {
  padding: 40px 20px 60px 40px;
  flex: 1;
  overflow: auto;
  height: calc(100vh - 80px);
}

.main::-webkit-scrollbar {
  width: 0;
}

.showsmlicon {
  display: none;
}

/**动画 */
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  
}
.slide-right-enter {
  opacity: 0;
}
.slide-right-leave-active {
  opacity: 0;
}
.slide-left-enter {
  opacity: 0;
}
.slide-left-leave-active {
  opacity: 0;;
}


@media screen and (max-width:900px) {
  .aside {
    width: 100%;
    margin-bottom: 20px;
  }
  /* .showsmlicon {
    display: block;
    position: fixed;
    top: 90px;
    font-weight: 800;
    font-size: 2rem;
    text-align: center;
    width: 4rem;
    transform: rotate(180deg);
    background-color: white;
    box-shadow: 2px 0 8px #00000026;
  } */
  .container{
    flex-direction: column;
  }
}
</style>
