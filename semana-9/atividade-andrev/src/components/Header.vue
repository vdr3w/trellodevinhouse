<template>
  <v-theme-provider theme="dark" with-background class="pa-10">
    <header>
      <v-main>
        <v-app-bar dark color="#333">
          <v-app-bar-title class="titleMenu">
            <h2 class="text-white">LISTA DE MEDICAMENTOS</h2>
          </v-app-bar-title>
          <router-link to="/" tag="v-btn" class="botaoHome ma-2" color="white">
            <v-btn prepend-icon="mdi-arrow-left" stacked> <h3>Home</h3> </v-btn>
          </router-link>
        </v-app-bar>
      </v-main>
      <v-layout></v-layout>
    </header>
  </v-theme-provider>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
.v-toolbar-title__placeholder,
.botaoHome {
  color: white;
}
</style>
