<template>
  <div class="min-h-screen">
    <NuxtPage />
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
