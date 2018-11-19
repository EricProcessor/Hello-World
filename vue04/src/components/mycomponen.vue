<template>
 <div>
     父亲组件
     <input type="text" v-model="lifeMsg" />
     <Son :title="msg" :lifeMsg ="lifeMsg" /> 
     <button @click="changeMsg">修改</button>
     <!-- <Son title="父亲向儿子传递数据"/> -->
 </div>
</template>

<script>
import Son from './son'
export default {
  name: "mcc",
  data() {
    return {
      msg:"我是活数据",
      lifeMsg:""
    };
  },
  components: {
    Son
  },
  methods:{
    changeMsg(event){
        this.msg = "我是修改后的数据"
    }
  }
};
</script>

<style>
</style>
