<template>
  <v-theme-provider theme="dark" with-background class="pa-10">
    <v-card
      loading
      class="mx-auto"
      max-width="344"
      variant="outlined"
      prepend-icon="mdi-home"
      ><template v-slot:title> DevInHouse - AndreV </template>
      <v-card-item>
        <div>
          <div class="text-overline mb-1">[M1S11] Ex 1~8</div>
          <div class="text-h6 mb-1">
            Formulário para cadastro de novo medicamento.
          </div>
          <div class="cadastro-container">
            <h1>Informações:</h1>
            <v-form @submit.prevent="submitForm">
              <div class="error-message">{{ errors.nome }}</div>
              <v-text-field
                clearable
                variant="outlined"
                v-model="nome"
                label="Nome do Medicamento"
                outlined
              ></v-text-field>

              <div class="error-message">{{ errors.laboratorio }}</div>
              <v-text-field
                clearable
                variant="outlined"
                v-model="laboratorio"
                label="Nome do Laboratório"
                outlined
              ></v-text-field>

              <div class="error-message">{{ errors.preco }}</div>
              <v-text-field
                clearable
                variant="outlined"
                type="number"
                v-model="preco"
                label="Preço"
                outlined
              ></v-text-field>

              <v-card-actions>
                <v-btn type="submit" variant="outlined"> Enviar </v-btn>
              </v-card-actions>
            </v-form>
          </div>
        </div>
      </v-card-item>
    </v-card>
  </v-theme-provider>
</template>

<script>
import axios from "axios";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  nome: yup.string().required("Nome do Medicamento é obrigatório"),
  laboratorio: yup.string().required("Nome do Laboratório é obrigatório"),
  preco: yup
    .number()
    .transform((value, originalValue) => {
      return originalValue.trim() === "" ? undefined : value;
    })
    .required("Informe o valor do produto")
    .positive("Preço deve ser um número positivo"),
});

export default {
  name: "Cadastro",
  data() {
    return {
      nome: "",
      laboratorio: "",
      preco: "",
      errors: {},
    };
  },
  methods: {
    async submitForm() {
      const medication = {
        nome: this.nome,
        laboratorio: this.laboratorio,
        preco: this.preco,
      };

      try {
        await validationSchema.validate(medication, { abortEarly: false });

        await axios.post("http://localhost:50001/medicamentos", medication);

        alert("Medicamento cadastrado com sucesso!");

        this.$router.push("/");

        this.$emit("submitMedication", medication);
      } catch (error) {
        if (error instanceof yup.ValidationError) {
          error.inner.forEach((err) => {
            this.errors[err.path] = err.message;
          });
        } else {
          console.error("Erro ao salvar o medicamento:", error);
        }
      }
    },
  },
};
</script>

<style scoped>
/* Adicionar estilos para as mensagens de erro */
.error-message {
  color: red;
}
</style>
