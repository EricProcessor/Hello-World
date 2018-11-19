<template>
 <div>
     <ul>
         <li>首页</li>
         <li>课程</li>
         <li>专家</li>
     </ul>
 </div>
</template>

<script>
 export default {
   name:"navlist",
   data () {
     return {

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
li{float: left;}
*{margin: 0;padding: 0;}
</style>
