<template>
  <!-- HEADER -->
<Header v-if="!isLoggedInMember()" />
  <!-- <Header /> -->
<HeaderMember v-if="isLoggedInMember()" />

  <!-- PAGE -->
  <!-- <RouterView /> -->
   <NuxtPage />

  <Footer v-if="!isLoggedInMember()" />
  <!-- <Footer  /> -->
</template>

<script setup lang="ts">
import Header from './src/components/Header.vue'
import Footer from './src/components/Footer.vue'
import HeaderMember from './src/components/HeaderMember.vue'

function isLoggedInMember() {
  const authToken = localStorage.getItem('auth_token')

  console.log('AUTH TOKEN ', authToken)

  if (authToken) {
    return true
  }

  return false
}

</script>
