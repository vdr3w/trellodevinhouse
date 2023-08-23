<template>
  <v-sheet class="ma-2 pa-2" elevation="4">
    <v-card class="mx-auto" max-width="400">
      <v-img
        class="align-end text-white"
        height="200"
        src="../assets/medimg.jpg"
        cover
      ></v-img>
      <v-card-title>{{ medicamento.nome }}</v-card-title>
      <v-card-subtitle class="pt-4">
        Laboratório: {{ medicamento.laboratorio }}
      </v-card-subtitle>
      <v-card-text>
        <div>Preço: R${{ medicamento.preco }},00</div>
      </v-card-text>
      <v-card-text>
        <div>
          Favorito: {{ medicamento.favorito ? "Sim" : "Não" }}
        </div></v-card-text
      >
      <v-card-actions>
        <v-btn
          elevation="4"
          density="comfortable"
          size="large"
          variant="tonal"
          value="favorites"
          @click="toggleFavorite"
        >
          <v-icon
            :color="medicamento.favorito ? '#f00' : '#333'"
            color="#333"
            class="mr-3 ml-1"
            icon="mdi-heart"
          ></v-icon>

          <span>Favoritar</span>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-sheet>
</template>

<script>
export default {
  name: "MedicamentoCard",
  props: {
    medicamento: Object,
  },
  methods: {
    toggleFavorite() {
      this.$emit("favoritarMedicamento", this.medicamento.id);
    },
  },
};
</script>

<style></style>
