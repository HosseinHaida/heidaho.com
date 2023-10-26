<template>
  <div class="w-full h-full z-50">
    <div class="flex h-full lg:ml-[8vw] menu-container">
      <div ref="mainSecMenu" class="bg-paper flex-1 main-section-menu">
        <div class="border-b-grey flex w-full border-b border-solid px-4 py-2">
          <button
            ref="menuBtn"
            class="bg-white rounded-full p-2 flex justify-center items-center close-menu-btn"
            @click="hideMenu"
          >
            <Icon
              name="material-symbols:close-rounded"
              color="black"
              class="text-2xl btn-icon"
            />
          </button>
        </div>

        <div class="links-container overflow-y-auto w-full h-full pb-12">
          <div class="menu-links p-4 grid">
            <div class="flex">
              <div class="menu-link-number">1</div>
              <NuxtLink class="menu-link" to="/">HOME</NuxtLink>
            </div>
            <div class="flex">
              <div class="menu-link-number">2</div>
              <NuxtLink class="menu-link" to="/about">ABOUT</NuxtLink>
            </div>
            <div class="flex">
              <div class="menu-link-number">3</div>
              <NuxtLink class="menu-link" to="/petit">PETIT</NuxtLink>
            </div>
            <div class="flex">
              <div class="menu-link-number">4</div>
              <NuxtLink class="menu-link" to="/contact">CONTACT</NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div
        class="bg-red_d flex-1 max-w-sm py-4 pl-4 pr-8 secondary-section-menu hidden sm:block"
        ref="secondarySeMenu"
      >
        <div class="box w-full">
          <div class="box-heading">Availability</div>
          <div class="box-body">End of November / 2023</div>
        </div>

        <div class="box w-full mt-4">
          <div class="box-heading">Recent Playlist</div>
          <div class="box-body">Playlist</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import gsap from "gsap"
const route = useRoute()
const mainSecMenu = ref<HTMLElement>()
const secondarySeMenu = ref<HTMLElement>()

onMounted(() => {
  let tl = gsap.timeline()
  let ease = "power2.out"
  if (!mainSecMenu.value || !secondarySeMenu.value) return
  tl.to(secondarySeMenu.value, { x: "0", duration: 0.3, ease })
  tl.to(mainSecMenu.value, { x: "0", duration: 0.4, ease }, "-=0.3")
})

const hideMenu = () => {
  let tl = gsap.timeline()
  let ease = "power2.out"
  if (!mainSecMenu.value || !secondarySeMenu.value) return
  tl.to(mainSecMenu.value, {
    x: "200%",
    duration: 0.4,
    ease,
    onComplete: () => emit("hideMenu"),
  })
  tl.to(secondarySeMenu.value, { x: "100%", duration: 0.3, ease }, "-=0.4")
}

const emit = defineEmits(["hideMenu"])

watch(
  () => route.fullPath,
  () => {
    hideMenu()
  }
)
</script>

<style scoped>
.main-section-menu {
  margin-right: -20px;
  transform: translate(200%);
}
.secondary-section-menu {
  transform: translate(100%);
}

.main-section-menu,
.secondary-section-menu,
.menu-container {
  @apply rounded-tl-2xl rounded-bl-2xl;
}

.close-menu-btn:hover > .btn-icon {
  @apply animate-wiggle;
}

.menu-link {
  animation: fadeToRedDark 0.4s;
  animation-fill-mode: forwards;
  @apply text-red_d font-[BigShoulders] font-black text-[12vw] leading-none;
}

.menu-link:hover {
  animation: fadeToRedSecondary 0.4s;
  animation-fill-mode: forwards;
}
.router-link-active {
  @apply text-red !important;
}
.menu-link-number {
  @apply border-grey text-red_2 border font-[BigShoulders] rounded-full h-max px-2 py-1 text-xs;
}
</style>
