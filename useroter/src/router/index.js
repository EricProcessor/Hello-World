import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Course from '@/components/course'
import Master from '@/components/master'
import Java from '@/components/pages/java'
import Web from '@/components/pages/web'

Vue.use(Router)

export default new Router({
  linkActiveClass:"active",
  routes: [
    {
      path:'/',
      name:'index',
      component:Index
    },
    {
      path:'/course',
      name:'course',
      component:Course,
      redirect:"/course/java",
      children:[{
        path: 'java',
        name: 'java',
        component: Java
      },
      {
        path: 'web',
        name: 'web',
        component: Web
      }
    ]
    },
    {
      path:'/master/:count',
      name:'master',
      component:Master
    }
  ]
})
