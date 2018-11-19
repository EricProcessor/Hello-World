import Vue from 'vue'
import VueRouter from "vue-router"
import HelloWorld from "../components/HelloWorld"
import Hello from "../components/hello"


Vue.use(VueRouter)
export default new VueRouter({
  routes: [{
    path: "/",
    component: HelloWorld
  }, {
    path: "/hello",
    component: Hello
  }]
})