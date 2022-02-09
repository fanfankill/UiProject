import Row from "./src/main"

/* istanbul ignore next */
Row.install = function(Vue) {
    Vue.component(Row.name, Row);
};

export default Row;
