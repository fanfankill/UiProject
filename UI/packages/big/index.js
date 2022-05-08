import Big from './src/main';

/* istanbul ignore next */
Big.install = function(Vue) {
  Vue.component(Big.name, Big);
};

export default Big;