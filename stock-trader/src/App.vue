<template>
  <div class="container">
      <app-header></app-header>
      <div class="row">
          <div class="col-xs-12">
              <router-view></router-view>
          </div>
      </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
export default {
  components: {
    appHeader: Header,
  },
  created() {
    this.$store.dispatch('initStocks');
  },
};
</script>

<style>
body {
  padding: 1rem;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
