// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  future: {
    compatibilityVersion: 4
  },

  // Enable Nuxt 4 app directory structure
  dir: {
    pages: 'app/pages'
  },

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
    cssPath: '~/app/assets/css/main.css',
    configPath: 'tailwind.config.ts'
  },

  devtools: { enabled: true }
})
