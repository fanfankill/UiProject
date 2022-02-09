import Vue from "vue";

import loading from "./loading";

const Mask = Vue.extend(loading);

const toggleLoading = (el, binding) => {
  if (binding.value) {
    Vue.nextTick(() => {
      el.instance.visible = true;

      if (binding.modifiers.fullscreen) {
        el.mask.style.zIndex = "9999";
        document.body.appendChild(el.mask);
      } else {
        el.appendChild(el.mask);
      }
    });
  } else {
    el.instance.visible = false;
  }
};

export default {
  // register
  install(Vue) {
    Vue.directive("loading", {
      bind: function (el, binding) {
        // console.log(el, binding);

        const mask = new Mask({
          el: document.createElement("div"),
          data: {
            fullscreen: !!binding.modifiers.fullscreen,
            ...binding.arg,
          },
        });

        el.instance = mask;
        el.mask = mask.$el;
        if (el.style.position === "") {
          el.style.position = "relative";
        }

        binding.value && toggleLoading(el, binding);
      },
      update: function (el, binding) {
        if (binding.oldValue !== binding.value) {
          toggleLoading(el, binding);
        }
      },
      unbind: function (el) {
        el.mask.parentNode.removeChild(el.mask);
        el.instance && el.instance.$destroy();
      },
    });
  },
};
