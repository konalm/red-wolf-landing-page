<template>
  <Header v-if="!isLoggedInMember()" />
  <HeaderMember v-if="isLoggedInMember()" />

  <div class="min-h-screen bg-gray-800 px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
    <div class="mx-auto max-w-max">
      <main class="sm:flex">
        <p class="text-4xl font-bold tracking-tight text-indigo-600 sm:text-5xl">{{ error?.statusCode || '404' }}</p>
        <div class="sm:ml-6">
          <div class="sm:border-l sm:border-gray-700 sm:pl-6">
            <h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl">{{ error?.statusMessage || 'Page not found' }}</h1>
            <p class="mt-1 text-base text-gray-400">Please check the URL in the address bar and try again.</p>
          </div>
          <div class="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
            <button
              @click="handleError"
              class="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </button>
          </div>
        </div>
      </main>
    </div>
  </div>

  <Footer v-if="!isLoggedInMember()" />
</template>

<script setup lang="ts">
import Header from './src/components/Header.vue'
import Footer from './src/components/Footer.vue'
import HeaderMember from './src/components/HeaderMember.vue'

const props = defineProps({
  error: Object
})

const handleError = () => {
  // Clear the error and return to homepage
  clearError()
  navigateTo('/')
}

function isLoggedInMember() {
  const authToken = localStorage.getItem('auth_token')

  console.log('AUTH TOKEN ', authToken)

  if (authToken) {
    return true
  }

  return false
}
</script>