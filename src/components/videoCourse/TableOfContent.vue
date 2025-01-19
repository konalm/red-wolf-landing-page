<template>
  <div class="overflow-hidden bg-gray-800 py-24 sm:py-12">
     <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 class="text-2xl text-base/1 font-semibold text-indigo-400 mb-1">Course Content</h2>
      <h3 class="text-base/1  text-gray-400 mb-3">5 hours . 10 Chapters . 200 Lessons</h3>

      <!-- {{ props.lessons}} -->

        <ul role="list" class="divide-y divide-gray-700 bg-gray-800">
          <!-- Loop Chapters -->
          <li v-for="(lesson, index) in props.lessons" :key="lesson.chapter" 
            class="flex justify-between gap-x-6 py-0 bg-gray-800"
          >
            <Disclosure as="div" v-slot="{ open }" class="disclosure-container">
              <DisclosureButton 
                class="flex justify-between disclosure-button py-3"
                style="border: 0px solid yellow;"
              >
                <div class="flex min-w-0 gap-x-4">
                  <ChevronRightIcon 
                    :class="[open ? 'rotate-90' : '']" 
                    class="size-12 flex-none text-indigo-500"
                    aria-hidden="true" 
                  />
        
                  <div class="min-w-0 flex-auto">
                    <p class="text-sm/6 font-semibold text-white">{{ lesson.chapter }}</p>
                    <p class="mt-1 truncate text-xs/5 text-gray-400">Chapter {{ index + 1 }}</p>
                  </div>
                </div>

                <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                  <!-- <p class="text-sm/6 text-white">{{ item.role }}</p> -->
                  <p class="text-sm/6 text-white"> pp 12 Lessons ( 33m ) {{ lesson.videos.length }}</p>
                  <!-- <p v-if="item.lastSeen" class="mt-1 text-xs/5 text-gray-400">
                    <p class="text-xs/5 text-gray-400 text-yellow-400">In Progress</p>
                  </p> -->
                  <!-- <div v-else class="mt-1 flex items-center gap-x-1.5">
                    <p class="text-xs/5 text-gray-400 text-green-400">Completed</p>
                  </div> -->
                  <!-- {{ lesson.videos }} -->
                </div>
              </DisclosureButton>


              <DisclosurePanel as="ul" 
                class="divide-y divide-gray-700 bg-gray-800 disclosure-panel" 
        
              >
              <!-- {{ lesson.videos }} -->
                <!-- Loop Children -->
                <li 
                  v-for="videoItem in lesson.videos" :key="videoItem.id" 
                  class="flex justify-between gap-x-6 py-5 pl-6 pr-6 hover:bg-gray-700"
                >
                  <DisclosureButton 
                    as="a" 
                    href="" 
                    class="flex justify-between disclosure-button"
                  >
                    <div class="flex min-w-0 gap-x-4">
                      <VideoCameraIcon 
                        class="size-6 flex-none text-indigo-500"
                        aria-hidden="true" 
                      />
          
                      <div class="min-w-0 flex-auto">
                        <p class="text-sm/6 font-semibold text-white">{{ videoItem.title }}</p>
                        <!-- <p class="mt-1 truncate text-xs/5 text-gray-400">{{ item.email }}</p> -->
                      </div>
                    </div>

                    <div class="hidden shrink-0 sm:flex sm:flex-row sm:items-end">
                      <p class="mt-1 text-xs/5 text-gray-400">
                        <!-- <span class="inline-flex items-center rounded-md bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/20">
                          Watched
                        </span> -->
                      </p>
                      <p class="text-sm/6 text-white pl-2">{{ videoItem.duration }}</p>
                    </div>
                  
                  </DisclosureButton>
                </li>
              </DisclosurePanel>
            </Disclosure>
          </li>
        </ul>
      </div>
  </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronRightIcon, VideoCameraIcon, PlayCircleIcon } from '@heroicons/vue/20/solid'
// import { LessonItem } from '../../types/videoCourse.types'

const props = defineProps({
  lessons: {
    type: Array,
    required: true
  }
})


</script>

<style scoped>
.disclosure-container {
  width: 100%
}

.disclosure-button {
  border: 0px solid yellow;
}

.disclosure-button, .disclosure-panel {
  width: 100%;
  /* border: 1px solid pink; */
}

.disclosure-panel {
  border: opx solid blue;
}

</style>