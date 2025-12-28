<template>
  <section class="lesson-block">
    <header class="lesson-header">
      <span class="icon">{{ icon }}</span>
      <h2>{{ title }}</h2>
    </header>

    <div class="lesson-content">
      <slot />
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: String,
  icon: String,
  variant: String
})
</script>

<style scoped>
.lesson-block {
  /* Canh giữa như sách */
  max-width: 820px;
  margin: 2rem auto;

  /* Khoảng đệm bên trong */
  padding: 1.75rem 3.5rem;

  /* Giao diện */
  background: var(--bg-subtle);
  border: 1px solid var(--border);
  border-radius: 14px;

  /* Cảm giác nổi nhẹ */
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.25);
}
</style>
