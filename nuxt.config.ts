export default defineNuxtConfig({
  compatibilityDate: '2025-12-15',

  modules: [
    '@nuxtjs/color-mode', // ⭐ BẮT BUỘC
  ],

  colorMode: {
    classSuffix: '', // => dùng class "dark" (chuẩn Tailwind)
    preference: 'system',
    fallback: 'light',
  },

  css: [
    '~/assets/css/main.css'
  ],
})
