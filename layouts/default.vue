<template>
  <div class="bg-red_dark w-full min-h-screen p-4 z-0">
    <div class="bg-paper fixed rounded-2xl fixed-w overflow-auto h-full z-1">
      <div
        class="fixed w-full h-full rounded-2xl fixed-w"
        :class="showMenu ? 'overlay-to-black' : 'overlay-to-transparent'"
      />

      <div class="fixed w-full fixed-w">
        <mainHeader @showMenu="showMenu = true" />
      </div>

      <mainMenu
        class="fixed top-0 pt-4"
        v-if="showMenu === true"
        @hideMenu="showMenu = false"
      />

      <div class="pt-8">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const showMenu = ref(false)
</script>

<style scoped>
.overlay-to-black {
  background-color: transparent;
  animation: fadeToBlack 0.2s;
  animation-fill-mode: forwards;
  display: block;
}

.overlay-to-transparent {
  @apply bg-black opacity-50;
  animation: fadeToTransparent 0.2s;
  animation-fill-mode: forwards;
  display: none;
}

@keyframes fadeToBlack {
  from {
    background-color: transparent;
    display: none;
  }
  to {
    @apply bg-black opacity-70;
    display: block;
  }
}

@keyframes fadeToTransparent {
  from {
    @apply bg-black opacity-70;
    display: block;
  }
  to {
    background-color: transparent;
    display: none;
  }
}
</style>
