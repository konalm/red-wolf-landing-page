<template>
  <div class="bg-gray-800 py-24 sm:py-4">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <!-- <h2 class="text-base/7 font-semibold text-indigo-400">
          Everything you need
        </h2> -->

        <p class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          What you will learn
        </p>

        <!-- <p class="mt-6 text-lg/8 text-gray-300">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis.
        </p> -->

      </div>
      <dl class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base/7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-16">
        <div v-for="feature in features" :key="feature.name" class="relative pl-9">
          <dt class="inline font-semibold text-white">
            <component :is="feature.icon" class="absolute left-1 top-1 size-5 text-indigo-500" aria-hidden="true" />
            {{ feature.name }}
          </dt>
          {{ ' ' }}
          <dd class="inline">{{ feature.description }}</dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup>
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
  CheckIcon
} from '@heroicons/vue/20/solid'

const features = [
  {
    name: 'Everything you need to begin coding in JavaScript',
    description: '',
    icon: CheckIcon,
  },
  {
    name: 'JavaScript the right way with best practises',
    description: '',
    icon: CheckIcon,
  },
  {
    name: 'Core concepts of JavaScript that make it the language that it is',
    description: '',
    icon: CheckIcon,
  },
  {
    name: 'Common questions that come up in Interviews and how to answer them',
    description: '',
    icon: CheckIcon,
  },
  {
    name: 'Important aspects vital to mastering JavaScript to seperate yourself from 95% of developers',
    description: '',
    icon: CheckIcon,
  },
]
</script>