import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

//路由引入
const mainView = () => import("../views/main.vue");
const styleView = () => import("../views/style.vue");
const Button = () => import("../components/button/index")
const Link = () => import("../components/link/index")
//从example引入展示页面
const dropdown = () => import("../example/dropdown_example/main.vue")
const drawer = () => import("../example/drawer_example/main.vue")

const routes = [
  {
    path: "/components",
    component: mainView,
    children:[
      {
        path: "container",
        component: Button
      },
      {
        path: "badge",
        component: Link
      },{
        path:'dropdown',
        component:dropdown
      },{
        path:'drawer',
        component:drawer
      }
    ]
  },
  {
    path: "/style",
    component: styleView,
  },

];

//默认hash

const router=new VueRouter({
    routes,
    //页面切换滚动行为
    scrollBehavior (to, from, savedPosition) {
      console.log(from,savedPosition);
      if (to.hash) {
        return {
          selector: to.hash,
          behavior: 'smooth',
        }
      }
    }
})




export default router;
