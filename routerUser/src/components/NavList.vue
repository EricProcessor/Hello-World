<template>
 <div>
     <ul>
         <li><router-link to="/">首页</router-link> </li>
         <li> <router-link to="/course" >课程</router-link> </li>
         <li> <router-link to="/master">专家</router-link> </li>
     </ul>
 </div>
</template>

<script>
export default {
  name: "navlist",
  data() {
    return {};
  },
  components: {}
};
</script>

<style>
</style>
