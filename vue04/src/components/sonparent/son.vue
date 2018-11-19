<template>
 <div>
222222222222222
<button @click="senMsg">数据传递</button>
 </div>
</template>

<script>
 export default {
     name:"son",
   data () {
     return {
           msg:'我是子组件数据'
     }
   },
   props:{
       num:{
           type:Number,
           default:5
       }
   },
   computed:{
       addNum(){
           return this.num*5;
       }
   },
   components: {

   },
   methods:{
       senMsg(event){
           this.$emit("sendmsg",this.addNum)
       }
   }
 }
</script>

<style>

 
</style>
