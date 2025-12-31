<script setup lang="ts">
import { computed } from "vue"
import { useRoute } from "vue-router"
import Breadcrumb from "~/components/lesson/Breadcrumb.vue"
import { lessonGroups } from "~/data/lesson"

// import nội dung bài học
import Lesson_5_20 from "~/components/lesson/content/Lesson_5_20.vue"
import Lesson_6_21 from "~/components/lesson/content/Lesson_6_21.vue"
import Lesson_6_22 from "~/components/lesson/content/Lesson_6_22.vue"

const route = useRoute()
const slug = route.params.slug as string

// map slug → component
const lessonComponentMap: Record<string, any> = {
  "5-20-noble-gas": Lesson_5_20,
  "6-21": Lesson_6_21,
  "6-22": Lesson_6_22,
}

// tìm metadata bài học
const lessonMeta = computed(() => {
  for (const group of lessonGroups) {
    const found = group.lessons.find(l => l.slug === slug)
    if (found) return { group, lesson: found }
  }
  return null
})

// component nội dung
const LessonContent = computed(() => lessonComponentMap[slug] || null)
</script>

<template>
  <main class="max-w-4xl mx-auto px-6 py-10">

    <!-- Breadcrumb -->
    <Breadcrumb
      v-if="lessonMeta"
      :chapter="lessonMeta.group.chapter"
      :chapterTitle="lessonMeta.group.title"
      :lessonTitle="lessonMeta.lesson.title"
    />

    <!-- Nội dung bài -->
    <component
      :is="LessonContent"
      v-if="LessonContent"
    />

    <!-- fallback -->
    <div v-else class="text-red-400">
      ❌ Bài học không tồn tại
    </div>

  </main>
</template>
