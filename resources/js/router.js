import VueRouter from 'vue-router'

// Pages
import Home from './views/Home'
import About from './views/About'
import Register from './views/Register'
import Login from './views/Login'
import Dashboard from './views/Dashboard'

// Routes
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      auth: undefined
    }
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      auth: undefined
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      auth: false
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      auth: false
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      auth: true
    }
  },
]
const router = new VueRouter({
  history: true,
  mode: 'history',
  routes,
})
export default router