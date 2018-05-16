// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import router from './router'
import Vuex from 'vuex'
import myComponent from './'
import LYJ from './utils/lyj.js'
Vue.prototype._ = LYJ;
Vue.use(Vuex);
Vue.config.productionTip = false
// 获得权限
Notification.requestPermission();
Vue.prototype.$Message = myComponent.Message;
Vue.prototype.$notification = myComponent.Lnotification;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: myComponent,
  template: '<App/>'
})


