import Vue from 'vue'
import App from './App.vue'
import Header from './components/Header.vue'
import Servers from './components/Servers.vue'
import ServerStatus from './components/ServerStatus.vue'
import Footer from './components/Footer.vue'

Vue.component('app-header', Header);
Vue.component('app-servers', Servers);
Vue.component('app-server-status', ServerStatus);
Vue.component('app-footer', Footer);

new Vue({
    el: '#app',
    render: h => h(App)
})
