<template>
 <div>
   <Navlist/>
    <div class="left">
         <ul>
           <li> <router-link to="/course/java">java</router-link> </li>
           <li><router-link to="/course/web">web</router-link></li>
           <li>安卓</li>
         </ul>
    </div>
    <div class="right">
         <router-view></router-view>
    </div>
 </div>
</template>

<script>
import Navlist from "./NavList"
 export default {
   name:"course",  
   data () {
     return {

     }
   },
   components: {
     Navlist
   }
 }
</script>

<style scoped>
.left,.right{float: left;}
.right{margin-left: 10px;}
 
</style>
