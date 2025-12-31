<template>
  <NuxtLink
    :to="to"
    class="group block rounded-xl border border-white/10
           bg-gradient-to-br from-white/5 to-white/0
           p-5 transition
           hover:-translate-y-1
           hover:border-blue-400/40
           hover:bg-white/10"
  >
    <div class="flex items-start gap-4">
      <span class="text-2xl">
        {{ icon ?? "📘" }}
      </span>

      <div>
        <h3 class="font-semibold text-lg group-hover:text-blue-400 transition">
          {{ title }}
        </h3>

        <p class="text-sm text-white/70 mt-1">
          {{ description }}
        </p>
      </div>
    </div>
  </NuxtLink>
</template>
