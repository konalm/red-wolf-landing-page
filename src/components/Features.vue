<template>
  <div class="bg-gray-800 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-base/7 font-semibold text-indigo-400">
          {{ description }}
        </h2>

        <p class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {{ title }}
        </p>
        <!-- <p class="mt-6 text-lg/8 text-gray-300">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
          impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis.
        </p> -->
      </div>
      <dl
        class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base/7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-16">
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
  ClockIcon,
  StarIcon,
  CodeBracketIcon,
  UserGroupIcon,
  ChatBubbleLeftIcon
} from '@heroicons/vue/20/solid'

const title = ref('Straight to the point, hands on learning with expert guidance')

const description = ref('Perfect to launch your career in Tech or learn how to build your own SASS')

const features = [
  {
    name: 'Bite-Sized Digestable Lessons',
    description: 'Each lesson is straight forward and to the point.',
    icon: ClockIcon
  },
  {
    name: 'Key Skills',
    description: 'Learn all the important technologies required to build end to end web apps and make yourself employable.',
    icon: StarIcon,
  },
  {
    name: 'Learn by actually Coding',
    description: 'Lets cut through hundreds of hours of tutorials. Learn as you build awesome apps',
    icon: CodeBracketIcon,
  },
  {
    name: 'Community',
    description: 'Join an active community of like minded developers on the same journey as you',
    icon: UserGroupIcon,
  },
  {
    name: 'Mentor',
    description: 'Access to a mentor that can give you expert guidance',
    icon: ChatBubbleLeftIcon
  }
]
</script>