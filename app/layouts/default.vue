<template>
  <div class="min-h-screen bg-background text-foreground">
    <!-- ===== HEADER / NAVBAR ===== -->
    <header class="border-b border-white/10">
      <div class="container flex items-center justify-between py-4">
        <!-- LOGO -->
        <NuxtLink to="/" class="text-xl font-bold">
          🔥 Lò Hóa Vui
        </NuxtLink>

        <!-- NAV -->
        <nav class="flex items-center gap-6">
          <NuxtLink
            to="/lessons"
            class="hover:text-blue-400 transition"
          >
            📚 Bài học
          </NuxtLink>

          <NuxtLink
            to="/"
            class="hover:text-blue-400 transition"
          >
            🧭 Lộ trình
          </NuxtLink>

          <ThemeToggle />
        </nav>
      </div>
    </header>

    <!-- ===== PAGE CONTENT ===== -->
    <main>
      <slot />
    </main>
  </div>
</template>
