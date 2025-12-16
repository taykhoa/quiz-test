<script setup>
const colorMode = useColorMode()
</script>

<template>
  <div
    class="min-h-screen p-8 space-y-4
           bg-white text-black
           dark:bg-zinc-900 dark:text-zinc-100"
  >
    <h1 class="text-3xl font-bold text-blue-600 dark:text-blue-400">
      Trang học sinh – Lò Hóa Vui
    </h1>

    <button
      class="px-4 py-2 rounded
             bg-zinc-200 text-black
             dark:bg-zinc-700 dark:text-white"
      @click="
        colorMode.preference =
          colorMode.value === 'dark' ? 'light' : 'dark'
      "
    >
      🌗 Toggle Dark Mode
    </button>
  </div>
</template>
