// src/App.vue
<template>
  <div class="container">
    <h1>Shopping Cart</h1>
    <ProductList :products="products" @add-to-cart="addToCart" />
    <ShoppingCart :items="cartItems" @remove-from-cart="removeFromCart" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProductList from './components/ProductList.vue';
import ShoppingCart from './components/ShoppingCart.vue';
import { Product } from './types/Product.ts';

export default defineComponent({
  components: {
    ProductList,
    ShoppingCart,
  },
  data() {
    return {
      products: [] as Product[],
      cartItems: [] as Product[],
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      this.products = [
        { id: 1, name: 'Product 1', price: 19.99, image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Product 2', price: 24.95, image: 'https://via.placeholder.com/150' },
        // ... more products
      ];
    },
    addToCart(product: Product) {
      // 要求这里补充完成
      
    },
    removeFromCart(item: Product) {
      
    },
  },
});
</script>