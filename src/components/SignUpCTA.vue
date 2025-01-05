<template>
  <div class="relative isolate overflow-hidden bg-gray-800">
    <div class="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {{ header }}
        </h2>
        <p class="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-gray-300">
          {{ description }}
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <a href="#"
            class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Check out courses
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const header = 'Check out our course material'
const description = `we wont you to be sure before making any commitments, so be sure to check out
 the videos and coding challenges and see if you like what you see`
</script>