<template>
  <div>
     <ul>
       <li v-for="news in newsData" :key="news.index">
         <p>{{ news.index }}</p>
            <p>{{news.title}}</p>
            <img :src="news.thumbnail_pic_s" alt="">
       </li>
     </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      newsData:[]
    }
  },
  created(){
    this.$axios("/news/juhenews.php",{
      params:{
        type:"jushi",
        count:20
      }
    }).then(res =>{
      this.newsData = res.data.result.data;
       console.log(res.data.result.data)
    })
    .catch(error =>{
       console.log(error)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
