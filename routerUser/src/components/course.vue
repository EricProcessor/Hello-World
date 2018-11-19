<template>
 <div>
     <NavList/>
     
    <div class="left">
        课程页面
        <ul>
            <li>java</li>
            <li>前端</li>
            <li>Android</li>
        </ul>
    </div>
    <div class="right">
        <router-view></router-view>
    </div>
 </div>
</template>

<script>
import NavList from "./NavList"
 export default {
    name:"course",
   data () {
     return {

     }
   },
   components: {
       NavList
   }
 }
</script>

<style scoped>
.left,.right{
    float: left;
}
.right{
    margin-left: 100px;
}
</style>
