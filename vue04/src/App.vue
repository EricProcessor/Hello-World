<template>
  <div id="app">
      <!-- <Anim /> -->
      <Hello/>
  </div>
</template>

<script>
import Mycomponen from "./components/mycomponen";
import Parent from "./components/sonparent/parent";
import Parents from "./components//slots/parent";
import Big from "./components/comkeep/big"
import Anim from "./components/anim/anim"
import Hello from "./hello"
export default {
  name: "App",
  components: {
    Mycomponen,
    Parent,
    Parents,
    Big,
    Anim,
    Hello
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
