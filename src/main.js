import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import * as filters from './filters'

Vue.config.productionTip = false
Vue.prototype.$axios = axios

Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
