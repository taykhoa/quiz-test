// nuxt.config.ts
export default defineNuxtConfig({
  /* ===============================
     Runtime compatibility (FIX WARN)
  ================================ */
  compatibilityDate: '2025-12-16',

  /* ===============================
     Global CSS
  ================================ */
  css: ['~/assets/css/main.css'],

  /* ===============================
     Modules
  ================================ */
  modules: ['@nuxtjs/color-mode'],

  /* ===============================
     Color mode (GitHub-style)
  ================================ */
  colorMode: {
    classSuffix: '',        // dùng class "dark" trên <html>
    preference: 'dark',     // mặc định dark
    fallback: 'dark',       // SSR cũng dark → ❌ chớp trắng
    storageKey: 'lhv-theme' // key lưu trong localStorage
  },

  /* ===============================
     App config (optional nhưng sạch)
  ================================ */
  app: {
    head: {
      htmlAttrs: {
        class: 'dark', // đảm bảo HTML có dark ngay từ SSR
      },
      meta: [
        { name: 'color-scheme', content: 'dark light' }
      ]
    }
  }
})
