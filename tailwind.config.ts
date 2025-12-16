export default {
  darkMode: 'class',

  content: [
    './app.vue',                 // ⭐⭐⭐ QUAN TRỌNG
    './app/**/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
  ],

  theme: {
    extend: {},
  },
  plugins: [],
}
