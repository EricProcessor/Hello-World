<template>
 <div>
   儿子:{{ title }}
   <button @click="sendMsg">按钮</button>
 </div>
</template>

<script>
 export default {
     name:"son",
   data () {
     return {
         info:"ddsaddsadas"
     }
   },
   components: {

   },
   props:{
       title:{
           type:String,
           default:""
       }
   },
   methods:{
       sendMsg(){
           this.$emit("info",this.info)
       }
   }
 }
</script>

<style>

 
</style>
