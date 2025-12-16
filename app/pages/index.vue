<script setup>
const colorMode = useColorMode()

const toggleTheme = () => {
  colorMode.preference =
    colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <div class="p-8 space-y-6 max-w-3xl mx-auto">
    <h1 class="text-4xl font-bold text-blue-600 dark:text-blue-400">
      🔥 Lò Hóa Vui
    </h1>

    <p class="text-lg">
      Nền tảng học Hóa học trực quan, dễ hiểu và hiện đại dành cho học sinh THPT.
    </p>

    <button
      @click="toggleTheme"
      class="px-4 py-2 rounded-md
             bg-zinc-200 hover:bg-zinc-300
             dark:bg-zinc-700 dark:hover:bg-zinc-600"
    >
      {{ colorMode.value === 'dark'
        ? '☀ Chế độ sáng'
        : '🌙 Chế độ tối'
      }}
    </button>

    <section class="space-y-4">
      <h2 class="text-2xl font-semibold">👨‍🎓 Dành cho học sinh</h2>
      <p>Nội dung bám sát chương trình, dễ tự học.</p>

      <h2 class="text-2xl font-semibold">🧪 Hóa học trực quan</h2>
      <p>Thí nghiệm lượng nhỏ, mô phỏng, video, sơ đồ.</p>

      <h2 class="text-2xl font-semibold">💻 Công nghệ hiện đại</h2>
      <p>Nuxt 3 · Tailwind CSS · Supabase · Vercel</p>
    </section>

    <footer class="pt-6 text-sm text-zinc-500 dark:text-zinc-400">
      © 2025 Lò Hóa Vui · hocsinh.lohoavui.com
    </footer>
  </div>
</template>
