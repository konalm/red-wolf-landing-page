<template>
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog class="relative z-50 lg:hidden" @close="sidebarOpen = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-900/80" />
        </TransitionChild>

        <div class="fixed inset-0 flex">
          <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
            <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
              <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
                <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
                  <button type="button" class="-m-2.5 p-2.5" @click="sidebarOpen = false">
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="size-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>

              <!-- Mobile Sidebar -->
              <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-0 pb-0">
                <div class="flex h-16 shrink-0 items-center">
                  <h1 class="text-white text-1xl p-6">JavaScript Fundamentals</h1>
                </div>

                <nav class="flex flex-1 flex-col">
                  <ul role="list" class="flex flex-1 flex-col gap-y-7">
                    <!-- Chapter-->
                    <li v-for="chapter in chapters" :key="chapter.name">
                      <p class="bg-gray-700 text-white group flex gap-x-3 p-3 text-sm/6 font-semibold px-6 py-3">
                        {{  chapter.name }} ({{ chapter.duration }})
                      </p>

                      <!-- Lessons -->
                      <ul role="list" class="-mx-2 divide-y divide-gray-800">
                        <li v-for="item in navigation" :key="item.name">
                          <a :href="item.href" :class="[item.current ? 'bg-black text-white' : 'text-gray-400 hover:bg-black hover:text-white', 'group flex gap-x-3 py-3 px-6 text-sm/6 font-semibold']">
                            <component :is="item.icon" :class="[item.current ? 'text-white' : 'text-gray-200 group-hover:text-white', 'size-6 shrink-0']" aria-hidden="true" />
                            {{ item.name }}
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Desktop Sidebar -->
    <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <div class="flex grow flex-col gap-y-0 overflow-y-auto bg-gray-900 px-0 pb-4">
        <div class="flex h-16 shrink-0 items-center">
          <h1 class="text-white text-1xl p-6">JavaScript Fundamentals</h1>
        </div>

        <nav class="flex flex-1 flex-col">
          <ul role="list" class="flex flex-1 flex-col gap-y-3">
            <!-- Chapter-->
            <li v-for="chapter in chapters" :key="chapter.name">
              <p class="bg-gray-700 text-white group flex gap-x-3 p-3 text-sm/6 font-semibold px-6 py-3">
                {{  chapter.name }} ({{ chapter.duration }})
              </p>

              <!-- Lessons -->
              <ul role="list" class="-mx-2  divide-y divide-gray-800">
              <!-- <ul role="list" class="space-y-1"> -->
                <li v-for="item in navigation" :key="item.name">
                  <a :href="item.href" :class="[item.current ? 'bg-black text-white' : 'text-gray-400 hover:bg-black hover:text-white', 'group flex gap-x-3 py-3 px-6 text-sm/6 font-semibold']">
                    <component :is="item.icon" :class="[item.current ? 'text-white' : 'text-gray-200 group-hover:text-white', 'size-6 shrink-0']" aria-hidden="true" />
                    {{ item.name }}
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="lg:pl-72">
      <div class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-700 bg-gray-800 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
        <button type="button" class="-m-2.5 p-2.5 text-gray-700 lg:hidden" @click="sidebarOpen = true">
          <span class="sr-only">Open sidebar</span>
          <Bars3Icon class="size-6" aria-hidden="true" />
        </button>

        <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
          <!-- Home button -->
          <div class="grid flex-1 grid-cols-1">
            <button type="button" class="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                <HomeIcon class="size-6" aria-hidden="true" />
            </button>
          </div>

          <div class="flex items-center gap-x-4 lg:gap-x-6">
            <!-- Previous Lesson -->
            <div class="mt-0 flex items-center gap-x-6">
              <a href="#" class="text-sm/6 font-bold text-white">
                <span aria-hidden="true">←</span>
                Previous Lesson 
              </a>
            </div>

            <!-- Separator -->
            <div class="hidden lg:block lg:h-6 lg:w-px bg-gray-700" aria-hidden="true" />

            <!-- Complete and Continue button here -->
            <button type="button" 
              class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Complete and go to next lesson <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>

      <main class="py-0">
        <div class="px-0 sm:px-0 lg:px-0 video-container"> <!-- WANT THIS TO FILL THE REMAING SCREEN-->
          <div class="relative  h-full">
            <iframe
              src="https://customer-cigaee6xmg0zgxhq.cloudflarestream.com/e1905766c033f9f40fc910a8756f08f0/iframe"
              class="absolute top-0 left-0 w-full h-full"
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
              allowfullscreen="true"
            ></iframe>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon, MagnifyingGlassIcon, CheckIcon, CheckCircleIcon, PlayCircleIcon } from '@heroicons/vue/20/solid'

const videoId = 'e1905766c033f9f40fc910a8756f08f0'

const chapters = [
  { name: 'Chapter #1', duration: '10:00' },
  { name: 'Chapter #2', duration: '10:00' },
  { name: 'Chapter #3', duration: '10:00' },
  { name: 'Chapter #4', duration: '10:00' },
  { name: 'Chapter #5', duration: '10:00' },
  { name: 'Chapter #6', duration: '10:00' },
]

const navigation = [
  { name: 'Lesson #1 (00:00)', href: '#', icon: CheckCircleIcon, current: true },
  { name: 'Lesson #2 (11:11)', href: '#', icon: UsersIcon, current: false },
  { name: 'Lesson #3 (22:22)', href: '#', icon: PlayCircleIcon, current: false },
  { name: 'Lesson #4 (33:33)', href: '#', icon: CalendarIcon, current: false },
  { name: 'Lesson #5 (44:44)', href: '#', icon: CheckCircleIcon, current: false },
  { name: 'Lesson #6 (55:55)', href: '#', icon: CheckCircleIcon, current: false },
]
const teams = [
  { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
  { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
]
const userNavigation = [
  { name: 'Your profile', href: '#' },
  { name: 'Sign out', href: '#' },
]

const sidebarOpen = ref(false)
</script>

<style>
.video-container {
  border: 0px solid red;
  height: calc(100vh - 64px);
}
</style>
