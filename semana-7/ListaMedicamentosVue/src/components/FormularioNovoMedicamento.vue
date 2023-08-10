<template>
  <div>
    <form @submit.prevent="submitForm">
      <input
        type="text"
        v-model="medicationName"
        placeholder="Nome do Medicamento" />
      <input
        type="text"
        v-model="laboratoryName"
        placeholder="Nome do Laboratório" />
      <input type="number" v-model="price" placeholder="Preço" />
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "FormularioNovoMedicamento",
  data() {
    return {
      medicationName: "",
      laboratoryName: "",
      price: "",
    };
  },
  methods: {
    submitForm() {
      this.$emit("submitMedication", {
        medicationName: this.medicationName,
        laboratoryName: this.laboratoryName,
        price: this.price,
      });
    },
  },
};
</script>

<style></style>
