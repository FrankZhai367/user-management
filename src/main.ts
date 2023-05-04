import Vue from "vue";
import { createPinia, PiniaVuePlugin } from "pinia";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
Vue.use(Antd);
Vue.use(PiniaVuePlugin);

new Vue({
  router,
  pinia: createPinia(),
  render: (h) => h(App),
}).$mount("#app");
