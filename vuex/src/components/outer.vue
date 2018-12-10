<template>
 <div>
 faaksd===-==========={{ getCount }}
 <button @click="add">add</button>
 <button @click="less">见见</button>
 </div>
</template>

<script>
 export default {
   data () {
     return {

     }
   },
   components: {

   },
   computed:{
       getCount(){
           return this.$store.state.count;
       }
   },
   methods:{
       add(){
        //    this.$store.commit('increment');
         this.$store.dispatch('increment')
       },
       less(){
         this.$store.commit('reduce');  
       }
   }
 }
</script>

<style>

 
</style>
