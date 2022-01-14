import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


//路由引入
const mainview =()=> import ('../view/main.vue')


const routes=[
    {
        path:'/MainUi',
        component:mainview,

    }

]




//默认hash
const router=new VueRouter({
    routes
})

export default router