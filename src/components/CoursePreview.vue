<template>
  <div class="bg-gray-800 py-36 sm:py-20">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="w-full">
        <!-- Video Here -->
        <iframe
          id="stream-player"
          ref="videoPlayer"
          :src="`https://customer-cigaee6xmg0zgxhq.cloudflarestream.com/${props.videoId}/iframe`"
          class="w-full aspect-video"
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
          allowfullscreen="true"
        ></iframe>

        <!-- 
                          :src="`https://customer-cigaee6xmg0zgxhq.cloudflarestream.com/${props.videoId}/iframe`"
                  :src="`https://customer-cigaee6xmg0zgxhq.cloudflarestream.com/${props.videoId}/iframe`"
        -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  videoId: {
    type: String,
    required: true
  }
})

const videoPlayer = ref(null)

  // @ts-ignore 
  // const player = Stream(document.getElementById('stream-player'));


onMounted(() => {
  console.log('ON MOUNTED !!');

  videoPlayer.value = Stream(document.getElementById('stream-player'));

  console.log('document.getElementById', document.getElementById('stream-player'))
})

const playVideo = () => {
  console.log('PLAY VIDEO FUNCTION CALLED !!!');

  console.log('VIDEO GET DOM ELEMENT ',document.getElementById('stream-player'))

  console.log('VIDEO PLAYER VALUE', videoPlayer.value)

  // videoPlayer.value.play()
}

defineExpose({
  playVideo
})
</script>