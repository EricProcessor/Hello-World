<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <Vuex/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Vuex from './components/vuex'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Vuex
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
