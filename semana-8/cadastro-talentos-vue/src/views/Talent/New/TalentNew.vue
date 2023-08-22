<template>
  <div><h1 class="title">CADASTRO</h1></div>

  <form @submit.prevent="handleSubmit" class="form-new">
    <div class="row mb-4">
      <div class="col">
        <div class="form-outline">
          <label class="form-label" for="form3Example1">Nome Completo</label>
          <input
            type="text"
            id="form3Example1"
            :class="['form-control', validationErrors.name ? 'is-invalid' : '']"
            v-model="name" />
          <div v-if="validationErrors.name" class="invalid-feedback">
            {{ validationErrors.name }}
          </div>
        </div>
      </div>
      <div class="col">
        <div class="form-outline">
          <label class="form-label" for="form3Example2">Email</label>
          <input
            type="email"
            id="form3Example2"
            :class="[
              'form-control',
              validationErrors.email ? 'is-invalid' : '',
            ]"
            v-model="email" />
          <div v-if="validationErrors.email" class="invalid-feedback">
            {{ validationErrors.email }}
          </div>
        </div>
      </div>
    </div>
    <div class="row mb-4">
      <div class="col">
        <div class="form-outline">
          <label class="form-label" for="form3Example4"
            >Data de Nascimento</label
          >
          <input
            type="date"
            id="form3Example4"
            :class="[
              'form-control',
              validationErrors.date_birth ? 'is-invalid' : '',
            ]"
            v-model="date_birth" />
          <div v-if="validationErrors.date_birth" class="invalid-feedback">
            {{ validationErrors.date_birth }}
          </div>
        </div>
      </div>
      <div class="col">
        <div class="form-outline">
          <label class="form-label" for="form3Example5">WhatsApp</label>
          <input
            type="tel"
            id="form3Example5"
            :class="[
              'form-control',
              validationErrors.phone ? 'is-invalid' : '',
            ]"
            v-model="phone" />
          <div v-if="validationErrors.phone" class="invalid-feedback">
            {{ validationErrors.phone }}
          </div>
        </div>
      </div>
    </div>

    <div class="form-outline mb-4">
      <label class="form-label" for="form3Example3">Área de Interesse</label>
      <select v-model="area" id="form3Example3" class="form-control">
        <option v-for="stack in stacks">{{ stack }}</option>
      </select>
    </div>

    <div class="form-outline mb-4">
      <label class="form-label" for="form3Example3">Nível Profissional</label>
      <select v-model="nivel" id="form3Example3" class="form-control">
        <option v-for="nivel_pro in nivels_pro">{{ nivel_pro }}</option>
      </select>
    </div>

    <label class="d-flex flex-wrap justify-content-center mb-4"
      >Selecione suas Habilidades</label
    >
    {{ skills.length }}
    <div v-if="area === 'Frontend' || area === 'Fullstack'">
      <div class="d-flex flex-wrap justify-content-center mb-4">
        <div id="skills" class="form-check me-4 mb-2">
          <input
            class="form-check-input me-2"
            type="checkbox"
            value="HTML"
            id="form2Example31"
            v-model="skills" />
          <label class="form-check-label" for="form2Example31"> HTML </label>
        </div>
        <div class="form-check me-4 mb-2">
          <input
            class="form-check-input me-2"
            type="checkbox"
            value="CSS"
            id="form2Example32"
            v-model="skills" />
          <label class="form-check-label" for="form2Example32"> CSS3 </label>
        </div>
        <div class="form-check me-4 mb-2">
          <input
            class="form-check-input me-2"
            type="checkbox"
            value="JAVASCRIPT"
            id="form2Example33"
            v-model="skills" />
          <label class="form-check-label" for="form2Example33">
            Javascript
          </label>
        </div>
        <div class="form-check me-4 mb-2">
          <input
            class="form-check-input me-2"
            type="checkbox"
            value="VUE"
            id="form2Example33"
            v-model="skills" />
          <label class="form-check-label" for="form2Example33"> VUE </label>
        </div>
      </div>
    </div>
    <div v-if="area === 'Backend' || area === 'Fullstack'">
      <div class="d-flex flex-wrap justify-content-center mb-4">
        <div class="form-check me-4 mb-2">
          <input
            class="form-check-input me-2"
            type="checkbox"
            value="LARAVEL"
            id="form2Example33"
            v-model="skills" />
          <label class="form-check-label" for="form2Example33"> Laravel </label>
        </div>
        <div class="form-check me-4 mb-2">
          <input
            class="form-check-input me-2"
            type="checkbox"
            value="PHP"
            id="form2Example33"
            v-model="skills" />
          <label class="form-check-label" for="form2Example33"> PHP </label>
        </div>
        <div class="form-check me-4 mb-2">
          <input
            class="form-check-input me-2"
            type="checkbox"
            value="NODE"
            id="form2Example33"
            v-model="skills" />
          <label class="form-check-label" for="form2Example33"> Node </label>
        </div>
        <div class="form-check me-4 mb-2">
          <input
            class="form-check-input me-2"
            type="checkbox"
            value="JAVA"
            id="form2Example33"
            v-model="skills" />
          <label class="form-check-label" for="form2Example33"> Java </label>
        </div>
      </div>
    </div>

    <label for="exampleTextarea" class="form-label"
      >Carta de Apresentação</label
    >
    <div class="d-flex justify-content-center mb-4">
      <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
    </div>

    <button type="submit" class="btn btn-primary btn-block mb-4">
      Sign up
    </button>
  </form>
</template>

<script>
import * as yup from "yup";
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      email: "",
      date_birth: "",
      phone: "",
      area: "",
      nivel: "",
      coverLetter: "",
      skills: [""],

      stacks: ["Fullstack", "Frontend", "Backend"],
      nivels_pro: ["Junior", "Pleno", "Senior"],
      validationErrors: {},
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const schema = yup.object().shape({
          name: yup.string().required("Nome é Obrigatório"),
          email: yup
            .string()
            .email("Email inválido")
            .required("Email é obrigatório"),
          date_birth: yup.string().required("Data de Nascimento é Obrigatória"),
          phone: yup
            .string()
            .matches(/^\d+$/, "O WhatsApp deve conter apenas números")
            .required("WhatsApp é obrigatório"),
        });

        await axios({
          url: "http://localhost:3000/talentos",
          method: "POST",
          data: {
            name: this.name,
            email: this.email,
            date_birth: this.date_birth,
            phone: this.phone,
            area: this.area,
            skills: this.skills,
          },
        });

        alert("Cadastro realizado com sucesso");
        this.$router.push("/");
      } catch (error) {
        if (error.response?.data?.message) {
          alert(error.response.data.message);
        }
      }
    },
  },
  watch: {
    area(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.skills = [];
      }
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 32px;
  font-weight: bold;
  color: #999;
  text-align: center;
}

.is-invalid {
  border-color: red;
}

.invalid-feedback {
  color: red;
  font-size: 12px;
}
</style>
