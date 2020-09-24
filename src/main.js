import Vue from "vue";
import App from "./App.vue";
Vue.config.productionTip = false;

new Vue({
  // el: "#app",
  // 让vue知道我们的路由规则
  render: h => h(App)
}).$mount("#app");
