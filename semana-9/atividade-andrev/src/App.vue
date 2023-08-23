<template>
  <v-theme-provider theme="dark" with-background class="pa-10">
    <v-layout>
      <Header />
      <v-main class="centered-container">
        <v-alert
          class="centered-container"
          closable
          max-width="90%"
          icon="$vuetify"
          title="DevInHouse 2023 - Andre V"
          text="Lista de Exercicios Semana 11"
          type="success"
          variant="tonal"
        >
          <v-expansion-panels>
            <v-expansion-panel title="[M1S11] Ex 1 a 8">
              <v-expansion-panel-text>
                <div class="task-completed">
                  <v-icon color="success">mdi-check</v-icon> [M1S11] Ex 1 -
                  Criação de projeto
                </div>
                <div class="task-completed">
                  <v-icon color="success">mdi-check</v-icon> [M1S11] Ex 2 -
                  Estilização componente Header
                </div>
                <div class="task-completed">
                  <v-icon color="success">mdi-check</v-icon> [M1S11] Ex 3 -
                  Configuração do Vue router
                </div>
                <div class="task-completed">
                  <v-icon color="success">mdi-check</v-icon> [M1S11] Ex 4 -
                  Criação página para Formulário de cadastro de medicamento
                </div>
                <div class="task-completed">
                  <v-icon color="success">mdi-check</v-icon> [M1S11] Ex 5 -
                  Criação de link para a página de Formulário de cadastro de
                  medicamento
                </div>
                <div class="task-completed">
                  <v-icon color="success">mdi-check</v-icon> [M1S11] Ex 6 -
                  Alteração na função para adicionar novo medicamento
                </div>
                <div class="task-completed">
                  <v-icon color="success">mdi-check</v-icon> [M1S11] Ex 7 -
                  Estilização do componente CardMedicamento
                </div>
                <div class="task-completed">
                  <v-icon color="success">mdi-check</v-icon> [M1S11] Ex 8 -
                  Receber dados para Exibição de lista de medicamentos
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-alert>

        <br />
        <div class="text-center">
          <router-link to="/cadastro" tag="v-btn" class="ma-2 text-white">
            <v-btn color="#333">
              <v-icon start color="success">mdi-note-plus-outline</v-icon>
              Adicionar Novo Medicamento
              <v-icon end color="warning">mdi-note-plus-outline</v-icon>
            </v-btn>
          </router-link>
        </div>
        <br />
        <router-view></router-view>
      </v-main>
    </v-layout>
  </v-theme-provider>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
.centered-container {
  max-width: 80%;
  margin: 0 auto;
}
.task-completed {
  color: green;
  display: flex;
  align-items: center;
}
</style>
