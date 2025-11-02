<template>
  <section id="faq" class="py-20 bg-taskaway-light">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold text-taskaway-dark mb-4">
            Frequently Asked Questions
          </h2>
          <p class="text-gray-600">
            Find answers to common questions about using Taskaway Malaysia
          </p>
        </div>

        <!-- FAQ Categories -->
        <div class="space-y-8">
          <!-- Getting Started -->
          <div>
            <h3 class="text-2xl font-semibold text-taskaway-secondary mb-4">Getting Started</h3>
            <div class="space-y-3">
              <FAQItem
                question="What is Taskaway?"
                answer="Taskaway is a Malaysian task outsourcing platform that connects people who need tasks done (Posters) with skilled individuals who can complete them (Taskers). Whether you need help with housekeeping, pet care, handyman work, or other services, Taskaway makes it easy to find the right person for the job. You can also switch to Tasker mode to earn money by completing tasks for others."
              />
              <FAQItem
                question="How do I create an account?"
                answer="Download the Taskaway app, tap 'Sign Up,' and enter your email address and password. You'll receive a verification code via email to confirm your account. After verification, complete your profile with your full name, phone number, and other details. You're then ready to post tasks or start earning as a Tasker."
              />
              <FAQItem
                question="Can I use Taskaway as both a Poster and Tasker?"
                answer="Yes! Taskaway allows you to switch seamlessly between Poster mode (posting tasks) and Tasker mode (completing tasks). Simply toggle between roles in the app. This flexibility means you can get help when you need it and earn money by helping others when you have time."
              />
            </div>
          </div>

          <!-- For Posters -->
          <div>
            <h3 class="text-2xl font-semibold text-taskaway-secondary mb-4">For Customers (Posters)</h3>
            <div class="space-y-3">
              <FAQItem
                question="How do I post a task?"
                answer="Tap the 'Create Task' button, select a category (e.g., Cleaning, Delivery, Pet Care), add a clear title and detailed description, set your budget, choose a location, and select when you need it done. You can add photos to help Taskers understand the work better. Once posted, nearby Taskers will receive notifications and can submit offers."
              />
              <FAQItem
                question="How does the offer system work?"
                answer="After posting your task, Taskers review the details and submit offers with their proposed price and a message explaining their approach. You'll receive notifications for each offer. Review the Taskers' profiles, ratings, and offer details, then accept the offer that best fits your needs. Once accepted, payment is authorized and a chat opens for coordination."
              />
              <FAQItem
                question="When do I pay for a task?"
                answer="You choose your payment method (online banking or cash on delivery) when accepting an offer. For online banking, payment is authorized immediately but held securely in escrow. The payment is only released to the Tasker after you approve the completed work. For cash on delivery, you pay the Tasker directly upon task completion."
              />
              <FAQItem
                question="What if I'm not satisfied with the work?"
                answer="If the completed work doesn't meet your expectations, you can request revisions instead of approving the task. The Tasker will be notified to make the necessary changes. If issues persist, contact our support team through the app for assistance. For cash payments, hold payment until you're satisfied. For online payments, funds remain in escrow until you approve."
              />
            </div>
          </div>

          <!-- For Taskers -->
          <div>
            <h3 class="text-2xl font-semibold text-taskaway-secondary mb-4">For Taskers (Service Providers)</h3>
            <div class="space-y-3">
              <FAQItem
                question="How do I become a Tasker and start earning?"
                answer="Switch to Tasker mode in the app, complete your profile with your skills and portfolio photos, and add your bank account details for payouts (verification takes 24-48 hours). Enable location services so nearby tasks appear on your map. Browse available tasks, submit competitive offers with clear proposals, and start earning once Posters accept your offers."
              />
              <FAQItem
                question="How do I get paid?"
                answer="Add and verify your Malaysian bank account in the app (Settings > Bank Account Details). After completing a task and the Poster approves your work, payment is processed to your verified bank account. For online banking payments, funds are automatically released from escrow. For cash payments, you receive payment directly from the Poster. Verification typically takes 24-48 hours. Supported banks include Maybank, CIMB, Public Bank, RHB, Hong Leong Bank, and 13 others."
              />
              <FAQItem
                question="Why do I need to verify my bank account?"
                answer="Bank verification ensures secure and reliable payments. It protects both you and task posters from fraud. The verification process typically takes 24-48 hours. Once verified, you can receive payments for completed tasks directly to your account. You cannot receive online payments until your bank account is verified."
              />
              <FAQItem
                question="How does location tracking work?"
                answer="When you toggle 'Available' in Tasker mode, the app updates your location every 30 minutes to show you nearby tasks. This helps Posters find Taskers in their area. Location tracking only runs when you're marked as available and can be disabled anytime. Your exact address is never shared—only your general proximity to tasks."
              />
            </div>
          </div>

          <!-- Payments & Pricing -->
          <div>
            <h3 class="text-2xl font-semibold text-taskaway-secondary mb-4">Payments & Pricing</h3>
            <div class="space-y-3">
              <FAQItem
                question="What payment methods are accepted?"
                answer="Taskaway accepts online banking (via secure CHIP payment gateway) and cash on delivery. For online banking, payments are held securely in escrow until task completion, protecting both parties. Cash on delivery allows direct payment between Poster and Tasker upon completion. Choose your preferred method when accepting an offer."
              />
              <FAQItem
                question="How does the escrow system work?"
                answer="For online banking payments, when a Poster accepts your offer, the payment is authorized and held securely in escrow. You can then safely start work knowing payment is guaranteed. When you complete the task and the Poster approves, the funds are automatically released from escrow to your verified bank account. This protects both parties."
              />
              <FAQItem
                question="Are there any service fees?"
                answer="The app displays the task budget and final agreed price clearly. Platform fees (if applicable) are transparently shown before payment. Check the payment breakdown before accepting offers or making payments to understand the total cost."
              />
            </div>
          </div>

          <!-- Safety & Support -->
          <div>
            <h3 class="text-2xl font-semibold text-taskaway-secondary mb-4">Safety, Trust & Technical Support</h3>
            <div class="space-y-3">
              <FAQItem
                question="How can I trust Taskers/Posters?"
                answer="Taskaway features a comprehensive rating and review system. Check profiles to see ratings (1-5 stars), total completed tasks, verified bank accounts (for Taskers), skills, portfolio photos, and reviews from previous users. Start with smaller tasks to build trust. Use the in-app messaging to clarify expectations before starting work."
              />
              <FAQItem
                question="Is my payment information secure?"
                answer="Yes. Online payments are processed through CHIP, a secure Malaysian payment gateway. Your bank details are encrypted and never shared with other users. For Taskers, bank account numbers are stored securely and only used for payouts. We comply with Malaysian data protection standards."
              />
              <FAQItem
                question="How do I enable push notifications?"
                answer="Go to your device Settings > Taskaway > Notifications and ensure notifications are enabled. In the app, go to Profile > Settings and verify notifications are turned on. Notifications keep you updated on new offers, messages, task updates, and payment confirmations."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import FAQItem from './FAQItem.vue'
</script>
