import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/todosProducto',
    name: 'Todos los Productos',
    component: () => import('@/views/todoProducto.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
