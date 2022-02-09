<template>
  <div id="app">
       <keep-alive>
         <router-view :key="key"> </router-view>
      </keep-alive>   
  </div>
</template>

<script>
export default {
  name: "App",
  data(){
    return {

    }
  },
  computed:{
    key(){
      return this.$route.path + Math.random();
    }
  }

};
</script>
