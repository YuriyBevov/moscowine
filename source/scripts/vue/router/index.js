import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
      path: '/offers',
      name: 'offers',
  
      component: () => import('../views/v-offer.vue'),
    },

    {
      path: '/in-work',
      name: 'in-work',
  
      component: () => import('../views/v-in-work.vue'),
    },

  ]

const router = new VueRouter({
  //mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
