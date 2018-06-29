<template>
   <div class="event">
       <ul>
           <li v-for="(name,index) in names" v-bind:key="index"> {{name}} </li>
       </ul>
    </div> 
</template>
<script>
   export default{
       name:"event",
       data(){
           return{
             names:["allen","eric","tom"]  
           }
       }
   } 
</script>
<style>

</style>
