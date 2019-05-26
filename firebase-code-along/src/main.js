import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';

Vue.use(VueResource);
Vue.http.options.root = 'https://vuejs-http-7019a.firebaseio.com';
Vue.http.interceptors.push((request, next) => {
    console.log(request);
    if (request.method == 'POST') {
        request.method = 'PUT';
    }
    next(response => {
    //don't do on production - overrides built-in json method
        response.json = () => { return { messages: response.body } }
    });
});

new Vue({
  el: '#app',
  render: h => h(App)
})
