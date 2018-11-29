import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloSwiper from '@/components/HelloSwiper'
import HelloRem from '@/components/HelloRem'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloRem',
      component: HelloRem
    }
  ]
})
