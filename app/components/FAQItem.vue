<template>
  <div class="bg-white rounded-lg shadow-sm border border-gray-200">
    <button
      @click="isOpen = !isOpen"
      class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
      :aria-expanded="isOpen"
    >
      <span class="font-semibold text-taskaway-dark pr-4">{{ question }}</span>
      <svg
        class="w-5 h-5 text-taskaway-primary transition-transform flex-shrink-0"
        :class="{ 'rotate-180': isOpen }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <div
      v-show="isOpen"
      class="px-6 pb-4 text-gray-600 leading-relaxed"
    >
      {{ answer }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  question: string
  answer: string
}>()

const isOpen = ref(false)
</script>
