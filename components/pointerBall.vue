<template>
  <div>
    <div ref="pointerBall" id="ball" class="bg-white opacity-50 z-9" />
  </div>
</template>

<script lang="ts" setup>
import gsap from "gsap"

const pointerBall = ref<HTMLElement>()
const pos = ref({ x: 0, y: 0 })
const mouse = useMouse()

onMounted(() => {
  if (!pointerBall.value) return
  gsap.set(pointerBall.value, { xPercent: -50, yPercent: -50 })
  pos.value.x = window.innerWidth / 2
  pos.value.y = window.innerHeight / 2
  const speed = 0.4

  const xSet = gsap.quickSetter(pointerBall.value, "x", "px")
  const ySet = gsap.quickSetter(pointerBall.value, "y", "px")

  gsap.ticker.add(() => {
    // adjust speed for higher refresh monitors
    const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio())

    pos.value.x += (mouse.value.x - pos.value.x) * dt
    pos.value.y += (mouse.value.y - pos.value.y) * dt
    xSet(pos.value.x)
    ySet(pos.value.y)
  })
})
</script>

<style scoped>
#ball {
  width: 15px;
  height: 15px;
  position: fixed;
  top: 0;
  left: 0;
  border-radius: 50%;
  pointer-events: none;
}
</style>
