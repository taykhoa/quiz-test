// nuxt.config.ts
export default defineNuxtConfig({
  /* ===============================
     Runtime compatibility
     (giữ để tránh warning tương lai)
  ================================ */
  compatibilityDate: "2025-12-16",

  /* ===============================
     Global CSS
  ================================ */
  css: ["~/assets/css/main.css", "~/assets/css/lesson.css"],

  /* ===============================
     Modules
  ================================ */
  modules: ["@nuxtjs/color-mode"],

  /* ===============================
     Color mode – Obsidian / GitHub style
  ================================ */
  colorMode: {
    classSuffix: "", // <html class="dark">
    preference: "dark", // mặc định dark
    fallback: "dark", // SSR cũng dark → không chớp trắng
    storageKey: "lhv-theme", // key lưu localStorage
  },

  /* ===============================
     App head (SSR-safe dark)
  ================================ */
  app: {
    head: {
      htmlAttrs: {
        class: "dark",
      },
      meta: [{ name: "color-scheme", content: "dark light" }],
    },
  },

  /* ===============================
     Dev & build (khuyến nghị)
  ================================ */
  devtools: { enabled: true },

  vite: {
    css: {
      devSourcemap: true,
    },
  },
});
