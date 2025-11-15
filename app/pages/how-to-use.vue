<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-white shadow-sm">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <NuxtLink to="/" class="inline-flex items-center text-gray-600 hover:text-[#FFC333] transition-colors">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
          </svg>
          Back to Support
        </NuxtLink>
        <h1 class="text-3xl font-bold text-gray-900 mt-4">How to Use Taskaway</h1>
        <p class="text-gray-600 mt-2">Complete guide for both Taskers and Posters</p>
      </div>
    </header>

    <!-- Content -->
    <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="bg-white rounded-lg shadow-sm p-8 prose prose-gray max-w-none">

        <!-- Flow 1: Tasker -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Flow 1: How to Earn Money (Tasker Flow)</h2>

          <div class="bg-yellow-50 border-l-4 border-[#FFC333] p-4 mb-6">
            <p class="text-gray-800 font-semibold">
              <strong>Goal:</strong> Accept and complete tasks posted by others to earn money
            </p>
          </div>

          <h3 class="text-xl font-semibold text-gray-900 mb-4 mt-8">Step-by-Step:</h3>

          <ol class="space-y-6">
            <li>
              <strong class="text-gray-900 text-lg">Sign Up / Login</strong>
              <ul class="list-disc pl-6 text-gray-600 space-y-1 mt-2">
                <li>Open the app</li>
                <li>Choose "Continue with Apple" or "Continue with Google" or create account with email</li>
                <li>Complete profile creation if new user</li>
              </ul>
            </li>

            <li>
              <strong class="text-gray-900 text-lg">Browse Available Tasks</strong>
              <ul class="list-disc pl-6 text-gray-600 space-y-1 mt-2">
                <li>Land on the "Jobs" tab (home screen)</li>
                <li>Browse through posted tasks in your area</li>
                <li>Filter by category if needed</li>
              </ul>
            </li>

            <li>
              <strong class="text-gray-900 text-lg">View Task Details</strong>
              <ul class="list-disc pl-6 text-gray-600 space-y-1 mt-2">
                <li>Tap on any task card to see full details</li>
                <li>Review:
                  <ul class="list-disc pl-6 space-y-1 mt-1">
                    <li>Task description</li>
                    <li>Offered price (budget)</li>
                    <li>Location</li>
                    <li>Scheduled time</li>
                    <li>Task images (if available)</li>
                    <li>Poster information</li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              <strong class="text-gray-900 text-lg">Make an Offer</strong>
              <ul class="list-disc pl-6 text-gray-600 space-y-1 mt-2">
                <li>If interested, tap "Make Offer" button</li>
                <li>Submit your offer with your proposed price</li>
                <li>Add any questions in the comments section</li>
              </ul>
            </li>

            <li>
              <strong class="text-gray-900 text-lg">Communicate with Poster</strong>
              <ul class="list-disc pl-6 text-gray-600 space-y-1 mt-2">
                <li>Once you make an offer, you can message the task poster</li>
                <li>Use the "Message" tab to view conversations</li>
                <li>Discuss task details and negotiate if needed</li>
              </ul>
            </li>

            <li>
              <strong class="text-gray-900 text-lg">Wait for Acceptance</strong>
              <ul class="list-disc pl-6 text-gray-600 space-y-1 mt-2">
                <li>Poster will review your offer</li>
                <li>You'll get notified when your offer is accepted</li>
                <li>Once accepted, the "Make Offer" button disappears</li>
              </ul>
            </li>

            <li>
              <strong class="text-gray-900 text-lg">Complete the Task</strong>
              <ul class="list-disc pl-6 text-gray-600 space-y-1 mt-2">
                <li>Go to "My Task" tab to see your accepted tasks</li>
                <li>Complete the task as agreed</li>
                <li>Submit completion for review</li>
              </ul>
            </li>

            <li>
              <strong class="text-gray-900 text-lg">Get Paid</strong>
              <ul class="list-disc pl-6 text-gray-600 space-y-1 mt-2">
                <li>Once poster approves completion</li>
                <li>Payment will be released to your account</li>
                <li>View payment history in your profile</li>
              </ul>
            </li>
          </ol>
        </section>

        <hr class="my-12 border-gray-200">

        <!-- Flow 2: Poster -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Flow 2: How to Get Help from Taskers (Poster Flow)</h2>

          <div class="bg-yellow-50 border-l-4 border-[#FFC333] p-4 mb-6">
            <p class="text-gray-800 font-semibold">
              <strong>Goal:</strong> Post a task and hire someone to help you
            </p>
          </div>

          <h3 class="text-xl font-semibold text-gray-900 mb-4 mt-8">Step-by-Step:</h3>

          <ol class="space-y-6">
            <li>
              <strong class="text-gray-900 text-lg">Sign Up / Login</strong>
              <ul class="list-disc pl-6 text-gray-600 space-y-1 mt-2">
                <li>Open the app</li>
                <li>Choose "Continue with Apple" or "Continue with Google" or create account with email</li>
                <li>Complete profile creation if new user</li>
              </ul>
            </li>

            <li>
              <strong class="text-gray-900 text-lg">Create a New Task</strong>
              <ul class="list-disc pl-6 text-gray-600 space-y-1 mt-2">
                <li>Tap the yellow "Post a Task" button in the center of the bottom navigation</li>
                <li>Fill in task details:
                  <ul class="list-disc pl-6 space-y-1 mt-1">
                    <li><strong>Title:</strong> Clear, concise task name</li>
                    <li><strong>Description:</strong> Detailed explanation of what needs to be done</li>
                    <li><strong>Category:</strong> Select appropriate category</li>
                    <li><strong>Location:</strong> Set where the task needs to be done</li>
                    <li><strong>Date & Time:</strong> When you need it done</li>
                    <li><strong>Budget:</strong> How much you're willing to pay</li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              <strong class="text-gray-900 text-lg">Add Task Details</strong>
              <ul class="list-disc pl-6 text-gray-600 space-y-1 mt-2">
                <li>Upload photos (optional but recommended)</li>
                <li>Specify if materials are provided</li>
                <li>Set location type (on-site/remote)</li>
                <li>Choose date flexibility</li>
              </ul>
            </li>

            <li>
              <strong class="text-gray-900 text-lg">Post the Task</strong>
              <ul class="list-disc pl-6 text-gray-600 space-y-1 mt-2">
                <li>Review all details</li>
                <li>Tap "Post Task"</li>
                <li>Your task is now visible to all taskers</li>
              </ul>
            </li>

            <li>
              <strong class="text-gray-900 text-lg">Review Offers</strong>
              <ul class="list-disc pl-6 text-gray-600 space-y-1 mt-2">
                <li>Go to "My Task" tab</li>
                <li>View your posted tasks</li>
                <li>Check offers from interested taskers</li>
                <li>Review tasker profiles and ratings</li>
              </ul>
            </li>

            <li>
              <strong class="text-gray-900 text-lg">Communicate with Taskers</strong>
              <ul class="list-disc pl-6 text-gray-600 space-y-1 mt-2">
                <li>Message taskers who made offers</li>
                <li>Ask questions about their experience</li>
                <li>Clarify task requirements</li>
                <li>Access messages via the "Message" tab</li>
              </ul>
            </li>

            <li>
              <strong class="text-gray-900 text-lg">Accept an Offer</strong>
              <ul class="list-disc pl-6 text-gray-600 space-y-1 mt-2">
                <li>Choose the best tasker for your job</li>
                <li>Tap "Accept Offer"</li>
                <li>Task status changes to "Accepted"</li>
              </ul>
            </li>

            <li>
              <strong class="text-gray-900 text-lg">Make Payment</strong>
              <ul class="list-disc pl-6 text-gray-600 space-y-1 mt-2">
                <li>Complete payment authorization</li>
                <li>Payment is held securely until task completion</li>
                <li>You can track payment status</li>
              </ul>
            </li>

            <li>
              <strong class="text-gray-900 text-lg">Monitor Task Progress</strong>
              <ul class="list-disc pl-6 text-gray-600 space-y-1 mt-2">
                <li>Check "My Task" tab for updates</li>
                <li>Communicate with tasker as needed</li>
                <li>Track task status</li>
              </ul>
            </li>

            <li>
              <strong class="text-gray-900 text-lg">Review and Complete</strong>
              <ul class="list-disc pl-6 text-gray-600 space-y-1 mt-2">
                <li>Once tasker completes the task</li>
                <li>Review the work</li>
                <li>Approve completion</li>
                <li>Payment is released to the tasker</li>
                <li>Leave a review/rating</li>
              </ul>
            </li>
          </ol>
        </section>

        <hr class="my-12 border-gray-200">

        <!-- Quick Navigation Tips -->
        <section class="mb-12">
          <div class="bg-gray-50 rounded-lg p-6">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Quick Navigation Tips</h2>
            <ul class="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong>Jobs Tab:</strong> Browse all available tasks (Tasker view)</li>
              <li><strong>My Task Tab:</strong> See your posted tasks OR accepted tasks</li>
              <li><strong>Post a Task Button (Center):</strong> Create new task posting</li>
              <li><strong>Message Tab:</strong> All conversations with taskers/posters</li>
              <li><strong>Profile Tab:</strong> Manage your account, payment methods, settings</li>
            </ul>
          </div>
        </section>

        <!-- Demo Account -->
        <section class="mb-12">
          <div class="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
            <h2 class="text-2xl font-bold text-green-900 mb-4">Demo Account for Testing</h2>
            <div class="space-y-2">
              <p class="text-gray-700">
                <strong>Email:</strong> <code class="bg-white px-2 py-1 rounded text-green-800 font-mono">admin@sawangtech.com</code>
              </p>
              <p class="text-gray-700">
                <strong>Password:</strong> <code class="bg-white px-2 py-1 rounded text-green-800 font-mono">password</code>
              </p>
              <p class="text-gray-600 mt-4">
                This account has access to both flows and can be used to test the complete user experience.
              </p>
            </div>
          </div>
        </section>

        <!-- App Features -->
        <section>
          <h2 class="text-2xl font-bold text-gray-900 mb-6">App Features</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <!-- For Taskers -->
            <div class="bg-gray-50 rounded-lg p-6">
              <h3 class="text-xl font-semibold text-[#FFC333] mb-4">For Taskers:</h3>
              <ul class="list-disc pl-6 text-gray-600 space-y-2">
                <li>Browse tasks in your area</li>
                <li>Filter by category</li>
                <li>Make offers on tasks</li>
                <li>Chat with task posters</li>
                <li>Track accepted tasks</li>
                <li>Receive payments securely</li>
              </ul>
            </div>

            <!-- For Posters -->
            <div class="bg-gray-50 rounded-lg p-6">
              <h3 class="text-xl font-semibold text-[#FFC333] mb-4">For Posters:</h3>
              <ul class="list-disc pl-6 text-gray-600 space-y-2">
                <li>Post tasks with detailed descriptions</li>
                <li>Upload task photos</li>
                <li>Review tasker offers and profiles</li>
                <li>Secure payment handling</li>
                <li>Rate and review taskers</li>
                <li>Track task completion</li>
              </ul>
            </div>
          </div>
        </section>

      </div>
    </main>
  </div>
</template>

<script setup>
// SEO meta tags
useHead({
  title: 'How to Use Taskaway - User Guide',
  meta: [
    { name: 'description', content: 'Complete guide on how to use Taskaway. Learn how to earn money as a tasker or get help by posting tasks.' },
    { name: 'keywords', content: 'taskaway, how to use, user guide, tasker, poster, earn money, get help' }
  ]
})
</script>
