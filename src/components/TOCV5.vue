<template>
  <div class="overflow-hidden bg-gray-800 py-24 sm:py-1">
     <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <ul role="list" class="divide-y divide-gray-700 bg-gray-800">
          <!-- Loop Chapters -->
          <li v-for="item in navigation" :key="item.name" class="flex justify-between gap-x-6 py-5">
            
            <Disclosure as="div" v-slot="{ open }" class="disclosure-container">
              <DisclosureButton 
                class="flex justify-between disclosure-button"
              >
                <div class="flex min-w-0 gap-x-4">
                  <ChevronRightIcon 
                    :class="[open ? 'rotate-90' : '']" 
                    class="size-12 flex-none text-indigo-500"
                    aria-hidden="true" 
                  />
        
                  <div class="min-w-0 flex-auto">
                    <p class="text-sm/6 font-semibold text-white">{{ item.name }}</p>
                    <p class="mt-1 truncate text-xs/5 text-gray-400">{{ item.email }}</p>
                  </div>
                </div>

                <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                  <p class="text-sm/6 text-white">{{ item.role }}</p>
                  <p v-if="item.lastSeen" class="mt-1 text-xs/5 text-gray-400">
                    <p class="text-xs/5 text-gray-400 text-yellow-400">In Progress</p>
                  </p>
                  <div v-else class="mt-1 flex items-center gap-x-1.5">
                    <p class="text-xs/5 text-gray-400 text-green-400">Completed</p>
                  </div>
                </div>
              </DisclosureButton>


              <DisclosurePanel as="ul" class="mt-1 px-2">
                <!-- Loop Children -->
                <li v-for="subItem in item.children" :key="subItem.name">
                  <DisclosureButton 
                    as="a" 
                    :href="subItem.href" 
                    class="hover:bg-gray-600 block rounded-md py-2 pl-9 pr-2 text-sm/6 text-gray-200"
                  >
                    {{ subItem.name }}
                  </DisclosureButton>
                </li>
              </DisclosurePanel>
            </Disclosure>
          </li>
        </ul>
      <!-- </nav> -->
      </div>
  </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronRightIcon } from '@heroicons/vue/20/solid'

const navigation = [
  { 
    name: 'Introduction',
    email: 'Chapter 1',
    current: false,
    role: '12 Lessons ( 33m )',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
    children: [
      { name: 'Engineering', href: '#' },
      { name: 'Human Resources', href: '#' },
      { name: 'Customer Success', href: '#' },
    ]
  },
  {
    name: 'Teams',
    email: 'Chapter 2',
    current: false,
    role: '12 Lessons ( 33m )',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
    children: [
      { name: 'Engineering', href: '#' },
      { name: 'Human Resources', href: '#' },
      { name: 'Customer Success', href: '#' },
    ],
  },
  {
    name: 'Projects',
    email: 'Chapter 3',
    current: false,
    role: '12 Lessons ( 33m )',
    children: [
      { name: 'GraphQL API', href: '#' },
      { name: 'iOS App', href: '#' },
      { name: 'Android App', href: '#' },
      { name: 'New Customer Portal', href: '#' },
    ],
  },
  { 
    name: 'Calendar', 
    email: 'Chapter 4',
    current: false,
    role: '12 Lessons ( 33m )',
    children: [
      { name: 'GraphQL API', href: '#' },
      { name: 'iOS App', href: '#' },
      { name: 'Android App', href: '#' },
      { name: 'New Customer Portal', href: '#' },
    ],
  }
]
</script>

<style scoped>
.disclosure-container {
  width: 100%
}

.disclosure-button {
  width: 100%
}

</style>