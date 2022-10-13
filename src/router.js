import * as VueRouter from 'vue-router'

const Home = () => import('./pages/Home.vue')
const Login = () => import('./pages/Login.vue')
const ChooseTemplate = () => import('./pages/ChooseTemplate.vue')
const ChooseServer = () => import('./pages/ChooseServer.vue')
const Contact = () => import('./pages/Contact.vue');

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/choose-template', component: ChooseTemplate },
  { path: '/choose-server', component: ChooseServer },
  { path: '/contact', component: Contact }
]


const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})

export default router;