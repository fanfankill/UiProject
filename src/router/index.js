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
        path: "animate",
        component: animate,
        meta: {
          index: -1,
        },
      },
      {
        path: "avatar",
        component: avatar,
        meta: {
          index: 0,
        },
      },
      {
        path: "badge",
        component: badge,
      },
      {
        path: "button",
        component: button,
        meta: {
          index: 1,
        },
      },
      {
        path: "chatbox",
        component: chatbox,
        meta: {
          index: 2,
        },
      },
      {
        path: "container",
        component: container,
        meta: {
          index: 3,
        },
      },
      {
        path: "descriptions",
        component: descriptions,
        meta: {
          index: 4,
        },
      },
      {
        path: "dialog",
        component: dialog,
        meta: {
          index: 5,
        },
      },
      {
        path: "link",
        component: link,
        meta: {
          index: 6,
        },
      },
      {
        path: "loading",
        component: loading,
        meta: {
          index: 7,
        },
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
        meta: {
          index: 8,
        },
      },
      {
        path: "radio",
        component: radio,
        meta: {
          index: 9,
        },
      },
      {
        path: "rate",
        component: rate,
      },
      {
        path: "scrollbar",
        component: scrollbar,
        meta: {
          index: 10,
        },
      },
      {
        path: "steps",
        component: steps,

        meta: {
          index: 11,
        },
      },
      {
        path: "switch",
        component: switchCom,
        meta: {
          index: 12,
        },
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
        meta: {
          index: 13,
        },
      },
      {
        path: "tree",
        component: tree,

        meta: {
          index: 14,
        },
      },
      {
        path: "switch",
        component: switchCom,
      },
    ],
  },
  {
    path: "/style",
    component: blankView,
    redirect: "/style/color",
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
