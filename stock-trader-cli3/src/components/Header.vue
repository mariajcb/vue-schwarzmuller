<template lang="html">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <router-link to="/" class="navbar-brand">Stock Trader</router-link>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link class="nav-link" to="/portfolio">Portfolio <span class="sr-only">(current)</span></router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/stocks">Stocks</router-link>
      </li>
    </ul>
    <ul class="navbar-nav navbar-right">
      <li class="nav-item pr-3">
        <button class="btn btn-primary text-white nav-link" @click="endDay">End Day</button>
      </li>
      <li class="nav-item dropdown pr-3" @click="isDropdownOpen = !isDropdownOpen">
        <a
          class="nav-link dropdown-toggle"
          role="button"
          >
          Save & Load
        </a>
        <div class="dropdown-menu" :class="{ show: isDropdownOpen }" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#" @click="saveData()">Save Data</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#" @click="loadData()">Load Data</a>
        </div>
      </li>
      <li>
        <strong class="navbar-text">Funds: {{ funds | currency }}</strong>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
import { mapActions } from 'vuex';
import axios from 'axios';

export default {
  data() {
    return {
      isDropdownOpen: false
    }
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions({
      randomizeStocks: 'randomizeStocks',
      fetchData: 'loadData'
    }),
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      };
      axios.put('https://vuejs-stock-trader-5a1bd.firebaseio.com/data.json', data)
    },
    loadData() {
      this.fetchData();
    }
  }
}
</script>

<style lang="css" scoped>
</style>
