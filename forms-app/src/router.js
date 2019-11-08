import Vue from 'vue'
import VueRouter from 'vue-router'

import WelcomePage from './components/welcome/TheWelcome.vue'
import DashboardPage from './components/dashboard/TheDashboard.vue'
import SignupPage from './components/auth/SignUp.vue'
import SigninPage from './components/auth/SignIn.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: WelcomePage },
  { path: '/signup', component: SignupPage },
  { path: '/signin', component: SigninPage },
  { path: '/dashboard', component: DashboardPage }
]

export default new VueRouter({mode: 'history', routes})
