import Vue from "vue";
import App from "./App.vue";
import router from './router.js'
Vue.config.productionTip = false;

new Vue({
  // el: "#app",
  // 让vue知道我们的路由规则
  router,
  render: h => h(App)
}).$mount("#app");
