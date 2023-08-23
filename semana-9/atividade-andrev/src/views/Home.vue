<template>
  <v-container>
    <v-row no-gutters>
      <v-col
        v-for="medicamento in medicamentos"
        :key="medicamento.id"
        cols="12"
        sm="6"
        md="4"
      >
        <MedicamentoCard
          :medicamento="medicamento"
          @favoritarMedicamento="favoritarMedicamento"
        ></MedicamentoCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MedicamentoCard from "../components/MedicamentoCard.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    MedicamentoCard,
  },
  data() {
    return {
      medicamentos: [],
    };
  },
  methods: {
    async favoritarMedicamento(id) {
      this.medicamentos = this.medicamentos.map((med) => {
        if (med.id === id) med.favorito = !med.favorito;
        return med;
      });
    },
  },
  async mounted() {
    try {
      const response = await axios.get("http://localhost:50001/medicamentos");
      this.medicamentos = response.data;
    } catch (error) {
      console.error("Erro ao buscar medicamentos:", error);
    }
  },
};
</script>
