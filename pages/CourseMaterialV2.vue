<template>
  <div class="bg-gray-800 sm:py-32 flex justify-center items-center">
    <div class="mx-auto max-w-5xl px-6 lg:px-8">
      <nav aria-label="Progress">
        <ol role="list" class="overflow-hidden">
          <li v-for="(step, stepIdx) in steps" :key="step.name" :class="[stepIdx !== steps.length - 1 ? 'pb-10' : '', 'relative']">
            <template v-if="step.status === 'complete'">
              <div v-if="stepIdx !== steps.length - 1" 
                class="absolute top-4 left-4 mt-0.5 -ml-px h-full w-0.5 bg-indigo-600" 
                aria-hidden="true" 
              />
                <a :href="step.href" 
                  class="group relative flex items-start"
                >
                  <span class="text-sm font-medium text-gray-300 w-8">Step {{ stepIdx + 1 }}</span>
                  <span class="flex h-9 items-center">
                    <span class="relative z-10 flex size-8 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-800">
                      <CheckIcon class="size-5 text-white" aria-hidden="true" />
                    </span>
                  </span>
                  <span class="ml-4 flex min-w-0 flex-col">
                    <span class="text-sm font-medium text-gray-300">{{ step.name }}</span>
                    <span class="text-sm text-gray-400">{{ step.description }}</span>
                  </span>
                </a>
              </template>

              <template v-else-if="step.status === 'current'">
                <div v-if="stepIdx !== steps.length - 1" class="absolute top-4 left-4 mt-0.5 -ml-px h-full w-0.5 bg-gray-300" aria-hidden="true" />
                <a :href="step.href" class="group relative flex items-start" aria-current="step">
                  <span class="text-sm font-medium text-gray-300 w-8">{{ stepIdx + 1 }}</span>
                  <span class="flex h-9 items-center" aria-hidden="true">
                    <span class="relative z-10 flex size-8 items-center justify-center rounded-full border-2 border-indigo-600 bg-white">
                      <span class="size-2.5 rounded-full bg-indigo-600" />
                    </span> 
                  </span>
                  <span class="ml-4 flex min-w-0 flex-col">
                    <span class="text-sm font-medium text-gray-300">{{ step.name }}</span>
                    <span class="text-sm text-gray-400">{{ step.description }}</span>
                  </span>
                </a>
              </template>

            <template v-else>
              <div v-if="stepIdx !== steps.length - 1" class="absolute top-4 left-4 mt-0.5 -ml-px h-full w-0.5 bg-gray-300" aria-hidden="true" />
              <a :href="step.href" class="group relative flex items-start">
                <span class="text-sm font-medium text-gray-300 w-8">{{ stepIdx + 1 }}</span>
                <span class="flex h-9 items-center" aria-hidden="true">
                  <span class="relative z-10 flex size-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white group-hover:border-gray-400">
                    <span class="size-2.5 rounded-full bg-transparent group-hover:bg-gray-300" />
                  </span>
                </span>
                <span class="ml-4 flex min-w-0 flex-col">
                  <span class="text-sm font-medium text-gray-300">{{ step.name }}</span>
                  <span class="text-sm text-gray-400">{{ step.description }}</span>
                </span>
              </a>
            </template>
          </li>
        </ol>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { CheckIcon } from '@heroicons/vue/20/solid'

const steps = [
  { 
    name: 'Learn the Fundamentals', 
    description: '', 
    status: 'complete' 
  },
  {
    name: 'Complete Coding Challenges',
    description: '',
    status: 'current',
  },
  { 
    name: 'Learn how web apps work end to end', 
    description: '',
    status: 'upcoming' 
  },
  { 
    name: 'Build Facebook, Instagram, Netflix and X clones', 
    description: '',
    status: 'upcoming' 
  },
  { 
    name: 'Deploy your app', 
    description: '',
    status: 'upcoming' 
  },
  {
    name: 'Take on assignments, create you own apps and build your portfolio',
    status: 'upcoming'
  }
]
</script>