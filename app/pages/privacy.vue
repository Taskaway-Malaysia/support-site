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
        <h1 class="text-3xl font-bold text-gray-900 mt-4">Privacy Policy</h1>
        <p class="text-gray-600 mt-2">Last updated: November 5, 2024</p>
      </div>
    </header>

    <!-- Content -->
    <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="bg-white rounded-lg shadow-sm p-8 prose prose-gray max-w-none">

        <!-- Introduction -->
        <section class="mb-8">
          <p class="text-gray-600 leading-relaxed">
            Taskaway Malaysia ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and services (collectively, the "App").
          </p>
          <p class="text-gray-600 leading-relaxed mt-4">
            By using the App, you agree to the collection and use of information in accordance with this Privacy Policy. If you do not agree with our policies and practices, please do not use the App.
          </p>
        </section>

        <!-- Information We Collect -->
        <section class="mb-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>

          <h3 class="text-xl font-semibold text-gray-900 mb-3">1.1 Information You Provide</h3>
          <p class="text-gray-600 mb-3">When you register and use our App, we collect:</p>
          <ul class="list-disc pl-6 text-gray-600 space-y-2">
            <li><strong>Account Information:</strong> Email address, full name, username, phone number, date of birth</li>
            <li><strong>Profile Information:</strong> Profile photo, bio, about section, skills, work portfolio</li>
            <li><strong>Financial Information:</strong> Bank account details (bank name, account number, account holder name) for payment processing</li>
            <li><strong>Task Content:</strong> Task descriptions, photos, location information, pricing details</li>
            <li><strong>Communications:</strong> Messages sent through our in-app chat system</li>
          </ul>

          <h3 class="text-xl font-semibold text-gray-900 mb-3 mt-6">1.2 Automatically Collected Information</h3>
          <ul class="list-disc pl-6 text-gray-600 space-y-2">
            <li><strong>Location Data:</strong> Precise location (GPS coordinates) and approximate location (postal code) to show nearby tasks and services</li>
            <li><strong>Device Information:</strong> Device identifiers, push notification tokens (FCM)</li>
            <li><strong>Usage Data:</strong> App interactions, features used, screen views, search queries, task views</li>
            <li><strong>Transaction Data:</strong> Payment history, task completion records, ratings, and reviews</li>
          </ul>

          <h3 class="text-xl font-semibold text-gray-900 mb-3 mt-6">1.3 Photos and Camera</h3>
          <p class="text-gray-600">
            We collect photos you upload for your profile picture, task documentation, and work portfolio. We request camera and photo library access only when you choose to take or upload photos.
          </p>
        </section>

        <!-- How We Use Your Information -->
        <section class="mb-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
          <p class="text-gray-600 mb-3">We use your information for the following purposes:</p>
          <ul class="list-disc pl-6 text-gray-600 space-y-2">
            <li><strong>App Functionality:</strong> To provide core features including user authentication, task posting and browsing, location-based matching, in-app messaging, and payment processing</li>
            <li><strong>Personalization:</strong> To show you relevant nearby tasks, match taskers with appropriate jobs, and customize your experience</li>
            <li><strong>Communications:</strong> To send account verification emails, transaction confirmations, push notifications about task updates, and customer support messages</li>
            <li><strong>Analytics:</strong> To understand how users interact with the App, improve performance, and develop new features</li>
            <li><strong>Safety & Security:</strong> To verify identities, prevent fraud, ensure platform safety, and enforce our Terms of Service</li>
            <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes</li>
          </ul>
        </section>

        <!-- Information Sharing -->
        <section class="mb-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">3. How We Share Your Information</h2>

          <h3 class="text-xl font-semibold text-gray-900 mb-3">3.1 With Other Users</h3>
          <p class="text-gray-600 mb-3">
            Your profile information (name, photo, rating, bio, location area) is visible to other users to facilitate task matching. Task posters and taskers can see each other's profiles when engaging in tasks.
          </p>

          <h3 class="text-xl font-semibold text-gray-900 mb-3 mt-6">3.2 With Service Providers</h3>
          <p class="text-gray-600 mb-3">We share information with third-party service providers:</p>
          <ul class="list-disc pl-6 text-gray-600 space-y-2">
            <li><strong>Supabase:</strong> Backend infrastructure, database, authentication, and file storage</li>
            <li><strong>Firebase (Google):</strong> Analytics and push notifications</li>
            <li><strong>CHIPP Gateway:</strong> Payment processing (bank account information shared securely)</li>
            <li><strong>MapTiler & Google Maps:</strong> Map tiles and location services</li>
          </ul>

          <h3 class="text-xl font-semibold text-gray-900 mb-3 mt-6">3.3 Legal Requirements</h3>
          <p class="text-gray-600">
            We may disclose your information if required by law, court order, or governmental authority, or to protect our rights, safety, or property.
          </p>

          <h3 class="text-xl font-semibold text-gray-900 mb-3 mt-6">3.4 Business Transfers</h3>
          <p class="text-gray-600">
            In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.
          </p>
        </section>

        <!-- Data Security -->
        <section class="mb-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
          <p class="text-gray-600 mb-3">
            We implement appropriate technical and organizational measures to protect your information:
          </p>
          <ul class="list-disc pl-6 text-gray-600 space-y-2">
            <li>All data transmission uses HTTPS/TLS encryption</li>
            <li>Database encryption at rest via Supabase</li>
            <li>Secure authentication protocols</li>
            <li>Regular security assessments and updates</li>
            <li>Access controls and authentication for our systems</li>
          </ul>
          <p class="text-gray-600 mt-3">
            However, no method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
          </p>
        </section>

        <!-- Data Retention -->
        <section class="mb-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">5. Data Retention</h2>
          <ul class="list-disc pl-6 text-gray-600 space-y-2">
            <li><strong>Account Data:</strong> Retained while your account is active and for a reasonable period after account deletion for legal and business purposes</li>
            <li><strong>Transaction Records:</strong> Retained for 7 years to comply with financial regulations</li>
            <li><strong>Messages:</strong> Retained until manually deleted by users or account deletion</li>
            <li><strong>Analytics Data:</strong> Retained for 14 months (Firebase default)</li>
          </ul>
        </section>

        <!-- Your Rights -->
        <section class="mb-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">6. Your Rights and Choices</h2>

          <h3 class="text-xl font-semibold text-gray-900 mb-3">6.1 Access and Update</h3>
          <p class="text-gray-600">
            You can access and update your account information at any time through the App's profile settings.
          </p>

          <h3 class="text-xl font-semibold text-gray-900 mb-3 mt-6">6.2 Location Services</h3>
          <p class="text-gray-600">
            You can disable location services through your device settings, though this may limit app functionality.
          </p>

          <h3 class="text-xl font-semibold text-gray-900 mb-3 mt-6">6.3 Push Notifications</h3>
          <p class="text-gray-600">
            You can disable push notifications through the App settings or device settings.
          </p>

          <h3 class="text-xl font-semibold text-gray-900 mb-3 mt-6">6.4 Account Deletion</h3>
          <p class="text-gray-600">
            You can request account deletion by contacting us at <a href="mailto:taskaway.my@gmail.com" class="text-[#FFC333] hover:underline">taskaway.my@gmail.com</a>. We will delete your personal information, except where retention is required by law.
          </p>

          <h3 class="text-xl font-semibold text-gray-900 mb-3 mt-6">6.5 Marketing Communications</h3>
          <p class="text-gray-600">
            You can opt out of marketing emails by clicking "unsubscribe" in any marketing email or contacting us.
          </p>
        </section>

        <!-- Children's Privacy -->
        <section class="mb-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">7. Children's Privacy</h2>
          <p class="text-gray-600">
            Our App is not intended for users under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
          </p>
        </section>

        <!-- International Users -->
        <section class="mb-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">8. International Data Transfers</h2>
          <p class="text-gray-600">
            Your information may be transferred to and processed in countries other than Malaysia, including the United States (where our service providers operate). These countries may have different data protection laws. By using the App, you consent to such transfers.
          </p>
        </section>

        <!-- Third-Party Links -->
        <section class="mb-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">9. Third-Party Links and Services</h2>
          <p class="text-gray-600">
            The App may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies.
          </p>
        </section>

        <!-- Changes to Privacy Policy -->
        <section class="mb-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Privacy Policy</h2>
          <p class="text-gray-600">
            We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new Privacy Policy in the App and updating the "Last updated" date. Your continued use of the App after changes constitutes acceptance of the updated policy.
          </p>
        </section>

        <!-- Contact Information -->
        <section class="mb-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
          <p class="text-gray-600 mb-3">
            If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
          </p>
          <div class="bg-gray-50 p-4 rounded-lg">
            <p class="text-gray-700"><strong>Taskaway Malaysia</strong></p>
            <p class="text-gray-600 mt-2">Email: <a href="mailto:taskaway.my@gmail.com" class="text-[#FFC333] hover:underline">taskaway.my@gmail.com</a></p>
          </div>
        </section>

        <!-- Malaysian Law -->
        <section class="mb-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">12. Governing Law</h2>
          <p class="text-gray-600">
            This Privacy Policy is governed by the laws of Malaysia, including the Personal Data Protection Act 2010 (PDPA). Any disputes shall be subject to the exclusive jurisdiction of the courts of Malaysia.
          </p>
        </section>

      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
// Page metadata
useHead({
  title: 'Privacy Policy - Taskaway Malaysia',
  meta: [
    {
      name: 'description',
      content: 'Privacy Policy for Taskaway Malaysia - Learn how we collect, use, and protect your personal information when you use our task outsourcing platform.'
    },
    {
      name: 'robots',
      content: 'index, follow'
    }
  ]
})
</script>

<style scoped>
.prose {
  max-width: 100%;
}

.prose h2 {
  @apply text-2xl font-bold text-gray-900 mb-4 mt-8;
}

.prose h3 {
  @apply text-xl font-semibold text-gray-900 mb-3 mt-6;
}

.prose p {
  @apply text-gray-600 mb-3 leading-relaxed;
}

.prose ul {
  @apply list-disc pl-6 text-gray-600 space-y-2 mb-4;
}

.prose a {
  @apply text-[#FFC333] hover:underline;
}
</style>
