<template>
 <div>
     <ul>
         <li><router-link exact to="/">首页</router-link></li>
         <li><router-link to="/course">课程</router-link></li>
         <!-- <li> <router-link :to="{path:'/master',query:{count:100}}">专家</router-link></li> -->
         <li> <router-link :to="{name:'master',params:{count:100,type:obj}}">专家</router-link></li>
         <!-- <li> <router-link to="/master">专家</router-link></li> -->
     </ul>
 </div>
</template>

<script>
 export default {
   name:"navlist",
   data () {
     return {
         obj:{
             name:"Eric"
         }
     }
   },
   components: {

   }
 }
</script>

<style scoped>
div{
    width:100%;
    height: 50px;
    background:#f1f1f1;
    line-height: 50px;
}
ul{list-style: none;}
li{float: left;margin:0 20px;}

</style>
