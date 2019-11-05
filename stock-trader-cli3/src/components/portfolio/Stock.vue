<template lang="html">
  <div class="col-sm-6 col-md-4">
    <div class="card" style="width: 24rem;">
        <div class="card-header bg-info">
          <h3 class="card-title">
            {{ stock.name }}
            <small>(Price: {{ stock.price | currency }} | Quantity: {{ stock.quantity }})</small>
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
              :class=" { danger: insufficientQuantity }">
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button"
              @click="sellStock"
              :disabled="insufficientQuantity || quantity <= 0">{{ insufficientQuantity ? 'Not Enough Stocks' : 'Sell'}}</button>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

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
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    }
  },
  methods: {
    ...mapActions({
      placeSellOrder: 'sellStock'
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.placeSellOrder(order);
      this.quantity = 0;
    }
  },
}
</script>

<style lang="css">
.danger {
  border: 1px solid red;
}
</style>
