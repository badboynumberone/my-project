// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Ajax from './net/ajax'
import Axios from 'axios'
import Vant from 'vant';



Vue.use(Vant);



import 'vant/lib/index.css';




import Store from './store/index'
import './net/axios'
import './filters'

Vue.prototype.$axios = Axios;
Vue.prototype.$ajax = Ajax;
Vue.prototype.$store = Store;
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
