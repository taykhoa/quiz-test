<script setup>
const colorMode = useColorMode()
</script>

<template>
  <main class="max-w-4xl mx-auto px-6 py-12 space-y-12">

    <!-- Header -->
    <header class="space-y-4">
      <h1 class="text-4xl font-extrabold text-blue-600 dark:text-blue-400">
        Lò Hóa Vui
      </h1>

      <p class="text-lg text-zinc-600 dark:text-zinc-300">
        Nền tảng học Hóa học trực quan, dễ hiểu và hiện đại
        dành cho học sinh THPT.
      </p>

      <button
        class="inline-flex items-center gap-2
               px-4 py-2 rounded-lg
               bg-zinc-200 dark:bg-zinc-700
               hover:bg-zinc-300 dark:hover:bg-zinc-600
               transition"
        @click="
          colorMode.preference =
            colorMode.value === 'dark' ? 'light' : 'dark'
        "
      >
        🌗 Chuyển Dark / Light
      </button>
    </header>

    <!-- Feature cards -->
    <section class="grid md:grid-cols-3 gap-6">
      <div
        class="p-6 rounded-xl
               bg-zinc-100 dark:bg-zinc-800
               shadow-sm"
      >
        <h2 class="text-xl font-semibold mb-2">
          👩‍🎓 Dành cho học sinh
        </h2>
        <p class="text-sm text-zinc-600 dark:text-zinc-300">
          Nội dung bám sát chương trình,
          trình bày trực quan, dễ tự học.
        </p>
      </div>

      <div
        class="p-6 rounded-xl
               bg-zinc-100 dark:bg-zinc-800
               shadow-sm"
      >
        <h2 class="text-xl font-semibold mb-2">
          ⚗️ Hóa học trực quan
        </h2>
        <p class="text-sm text-zinc-600 dark:text-zinc-300">
          Thí nghiệm lượng nhỏ, mô phỏng,
          hình ảnh – video – sơ đồ.
        </p>
      </div>

      <div
        class="p-6 rounded-xl
               bg-zinc-100 dark:bg-zinc-800
               shadow-sm"
      >
        <h2 class="text-xl font-semibold mb-2">
          💻 Công nghệ hiện đại
        </h2>
        <p class="text-sm text-zinc-600 dark:text-zinc-300">
          Nuxt 3, Tailwind CSS, Supabase,
          tối ưu cho web & di động.
        </p>
      </div>
    </section>

    <!-- Footer note -->
    <footer class="text-sm text-zinc-500 dark:text-zinc-400">
      © {{ new Date().getFullYear() }} Lò Hóa Vui ·
      hocsinh.lohoavui.com
    </footer>

  </main>
</template>
