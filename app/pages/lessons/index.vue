<script setup lang="ts">
import { lessonGroups } from "~/data/lesson"
</script>

<template>
  <section class="container py-16">
    <h1 class="text-3xl font-bold mb-12">
      📚 Danh sách bài học
    </h1>

    <div class="space-y-12">
      <div
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
          <NuxtLink
            v-for="lesson in group.lessons"
            :key="lesson.slug"
            :to="`/lessons/${lesson.slug}`"
            class="block rounded-lg border border-white/10
                   bg-white/5 p-4 hover:bg-white/10 transition"
          >
            <div class="flex items-start gap-3">
              <span class="text-xl">{{ lesson.icon }}</span>

              <div>
                <h3 class="font-medium">
                  {{ lesson.title }}
                </h3>

                <p class="text-sm text-white/70">
                  {{ lesson.description }}
                </p>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
