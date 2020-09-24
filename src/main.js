import Vue from "vue";
import App from "./App.vue";
import router from './router.js'
Vue.config.productionTip = false;

import ElementUI from 'element-ui' //引入ElementUI
import 'element-ui/lib/theme-chalk/index.css' //引入样式表
Vue.use(ElementUI)  //使用ElementUI组件


new Vue({
  // el: "#app",
  // 让vue知道我们的路由规则
  router,
  render: h => h(App)
}).$mount("#app");
