import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://forms-app-6620f.firebaseio.com'
axios.defaults.headers.common['Authorization'] = 'thisisagenerictoken'
axios.defaults.headers.get['Accept'] = 'application/json'


const reqInterceptor = axios.interceptors.request.use(config => {
  console.log('request interceptor', config);
  return config
})
const resInterceptor =axios.interceptors.response.use(res => {
  console.log('res interceptor', res);
  return res
})
axios.interceptors.request.eject(reqInterceptor)
axios.interceptors.request.eject(resInterceptor)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
