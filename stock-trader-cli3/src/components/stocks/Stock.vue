<template lang="html">
  <div class="col-sm-6 col-md-4">
    <div class="card" style="width: 25rem;">
        <div class="card-header bg-success">
          <h3 class="card-title">
            {{ stock.name }}
            <small>(Price: {{ stock.price | currency }})</small>
          </h3>
        </div>

        <div class="card-body">
          <div class="input-group mb-3">
            <input
              type="number"
              class="form-control"
              placeholder="Quantity"
              aria-label="Quantity of stocks"
              aria-describedby="basic-addon2"
              v-model="quantity"
              :class="{ danger: insufficientFunds }">
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button"
              @click="buyStock"
              :disabled="insufficientFunds || quantity <= 0">{{ insufficientFunds ? 'Insufficient Funds' : 'Buy'}}</button>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0
    }
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds;
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      console.log(order);
      this.$store.dispatch('buyStock', order);
      return this.quantity = 0;
    },
  },
}
</script>

<style lang="css" scoped>
.danger {
  border: 1px solid red;
}
</style>
