<template>
  <div id="app">
    <!-- <Navlist/> -->
    <router-view/>
  </div>
</template>

<script>
// import Navlist from "./components/NavList"
export default {
  name: 'App',
  components:{
    // Navlist
  }
}
</script>

<style>

*{margin: 0;padding: 0;}
.active{
  color: red;
}
</style>
