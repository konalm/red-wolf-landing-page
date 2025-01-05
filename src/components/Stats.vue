<template>
  <div class="bg-gray-800 py-24 sm:py-20">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
        <div v-for="stat in stats" :key="stat.id" class="mx-auto flex max-w-xs flex-col gap-y-4">
          <dt class="text-base/7 text-gray-400">{{ stat.name }}</dt>
          <dd class="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">{{ stat.value }}</dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup>
const stats = [
  { id: 1, name: 'Of video content', value: '10 Hours' },
  { id: 2, name: 'Coding Challenges', value: '150 ' },
  { id: 3, name: 'Members in the Community', value: '10' },
]
</script>