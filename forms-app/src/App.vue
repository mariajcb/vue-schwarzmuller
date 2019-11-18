<template>
  <div id="app">
    <TheHeader />
    <router-view></router-view>
  </div>
</template>

<script>
  import TheHeader from './components/header/TheHeader.vue'
  export default {
    name: 'app',
    components: {
      TheHeader
    },
    created() {
      this.$store.dispatch('tryAutoLogin')
    }
  }
</script>

<style>
  body, html {
    margin: 0;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
</style>
