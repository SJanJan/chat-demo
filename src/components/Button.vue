<script setup></script>

<template>
  <button class="chat-btn" @click="$emit('click')">
    <slot />
  </button>
</template>

<style scoped>
.chat-btn {
  width: 80%;
  height: 50px;
  color: #fff;
  background-color: aqua;
  font-size: 30px;
  border: none;
  border-radius: 5px;
}
</style>
