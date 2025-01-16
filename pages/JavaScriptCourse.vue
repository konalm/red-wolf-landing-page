<template>
  <div class="overflow-hidden bg-gray-800 py-10 sm:pt-20">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div class="lg:pr-8 lg:pt-4">
          <div class="lg:max-w-lg">
            <!-- <h2 class="text-base/7 font-semibold text-indigo-400">Video Series</h2> -->
            <p class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {{ title }}
            </p>

            <p class="mt-6 text-lg/8 text-gray-300">{{ description }}</p>

            <dl class="mt-10 max-w-xl space-y-8 text-base/7 text-gray-300 lg:max-w-none">
              <div v-for="feature in features" :key="feature.name" class="relative pl-9">
                <dt class="inline font-semibold text-white">
                  <component :is="feature.icon" 
                    class="absolute left-1 top-1 size-5 text-indigo-500" 
                    aria-hidden="true" 
                  />
                  {{ feature.name }}
                </dt>
                {{ ' ' }}
                <dd class="inline">{{ feature.description }}</dd>
              </div>
            </dl>
          </div>
        </div>

        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png?20141107110902"
          alt="Product screenshot" 
          class="w-[25rem] max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-[35rem] md:-ml-4 lg:-ml-0 mt-5" 
          width="800" 
          height="200" />
      </div>
    </div>
  </div>

  <!-- BUTTONS -->
  <CourseCTA @preview-click="scrollToPreview" />

  <!-- What you will learn -->
  <CourseCTAV2 />

  <CoursePreview ref="previewSection" />

  <TOCV5 />
</template>

<script setup>
import {
   CloudArrowUpIcon, LockClosedIcon, ServerIcon, ChartBarIcon, PlayCircleIcon, QuestionMarkCircleIcon,
   ClockIcon, ChatBubbleBottomCenterTextIcon, RectangleStackIcon, PencilSquareIcon
} from '@heroicons/vue/20/solid'
import TableOfContents from '../src/components/TableOfContents.vue'
import TableOfContentsV2 from '../src/components/TableOfContentsV2.vue'
import TableOfContentsV3 from '../src/components/TableOfContentsV3.vue'
import TOCV5 from '../src/components/TOCV5.vue'
import CourseCTA from '../src/components/CourseCTA.vue'
import CourseCTAV2 from '../src/components/CourseCTAV2.vue'
import CoursePreview from '../src/components/CoursePreview.vue'

const title = 'JavaScript Fundamentals'

const previewSection = ref(null)

const description = 'Learn the entire fundamentals of JavaScript so you can start coding apps with all the best practises'

const features = [
  {
    name: 'Beginner',
    icon: ChartBarIcon,
  },
  {
    name: '5 Hours',
    icon: PlayCircleIcon,
  },
  {
    name: '200 Lessons',
    icon: RectangleStackIcon,
  },
  {
    name: 'Inteview questions and answers',
    description: '',
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    name: 'Precise and to the point byte sized videos',
    description: '',
    icon: ClockIcon,
  },
  {
    name: 'Revision Notes',
    icon: PencilSquareIcon,
  }
]

const scrollToPreview = () => {
  console.log('scroll to preview');

  previewSection.value.$el.scrollIntoView({ behavior: 'smooth' })
  previewSection.value.playVideo()

  // You'll need to implement the video play logic in the CoursePreview component
}
</script>