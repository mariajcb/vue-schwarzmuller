import Vue from 'vue'
import App from './App.vue'
import Header from './components/Header.vue'
import Server from './components/Server.vue'
import Servers from './components/Servers.vue'
import ServerDetails from './components/ServerDetails.vue'
import Footer from './components/Footer.vue'

Vue.component('app-header', Header);
Vue.component('app-server', Server);
Vue.component('app-servers', Servers);
Vue.component('app-server-details', ServerDetails);
Vue.component('app-footer', Footer);

export const serverBus = new Vue();

new Vue({
    el: '#app',
    render: h => h(App)
})
