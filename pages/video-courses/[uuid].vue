<template>
  <div class="overflow-hidden bg-gray-800 py-10 sm:pt-20">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div class="lg:pr-8 lg:pt-4">
          <div class="lg:max-w-lg">
            <p class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {{ course?.name }}
            </p>

            <p class="mt-6 text-lg/8 text-gray-300">{{ course?.description }}</p>

            <!-- Key Features-->
            <dl class="mt-10 max-w-xl space-y-8 text-base/7 text-gray-300 lg:max-w-none">
              <div v-for="feature in course?.keyFeatures" :key="feature.name" class="relative pl-9">
                <dt class="inline font-semibold text-white">
                  <component :is="getIcon(feature.icon)" 
                    class="absolute left-1 top-1 size-5 text-indigo-500" 
                    aria-hidden="true" 
                  />
                  {{ feature.name }}
                </dt>
                {{ ' ' }}
              </div>
            </dl>
          </div>
        </div>

        <img :src="course?.featureImageUrl"
          alt="Product screenshot" 
          class="w-[25rem] max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-[35rem] md:-ml-4 lg:-ml-0 mt-5" 
          width="800" 
          height="200" />
      </div>
    </div>
  </div>

  <!-- BUTTONS -->
  <CourseCTA @preview-click="scrollToPreview" @gotToCourseVideos="goToCourseVideos" 
    :userStartedCourse="course?.userStartedCourse" 
  />
  
  <!-- What you will learn -->
  <LessonOutcomes :outcomes="course?.learningOutcomes" />

  <CoursePreview ref="previewSection" :videoId="course?.previewVideoId" />

  <TableOfContent :lessons="course?.lessons" />
</template>

<script setup lang="ts">
import type { VideoCourse } from '~/src/types/videoCourse.types';
import { getVideoCourse, getVideoCourseForUser } from '~/src/http/course.http';
import CourseCTA from '~/src/components/CourseCTA.vue'
import CoursePreview from '~/src/components/CoursePreview.vue'
import {
   ChartBarIcon, PlayCircleIcon, ClockIcon, ChatBubbleBottomCenterTextIcon, RectangleStackIcon,
   PencilSquareIcon,
} from '@heroicons/vue/20/solid'
import LessonOutcomes from '~/src/components/videoCourse/LessonOutcomes.vue'
import TableOfContent from '~/src/components/videoCourse/TableOfContent.vue'
import { getCourseVideoForUser } from '~/src/http/video.http';
import { useRoute } from 'vue-router'

const course = ref<VideoCourse | undefined>(undefined);
const previewSection = ref<InstanceType<typeof CoursePreview> | null>(null);

const route = useRoute()

onMounted(() => {
  console.log('COMPONENT MOUNTED');

  console.log('ROUTER QUERY ', route.params);

  uploadVideoCourse();
})

function getIcon(name: string) {
  switch (name) {
    case 'ChartBarIcon':
      return ChartBarIcon;
    case 'PlayCircleIcon':
      return PlayCircleIcon;
    case 'ClockIcon':
      return ClockIcon;
    case 'ChatBubbleBottomCenterTextIcon':
      return ChatBubbleBottomCenterTextIcon;
    case 'RectangleStackIcon':
      return RectangleStackIcon;
    case 'PencilSquareIcon':
      return PencilSquareIcon;
    default:
      return null;
  }
}

async function uploadVideoCourse() {
  const uuid = route.params.uuid

  console.log('UUID ', uuid);

  const userLoggedIn = localStorage.getItem('auth_token')

  course.value = userLoggedIn 
    ? await getVideoCourseForUser(uuid as string) 
    : await getVideoCourse(uuid as string);
}

const scrollToPreview = () => {
  console.log('scroll to preview');

  previewSection?.value?.$el.scrollIntoView({ behavior: 'smooth' })
  previewSection?.value?.playVideo()
}

const goToCourseVideos = async () => {
  console.log('go to course videos');

  const userLoggedIn = localStorage.getItem('auth_token')

  if (!userLoggedIn) {
    navigateTo('/signup')
    return
  }

  const uuid = route.params.uuid

  const video = await getCourseVideoForUser(uuid as string);

  console.log('video ', video);
  console.log('VIDEO UUID ', video.UUID);

  navigateTo(`/videos/${video.UUID}`);
}
</script>
