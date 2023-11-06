<template>
  <div>
    <div
      ref="pointerBall"
      class="bg-white fixed top-0 left-0 opacity-40 rounded-full pointer-events-none z-50 w-6 h-6"
    />
  </div>
</template>

<script lang="ts" setup>
import gsap from "gsap"

const pointerBall = ref<HTMLElement>()
const pos = ref({ x: 0, y: 0 })
const mouse = useMouse()

onMounted(() => {
  if (!pointerBall.value) return
  gsap.set(pointerBall.value, {
    xPercent: -50,
    yPercent: -50,
  })
  pos.value.x = window.innerWidth / 2
  pos.value.y = window.innerHeight / 2
  const speed = 0.2

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
