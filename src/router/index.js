import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

//路由引入
const mainView = () => import("../views/main.vue");
const styleView = () => import("../views/style.vue");

const routes = [
  {
    path: "/",
    component: mainView,
  },
  {
    path: "/style",
    component: styleView,
  },
];

//默认hash
const router = new VueRouter({
  routes,
});

export default router;
