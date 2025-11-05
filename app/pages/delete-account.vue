<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-2">
          Delete Your Account
        </h1>
        <p class="text-gray-600">
          Request permanent deletion of your Taskaway account and data
        </p>
      </div>

      <!-- Main Content -->
      <div class="bg-white shadow-sm rounded-lg p-8 space-y-8">

        <!-- Important Notice -->
        <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-yellow-800">
                This action cannot be undone
              </h3>
              <p class="mt-2 text-sm text-yellow-700">
                Once your account is deleted, all your data will be permanently removed from our servers and cannot be recovered.
              </p>
            </div>
          </div>
        </div>

        <!-- What Gets Deleted -->
        <div>
          <h2 class="text-xl font-semibold text-gray-900 mb-4">
            What Will Be Deleted
          </h2>
          <ul class="space-y-2 text-gray-700">
            <li class="flex items-start">
              <svg class="h-5 w-5 text-red-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
              </svg>
              <span><strong>Profile information:</strong> Name, email, phone number, bio, profile photo</span>
            </li>
            <li class="flex items-start">
              <svg class="h-5 w-5 text-red-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
              </svg>
              <span><strong>All tasks:</strong> Posted tasks, accepted tasks, task history</span>
            </li>
            <li class="flex items-start">
              <svg class="h-5 w-5 text-red-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
              </svg>
              <span><strong>Chat messages:</strong> All conversations and message history</span>
            </li>
            <li class="flex items-start">
              <svg class="h-5 w-5 text-red-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
              </svg>
              <span><strong>Reviews and ratings:</strong> All reviews you gave or received</span>
            </li>
            <li class="flex items-start">
              <svg class="h-5 w-5 text-red-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
              </svg>
              <span><strong>Saved preferences:</strong> Notification settings, location preferences</span>
            </li>
            <li class="flex items-start">
              <svg class="h-5 w-5 text-red-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
              </svg>
              <span><strong>Photos and media:</strong> All uploaded photos and files</span>
            </li>
          </ul>
        </div>

        <!-- What Gets Retained -->
        <div>
          <h2 class="text-xl font-semibold text-gray-900 mb-4">
            What Will Be Retained (Legal Compliance)
          </h2>
          <div class="bg-blue-50 border-l-4 border-blue-400 p-4">
            <p class="text-sm text-blue-700 mb-3">
              For legal, tax, and regulatory compliance, we are required to retain certain financial records:
            </p>
            <ul class="space-y-2 text-sm text-blue-700">
              <li class="flex items-start">
                <svg class="h-4 w-4 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                </svg>
                <span><strong>Transaction records:</strong> Payment history, invoices, receipts (retained for 7 years as required by Malaysian tax law)</span>
              </li>
              <li class="flex items-start">
                <svg class="h-4 w-4 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                </svg>
                <span><strong>Fraud prevention data:</strong> Limited information for security and fraud prevention (anonymized where possible)</span>
              </li>
            </ul>
            <p class="text-sm text-blue-700 mt-3">
              This data is stored securely and is not publicly visible or accessible.
            </p>
          </div>
        </div>

        <!-- Deletion Timeline -->
        <div>
          <h2 class="text-xl font-semibold text-gray-900 mb-4">
            Deletion Timeline
          </h2>
          <div class="space-y-3">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center h-8 w-8 rounded-full bg-green-100 text-green-600 font-semibold">
                  1
                </div>
              </div>
              <div class="ml-4">
                <p class="text-gray-700"><strong>Submit request:</strong> Email us with your account deletion request</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center h-8 w-8 rounded-full bg-green-100 text-green-600 font-semibold">
                  2
                </div>
              </div>
              <div class="ml-4">
                <p class="text-gray-700"><strong>Verification (1-2 business days):</strong> We verify your identity and confirm the request</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center h-8 w-8 rounded-full bg-green-100 text-green-600 font-semibold">
                  3
                </div>
              </div>
              <div class="ml-4">
                <p class="text-gray-700"><strong>Account deactivation (immediately):</strong> Your account is immediately deactivated and no longer accessible</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center h-8 w-8 rounded-full bg-green-100 text-green-600 font-semibold">
                  4
                </div>
              </div>
              <div class="ml-4">
                <p class="text-gray-700"><strong>Data deletion (within 7 days):</strong> All deletable data is permanently removed from our servers</p>
              </div>
            </div>
          </div>
        </div>

        <!-- How to Request Deletion -->
        <div>
          <h2 class="text-xl font-semibold text-gray-900 mb-4">
            How to Request Account Deletion
          </h2>
          <div class="bg-gray-50 rounded-lg p-6 space-y-4">
            <p class="text-gray-700">
              To delete your account, please send an email to:
            </p>
            <div class="bg-white border-2 border-gray-300 rounded-lg p-4">
              <p class="text-lg font-semibold text-gray-900 mb-2">
                📧 taskaway.my@gmail.com
              </p>
              <p class="text-sm text-gray-600">
                Subject: "Account Deletion Request"
              </p>
            </div>

            <div class="mt-4">
              <p class="text-sm font-semibold text-gray-900 mb-2">
                Please include in your email:
              </p>
              <ul class="list-disc list-inside space-y-1 text-sm text-gray-700 ml-2">
                <li>Your registered email address</li>
                <li>Your full name (as registered in the app)</li>
                <li>Confirmation that you want to permanently delete your account</li>
                <li>Reason for deletion (optional, helps us improve)</li>
              </ul>
            </div>

            <div class="mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p class="text-sm text-yellow-800">
                <strong>Before deleting:</strong> Please ensure you have no pending tasks, open offers, or outstanding payments. Deletion may be delayed if there are active transactions.
              </p>
            </div>
          </div>
        </div>

        <!-- Email Template -->
        <div>
          <h2 class="text-xl font-semibold text-gray-900 mb-4">
            Email Template (Copy & Paste)
          </h2>
          <div class="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm">
            <pre class="whitespace-pre-wrap">To: taskaway.my@gmail.com
Subject: Account Deletion Request

Hello Taskaway Support,

I would like to request the permanent deletion of my Taskaway account.

Registered Email: [your-email@example.com]
Full Name: [Your Full Name]

I understand that:
- This action is permanent and cannot be undone
- All my data will be deleted within 7 days
- Transaction records will be retained for legal compliance
- My account will be immediately deactivated

Please proceed with the account deletion.

Thank you,
[Your Name]</pre>
          </div>
        </div>

        <!-- Alternative: Delete from App -->
        <div>
          <h2 class="text-xl font-semibold text-gray-900 mb-4">
            Alternative: Delete from App Settings
          </h2>
          <p class="text-gray-700 mb-3">
            You can also request account deletion directly from the Taskaway app:
          </p>
          <ol class="list-decimal list-inside space-y-2 text-gray-700 ml-2">
            <li>Open Taskaway app</li>
            <li>Go to <strong>Profile</strong> → <strong>Settings</strong></li>
            <li>Scroll to bottom and tap <strong>"Delete Account"</strong></li>
            <li>Confirm deletion request</li>
            <li>We'll send a confirmation email within 24 hours</li>
          </ol>
        </div>

        <!-- Questions -->
        <div>
          <h2 class="text-xl font-semibold text-gray-900 mb-4">
            Questions or Concerns?
          </h2>
          <p class="text-gray-700">
            If you have any questions about account deletion or data retention, please contact our support team:
          </p>
          <ul class="mt-3 space-y-2 text-gray-700">
            <li>
              <strong>Email:</strong>
              <a href="mailto:taskaway.my@gmail.com" class="text-blue-600 hover:text-blue-800 underline">
                taskaway.my@gmail.com
              </a>
            </li>
            <li>
              <strong>Support Site:</strong>
              <a href="https://support.taskawayasia.com" class="text-blue-600 hover:text-blue-800 underline" target="_blank">
                https://support.taskawayasia.com
              </a>
            </li>
          </ul>
        </div>

        <!-- Privacy Policy Link -->
        <div class="border-t pt-6">
          <p class="text-sm text-gray-600 text-center">
            For more information about how we handle your data, please review our
            <NuxtLink to="/privacy" class="text-blue-600 hover:text-blue-800 underline">
              Privacy Policy
            </NuxtLink>
          </p>
        </div>

      </div>

      <!-- Back to Home -->
      <div class="mt-8 text-center">
        <NuxtLink
          to="/"
          class="inline-flex items-center text-blue-600 hover:text-blue-800"
        >
          <svg class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
          </svg>
          Back to Home
        </NuxtLink>
      </div>

    </div>
  </div>
</template>

<script setup>
// SEO Meta tags
useHead({
  title: 'Delete Your Account - Taskaway Malaysia',
  meta: [
    {
      name: 'description',
      content: 'Request permanent deletion of your Taskaway account and personal data. Learn what data is deleted, what is retained, and how long the process takes.'
    },
    {
      name: 'robots',
      content: 'noindex, nofollow' // Don't index account deletion page
    }
  ]
})
</script>
