import Step from "./src/main.vue";

/* istanbul ignore next */
Step.install = function (Vue) {
  Vue.component(Step.name, Step);
};

export default Step;
