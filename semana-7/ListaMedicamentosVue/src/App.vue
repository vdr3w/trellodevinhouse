<template>
  <div>
    <Header />
    <FormularioNovoMedicamento @submitMedication="AdicionarMedicamento" />
    <CardMedicamento
      v-for="medicamento in listaMedicamentos"
      :key="medicamento.id"
      :id="medicamento.id"
      :nome="medicamento.nome"
      :laboratorio="medicamento.laboratorio"
      :preco="medicamento.preco"
      :favorito="medicamento.favorito"
      @favoritarMedicamento="FavoritarMedicamento" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import FormularioNovoMedicamento from "./components/FormularioNovoMedicamento.vue";
import CardMedicamento from "./components/CardMedicamento.vue";

export default {
  name: "App",
  components: {
    Header,
    FormularioNovoMedicamento,
    CardMedicamento,
  },
  data() {
    return {
      listaMedicamentos: [],
      nextId: 1,
    };
  },
  methods: {
    AdicionarMedicamento({ medicationName, laboratoryName, price }) {
      const medicamento = {
        id: this.nextId++,
        nome: medicationName || "",
        laboratorio: laboratoryName || "",
        preco: price || 1,
        favorito: false,
      };

      this.listaMedicamentos.push(medicamento);
      return medicamento;
    },
    FavoritarMedicamento(id) {
      const medicamento = this.listaMedicamentos.find((med) => med.id === id);

      if (medicamento) {
        medicamento.favorito = !medicamento.favorito;
      }
    },
  },
};
</script>

<style></style>
