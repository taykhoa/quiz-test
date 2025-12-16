<script setup>
import GhCard from '~/components/GhCard.vue'
import ThemeToggle from '~/components/ThemeToggle.vue'
</script>

<template>
  <main class="p-8 space-y-10 max-w-5xl">
    <!-- Header -->
    <header class="flex items-start justify-between">
      <div class="space-y-2">
        <h1
          class="text-4xl font-bold"
          style="color: var(--accent)"
        >
          🔥 Lò Hóa Vui
        </h1>

        <p
          class="text-base max-w-2xl"
          style="color: var(--text-muted)"
        >
          Nền tảng học Hóa học trực quan, dễ hiểu và hiện đại dành cho học sinh THPT.
        </p>
      </div>

      <!-- Toggle dark / light -->
      <ThemeToggle />
    </header>

    <!-- Giới thiệu -->
    <GhCard>
      <h2
        class="text-base font-semibold mb-2"
        style="color: var(--text-main)"
      >
        Giới thiệu
      </h2>

      <p
        class="text-sm leading-relaxed mb-3"
        style="color: var(--text-muted)"
      >
        <strong style="color: var(--text-main)">Lò Hóa Vui</strong> được xây dựng với mục tiêu
        giúp học sinh THPT tiếp cận Hóa học một cách
        <strong>dễ hiểu</strong>, <strong>trực quan</strong> và
        <strong>có hệ thống</strong>.
      </p>

      <p
        class="text-sm leading-relaxed"
        style="color: var(--text-muted)"
      >
        Thay vì học thuộc máy móc, học sinh được khuyến khích
        <em>quan sát – phân tích – suy luận</em> thông qua
        thí nghiệm, mô phỏng, bài tập tư duy và ví dụ gắn với thực tế.
      </p>
    </GhCard>

    <!-- Vì sao chọn Lò Hóa Vui -->
    <GhCard>
      <h2
        class="text-base font-semibold mb-2"
        style="color: var(--text-main)"
      >
        Vì sao chọn Lò Hóa Vui?
      </h2>

      <ul
        class="list-disc pl-5 text-sm space-y-1"
        style="color: var(--text-muted)"
      >
        <li>Nội dung bám sát chương trình Hóa học THPT</li>
        <li>Trình bày rõ ràng, ưu tiên bản chất thay vì ghi nhớ</li>
        <li>Thí nghiệm và ví dụ được chọn lọc, an toàn và dễ triển khai</li>
        <li>Phù hợp cho tự học, ôn tập và mở rộng kiến thức</li>
      </ul>
    </GhCard>

    <!-- Định hướng -->
    <GhCard>
      <h2
        class="text-base font-semibold mb-2"
        style="color: var(--text-main)"
      >
        Định hướng phát triển
      </h2>

      <p
        class="text-sm leading-relaxed"
        style="color: var(--text-muted)"
      >
        Trong thời gian tới, Lò Hóa Vui sẽ tiếp tục phát triển
        hệ thống bài học theo từng chủ đề, kết hợp
        thí nghiệm lượng nhỏ, mô phỏng và học liệu số
        nhằm nâng cao năng lực tư duy khoa học cho học sinh.
      </p>
    </GhCard>
  </main>
</template>
