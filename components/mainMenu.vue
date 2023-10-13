<template>
  <div class="w-full h-full z-6">
    <div class="flex h-full lg:ml-[8vw] menu-container">
      <div ref="mainSectionMenu" class="bg-paper flex-1 main-section-menu">
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
              <NuxtLink class="menu-link" to="/">ABOUT</NuxtLink>
            </div>
            <div class="flex">
              <div class="menu-link-number">3</div>
              <NuxtLink class="menu-link" to="/">PROJECTS</NuxtLink>
            </div>
            <div class="flex">
              <div class="menu-link-number">4</div>
              <NuxtLink class="menu-link" to="/">CONTACT</NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div
        class="bg-red_dark flex-1 max-w-sm p-6 secondary-section-menu"
        ref="secondarySectionMenu"
      >
        <div class="box w-full">
          <div class="box-heading">Availability</div>
          <div class="box-body">End of November / 2023</div>
        </div>

        <div class="box w-full mt-4">
          <div class="box-heading">Recent Playlist</div>
          <div class="box-body">End of November / 2023</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import gsap from "gsap"

const mainSectionMenu = ref<HTMLElement>()
const secondarySectionMenu = ref<HTMLElement>()

onMounted(() => {
  let tl = gsap.timeline()
  if (!mainSectionMenu.value || !secondarySectionMenu.value) return
  tl.to(secondarySectionMenu.value, { x: "0", duration: 0.2 })
  tl.to(mainSectionMenu.value, { x: "0", duration: 0.3 }, "-=0.2")
})

const hideMenu = () => {
  let tl = gsap.timeline()
  if (!mainSectionMenu.value || !secondarySectionMenu.value) return
  tl.to(mainSectionMenu.value, {
    x: "200%",
    duration: 0.3,
    onComplete: () => {
      emit("hideMenu")
    },
  })
  tl.to(secondarySectionMenu.value, { x: "100%", duration: 0.2 }, "-=0.3")
}

const emit = defineEmits(["hideMenu"])
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
  font-family: BigShouldersStencilDisplay;
  font-weight: 900;
  font-size: 12vw;
  line-height: 1;
  animation: fadeToRedDark 0.3s;
  animation-fill-mode: forwards;
  @apply text-red_dark;
}

.menu-link:hover {
  animation: fadeToRedSecondary 0.3s;
  animation-fill-mode: forwards;
}

.menu-link-number {
  font-family: BigShouldersStencilDisplay;
  @apply border border-grey text-red_secondary rounded-full h-max px-2 py-1 text-xs;
}
</style>
