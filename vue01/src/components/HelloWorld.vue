<template>
  <div class="hello">
      {{ hello }}
      {{ 1+1 }}
      {{ "哈哈" }}
      {{0>10?"对":"错"}}
      <p> {{ flag }} </p>
      <div v-html="flag"></div>
      <p v-text="hello"></p>
      <p v-html="xhtml"></p>
      <P> {{ xhtml }} </P>
      <span>哈哈哈</span>
      <p>{{ message.split('').reverse().join('') }}</p>
      <p v-if="ok">YES</p>
      <p v-else>NO</p>
      <div class="list">
          <ul>
            <!-- <li v-for="name in names">{{ name }}</li> -->
            <li v-for="(name,index) in names" :key="index" >{{ name }}</li>
          </ul>
          <ul>
            <!-- <li v-for="name in names">{{ name }}</li> -->
            <li v-for="(name,index) in names" v-bind:key="index">{{ name }}---{{ index }}</li>
          </ul>
          <ul>
            <li v-for="(item,index) in user" :key="index">
              <span> {{item.name}} </span> 
              <span> {{item.age}} </span> 
            </li>
          </ul>
      </div>
      <button v-on:click="num+=1">按钮</button>
      <p>{{ num }}</p>
      <button v-on:click="handleClick">es6的学习</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      num:1,
      hello: "hello VUE",
      flag: "我是flag",
      xhtml: "<span>这是一个span</span>",
      message: "Eric",
      ok: false,
      names: ["allen", "tomas", "乔治"],
      user: [
        {
          id: 0,
          name: "tomas",
          age: "15"
        },
        {
          id: 1,
          name: "jack",
          age: "25"
        },
        {
          id: 2,
          name: "james",
          age: "35"
        }
      ]
    }
  },
  methods:{
     handleClick(){
       console.log(this)
     }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
