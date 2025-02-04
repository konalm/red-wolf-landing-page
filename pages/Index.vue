<template>
  <HeroV2 />
  <LearningMaterialList />
  <Features />
  <HomeVideo />
  <Stats />
  <Questions />
</template>

<script setup lang="ts">
// import { RouterView } from 'vue-router'
import Hero from '../src/components/Hero.vue'
import HeroV2 from '../src/components/HeroV2.vue'
import CallToAction from '../src/components/CallToAction.vue'
import Features from '../src/components/Features.vue'
import LearningMaterialList from '../src/components/LearningMaterialList.vue'
import Stats from '../src/components/Stats.vue'
import Questions from '../src/components/Questions.vue'
import HomeVideo from '../src/components/HomeVideo.vue'

useHead({
  title: 'CodeMap',
  meta: [
    { name: 'description', content: 'CodeMap is a platform for learning to code.' }
  ]
})

onBeforeMount(() => {
  console.log('beforeMount')

  if (localStorage.getItem('auth_token')) {
    window.location.href = '/membercourses';
  }
})
</script>