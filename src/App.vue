<template>
  <div>
    <ProductList/>
  </div>

</template>

<script>

import ProductList from '@/components/ProductList.vue'

export default {
  data() {
    return {

    }
  },
  created(){

  },
  name: 'App',
  components: {
    ProductList
  }
}
</script>

<style lang="scss">


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  li {
    list-style-type: none;
    margin-bottom: 20px;
  }
}
</style>
