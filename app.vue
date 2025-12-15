<script setup lang="ts">
const { $supabase } = useNuxtApp()

const { data, error } = await $supabase
  .from('test')
  .select('*')
</script>

<template>
  <div style="padding: 20px">
    <h1>Supabase test</h1>
    <pre>{{ data }}</pre>
    <pre v-if="error">{{ error }}</pre>
  </div>
</template>
