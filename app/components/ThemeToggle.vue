<script setup lang="ts">
const colorMode = useColorMode()

const toggle = () => {
  colorMode.preference =
    colorMode.preference === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button
    @click="toggle"
    class="gh-toggle"
    aria-label="Toggle theme"
  >
    <span v-if="colorMode.value === 'dark'">🌙</span>
    <span v-else>☀️</span>
  </button>
</template>

<style scoped>
.gh-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;

  border-radius: 6px;
  border: 1px solid var(--border);
  background-color: var(--bg-subtle);

  cursor: pointer;

  transition:
    background-color 150ms ease,
    border-color 150ms ease;
}

.gh-toggle:hover {
  background-color: color-mix(
    in srgb,
    var(--bg-subtle) 85%,
    var(--accent)
  );
}

.gh-toggle span {
  font-size: 14px;
}
</style>
