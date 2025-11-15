<template>
  <section class="bg-gradient-to-br from-taskaway-primary/10 via-white to-taskaway-secondary/5 py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-4xl mx-auto">
        <!-- Logo -->
        <div class="flex justify-center mb-8">
          <img
            src="/logo.png"
            alt="Taskaway Malaysia Logo"
            class="h-24 w-24 sm:h-32 sm:w-32 rounded-2xl shadow-lg"
          />
        </div>

        <!-- Heading -->
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-taskaway-dark mb-6">
          Taskaway Malaysia
          <span class="block text-taskaway-primary mt-2">Support & Help</span>
        </h1>

        <!-- Description -->
        <p class="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
          Taskaway MY is your all-in-one platform to find, post, and manage short-term tasks across Malaysia.
          Whether you need a quick delivery, household help, or freelance support – Taskaway connects you to
          trusted Taskers nearby.
        </p>

        <!-- Download Section -->
        <div class="mt-10 mb-12">
          <h2 class="text-2xl font-semibold text-taskaway-dark mb-6">Download the App</h2>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <!-- Google Play Store -->
            <a
              href="https://play.google.com/store/apps/details?id=com.taskawayasia"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors shadow-md"
            >
              <svg class="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <div class="text-left">
                <div class="text-xs">GET IT ON</div>
                <div class="text-lg font-semibold">Google Play</div>
              </div>
            </a>

            <!-- App Store (Coming Soon) -->
            <div class="inline-flex items-center justify-center bg-gray-300 text-gray-500 px-6 py-3 rounded-lg cursor-not-allowed shadow-md">
              <svg class="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
              </svg>
              <div class="text-left">
                <div class="text-xs">Download on the</div>
                <div class="text-lg font-semibold">App Store (Soon)</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Features -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <!-- For Customers -->
          <div class="bg-white rounded-xl p-6 shadow-md">
            <h3 class="text-xl font-semibold text-taskaway-dark mb-3">For Customers</h3>
            <ul class="text-left text-gray-600 space-y-2">
              <li class="flex items-start">
                <span class="text-taskaway-primary mr-2">✓</span>
                Post tasks instantly with clear pricing and deadlines
              </li>
              <li class="flex items-start">
                <span class="text-taskaway-primary mr-2">✓</span>
                Track task progress in real time
              </li>
              <li class="flex items-start">
                <span class="text-taskaway-primary mr-2">✓</span>
                Pay securely through integrated payment options
              </li>
            </ul>
          </div>

          <!-- For Taskers -->
          <div class="bg-white rounded-xl p-6 shadow-md">
            <h3 class="text-xl font-semibold text-taskaway-dark mb-3">For Taskers</h3>
            <ul class="text-left text-gray-600 space-y-2">
              <li class="flex items-start">
                <span class="text-taskaway-primary mr-2">✓</span>
                Browse available tasks and apply with one tap
              </li>
              <li class="flex items-start">
                <span class="text-taskaway-primary mr-2">✓</span>
                Get notified for jobs near your location
              </li>
              <li class="flex items-start">
                <span class="text-taskaway-primary mr-2">✓</span>
                Build your profile and grow your earnings
              </li>
            </ul>
          </div>
        </div>

        <!-- Tagline -->
        <p class="mt-12 text-gray-500 italic">
          Designed and developed by Taskawayasia, Taskaway MY aims to make odd jobs simpler, faster, and more reliable.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
