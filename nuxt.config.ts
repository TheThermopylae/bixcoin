// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css', 'notivue/animations.css', 'notivue/notification.css'],
  app: {
    head: {
      bodyAttrs: {
        dir: 'rtl'
      },
      link: [
        { rel: 'icon', href: '/logo.svg' }
      ]
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@nuxt/image',
    'notivue/nuxt'
  ],
  image: {
    domains: ['https://images.contentstack.io'],
    quality: 50
  },
  notivue: {
    // position: 'top-right',
  },
  runtimeConfig: {
    API_BASE_URL: process.env.API_BASE_URL || 'http://localhost:5000/',
    public: {
      API_BASE_URL: process.env.API_BASE_URL
    },
  },
})