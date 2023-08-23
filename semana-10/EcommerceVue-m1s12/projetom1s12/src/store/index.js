import { createStore } from "vuex";

const store = createStore({
  state: {
    cart: [],
  },
  mutations: {
    ADD_TO_CART(state, product) {
      let found = state.cart.find((item) => item.produto.id === product.id);
      if (found) {
        found.quantity++;
      } else {
        state.cart.push({ produto: { ...product }, quantity: 1 });
      }
    },
  },
  getters: {
    cart: (state) => state.cart,
  },
});

export default store;
