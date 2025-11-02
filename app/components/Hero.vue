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
