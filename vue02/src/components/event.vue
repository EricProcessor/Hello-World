<template>
   <div class="event">
       <ul>
           <li v-on:click="getInfo(index,$event)" v-for="(name,index) in names" v-bind:key="index"> {{name}} </li>
       </ul>
       <input type="text" v-on:keyup.enter="getkeyInfo">
    </div> 
</template>
<script>
   export default{
       data(){
           return{
             names:["allen","eric","tom"]  
           }
       },
       methods:{
           getInfo(data,event){
               console.log(this.names[data])
               console.log(event)
           },
           getkeyInfo(e){
               console.log(e.keyCode)
           }
       }
   } 
</script>
<style>

</style>