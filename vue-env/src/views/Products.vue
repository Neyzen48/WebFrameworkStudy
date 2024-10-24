<!-- src/views/Products.vue -->
<template>
  <main>
    <h2>Unsere Produkte</h2>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.title }}
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  name: 'ProductsComponent',
  data() {
    return {
      products: [],
    };
  },
  created() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
          this.products = data.slice(0, 10);
        });
  },
};
</script>

<style scoped>
/* Optionales Styling */
</style>
