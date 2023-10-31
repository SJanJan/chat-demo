import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import Entry from "./pages/Entry/index.vue";
import Chat from "./pages/Chat/index.vue";
import Login from "./pages/Login/index.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", redirect: "/entry" },
    { path: "/entry", name: "entry", component: Entry },
    { path: "/chat", name: "chat", component: Chat },
    { path: "/login", name: "login", component: Login },
  ],
});

createApp(App).use(router).mount("#app");
