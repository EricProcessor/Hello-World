<template>
 <div>
     get请求
     <div v-for="infos in infoData" :key="infos.index">
         <p>{{ infos.title }}</p>
     </div>
 </div>
</template>

<script>
 export default {
   data () {
     return {
        infoData:""
     }
   },
   components: {

   },
   created(){
       var url = "https://www.apiopen.top/journalismApi";
       this.$axios.get(url).then(res=>{
           this.infoData = res.data.data.auto;
           console.log(res.data.data.auto)
       }).catch(error=>{
           console.log(error)
       })
   }
 }
</script>

<style>

 
</style>
