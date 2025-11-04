<template>
  <footer class="bg-gray-900 text-white mt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

        <!-- About Section -->
        <div>
          <h3 class="text-xl font-bold mb-4">Taskaway Malaysia</h3>
          <p class="text-gray-400 text-sm leading-relaxed">
            Your all-in-one platform for finding, posting, and managing short-term tasks across Malaysia.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/" class="text-gray-400 hover:text-[#FFC333] transition-colors text-sm">
                Support Home
              </NuxtLink>
            </li>
            <li>
              <a href="mailto:taskaway.my@gmail.com" class="text-gray-400 hover:text-[#FFC333] transition-colors text-sm">
                Contact Support
              </a>
            </li>
            <li>
              <a href="mailto:taskaway.my@gmail.com" class="text-gray-400 hover:text-[#FFC333] transition-colors text-sm">
                Send Feedback
              </a>
            </li>
          </ul>
        </div>

        <!-- Legal -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Legal</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/privacy" class="text-gray-400 hover:text-[#FFC333] transition-colors text-sm">
                Privacy Policy
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/terms" class="text-gray-400 hover:text-[#FFC333] transition-colors text-sm">
                Terms of Service
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-800 mt-8 pt-8 text-center">
        <p class="text-gray-400 text-sm">
          &copy; {{ currentYear }} Taskaway Malaysia. All rights reserved.
        </p>
        <p class="text-gray-500 text-xs mt-2">
          Made with ❤️ in Malaysia
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
