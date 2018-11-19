<template>
 <div>
    big
    <keep-alive>    
         <component :is="currentView"></component>
    </keep-alive>
    <!-- {{ currentView }} -->
    <button @click="changeView">切换View</button>
 </div>
</template>

<script>
 import Csmall1 from "./csmall1";
 import Csmall2 from "./csmall2";
 export default {
   data () {
     return {
         currentView:"Csmall1",
         flag:true
     }
   },
   components: {
       Csmall1,
       Csmall2
   },
   methods:{
       changeView(){
           if(this.flag){
               this.currentView = "Csmall2";
               this.flag = false;
           }else{
               this.currentView = "Csmall1";
               this.flag = true;
           }
       }
   }
 }
</script>

<style>

 
</style>
