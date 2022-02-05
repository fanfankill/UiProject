import Vue from "vue";
import loading from "./loading";

// there is only one fullscreen instance
let fullscreenInstance = null;

const Mask = Vue.extend(loading);

Mask.prototype.close = function () {
  this.visible = false;
  setTimeout(() => {
    if (this.fullscreen && fullscreenInstance) {
      fullscreenInstance = null;
    }
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }
    this.$destroy();
  }, 300);
};

export default function Loading(options = {}) {
  if (options.fullscreen && fullscreenInstance) {
    return fullscreenInstance;
  }

  let instance = new Mask({
    el: document.createElement("div"),
    data: options.data,
  });

  let parent = options.fullscreen ? document.body : options.target;

  Vue.nextTick(() => {
    instance.visible = true;

    if (parent.style.position === "") {
      parent.style.position = "relative";
    }
    parent.appendChild(instance.$el);
  });

  // store the fullscreen instance
  if (options.fullscreen) {
    fullscreenInstance = instance;
  }

  return instance;
}
