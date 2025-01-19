<template>
  <div class="bg-gray-800 py-24 sm:py-4">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <p class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          What you will learn
        </p>
      </div>

      <dl class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base/7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-16">
        <div v-for="outcome in outcomes" :key="outcome" class="relative pl-9">
          <dt class="inline font-semibold text-white">
            <component :is="CheckIcon" class="absolute left-1 top-1 size-5 text-indigo-500" aria-hidden="true" />
            {{ outcome }}
          </dt>
          {{ ' ' }}
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup>
import { CheckIcon } from '@heroicons/vue/20/solid'

defineProps({
  outcomes: {
    type: Array,
    required: true,
  }
})

</script>

