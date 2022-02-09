import Vue from "vue";
import VueRouter from "vue-router";
// import examples from "../examples";




Vue.use(VueRouter);

//路由引入
const blankView = () => import("../views/blank.vue");
const mainView = () => import("../views/main.vue");
const styleView = () => import("../views/style.vue");

//组件展示路由引入
const avatar = () => import("../examples/avatar");
const button = () => import("../examples/button");
const chatbox = () => import("../examples/chatbox");
const container = () => import("../examples/container");
const descriptions = () => import("../examples/descriptions");
const dialog = () => import("../examples/dialog");
const dropdown = () => import("../examples/dropdown");
const radio = () => import("../examples/radio");
const loading = () => import("../examples/loading");
const scrollbar = () => import("../examples/scrollbar");
const steps = () => import("../examples/steps");



const routes = [
  {
    path:'/',
    redirect: '/main'
  },
  {
    path: "/main",
    component: mainView,
  },
  {
    path:'/examples',
    redirect: '/examples/avatar'
  },
  {
    path: "/examples",
    component: blankView,
    children:[
      {
        path: "avatar",
        component: avatar,
      },{
        path: "button",
        component: button,
      },{
        path: "chatbox",
        component: chatbox,
      },{
        path: "container",
        component: container,
      },{
        path: "descriptions",
        component: descriptions,
      },{
        path: "dialog",
        component: dialog,
      },{
        path: "loading",
        component: loading,
      },{
        path: "dropdown",
        component: dropdown,
      },{
        path: "radio",
        component: radio,
      },{
        path: "scrollbar",
        component: scrollbar,
      },{
        path: "steps",
        component: steps,
      },
    ]
  },
  {
    path: "/style",
    component: styleView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
