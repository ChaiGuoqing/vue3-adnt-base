import { createApp } from "vue";
import { createPinia } from "pinia";

import main from "./App.vue";
import router from "./router";

import "virtual:svg-icons-register"; // SVG
import Ant from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import "@/styles/index.scss";
import "./permission"; // permission control
import WujieVue from "wujie-vue3";
const app = createApp(main);

app.use(createPinia());
app.use(router);
app.use(Ant);
app.use(WujieVue);

app.mount("#app");
