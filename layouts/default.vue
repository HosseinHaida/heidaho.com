<template>
  <div class="bg-red_d w-full min-h-screen p-4">
    <div class="bg-red_d w-full fixed left-0 top-0 z-40 h-4" />
    <div class="rounded-2xl h-full fixed-w z-10">
      <div
        class="fixed rounded-2xl w-full h-full fixed-w z-40"
        :class="showMenu ? 'overlay-to-black' : 'overlay-to-transparent'"
      />

      <div class="fixed w-full fixed-w z-30">
        <mainHeader @showMenu="showMenu = true" />
      </div>

      <mainMenu
        class="fixed top-0 pt-4"
        v-if="showMenu === true"
        @hideMenu="showMenu = false"
      />

      <div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const showMenu = ref(false)
</script>

<style scoped>
.fixed-w {
  width: calc(100vw - 2rem);
}
.overlay-to-black {
  @apply bg-transparent block;
  animation: fadeToBlack 0.2s;
  animation-fill-mode: forwards;
}

.overlay-to-transparent {
  @apply bg-black opacity-50 hidden;
  animation: fadeToTransparent 0.2s;
  animation-fill-mode: forwards;
}

@keyframes fadeToBlack {
  from {
    @apply bg-transparent hidden;
  }
  to {
    @apply bg-black opacity-70 block;
  }
}

@keyframes fadeToTransparent {
  from {
    @apply bg-black opacity-70 block;
  }
  to {
    @apply bg-transparent hidden;
  }
}
</style>
