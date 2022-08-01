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
    redirect: "/examples/Animate",
    component: blankView,
    children: [
      {
        path: "Animate",
        component: animate,
        meta: {
          index:-1,
      }
      },
      {
        path: "Avatar",
        component: avatar,
        meta: {
          index:0,
      }
      },
      {
        path: "Badge",
        component: badge,
        meta: {
          index:1,
      }
      },
      {
        path: "Button",
        component: button,
        meta: {
          index:2,
      }
      },
      {
        path: "Chatbox",
        component: chatbox,
        meta: {
          index:3,
      }
      },
      {
        path: "Container",
        component: container,
        meta: {
          index:4,
      }
      },
      {
        path: "Descriptions",
        component: descriptions,
        meta: {
          index:5,
      }
      },
      {
        path: "Dialog",
        component: dialog,
        meta: {
          index:6,
      }
      }, {
        path: "Dropdown",
        component: dropdown,
        meta: {
          index:7,
      }
      },{
        path: "Link",
        component: link,
        meta: {
          index:8,
      }
      },
      {
        path: "Loading",
        component: loading,
        meta: {
          index:9,
      }
      },
      {
        path: "Message",
        component: message,
        meta: {
          index:10,
      }
      },
      {
        path: "Notification",
        component: notification,
        meta: {
          index:11,
      }
      },
      {
        path: "Radio",
        component: radio,
        meta: {
          index:12,
      }
      },
      {
        path: "Rate",
        component: rate,
        meta: {
          index:13,
      }
      },
      {
        path: "Scrollbar",
        component: scrollbar,
        meta: {
          index:14,
      }
      },
      {
        path: "Skeleton",
        component: skeleton,
        meta: {
          index:15,
      }
      },
      
      {
        path: "Steps",
        component: steps,

        meta: {
          index:16,
      }
      },
      {
        path: "Switch",
        component: switchCom,
        meta: {
          index:17,
      }

      },

      {
        path: "Tabs",
        component: tabs,
        meta: {
          index:18,
      }
      },
      {
        path: "Tree",
        component: tree,

        meta: {
          index:19,
      }

      },
     
    ],
  },
  {
    path:'/style',
    component:blankView,
    redirect:'/style/Color',
    children:[
      {
        path: "Color",
        component: styleView,
        meta: {
          index:20,
      }
      },
    ]
  }

];

const router = new VueRouter({
  routes,
});

export default router;
