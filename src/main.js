import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

import router from "./router";

import "./styles/main.scss";

Vue.use(VueRouter);

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
