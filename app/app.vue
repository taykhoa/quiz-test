<template>
  <div class="app-shell">
    <!-- Toggle sáng / tối toàn hệ thống -->
    <ThemeToggle />

    <!-- Nội dung từng page -->
    <NuxtPage />
  </div>
</template>

<style>
.app-shell {
  min-height: 100vh;
}
</style>
