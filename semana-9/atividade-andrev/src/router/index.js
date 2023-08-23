// Composables
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue"; // Importe a página Home.vue
import Cadastro from "@/views/Cadastro.vue"; // Importe a página Cadastro.vue

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home, // Use o componente Home para a rota raiz
  },
  {
    path: "/cadastro",
    name: "Cadastro",
    component: Cadastro, // Use o componente Cadastro para a rota /cadastro
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
