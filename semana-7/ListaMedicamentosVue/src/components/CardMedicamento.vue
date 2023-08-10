<template>
  <div class="card">
    <button @click="toggleFavorite">Favoritar</button>
    <img src="../assets/medimg.jpg" alt="Imagem Medicamento Placeholder" />
    <h3>{{ nome }}</h3>
    <p>Laboratório: {{ laboratorio }}</p>
    <p>Preço: R${{ preco }},00</p>
    <p>Favorito: {{ favorito ? "Sim" : "Não" }}</p>
  </div>
</template>

<script>
export default {
  name: "CardMedicamento",
  props: {
    id: Number,
    nome: String,
    laboratorio: String,
    preco: [Number, String],
    favorito: Boolean,
  },
  methods: {
    toggleFavorite() {
      this.$emit("favoritarMedicamento", this.id);
    },
  },
};
</script>

<style>
.card {
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px;
}

img {
  max-width: 120px;
}
</style>
