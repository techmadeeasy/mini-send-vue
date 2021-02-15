import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import axios from "axios";


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue, IconsPlugin)
axios.defaults.baseURL = 'http://mailsend.test/api'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
