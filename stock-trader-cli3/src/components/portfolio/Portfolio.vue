<template lang="html">
  <div class="container-fluid">
    <div class="row">
      <app-stock v-for="stock in stocks" :stock="stock" :key="stock.id"></app-stock>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Stock from './Stock.vue'

export default {
  computed: {
    ...mapGetters({
      stocks: 'stockPortfolio'
    })
  },
  components: {
    appStock: Stock
  }
}
</script>

<style lang="css" scoped>
</style>
