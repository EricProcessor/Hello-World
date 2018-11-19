<template>
 <div>
    111111111111111
    <input type="text" v-model="num">
    <Son @sendmsg="getMsg" :num="getNum"/>
    {{info}}
 </div>
</template>

<script>
import Son from "./son";
export default {
  name: "parent",
  data() {
    return {
      info: "",
      num:5
    };
  },
  computed:{
      getNum(){
          return this.num -  0;
      }
  },
  components: {
    Son
  },
  methods: {
    getMsg(data) {
      console.log(data);
      this.info = data;
    }
  }
};
</script>

<style>
</style>
