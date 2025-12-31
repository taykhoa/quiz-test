<script setup lang="ts">
import { lessonGroups } from "~/data/lesson"
import LessonCard from "~/components/lesson/LessonCard.vue"
</script>

<template>
  <section class="container py-16">
    <h1 class="text-3xl font-bold mb-12">
      📚 Danh sách bài học
    </h1>

    <div class="space-y-12">
      <section
        v-for="group in lessonGroups"
        :key="group.chapter"
      >
        <!-- TÊN CHƯƠNG -->
        <h2 class="text-2xl font-semibold mb-2">
          {{ group.chapter }}
        </h2>

        <p class="text-white/60 mb-6">
          {{ group.title }}
        </p>

        <!-- DANH SÁCH BÀI -->
        <div class="space-y-4">
          <LessonCard
            v-for="lesson in group.lessons"
            :key="lesson.slug"
            :to="`/lessons/${lesson.slug}`"
            :icon="lesson.icon"
            :title="lesson.title"
            :description="lesson.description"
          />
        </div>
      </section>
    </div>
  </section>
</template>
