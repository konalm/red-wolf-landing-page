<template>
  <!-- HEADER -->
<Header />

  <!-- PAGE -->
  <RouterView />

  <Footer />
</template>

<script setup lang="ts">
import Header from './src/components/Header.vue'
import Footer from './src/components/Footer.vue'

</script>