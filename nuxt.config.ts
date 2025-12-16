// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/color-mode'
  ],

  css: [
    '~/assets/css/main.css'
  ],

  colorMode: {
    classSuffix: '',     // ⭐ để Tailwind nhận dark:
    preference: 'system',
    fallback: 'light'
  },

  compatibilityDate: '2025-12-15'
})
