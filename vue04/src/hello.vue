<template>
 <div>
     <input v-focus type="text">
 </div>
</template>

<script>
 export default {
     name:"hello",
   data () {
     return {

     }
   },
   components: {

   },
   directives:{
       focus:{
           inserted:function(el){
               el.focus()
           }
       }
   }
 }
</script>

<style>

 
</style>
