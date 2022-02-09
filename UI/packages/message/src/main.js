import Vue from "vue";

const NoticeConstructor = Vue.extend(require("./main.vue").default); // 直接将Vue组件作为Vue.extend的参数,在这里注意，高版本的vue-loader要添加.default

let nId = 1;

const Message = (options) => {
  let id = "notice-" + nId++;
  options = options || {};
  if (typeof options === "string") {
    //如果只传入字符串，将其设置为显示的信息
    options = {
      message: options, //这里的message就是message.vue中data中的message
    };
  }

  const NoticeInstance = new NoticeConstructor({
    // 实例化一个带有content内容的Notice
    data: options, //在这里将你传过来的参数匹配到message.vue组件的data
  });
  //console.log(NoticeInstance);
  NoticeInstance.id = id;
  NoticeInstance.vm = NoticeInstance.$mount(); // 挂载但是并未插入dom，是一个完整的Vue实例
  NoticeInstance.vm.visible = true; //这里修改message.vue数据中的visible,这样message组件就显示出来
  //console.log(NoticeInstance.vm);
  NoticeInstance.dom = NoticeInstance.vm.$el; //获取到本实例的dom元素
  document.body.appendChild(NoticeInstance.dom); // 将dom插入body
  if (NoticeInstance.dom.length > 0) {
    NoticeInstance.dom.style.zIndex = nId + 1001; // 后插入的Notice组件z-index加一，保证能盖在之前的上面
  }
  return NoticeInstance.vm;
};

["success", "warning", "info", "error"].forEach((type) => {
  //同element-ui一样，在给Message绑定四个方法，直接调用
  Message[type] = (options) => {
    if (typeof options === "string") {
      options = {
        message: options,
      };
    }
    options.type = type;
    return Message(options);
  };
});

export default Message;
