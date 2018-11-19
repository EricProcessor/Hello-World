<template>
 <div>
post
 </div>
</template>

<script>

export default {
  name: "post",
  data() {
    return {};
  },
  components: {},
  created() {
    this.$axios
      .post("/sxtstu/blueberrypai/login.php", {
        user_id: "iwen@qq.com",
        password: "iwen123",
        verification_code: "crfvw"
      })
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style>
</style>
