<script setup>
const colorMode = useColorMode()
</script>

<template>
  <Html :class="colorMode.value">
    <Body
      class="min-h-screen bg-white text-black
             dark:bg-zinc-900 dark:text-zinc-100
             transition-colors duration-200"
    >
      <NuxtPage />
    </Body>
  </Html>
</template>
