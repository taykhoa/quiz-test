<script setup>
const colorMode = useColorMode()

const toggle = () => {
  colorMode.preference =
    colorMode.preference === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button
    @click="toggle"
    class="theme-toggle"
    :aria-label="`Switch to ${colorMode.value === 'dark' ? 'light' : 'dark'} mode`"
  >
    {{ colorMode.value === 'dark' ? '☀️' : '🌙' }}
  </button>
</template>

<style scoped>
.theme-toggle {
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 50;
  width: 36px;
  height: 36px;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--bg-subtle);
  border: 1px solid var(--border);

  cursor: pointer;
  font-size: 1rem;

  transition: background 0.2s ease;
}

.theme-toggle:hover {
  background: var(--bg-hover);
}
</style>
