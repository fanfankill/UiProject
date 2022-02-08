/*
 * @Descripttion:
 * @Author: Gypsophlia
 * @Date: 2022-02-05 15:10:31
 * @LastEditTime: 2022-02-07 11:08:56
 */
import Chatbox from "./src/main";

/* istanbul ignore next */
Chatbox.install = function (Vue) {
  Vue.component(Chatbox.name, Chatbox);
};

export default Chatbox;
