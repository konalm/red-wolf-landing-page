<template>
  <div class="bg-gray-800 sm:py-32">

    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <ul role="list" class="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8">
        <li v-for="client in clients" :key="client.id" class="overflow-hidden rounded-xl border border-gray-700">
          <div class="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-700 p-6">
            <img :src="client.imageUrl" :alt="client.name" class="size-12 flex-none rounded-lg bg-gray-700 object-cover ring-1 ring-gray-900/10" />

            <div class="text-sm/6 font-medium text-gray-300">{{ client.name }}</div>
  
            <Menu as="div" class="relative ml-auto">
              <MenuButton class="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-100">
                <span class="sr-only">Open options</span>
                <EllipsisHorizontalIcon class="size-5" aria-hidden="true" />
              </MenuButton>

              <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                <MenuItems class="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-gray-700 py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                  <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-50 outline-none' : '', 'block px-3 py-1 text-sm/6 text-gray-900']"
                      >View<span class="sr-only">, {{ client.name }}</span></a
                    >
                  </MenuItem>
                  
                  <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-50 outline-none' : '', 'block px-3 py-1 text-sm/6 text-gray-900']"
                      >Edit<span class="sr-only">, {{ client.name }}</span></a
                    >
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>

          <dl class="-my-3 divide-y divide-gray-700 px-6 py-4 text-sm/6">
            <div class="flex justify-between gap-x-4 py-3">
              <dt class="text-gray-500">Difficultly Level</dt>
              <dd class="flex items-start gap-x-2">
                <div class="font-medium text-gray-300">{{ client.fields.level }}</div>
              </dd>
            </div>

            <div class="flex justify-between gap-x-4 py-3">
              <dt class="text-gray-500">Material</dt>
              <dd class="text-gray-300">
                <time :datetime="client.fields.dateTime">{{ client.fields.type }}</time>
              </dd>
            </div>
  
            <div class="flex justify-between gap-x-4 py-3">
              <dt class="text-gray-500">Duration</dt>
              <dd class="flex items-start gap-x-2">
                <div class="font-medium text-gray-300">{{ client.fields.duration }}</div>
              </dd>
            </div>

            <div class="flex justify-center gap-x-4 py-3">
              <dd class="flex items-center gap-x-2 w-full">
                  <button type="button" class="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 w-full">
                    Enter Course
                  </button>
              </dd>
            </div>


          </dl>
            </li>
          </ul>
    </div>
  </div>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { EllipsisHorizontalIcon } from '@heroicons/vue/20/solid'

// const statuses = {
//   Paid: 'text-green-700 bg-green-50 ring-green-600/20',
//   Withdraw: 'text-gray-600 bg-gray-50 ring-gray-500/10',
//   Overdue: 'text-red-700 bg-red-50 ring-red-600/10',
// }

const clients = [
  {
    id: 1,
    name: 'JavaScript Fundamentals',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png?20141107110902',
    fields: { type: 'Video Series', duration: '10 hrs', level: 'Beginner', status: 'Overdue' },
  },
  {
    id: 2,
    name: 'HTML Essentials',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/512px-HTML5_Badge.svg.png?20110131171049',
    fields: { type: 'Video Series', duration: '10 hrs', level: 'Beginner', status: 'Paid' },
  },
  {
    id: 3,
    name: 'CSS Essentials',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/512px-CSS3_logo.svg.png?20210705212817',
    fields: { type: 'Video Series', duration: '10 hrs', level: 'Beginner', status: 'Paid' },
  },
    {
    id: 4,
    name: 'TypeScript Fundamentals',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201',
    fields: { type: 'Video Series', duration: '10 hrs', level: 'Beginner', status: 'Overdue' },
  },
  {
    id: 5,
    name: 'Vue.JS in a Nutshell',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/512px-Vue.js_Logo_2.svg.png?20170805121431',
    fields: { type: 'Video Series', duration: '10 hrs', level: 'Beginner', status: 'Paid' },
  },
  {
    id: 6,
    name: 'Node.JS',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/512px-Node.js_logo.svg.png?20170401104312',
    fields: { type: 'Video Series', duration: '10 hrs', level: 'Beginner', status: 'Paid' },
  },
]
</script>