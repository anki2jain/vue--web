import Vue from 'vue'
import App from './App.vue'
import Vuerouter from 'vue-router'
import {routes } from './router'
Vue.config.productionTip = false

Vue.use(Vuerouter)

const route = new Vuerouter({
  routes
})
new Vue({
  router:route,
  render: h => h(App),
  
}).$mount('#app')
