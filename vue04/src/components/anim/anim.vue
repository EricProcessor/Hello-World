<template>
 <div>
      <button @click="showHide">按钮</button>
      <transition name="fade">
          <p v-show="show">dsfaaaaaaa</p>
      </transition>
      <button @click="animLibs">动画库</button>
      <transition name="wode" enter-active-class="animated flipInX"
    leave-active-class="animated flipOutX">
          <p v-show="libs">哇哇哇哇</p>
      </transition>
 </div>
</template>

<script>
 export default {
   data () {
       name:"anim"
     return {
        show:true,
        libs:true
     }
   },
   components: {

   },
   methods: {
     showHide(){
       this.show = !this.show
     },
     animLibs(){
       this.libs = !this.libs
     }
   }
 }
</script>

<style>
.fade-enter-active, .fade-leave-active{
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
p{
  font-size: 30px;
}

</style>
