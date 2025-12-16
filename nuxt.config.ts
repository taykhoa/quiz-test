export default defineNuxtConfig({
  compatibilityDate: '2025-12-15',

  modules: [
    '@nuxtjs/color-mode'
  ],

  colorMode: {
    classSuffix: '', // để dùng class="dark"
    preference: 'system',
    fallback: 'light'
  },

  css: [
    '~/assets/css/main.css'
  ],

  runtimeConfig: {
    public: {
      supabaseUrl: '',
      supabaseAnonKey: ''
    }
  }
})
