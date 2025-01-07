<template>
  <div class="overflow-hidden bg-gray-800 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div class="lg:pr-8 lg:pt-4">
          <div class="lg:max-w-lg">
            <h2 class="text-base/7 font-semibold text-indigo-400">Beginner</h2>
            <p class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {{ title }}
            </p>
            <p class="mt-6 text-lg/8 text-gray-300"> {{  description }}</p>
            <dl class="mt-10 max-w-xl space-y-8 text-base/7 text-gray-300 lg:max-w-none">
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
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png?20141107110902"
          alt="Product screenshot" 
          class="w-[20rem] max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-[45rem] md:-ml-4 lg:-ml-0" width="1432" height="542" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/vue/20/solid'

const title = 'JavaScript Fundamentals'

const description = 'Learn the entire fundamentals of JavaScript so you can start building apps with all the best practises'

const features = [
  {
    name: 'Inteview questions and answers.',
    description:
      'Learn the most common interview questions and answers for JavaScript',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'A layer deeper. Not just what, but why and best practises',
    description: 'Not just what, but why and best practises',
    icon: LockClosedIcon,
  },
  {
    name: 'Database backups.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  },
]
</script>