<template>
  <div class="bg-gray-800 sm:py-32">

    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <ul role="list" class="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8">
        <li v-for="course in courses" :key="course.UUID" class="overflow-hidden rounded-xl border border-gray-700">
          <div class="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-700 p-6">
            <img :src="course.imagePath" class="size-12 flex-none rounded-lg bg-gray-700 object-cover ring-1 ring-gray-900/10" />

            <div class="text-sm/6 font-medium text-gray-300">
              <p v-on:click="navigateToCourse(course.UUID)" class="cursor-pointer hover:text-gray-100">
                {{ course.name }}
              </p>
            </div>
  
            <Menu as="div" class="relative ml-auto">
              <MenuButton class="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-100">
                <span class="sr-only">Open options</span>
                <EllipsisHorizontalIcon class="size-5" aria-hidden="true" />
              </MenuButton>

              <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                <MenuItems class="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-gray-700 py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                  <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-50 outline-none' : '', 'block px-3 py-1 text-sm/6 text-gray-900']"
                      >View<span class="sr-only">, {{ course.name }}</span></a
                    >
                  </MenuItem>
                  
                  <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-50 outline-none' : '', 'block px-3 py-1 text-sm/6 text-gray-900']"
                      >Edit<span class="sr-only">, {{ course.name }}</span></a
                    >
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>

          <!-- <dl class="-my-3 divide-y divide-gray-700 px-6 py-4 text-sm/6"> -->
          <dl class="-my-3 px-6 py-4 text-sm/6">
            <div class="divide-y divide-gray-700">
              <div class="flex justify-between gap-x-4 py-3">
                <dt class="text-gray-500">Difficultly Level</dt>
                <dd class="flex items-start gap-x-2">
                  <div class="font-medium text-gray-300">{{ course.belt }} Belt</div>
                </dd>
              </div>

              <div class="flex justify-between gap-x-4 py-3">
                <dt class="text-gray-500">Material</dt>
                <dd class="text-gray-300">
                  Video Series
                </dd>
              </div>
    
              <div class="flex justify-between gap-x-4 py-3">
                <dt class="text-gray-500">Duration</dt>
                <dd class="flex items-start gap-x-2">
                  <div class="font-medium text-gray-300">
                    11 hours
                  </div>
                </dd>
              </div>

                
              <div class="flex justify-between gap-x-4 py-4 w-100">
                <dd class="flex items-start gap-x-2 full-width">
                  <div class="font-medium text-gray-300 full-width">
                    <div class="w-100 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div class="bg-green-600 h-2.5 rounded-full w-100" 
                        :style="{ width: `${course?.progress?.percentageComplete}%` }"
                      ></div>
                    </div>
                  </div>
                </dd>
              </div>
            </div>
      
            <div class="flex justify-center gap-x-4 py-3">
              <dd class="flex items-center gap-x-2 w-full">
                <button 
                  v-if="!course?.progress?.started"
                  type="button" 
                  @click="navigateToCourse(course.UUID)"
                  class="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 w-full"
                >
                  Enter Course
                </button>

                <button 
                  v-if="course?.progress?.started"
                  type="button" 
                  @click="navigateToCourseVideos(course.UUID)"
                  class="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 w-full"
                >
                   Continue <VideoCameraIcon class="size-5 -ml-1 mr-1 inline-block ml-2" aria-hidden="true" />
                </button>
              </dd>
            </div>
          </dl>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { EllipsisHorizontalIcon } from '@heroicons/vue/20/solid'
import * as courseHttp from '~/src/http/course.http'
import type { MemberVideoCourse } from '~/src/types/videoCourse.types'
import { VideoCameraIcon } from '@heroicons/vue/20/solid'
import { getCourseVideoForUser } from '~/src/http/video.http';


const courses = ref<Array<MemberVideoCourse>>([])

onMounted(() => {
  uploadCourses()
})

async function navigateToCourse(uuid: string) {
  await navigateTo(`video-courses/${uuid}`)
}

async function uploadCourses() {
  courses.value = await courseHttp.getMemberCourses()
}

async function navigateToCourseVideos(courseUUID: string) {
  const video = await getCourseVideoForUser(courseUUID);

  navigateTo(`/videos/${video.UUID}`);
}

</script>

<style scoped>
.full-width {
  width: 100%;
}
</style>