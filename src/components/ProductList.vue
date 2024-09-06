// src/components/ProductList.vue
<template>
  <div class="product-list">
    <div v-for="product in products" :key="product.id" class="product">
      <img :src="product.image" :alt="product.name" />
      <h2>{{ product.name }}</h2>
      <p>{{ product.price }}</p> 
      <button @click="addToCart(product)">Add to Cart</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Product } from '../types/Product';

export default defineComponent({
  props: {
    products: {
      type: Array as PropType<Product[]>,
      required: true,
    },
  },
  emits: ['add-to-cart'], 
  methods: {
    addToCart(product: Product) {
      this.$emit('add-to-cart', product);
    },
  },
});
</script>