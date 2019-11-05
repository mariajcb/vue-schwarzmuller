<template lang="html">
  <div class="container-fluid">
    <h1>Trade or View Your Portfolio</h1>
    <h6>You may save & load your data</h6>
    <h6>Click on 'End Day' to begin a New Day!</h6>
    <hr>
    <p> Your Funds: {{ funds | currency }} </p>
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
}
</script>

<style lang="css" scoped>
</style>
