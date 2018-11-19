<template>
 <div>
     <ul>
         <li>
             <router-link :to="urlData.helloworld">helloworld</router-link>
             <router-link :to="urlData.hello">hello</router-link>
         </li>
         <li></li>
     </ul>
 </div>
</template>

<script>
 export default {
   data () {
     return {
         urlData:{
             helloworld:"/",
             hello:"/hello"
         }
     }
   },
   components: {

   }
 }
</script>

<style>

 
</style>
