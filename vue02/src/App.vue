<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <event/> -->
    <!-- <Formdata/> -->
    <Styles/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import event from "./components/event";
import Formdata from "./components/formdata";
import Styles from "./components/style";

export default {
  name: "App",
  components: {
    HelloWorld,
    event,
    Formdata,
    Styles
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
