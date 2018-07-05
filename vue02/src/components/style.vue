<template>
    <div v-bind:class="styleObj">
       sdassssssss
    </div>
</template>
<script>
export default {
  name: "Styles",
  data() {
    return {
      // isActive:true,
      // Isdemo:true
      styleObj: {
        active: true,
        demo: true
      }
    };
  }
};
</script>
<style>
.active {
  color: red;
}
.demo {
  font-weight: bold;
}
</style>
