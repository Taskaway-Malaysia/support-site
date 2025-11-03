// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  // Nuxt 4 native mode - no compatibility mode needed
  // Remove future.compatibilityVersion as we're using Nuxt 4 directly

  // App directory structure (Nuxt 4 default)
  srcDir: 'app/',

  // Component auto-import
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],

  // Modules
  modules: ['@nuxtjs/tailwindcss'],

  // App configuration
  app: {
    head: {
      title: 'Taskaway Malaysia - Support & Help',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Get help and support for Taskaway Malaysia - Your all-in-one platform for finding, posting, and managing short-term tasks across Malaysia.'
        },
        { name: 'keywords', content: 'Taskaway, Malaysia, task outsourcing, help, support, customer service' },
        { property: 'og:title', content: 'Taskaway Malaysia - Support & Help' },
        { property: 'og:description', content: 'Get help and support for Taskaway Malaysia app' },
        { property: 'og:type', content: 'website' },
        { name: 'theme-color', content: '#FFC333' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png' }
      ]
    }
  },

  // Static site generation
  ssr: true,

  // Enable static generation
  nitro: {
    preset: 'static'
  },

  // Tailwind CSS configuration
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.ts'
  },

  devtools: { enabled: true }
})
