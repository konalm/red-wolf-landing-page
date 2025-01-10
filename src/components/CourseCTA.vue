<template>
  <div class="relative isolate overflow-hidden bg-gray-800">
    <div class="px-6 py-24 sm:px-6 sm:py-10 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <!-- <h2 class="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          What you will learn
        </h2> -->

        <!-- <p class="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-gray-300">
          Core concepts of JavaScript the right way
        </p> -->

        <!-- <p class="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-gray-300">I
          ncididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.
        </p> -->

        <div class="mt-10 flex items-center justify-center gap-x-6">
            <button type="button" class="inline-flex rounded-md bg-green-700 px-5 py-5 text-sm font-semibold text-white shadow-sm hover:bg-green-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              <PlayIcon class="-mr-0.5 size-5 mr-2" aria-hidden="true" />
              {{ buttonText }}
            </button>

          <a href="#" class="text-sm/6 font-semibold text-white">
            {{ secondaryButtonText }}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CheckCircleIcon, PlayIcon } from '@heroicons/vue/20/solid'

const buttonText = 'Start Watching'
const secondaryButtonText = '1 minute preview of this course'
</script>