<template>
   <div class="event">
       <ul>
           <li v-on:click="getInfo(index,$event)" v-for="(name,index) in names" v-bind:key="index"> {{name}} </li>
       </ul>
       <input type="text" v-on:keyup="getkeyInfo">
       <button v-on:click="addArr">按钮</button>
       <button v-on:click="evenNumbers">按钮2</button>
       <p> {{ resmg }} </p>
       <input v-model="inMes">
       <p>inMes is:{{ inMes }}</p>
    </div> 
</template>
<script>
   export default{
       data(){
           return{
             names:["allen","eric","tom"],
             numbers: [ 1, 2, 3, 4, 5 ],
             message:"Hello World",
             inMes:""  
           }
       },
       methods:{
           getInfo(data,event){
               console.log(this.names[data])
               console.log(event)
           },
           getkeyInfo(e){
               console.log(e.keyCode)
           },
           addArr(){
               this.names.push("Alice")
           },
             
           evenNumbers() {
                return this.numbers.filter(function(number) {
                    if (number % 2 === 0){
                        console.log(number)
                    }
                    // return number % 2 === 0;
                })
           }
       },
       computed:{
            resmg(){
                return this.message.split('').reverse().join('')
            }
       }
   } 
</script>
<style>

</style>