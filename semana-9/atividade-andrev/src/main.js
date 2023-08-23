// src/main.js

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify"; // Certifique-se de ter essa linha correta

createApp(App)
  .use(router)
  .use(vuetify) // Certifique-se de usar o Vuetify aqui
  .mount("#app");
