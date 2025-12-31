<script setup lang="ts">

</script>

<template>
  <!-- Theme toggle -->
  

  <!-- Hero -->
  <section class="container hero">
    <h1>🔥 Lò Hóa Vui</h1>

    <p class="tagline">
      Nền tảng học Hóa học <strong>bản chất</strong>,
      bằng <strong>tư duy</strong> và <strong>thí nghiệm</strong> –
      không học thuộc máy móc.
    </p>

    <div class="hero-actions">
      <NuxtLink to="/lessons" class="btn primary">
        🚀 Bắt đầu học
      </NuxtLink>

      <NuxtLink to="/lessons" class="btn">
        📘 Xem lộ trình
      </NuxtLink>
    </div>
  </section>

  <!-- ===== DANH SÁCH BÀI HỌC ===== -->
  <section class="container py-16">
    <h2 class="text-2xl font-bold mb-8">
      📚 Bắt đầu từ đâu?
    </h2>

    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <NuxtLink
        v-for="lesson in lessons"
        :key="lesson.slug"
        :to="`/lessons/${lesson.slug}`"
        class="block rounded-xl border border-white/10
               bg-white/5 p-5 hover:bg-white/10 transition"
      >
        <div class="text-2xl mb-2">{{ lesson.icon }}</div>

        <h3 class="font-semibold text-lg">
          {{ lesson.title }}
        </h3>

        <p class="text-sm text-white/70 mt-1">
          {{ lesson.description }}
        </p>

        <span class="text-xs text-white/40 block mt-3">
          {{ lesson.chapter }}
        </span>
      </NuxtLink>
    </div>
  </section>

  <!-- Features -->
  <section class="container py-16">
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
