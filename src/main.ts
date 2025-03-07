import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import { router } from "./router";

createApp(App).use(router).use(Toast).mount("#app");
