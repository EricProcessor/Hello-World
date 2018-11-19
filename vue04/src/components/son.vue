<template>
 <div>
     这是儿子{{ title }} -- {{ lifeMsg }}
 </div>
</template>

<script>
 export default {
     name:'son',
   data () {
     return {

     }
   },
   components: {

   },
   props:["title","lifeMsg"]
 }
</script>

<style>

 
</style>
