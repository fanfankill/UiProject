import tag from './src/main.vue';

/* istanbul ignore next */
tag.install = function(Vue) {
  Vue.component(tag.name, tag);
};

export default tag;
