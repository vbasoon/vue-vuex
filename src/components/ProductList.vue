<template>
  <div>
  <h1>Product List</h1>
  <ul>
    <li v-for="product in products">
      {{ product.title }} - {{ product.price }}
    </li>
  </ul>

  </div>
</template>

<script>

import shop from '@/api/shop.js'
import store from '@/store/index.js'

export default {
  computed: {
    products(){
      return store.state.products
    }
  },
  // data() {
  //   return {
  //     products: [],
  //   }
  // },
  created(){
    shop.getProducts(products => {
      store.commit('setProducts', products)
      // store.state.products = products
    })
  },
  name: 'ProductList',

}
</script>

<style lang="scss">

</style>
