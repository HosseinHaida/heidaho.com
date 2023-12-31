<template>
  <div :id="btnId">
    <NuxtLink
      :to="to"
      class="text-red border-red h-12 border-2 rounded-full flex items-center px-6 py-1 z-10 overflow-hidden font-medium relative nuxt-btn"
      :id="btnId + '_link'"
    >
      <span class="text-lg mr-2 z-10 pointer-events-none">
        {{ label }}
      </span>
      <Icon
        :id="btnId + '_icon'"
        name="mdi:arrow-top-right-thin-circle-outline"
        class="pointer-events-none z-10 nuxt-btn-icon ml-1"
        size="1.6rem"
      />
      <div
        :id="btnId + '_entity'"
        class="bg-red pointer-events-none z-0 absolute bottom-0 rounded-full w-[360px] h-[360px] scale-0"
      />
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import gsap from "gsap"
const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  btnId: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
})
const { label, btnId } = props

const mouse = useMouse()

onMounted(() => {
  const btn = <HTMLElement>document.getElementById(`${btnId}`)
  btn.addEventListener("mousemove", shapeEntity)
  btn.addEventListener("mouseleave", destructEntity)
})

const shapeEntity = () => {
  gsap.to(`#${btnId}_entity`, {
    left: mouse.value.offsetX - 180,
    top: mouse.value.offsetY - 180,
    scale: 1,
    ease: "power2.out",
    duration: 0.7,
  })
  gsap.to(`#${btnId}_icon`, {
    rotate: 360,
    scale: 1.4,
    ease: "power1.out",
    duration: 0.7,
  })
  gsap.to(`#${btnId}_link`, {
    color: "#e0dbc8",
    ease: "power2.out",
    duration: 0.7,
  })
}

const destructEntity = () => {
  gsap.to(`#${btnId}_entity`, {
    scale: 0,
    ease: "power4",
    duration: 0.7,
  })
  gsap.to(`#${btnId}_icon`, {
    rotate: 0,
    scale: 1,
    ease: "power1.out",
    duration: 0.7,
  })
  gsap.to(`#${btnId}_link`, {
    color: "#8a0000",
    ease: "power4",
    duration: 0.7,
  })
}
</script>
