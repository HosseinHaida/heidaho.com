<template>
  <div class="flex w-full justify-between items-center">
    <div class="w-max absolute top-0 h-4 px-0 left-0 fixed-corner-left" />
    <div class="w-max absolute top-0 h-4 px-0 right-0 fixed-corner-right" />

    <NuxtLink
      to="/"
      class="text-red font-[BigShoulders] font-extrabold text-md md:text-[1.2vw] mt-4 mx-5 px-3 rounded-full border border-red"
    >
      HH
    </NuxtLink>

    <div class="mt-4 mr-5 flex items-center">
      <button
        ref="menuBtn"
        class="bg-white rounded-full p-2 flex justify-center items-center btn-menu"
        @click="$emit('showMenu')"
      >
        <Icon
          name="material-symbols:menu"
          color="black"
          class="text-2xl btn-icon"
        />
      </button>

      <div
        class="bg-red rounded-full flex justify-center items-center absolute invisible w-0 h-0 pointer-events-none z-30 btn-entity"
      >
        <Icon
          name="material-symbols:menu"
          color="white"
          class="text-2xl btn-entity-icon"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import gsap from "gsap"

const mouse = useMouse()
const menuBtn = ref<HTMLButtonElement>()

onMounted(() => {
  if (!menuBtn.value) return
  menuBtn.value.addEventListener("mousemove", shapeEntity)
  menuBtn.value.addEventListener("mouseleave", destructEntity)
})

const shapeEntity = () => {
  gsap.to(".btn-icon", {
    scale: 0,
    rotate: 360,
    duration: 0.2,
  })
  gsap.to(".btn-entity", {
    autoAlpha: 1,
    x: 0,
    y: 0,
    left: mouse.value.x - 40,
    top: mouse.value.y - 40,
    width: 40,
    height: 40,
    rotate: 360,
    duration: 0.2,
  })
}

const destructEntity = () => {
  gsap.to(".btn-icon", {
    scale: 1,
    rotate: 180,
    duration: 0.6,
  })
  gsap.to(".btn-entity", {
    autoAlpha: 0,
    width: 0,
    height: 0,
    scale: 1,
    rotate: 180,
    duration: 0.7,
  })
}

defineEmits(["showMenu"])
</script>

<style scoped>
.fixed-corner-left::before,
.fixed-corner-right::before {
  content: " ";
  @apply bg-red_d border-paper block w-[1rem] h-full border-b;
}
.fixed-corner-left::after {
  content: " ";
  @apply bg-paper border-paper border-t-4 border-l-[10px] border-solid rounded-tl-2xl w-[1rem] h-full block absolute top-0 z-0;
}

.fixed-corner-right::after {
  content: " ";
  @apply bg-paper border-paper border-t-4 border-r-[10px] border-solid rounded-tr-2xl w-[1rem] h-full block absolute top-0 z-0;
}
</style>
