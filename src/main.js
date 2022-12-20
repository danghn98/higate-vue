import Aos from "aos";
import "aos/dist/aos.css";
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/global.css";
import "./assets/tailwind.css";
import router from "./router";
import store from "./store";

Aos.init({
  once: false,
});

createApp(App).use(store).use(router).mount("#app");
