<template>
  <div class="title-bar">
    <img
      width="64"
      height="64"
      src="https://img.icons8.com/nolan/64/vue-js.png"
      alt="vue-js" />
    <h1>DevInHouse - Exercicio Cadastro de Talentos</h1>
  </div>
  <br />
  <br />
  <nav>
    <ul class="menu">
      <router-link to="/" class="item-menu">
        <li>
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/fluency-systems-filled/48/home.png"
            alt="home" />
          Home
        </li>
      </router-link>
      <router-link to="/talentos/novo" class="item-menu">
        <li>
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/ios-glyphs/30/add-user-male.png"
            alt="add-user-male" />
          Talentos
        </li>
      </router-link>
      <router-link to="/sobre" class="item-menu">
        <li>
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/metro/26/about.png"
            alt="about" />
          Sobre
        </li>
      </router-link>
    </ul>
  </nav>
  <br />
  <br />
</template>

<script></script>

<style scoped>
.title-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  padding: 20px;
}

.title-bar img {
  margin-right: 15px;
}

.menu {
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding: 0;
  background-color: transparent;
  margin: 0 5%;
}

.item-menu {
  text-decoration: none;
  color: #333;
  font-size: 18px;
  padding: 5px;
  transition: color 0.3s, transform 0.3s;
  display: flex;
  align-items: center;
}

.item-menu:hover {
  color: #555;
  transform: scale(1.05);
}

.item-menu li {
  list-style: none;
  font-weight: 600;
}
</style>
