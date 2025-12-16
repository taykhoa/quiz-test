<script setup>
/*
  Nuxt 3 có sẵn useColorMode()
  → đúng chuẩn Obsidian: đổi class trên <html>
*/

const colorMode = useColorMode()

const toggleTheme = () => {
  colorMode.preference =
    colorMode.preference === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <!-- Theme toggle -->
  <button class="theme-toggle" @click="toggleTheme">
    {{ colorMode.value === 'dark' ? '☀️' : '🌙' }}
  </button>

  <!-- Hero -->
  <section class="container hero">
    <h1>🔥 Lò Hóa Vui</h1>

    <p class="tagline">
      Nền tảng học Hóa học <strong>bản chất</strong>,
      bằng <strong>tư duy</strong> và <strong>thí nghiệm</strong> –
      không học thuộc máy móc.
    </p>

    <div class="hero-actions">
      <button class="btn primary">🚀 Bắt đầu học</button>
      <button class="btn">📘 Xem lộ trình</button>
    </div>

    <!-- Features -->
    <div class="features">
      <div class="card">
        <h3>🧠 Học bản chất</h3>
        <p>
          Hiểu vì sao phản ứng xảy ra, không chỉ ghi nhớ phương trình.
        </p>
      </div>

      <div class="card">
        <h3>🔬 Thí nghiệm & mô phỏng</h3>
        <p>
          Quan sát – phân tích – suy luận thông qua thí nghiệm trực quan.
        </p>
      </div>

      <div class="card">
        <h3>📐 Tư duy hóa học</h3>
        <p>
          Rèn cách suy nghĩ của người học Hóa, không học mẹo rời rạc.
        </p>
      </div>
    </div>
  </section>

  <footer>
    © 2025 Lò Hóa Vui – Học Hóa học một cách thông minh
  </footer>
</template>
