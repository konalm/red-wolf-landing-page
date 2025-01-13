<template>
  <div>
    <h1>Cloudflare Stream Video</h1>
    <!-- <div
      data-vjs-player
      class="video-container"
      :data-src="`https://iframe.videodelivery.net/${videoId}`"
    ></div> -->
    <div class="video-container">
      <iframe
        src="https://customer-cigaee6xmg0zgxhq.cloudflarestream.com/e1905766c033f9f40fc910a8756f08f0/iframe"
        height="720"
        width="1280"
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
        allowfullscreen="true"
      ></iframe>
    </div>
  </div>
</template>

<script setup lang="ts">

const videoId = 'e1905766c033f9f40fc910a8756f08f0'


</script>

<style scoped>
.video-container {
  width: 100%;
  /* max-width: 800px; */
  /* height: 450px;  */
  margin: auto;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid pink;
}
</style>