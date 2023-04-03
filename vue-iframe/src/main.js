import Vue from "vue";
import App from "./App.vue";

// 引入 vuex
import store from "./store";

Vue.config.productionTip = false;
Vue.prototype.$store = store;
new Vue({
  render: (h) => h(App),
  // 注册 vuex
  store,
}).$mount("#app");
