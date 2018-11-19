import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Course from '@/components/course'
import Master from '@/components/master'
import Java from '../components/pages/java'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/course',
      name: 'course',
      component: Course,
      children:[
        {
          path:"java",
          component:"Java"
        },
        {
          path:"web",
          component:"Web"
        }
      ]
    },
    {
      path: '/master',
      name: 'master',
      component: Master
    }
  ]
})
