export default defineNuxtConfig({
  compatibilityDate: '2025-12-15',

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
