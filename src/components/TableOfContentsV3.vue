<template>
  <div class="overflow-hidden bg-gray-800 py-24 sm:py-1">
    <div class="mx-auto max-w-7xl px-6 lg:px-8" style="border: 1px solid red;">
      <ul role="list" class="divide-y divide-gray-700 bg-gray-800">
        <!-- Loop Chapters -->
        <li v-for="person in people" :key="person.email" class="flex justify-between gap-x-6 py-5">

          <div class="flex min-w-0 gap-x-4" style="border: 1px solid green;">
            <ChevronUpIcon class="size-12 flex-none text-indigo-500" aria-hidden="true" />

            <div class="min-w-0 flex-auto">
              <p class="text-sm/6 font-semibold text-white">{{ person.name }}</p>
              <p class="mt-1 truncate text-xs/5 text-gray-400">{{ person.email }}</p>
            </div>
          </div>

          <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p class="text-sm/6 text-white">{{ person.role }}</p>
            <p v-if="person.lastSeen" class="mt-1 text-xs/5 text-gray-400">
              <p class="text-xs/5 text-gray-400 text-yellow-400">In Progress</p>
            </p>

            <div v-else class="mt-1 flex items-center gap-x-1.5">
              <p class="text-xs/5 text-gray-400 text-green-400">Completed</p>
            </div>
          </div>

          <!-- <TableOfContentsV4 /> -->
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { PlayCircleIcon, ChevronUpIcon } from '@heroicons/vue/20/solid'
import TableOfContentsV4 from './TableOfContentsV4.vue'

const lessons = [
  {
    id: 1,
    name: 'Lesson 1',
    completed: true,
  },
  {
    id: 2,
    name: 'Lesson 2',
    completed: false,
  },
  {
    id: 3,
    name: 'Lesson 3',
    completed: false,
  },
]

const people = [
  {
    label: 'course',
    name: 'Introduction',
    email: 'Chapter 1',
    role: '12 Lessons ( 33m )',
    imageUrl: '',
    lastSeen: '',
    lastSeenDateTime: '',
  },
  {
    label: 'course',
    name: 'Variables',
    email: 'Chapter 2',
    role: '14 lessons ( 44m )',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    label: 'course',
    name: 'Arrays',
    email: 'Chapter 3',
    role: '10 lessons ( 28m )',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: null,
  },
  {
    label: 'course',
    name: 'Functions',
    email: 'Chapter 4',
    role: '12 lessons ( 33m )',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },

]
</script>