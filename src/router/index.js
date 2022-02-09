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
const message = () => import("../examples/message");
const animate = () => import("../examples/animate");
const skeleton = () => import("../examples/skeleton");
const badge = () => import("../examples/badge");
const notification = () => import("../examples/notification");
const rate = () => import("../examples/rate");

const routes = [
  {
    path: "/",
    redirect: "/main",
  },
  {
    path: "/main",
    component: mainView,
  },
  {
    path: "/examples",
    redirect: "/examples/avatar",
    component: blankView,
    children: [
      {
        path: "avatar",
        component: avatar,
      },
      {
        path: "badge",
        component: badge,
      },
      {
        path: "button",
        component: button,
      },
      {
        path: "chatbox",
        component: chatbox,
      },
      {
        path: "container",
        component: container,
      },
      {
        path: "descriptions",
        component: descriptions,
      },
      {
        path: "dialog",
        component: dialog,
      },
      {
        path: "loading",
        component: loading,
      },
      {
        path: "message",
        component: message,
      },
      {
        path: "notification",
        component: notification,
      },
      {
        path: "dropdown",
        component: dropdown,
      },
      {
        path: "radio",
        component: radio,
      },
      {
        path: "rate",
        component: rate,
      },
      {
        path: "scrollbar",
        component: scrollbar,
      },
      {
        path: "steps",
        component: steps,
      },
      {
        path: "skeleton",
        component: skeleton,
      },
      {
        path: "link",
        component: link,
      },
      {
        path: "tabs",
        component: tabs,
      },
      {
        path: "tree",
        component: tree,
      },
      {
        path: "switch",
        component: switchCom,
      },
      {
        path: "animate",
        component: animate,
      },
    ],
  },
  {
    path: "/style",
    redirect: "/style/color",
    component: blankView,
    children: [
      {
        path: "color",
        component: styleView,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
