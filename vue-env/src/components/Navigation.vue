<!-- src/components/Navigation.vue -->
<template>
  <nav>
    <ul>
      <li><router-link to="/">Startseite</router-link></li>
      <li><router-link to="/about">Über Uns</router-link></li>
      <li><router-link to="/products">Produkte</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavigationComponent',
};
</script>

<style scoped>
/* Optionales Styling */
</style>
