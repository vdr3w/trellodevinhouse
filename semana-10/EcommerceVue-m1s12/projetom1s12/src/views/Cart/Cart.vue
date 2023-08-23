<template>
  <v-container>
    <v-row>
      <v-col v-for="item in cartItems" :key="item.produto.id" cols="12">
        <v-card>
          <v-img :src="item.produto.imagem" height="200px"></v-img>
          <v-card-title>{{ item.produto.nome }}</v-card-title>
          <v-card-subtitle>{{ currency(item.produto.preco) }}</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["cart"]),
    cartItems() {
      return this.cart;
    },
  },
  methods: {
    currency(value) {
      return `R$ ${value.toFixed(2)}`;
    },
  },
};
</script>
