import Vue from "vue";
import VueRouter from "vue-router";

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
const link = () => import("../examples/link");
const tabs = () => import("../examples/tabs");
const tree = () => import("../examples/tree");
const switchCom = () => import("../examples/switch");


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
    path: "/examples",
    redirect: "/examples/avatar",
  },
  {
    path: "/examples",
    component: blankView,
    children: [
      {
        path: "avatar",
        component: avatar,
        meta: {
          index:0,
      }
      },
      {
        path: "button",
        component: button,
        meta: {
          index:1,
      }
      },
      {
        path: "chatbox",
        component: chatbox,
        meta: {
          index:2,
      }
      },
      {
        path: "container",
        component: container,
        meta: {
          index:3,
      }
      },
      {
        path: "descriptions",
        component: descriptions,
        meta: {
          index:4,
      }
      },
      {
        path: "dialog",
        component: dialog,
        index:5,
      },{
        path: "link",
        component: link,
        index:6,
      },
      {
        path: "loading",
        component: loading,
        index:7,
      },
      {
        path: "dropdown",
        component: dropdown,
        index:8,
      },
      {
        path: "radio",
        component: radio,
        index:9,
      },
      {
        path: "scrollbar",
        component: scrollbar,
        index:10,
      },
      {
        path: "steps",
        component: steps,
        index:11,
      },{
        path: "switch",
        component: switchCom,
        index:12,
      },
      {
        path: "tabs",
        component: tabs,
        index:13,
      },
      {
        path: "tree",
        component: tree,
        index:14,
      },
    ],
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
