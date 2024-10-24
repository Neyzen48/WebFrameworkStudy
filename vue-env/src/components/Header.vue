<!-- src/components/Header.vue -->
<template>
  <header>
    <h1>Test-Webanwendung</h1>
    <Navigation />
  </header>
</template>

<script>
import Navigation from './Navigation.vue';

export default {
  name: 'HeaderComponent',
  components: {
    Navigation,
  },
};
</script>

<style scoped>
/* Optionales Styling */
</style>
