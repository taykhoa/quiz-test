<script setup lang="ts">
const colorMode = useColorMode()

const toggleDark = () => {
  colorMode.preference =
    colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <div class="p-8 space-y-4">
    <h1 class="text-3xl font-bold text-blue-600 dark:text-blue-400">
      Trang học sinh – Lò Hóa Vui
    </h1>

    <button
      class="px-4 py-2 rounded bg-zinc-200 dark:bg-zinc-700"
      @click="toggleDark"
    >
      🌗 Toggle Dark Mode
    </button>
  </div>
</template>
