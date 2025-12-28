export default defineNuxtPlugin(() => {
  requestAnimationFrame(() => {
    document.documentElement.classList.remove('no-transition')
  })
})
