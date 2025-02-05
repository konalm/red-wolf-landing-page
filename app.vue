<template>
  <!-- HEADER -->
<Header v-if="!isLoggedInMember()" />
<HeaderMember v-if="!isVideoRoute &&isLoggedInMember()" />

  <!-- PAGE -->
   <NuxtPage />

  <Footer v-if="!isLoggedInMember()" />
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import Header from './src/components/Header.vue'
import Footer from './src/components/Footer.vue'
import HeaderMember from './src/components/HeaderMember.vue'

const route = useRoute()
const isVideoRoute = computed(() => route.path.startsWith('/videos/'))

function isLoggedInMember() {
  const authToken = localStorage.getItem('auth_token')

  if (authToken) {
    return true
  }

  return false
}

</script>
