<template>
  <nav>
    <ul class="menu">
      <router-link to="/" class="item-menu">
        <li>
          <img
            width="50"
            src="https://img.icons8.com/stickers/100/exterior.png"
            alt="exterior" />
          <h2>Home</h2>
        </li>
      </router-link>
      <router-link to="/talentos/novo" class="item-menu">
        <li>
          <img
            width="50"
            src="https://img.icons8.com/stickers/100/exterior.png"
            alt="exterior" />
          <h2>Cadastro</h2>
        </li>
      </router-link>
      <router-link to="/sobre" class="item-menu">
        <li>
          <img
            width="50"
            src="https://img.icons8.com/stickers/100/exterior.png"
            alt="exterior" />
          <h2>Sobre</h2>
        </li>
      </router-link>
    </ul>
  </nav>
</template>

<script></script>

<style scoped>
.menu {
  display: flex;
  justify-content: space-between;
  list-style: none;
}

.item-menu {
  width: 33%;
  display: flex;
  border: 1px solid #000;
  padding: 5px;
}

.item-menu li {
  width: 33%;
  display: flex;
  padding: 5px;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}
</style>
