<script setup>
// Nuxt 3 tự động import useColorMode()
const colorMode = useColorMode()

const toggleTheme = () => {
  // Logic SỬA LỖI: Thay đổi 'colorMode.value' thành 'colorMode.preference'
  // 'preference' là thuộc tính cần thay đổi để module lưu và áp dụng class 'dark'
  
  if (colorMode.preference === 'dark') {
    colorMode.preference = 'light'
  } else {
    // Nếu đang là 'light' (hoặc 'system'), chuyển sang 'dark'
    colorMode.preference = 'dark'
  }
}
</script>

<template>
  <div class="p-8 space-y-6 max-w-3xl mx-auto">
    <h1 class="text-4xl font-bold text-blue-600 dark:text-blue-400">
      🔥 Lò Hóa Vui
    </h1>

    <p class="text-lg text-zinc-800 dark:text-zinc-200">
      Nền tảng học Hóa học trực quan, dễ hiểu và hiện đại dành cho học sinh THPT.
    </p>

    <button
      @click="toggleTheme"
      class="px-4 py-2 rounded-md transition-colors duration-200
             bg-zinc-200 dark:bg-zinc-700
             hover:bg-zinc-300 dark:hover:bg-zinc-600
             text-zinc-900 dark:text-zinc-100"
    >
      {{ colorMode.value === 'dark' ? '☀ Chế độ sáng' : '🌙 Chế độ tối' }}
    </button>

    <section class="space-y-4 text-zinc-800 dark:text-zinc-200">
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
