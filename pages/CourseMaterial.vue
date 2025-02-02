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
                  <span class="flex h-9 items-center">
                    <span class="relative z-10 flex size-8 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-800">
                      <CheckIcon class="size-5 text-white" aria-hidden="true" />
                    </span>
                  </span>

                  <span class="ml-4 flex min-w-0 flex-col">
                    <span class="text-sm font-medium text-gray-300">Step {{ stepIdx + 1 }} - {{ step.name }}</span>
                    <ul class="list-disc list-inside">
                      <li class="text-sm text-gray-400" v-for="(description, index) in step.descriptions" :key="index">{{ description }}</li>
                    </ul>
                  </span>
                </a>
              </template>

              <template v-else-if="step.status === 'current'">
                <div v-if="stepIdx !== steps.length - 1" class="absolute top-4 left-4 mt-0.5 -ml-px h-full w-0.5 bg-gray-300" aria-hidden="true" />
                <a :href="step.href" class="group relative flex items-start" aria-current="step">
                  <span class="flex h-9 items-center" aria-hidden="true">
                    <span class="relative z-10 flex size-8 items-center justify-center rounded-full border-2 border-indigo-600 bg-white">
                      <span class="size-2.5 rounded-full bg-indigo-600" />
                    </span> 
                  </span>
                  <span class="ml-4 flex min-w-0 flex-col">
                    <span class="text-sm font-medium text-gray-300">Step {{ stepIdx + 1 }} - {{ step.name }}</span>
                    <ul class="list-disc list-inside">
                      <li class="text-sm text-gray-400" v-for="(description, index) in step.descriptions" :key="index">{{ description }}</li>
                    </ul>
                  </span>
                </a>
              </template>

            <template v-else>
              <div v-if="stepIdx !== steps.length - 1" class="absolute top-4 left-4 mt-0.5 -ml-px h-full w-0.5 bg-gray-300" aria-hidden="true" />
              <a :href="step.href" class="group relative flex items-start">
                <span class="flex h-9 items-center" aria-hidden="true">
                  <span class="relative z-10 flex size-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white group-hover:border-gray-400">
                    <span class="size-2.5 rounded-full bg-transparent group-hover:bg-gray-300" />
                  </span>
                </span>
                <span class="ml-4 flex min-w-0 flex-col">
                  <span class="text-sm font-medium text-gray-300">Step {{ stepIdx + 1 }} - {{ step.name }}</span>
                  <ul class="list-disc list-inside">
                    <li class="text-sm text-gray-400" v-for="(description, index) in step.descriptions" :key="index">{{ description }}</li>
                  </ul>
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
    name: 'Learn the essentials of Frontend Development (still in progress)',
    descriptions: [
      'Learn JUST the essentials of HTML & CSS, stop watching 30 hours of videos!', 
      'Master the fundamentals of JavaScript, the language of the web.',
      'Learn what TypeScript is, how to use it & why it\'s useful.',
      'Understand how JavaScript frameworks actually work, how to use them and learn Vue.JS',
    ],
    status: 'complete'
  },
  {
    name: 'Complete Coding Challenges (still in progress)',
    descriptions: [
      'Complete coding challenges to reinforce your learning',
      'Understanding how to use the fundamentals by actually solving practical problems',
    ],
    status: 'complete',
  },
  { 
    name: 'Learn the essentials of Backend Development (coming March 2025)',
    descriptions: [
      'Take JavaScript to the Server with Node.js & Express.js',
      'Build RESTful APIs with all the best practises',
      'Learn how to use a database, such as Mysql, to store your data.',
    ], 
  status: 'current' 
  },
  {
    name: 'Outside of code and everything in between (coming April 2025)',
    descriptions: [
      'Understand git & GitHub, how to use them to collaborate with others & manage your code',
      'Learn the testing pyramid and the different strategies for testing your code',
    ],
    status: 'upcoming',
  },
  { 
    name: 'Learn how web apps work end to end (coming May 2025)', 
    descriptions: [
      'Learn how to build a full stack web app, from the server to the client.',
      'Understand how all the parts work together, so you can build an entire app from scratch.',
    ],
    status: 'upcoming' 
  },
  { 
    name: 'Build Facebook, Instagram, Netflix, X and AirBnB clones (coming June 2025)', 
    descriptions: [
      'Build clones to really understand how complex apps work',
      'Break down multiple parts of apps, understanding how they work together',
      'Have fun learning to code by actually coding, the best way to learn!',
      'Put all your skills learned into practice and making sure the knowledge sticks'
    ],
    status: 'upcoming' 
  },
  { 
    name: 'Deploy your app (coming July 2025)', 
    descriptions: [
      'Learn how to deploy your app to the cloud',
      'See how work out their on the internet for everyone to see and actually be able to use',
      'Learn how to use a cloud provider, such as AWS, to host your app.',
    ],
    status: 'upcoming' 
  },
  {
    name: 'Take on assignments, create you own apps and build your portfolio (coming August 2025)',
    descriptions: [
      'Take on assignments, create you own apps and build your portfolio',
      'Learning to build your own app, its hard but that\'s what this course is all about.',
      'We will be here, as part of the community, you will have support in building your app and taking on assignments'
    ]
  }
]
</script>