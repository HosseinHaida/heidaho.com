<template>
  <div
    class="text-paper_lt w-full h-[100vh] flex flex-col items-center justify-center"
  >
    <div class="text-[20vh] font-[BigShoulders] font-black">404</div>
    <div class="text-lg font-normal">NOT FOUND</div>
    <NuxtLink class="text-lg font-normal mt-8 underline" to="/"
      >GO BACK HOME</NuxtLink
    >
  </div>
</template>

<script lang="ts" setup>
onBeforeMount(() => {
  useBackground("dark")
})

onUnmounted(() => {
  useBackground("light")
})

definePageMeta({
  layout: false,
})
</script>

<style></style>
