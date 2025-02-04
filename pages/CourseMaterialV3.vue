<template>
  <div class="bg-gray-800 sm:py-32 flex justify-center items-center">
    <div class="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-6xl lg:px-8">
      <h2 class="sr-only">Products</h2>

      <div class="grid grid-cols-1 gap-y-4 sm:grid-cols-1 sm:gap-x-6 sm:gap-y-4 lg:grid-cols-3 lg:gap-x-8">
        <div v-for="product in products" 
          :key="product.id" 
          class="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200"
          :class="[product.comingSoon ? 'bg-gray-300' : 'bg-white']"
        >
          <div v-if="product.comingSoon" class="absolute right-2 top-2 z-10">
            <span class="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800 ring-1 ring-inset ring-gray-500/10">
              Coming Soon
            </span>
          </div>

          <img :src="product.imageSrc" 
            :alt="product.imageAlt" 
            class="aspect-2/4 w-full bg-gray-200 object-cover sm:aspect-auto sm:h-40"
            :class="[product.comingSoon ? 'opacity-30' : '']"
          />

          <div class="flex flex-1 flex-col space-y-2 p-4">
            <h2 class="text-1xl font-medium text-gray-900">
              <!-- <a "> -->
                <!-- <span aria-hidden="true" class="absolute inset-0" /> -->
                {{ product.name }}
              <!-- </a> -->
            </h2>

            <p class="text-sm text-gray-500">{{ product.description }}</p>
        
            <div class="flex flex-1 flex-col justify-end">
              <p class="text-sm text-gray-700 italic">{{ product.options }}</p>
              <p class="text-sm font-bold text-gray-900 mt-2">{{ product.price }}</p>
              <button
                v-if="!product.comingSoon"
                type="button"
                class="hover:cursor mt-4 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                v-on:click="goToCourse(product.courseId)"
              >
                View course
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const products = [
  {
    id: 1,
    name: 'JavaScript Fundamentals',
    href: '#',
    price: '£28.00 (Included with membership)',
    description: 'Learn all the fundemental you need to begin coding with JavaScript with all the best practises',
    options: '10 hours of video content',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png?20141107110902',
    imageAlt: 'JavaScript Fundamentals Course',
    comingSoon: false,
    courseId: '196c27a6-f923-43fc-8201-882c28d72b60'
  },
  {
    id: 2,
    name: 'The Essentials of CSS',
    href: '#',
    price: '£7.00 (Included with membership)',
    description: 'Learn all of the essentials of CSS and nothing more! Focus only on what you need and start building',
    options: '3 hours of video content',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg',
    imageAlt: 'CSS Course',
    comingSoon: true,
  },
    {
    id: 2,
    name: 'The Essentials of HTML',
    href: '#',
    price: '£6.00 (Included with membership)',
    description: 'Learn all of the essentials of CSS and nothing more! Focus only on what you need and start building',
    options: '3 hours of video content',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg',
    imageAlt: 'HTML Course',
    comingSoon: true,
  },
]

function goToCourse(courseId: string | undefined) {
  console.log('CLICKED GO TO COURSE !!!');

  console.log('NAVIGATING TO', courseId)

  navigateTo(`/video-courses/${courseId}`)
}
</script>
