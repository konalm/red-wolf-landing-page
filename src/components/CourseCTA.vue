<template>
  <div class="relative isolate overflow-hidden bg-gray-800">
    <div class="px-6 py-24 sm:px-6 sm:py-10 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <div class="mt-10 flex items-center justify-center gap-x-6">
            <button type="button" 
              class="inline-flex rounded-md bg-green-700 px-5 py-5 text-sm font-semibold text-white shadow-sm hover:bg-green-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              @click="$emit('gotToCourseVideos')"
            >
              <PlayIcon class="-mr-0.5 size-5 mr-2" aria-hidden="true"/>
              {{ buttonText }}
            </button>

          <a href="#" class="text-sm/6 font-semibold text-white" @click="$emit('preview-click')">
            {{ secondaryButtonText }}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>

      <!-- Add this at the end of template, before closing template tag -->
  <div v-if="showPreview" 
    class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    @click="showPreview = false">
    <div class="w-full max-w-2xl aspect-video">
      <iframe
        ref="videoPlayer"
        src="https://customer-cigaee6xmg0zgxhq.cloudflarestream.com/e1905766c033f9f40fc910a8756f08f0/iframe"
        class="absolute top-0 left-0 w-full h-full"
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
        allowfullscreen="true"
    ></iframe>
    </div>
  </div>
  </div>
</template>

<script setup lang="ts">
import { CheckCircleIcon, PlayIcon, PlayCircleIcon } from '@heroicons/vue/20/solid'
import { ref } from 'vue'

const showPreview = ref(false)

const buttonText = 'Start Watching'
const secondaryButtonText = '1 minute preview of this course'


const emit = defineEmits(['preview-click', 'gotToCourseVideos'])
</script>