<template>
  <section id="contact" class="py-20 bg-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto text-center">
        <!-- Section Header -->
        <h2 class="text-3xl sm:text-4xl font-bold text-taskaway-dark mb-4">
          Need More Help?
        </h2>
        <p class="text-gray-600 mb-12">
          Can't find what you're looking for? Our support team is here to help.
        </p>

        <!-- Contact Card -->
        <div class="bg-gradient-to-br from-taskaway-primary/10 to-taskaway-secondary/5 rounded-2xl p-8 shadow-lg">
          <div class="space-y-6">
            <!-- Email Support -->
            <div class="flex items-center justify-center space-x-3">
              <svg class="w-6 h-6 text-taskaway-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <p class="text-sm text-gray-600">Email Support</p>
                <a
                  href="mailto:taskaway.my@gmail.com"
                  class="text-lg font-semibold text-taskaway-secondary hover:text-taskaway-primary transition-colors"
                >
                  taskaway.my@gmail.com
                </a>
              </div>
            </div>

            <!-- Support Hours -->
            <div class="flex items-center justify-center space-x-3">
              <svg class="w-6 h-6 text-taskaway-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p class="text-sm text-gray-600">Support Hours</p>
                <p class="text-lg font-semibold text-taskaway-dark">
                  9:00 AM - 6:00 PM (MYT)
                </p>
                <p class="text-sm text-gray-500">Monday - Friday</p>
              </div>
            </div>

            <!-- Response Time -->
            <div class="flex items-center justify-center space-x-3">
              <svg class="w-6 h-6 text-taskaway-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <div>
                <p class="text-sm text-gray-600">Response Time</p>
                <p class="text-lg font-semibold text-taskaway-dark">
                  Within 24-48 hours
                </p>
              </div>
            </div>
          </div>

          <!-- Additional Info -->
          <div class="mt-8 pt-8 border-t border-gray-200">
            <p class="text-gray-600 text-sm">
              For app-related issues, please include your user ID and detailed description
              when contacting support for faster assistance.
            </p>
          </div>
        </div>

        <!-- Footer Note -->
        <div class="mt-12 text-sm text-gray-500">
          <p>© 2025 Taskawayasia. All rights reserved.</p>
          <p class="mt-2">Designed to make odd jobs simpler, faster, and more reliable across Malaysia.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
