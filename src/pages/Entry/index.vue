<script setup>
import Button from "../../components/Button.vue";
import { useRouter } from "vue-router";
const router = useRouter();

const onClick = () => {
  router.push("/login");
};
</script>

<template>
  <div class="entry">
    <Button @click="onClick">CHAT NOW</Button>
  </div>
</template>

<style scoped>
.entry {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.chat-btn {
  font-size: 30px;
  width: 80%;
  height: 50px;
  color: #fff;
  background-color: aqua;
}
</style>
