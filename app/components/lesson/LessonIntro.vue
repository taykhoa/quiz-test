<template>
  <section>
    <div class="intro-card">
      <h2 class="intro-title">
        <span>🔍</span>
        <span>Dẫn nhập</span>
      </h2>

      <div class="intro-content">
        <slot />
      </div>
    </div>
  </section>
</template>

<style scoped>
.intro-card {
  background: var(--bg-subtle);
  border: 1.5px solid rgba(96, 165, 250, 0.6); /* xanh nhạt */
  border-radius: 14px;

  padding: 1.5rem 1.75rem;
  margin-top: 1.5rem;
  margin-inline: 0.75rem;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.25);
}

.intro-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;

  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-strong);

  margin-bottom: 0.75rem;
}

.intro-content {
  color: var(--text-normal);
  line-height: 1.8;
}

.intro-content p + p {
  margin-top: 0.75rem;
}
</style>
