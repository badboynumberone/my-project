import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Cart from '@/pages/Cart'
import Me from '@/pages/Me'
import Message from '@/pages/Message'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    },
    {
      path: '/message',
      name: 'Message',
      component: Message
    },
    {
      path: '/*',
      name: 'Index',
      component: Index
    },
  ]
})
