import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: ()=> import('../components/Login.vue'),
    exact:true
  },
  {
    path: '/todo',
    name: 'ToDo',
    component: ()=> import('../components/Todo.vue'),
    exact:true
  },
  {
    path: '/form',
    name: 'Form',
    exact:true,
    component: ()=> import('../components/TodoForm.vue'),
  }
  ,
  {
    path: '/todo/:id',
    name: 'Detail',
    exact:true,
    component: ()=> import('../components/Detail.vue'),
  }
  ,
  {
    path: '/cart',
    name: 'Cart',
    exact:true,
    component: ()=> import('../components/Cart.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
