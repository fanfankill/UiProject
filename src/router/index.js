import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


//路由引入
const mainview =()=> import ('../view/main.vue')


const routes=[
    { 
        path: '*',
        redirect: '/MainUi' 
     },
     
    {
        path:'/MainUi',
        component:mainview,

    }

]




//默认hash
const router=new VueRouter({
    routes,
    //页面切换滚动行为
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
          } else {
            return { x: 0, y: 0 ,
            /**behavior: 'smooth', 平滑滚动*/}
          }
      }
})

export default router