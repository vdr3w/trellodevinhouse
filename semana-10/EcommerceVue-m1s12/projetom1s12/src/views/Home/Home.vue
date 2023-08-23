<template>
  <v-container>
    <v-row>
      <v-col
        v-for="produto in produtos"
        :key="produto.id"
        cols="12"
        sm="6"
        md="4"
      >
        <CardProduct :product="produto" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import CardProduct from "../../components/CardProduct.vue";

export default {
  components: {
    CardProduct,
  },
  data() {
    return {
      produtos: [],
    };
  },
  mounted() {
    this.getprodutos();
  },
  methods: {
    async getprodutos() {
      try {
        const response = await axios.get("http://localhost:4000/produtos");
        this.produtos = response.data;
      } catch (error) {
        console.error("An error occurred while fetching the produtos:", error);
      }
    },
  },
  filters: {
    currency(value) {
      return `R$ ${value.toFixed(2)}`;
    },
  },
};
</script>
