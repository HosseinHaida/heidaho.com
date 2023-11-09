<template>
  <div class="h-full w-full" ref="bballSec">
    <div class="flex items-start w-full justify-center py-16">
      <div
        class="text-red_2 self-end ml-6 sm:ml-4 mb-[-100px] sm:mb-80 left-20 w-[200px] sm:w-[250px] text-sm sm:text-lg absolute"
      >
        <p>
          BASKETBALL HAS TAUGHT ME QUITE LESSONS
          <strong>CREATIVITY & TEAMWORK</strong>
          ARE TWO OF THEM
        </p>
      </div>
      <h2 class="z-0 basket-txt" ref="basketText">BASKET</h2>
      <img
        :src="bballPic"
        class="w-[55vw] sm:w-[25vw] left-20 z-10 pointer-events-none"
        alt="Balling picture of me"
        ref="bbalPic"
      />
      <h2 class="self-end z-20 ball-txt" ref="ballText">BALL</h2>
    </div>
  </div>
</template>

<script lang="ts" setup>
import gsap from "gsap"
import bballPic from "~/assets/me-bb.png"

let ctx: ReturnType<typeof gsap.context>

const bballSec = ref<HTMLElement>()
const basketText = ref<HTMLElement>()
const bbalPic = ref<HTMLElement>()
const ballText = ref<HTMLElement>()

onMounted(() => {
  ctx = gsap.context(() => {
    const tl = gsap.timeline()
    bballSec.value = bballSec.value as HTMLElement
    basketText.value = basketText.value as HTMLElement
    ballText.value = ballText.value as HTMLElement
    bbalPic.value = bbalPic.value as HTMLElement

    // Basketball Section Tween TL
    const bbalScroll = { trigger: bballSec.value, scrub: 10 }
    tl.to(basketText.value, { x: 150, y: 20, scrollTrigger: bbalScroll })
    tl.to(ballText.value, { x: -180, y: -20, scrollTrigger: bbalScroll })
    tl.to(bbalPic.value, { x: -30, y: 30, scrollTrigger: bbalScroll })
  }, bballSec.value) // <- Scope!

  onUnmounted(() => {
    ctx.revert()
  })
})
</script>

<style scoped>
.basket-txt,
.ball-txt {
  @apply text-red font-[BigShoulders] text-[17vw] sm:text-[15.5vw] font-black leading-tight;
}
</style>
