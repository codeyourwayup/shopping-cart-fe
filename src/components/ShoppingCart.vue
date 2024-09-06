// src/components/ShoppingCart.vue
<template>
  <div class="shopping-cart">
    <h2>Cart</h2>
    <ul v-if="items.length > 0">
     
    </ul>
    <p v-else>Your cart is empty.</p>
    <p v-if="totalPrice > 0">Total: {{ totalPrice }}</p> 
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Product } from '../types/Product';

export default defineComponent({
  props: {
    items: {
      type: Array as PropType<Product[]>,
      required: true,
    },
  },
  emits: ['remove-from-cart'],
  methods: {
    removeFromCart(item: Product) {
      this.$emit('remove-from-cart', item);
    },
  },
  // this is frank
  computed: {
    totalPrice(): number {
      return this.items.reduce(
        (total, item) => total + item.price * item.quantity!, 
        0
      );
    },
  },
});
</script>