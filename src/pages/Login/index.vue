<script setup>
import Button from "../../components/Button.vue";
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<template>
  <div class="login">
    <div class="form">
      <div class="username">
        <label>username</label>
        <input />
      </div>
      <div class="password">
        <label>password</label>
        <input />
      </div>
      <Button @click="router.push('chat')">Login</Button>
    </div>
  </div>
</template>

<style scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.username,
.password {
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
}
label {
  font-size: 20px;
}
input {
  display: inline-block;
  width: 80vw;
  height: 40px;
  font-size: 26px;
}
</style>
