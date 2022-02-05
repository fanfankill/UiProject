import Step from "../steps/src/step.vue";

/* istanbul ignore next */
Step.install = function (Vue) {
  Vue.component(Step.name, Step);
};

export default Step;
