<template>
  <div
    class="gh-card"
  >
    <slot />
  </div>
</template>

<style scoped>
.gh-card {
  background-color: var(--bg-subtle);
  border: 1px solid var(--border);
  border-radius: 6px; /* GitHub dùng 6px */
  padding: 16px;

  /* transition mượt */
  transition:
    background-color 180ms ease,
    border-color 180ms ease,
    box-shadow 180ms ease;
}

/* hover rất nhẹ – đúng GitHub */
.gh-card:hover {
  box-shadow: 0 1px 0 rgba(27, 31, 36, 0.04);
}
</style>
