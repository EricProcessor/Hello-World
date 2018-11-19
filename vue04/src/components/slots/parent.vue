<template>
 <div>
     父组件
     <Son>
         <p slot="s1">我是插槽1</p>
         <p slot="s2" slot-scope="props">
             {{props.text}}
         </p>
     </Son>
 </div>
</template>

<script>
import Son from "./son"
export default {
  name: "parent",
  data() {
    return {};
  },
  components:{
      Son
  }
};
</script>

<style>
</style>