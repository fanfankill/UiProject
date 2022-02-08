import Vue from "vue";
import VueRouter from "vue-router";
import examples from "../examples";

Vue.use(VueRouter);

//路由引入
const blankView = () => import("../views/blank.vue");
const mainView = () => import("../views/main.vue");
const styleView = () => import("../views/style.vue");

const routes = [
  {
    path: "/",
    component: mainView,
  },
  {
    path: "/examples",
    component: blankView,
    children: examples.map((example) => {
      return {
        path: example.name,
        component: example,
      };
    }),
  },
  {
    path: "/style",
    component: styleView,
  },
];

const router = new VueRouter({
  routes,
  //页面切换滚动行为
  scrollBehavior(to, from, savedPosition) {
    console.log(from, savedPosition);
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: "smooth",
      };
    }
  },
});

export default router;
