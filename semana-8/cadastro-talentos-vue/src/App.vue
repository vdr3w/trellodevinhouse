<template>
  <header>
    <Menu> </Menu>
  </header>

  <main>
    <router-view></router-view>
  </main>

  <footer class="footer bg-dark text-white text-center py-3">
    AndreV - DevInHouse / Turma Zucchetti
  </footer>
</template>

<script setup>
import Menu from "./components/Menu/Menu.vue";
</script>

<style scoped></style>
