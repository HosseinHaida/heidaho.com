<template>
  <div class="flex flex-col w-full justify-end">
    <div class="bg-red_d w-full absolute top-0 z-0 h-4" />
    <div class="bg-paper w-full rounded-tl-2xl rounded-tr-2xl z-10 h-5" />

    <div class="self-end mr-5 flex items-center">
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
const menuBtn = ref<HTMLElement>()

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
/* .btn-menu {
  z-index: 1;
} */
</style>
