<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <Post/> -->
    <!-- <HelloWorld/> -->
    <!-- <Get/> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Post from './components/post'
import Get from './components/get'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Post,
    Get
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
