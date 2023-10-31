<script setup>
import { reactive, ref, watchEffect } from "vue";
const sendMsg = ref("");
const messages = reactive([]);

const onSend = () => {
  messages.push({ msg: sendMsg.value, object: "me" });
  sendMsg.value = "";
  messages.push({ msg: "hello", object: "your" });
};
</script>

<template>
  <div class="chat">
    <div class="chat-content">
      <div
        :class="['chat-content-item', item.object === 'me' ? 'me' : 'you']"
        v-for="(item, index) in messages"
        :key="index"
      >
        {{ item.msg }}
      </div>
    </div>
    <div class="action">
      <input class="action-input" v-model="sendMsg" /><span
        style="margin-left: 5px"
        @click="onSend"
        >send</span
      >
    </div>
  </div>
</template>

<style scoped>
.chat {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.chat-content {
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 30px;
  padding: 0 15px;
}
.chat-content-item {
  width: 80px;
  background-color: aqua;
  margin-bottom: 30px;
  height: 40px;
  line-height: 40px;
}
.chat-content-item.me {
  border-radius: 10px 0 10px 10px;
  padding-right: 15px;
  align-self: flex-end;
  text-align: right;
}
.chat-content-item.you {
  border-radius: 0 10px 10px 10px;
  padding-left: 15px;
  background-color: rgb(188, 187, 187);
}
.action {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  background: gray;
}
.action-input {
  width: 80vw;
  height: 30px;
  font-size: 20px;
}
</style>
