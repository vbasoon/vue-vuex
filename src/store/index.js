import { createStore } from "vuex";

export default createStore({
  state: {
    products: [],
  },
  getters: {
    productsCount() {},
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
  },
  actions: {
    fetchProducts() {},
  },
  modules: {},
});
