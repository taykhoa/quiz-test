export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/color-mode'],

  colorMode: {
    classSuffix: '',
    preference: 'dark',   // 👈 mặc định dark
    fallback: 'dark',     // 👈 SSR cũng dark
  },
})
