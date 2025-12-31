<script setup lang="ts">
import { useRoute } from "vue-router"
import { lessonGroups } from "~/data/lesson"

const route = useRoute()
const slug = route.params.slug as string

let chapter = ""
let chapterTitle = ""
let lessonTitle = ""

for (const group of lessonGroups) {
  const lesson = group.lessons.find(l => l.slug === slug)
  if (lesson) {
    chapter = group.chapter
    chapterTitle = group.title
    lessonTitle = lesson.title
    break
  }
}
</script>

<template>
  <nav
    class="mb-6 text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2 flex-wrap"
    aria-label="Breadcrumb"
  >
    <NuxtLink to="/" class="hover:text-black dark:hover:text-white">
      Trang chủ
    </NuxtLink>

    <span>›</span>

    <NuxtLink to="/lessons" class="hover:text-black dark:hover:text-white">
      Bài học
    </NuxtLink>

    <span>›</span>

    <span v-if="chapter" class="text-gray-600 dark:text-gray-300">
      {{ chapter }}: {{ chapterTitle }}
    </span>

    <span v-if="lessonTitle">›</span>

    <span class="font-medium text-black dark:text-white">
      {{ lessonTitle }}
    </span>
  </nav>
</template>
