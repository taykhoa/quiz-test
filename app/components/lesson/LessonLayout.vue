<script setup lang="ts">
/**
 * Bố cục bài học (Lesson layout)
 * - Chỉ lo khung hiển thị
 * - Không chứa nội dung kiến thức
 */

import Breadcrumb from "~/components/lesson/Breadcrumb.vue"

/**
 * Thuộc tính đầu vào (Props)
 */
defineProps<{
  title: string          // Tiêu đề bài học
  subtitle?: string      // Phần bổ sung (ví dụ: chủ đề nhỏ)
}>()
</script>

<template>
  <main class="max-w-4xl mx-auto px-6 py-10">
    <!-- ===== ĐỊNH HƯỚNG ===== -->
    <Breadcrumb class="mb-6" />

    <!-- ===== TIÊU ĐỀ BÀI HỌC ===== -->
    <header class="mb-10">
      <h1 class="text-2xl font-bold">
        {{ title }}
        <span
          v-if="subtitle"
          class="font-semibold text-gray-700"
        >
          – {{ subtitle }}
        </span>
      </h1>
    </header>

    <!-- ===== NỘI DUNG BÀI HỌC ===== -->
    <section class="space-y-8">
      <slot />
    </section>
  </main>
</template>
