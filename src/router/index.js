import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/index'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    // {
    //   path:'/',
    //   name:'Home',
    //   component: () => import('../views/index.vue')
    // }
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
