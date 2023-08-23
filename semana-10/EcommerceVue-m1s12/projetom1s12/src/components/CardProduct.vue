<template>
  <v-card
    variant="outlined"
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template v-slot:loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="deep-purple"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img cover height="450" :src="product.imagem"></v-img>

    <v-card-item>
      <v-card-title>{{ product.nome }}</v-card-title>
      <v-card-subtitle>{{ currency(product.preco) }}</v-card-subtitle>
    </v-card-item>

    <v-card-text>
      <div>Produto Original</div>
      <div>Coleção: <strong>Naruto</strong></div>
      <div>
        Personagem: <strong>{{ product.nome }}</strong>
      </div>
      <div>Altura: <strong>9 cm</strong></div>
      <div>Material: <strong>Vinil</strong></div>
    </v-card-text>

    <v-divider class="mx-4 mb-1"></v-divider>

    <!-- Você pode adicionar aqui funcionalidades adicionais se desejar -->

    <v-card-actions>
      <v-btn
        append-icon="mdi-cart"
        variant="tonal"
        color="purple-darken-3"
        @click="addToCart"
      >
        Adicionar ao Carrinho
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { useStore } from "vuex";

export default {
  props: ["product"],
  data: () => ({
    loading: false,
  }),
  setup(props) {
    const store = useStore();

    const addToCart = () => {
      store.commit("ADD_TO_CART", props.product);
    };

    const currency = (value) => {
      return `R$ ${value.toFixed(2)}`;
    };

    return {
      addToCart,
      currency,
    };
  },
};
</script>
