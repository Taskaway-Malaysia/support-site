<template>
  <div class="min-h-screen flex flex-col">
    <div class="flex-1">
      <NuxtPage />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
// Global metadata
useHead({
  htmlAttrs: {
    lang: 'en'
  },
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Taskaway Malaysia` : 'Taskaway Malaysia - Support';
  }
})
</script>
