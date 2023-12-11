<template>
  <div class="w-full h-full z-50">
    <div class="flex h-full lg:ml-[8vw] menu-container">
      <div
        ref="mainSecMenu"
        class="bg-paper flex-1 translate-x-[200%] mr-[-1rem] main-section-menu"
      >
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
          <nav class="menu-links p-4 grid">
            <div class="flex">
              <div class="menu-link-num">1</div>
              <NuxtLink class="menu-link" to="/">HOME</NuxtLink>
            </div>
            <div class="flex">
              <div class="menu-link-num">2</div>
              <NuxtLink class="menu-link" to="/about">ABOUT</NuxtLink>
            </div>
            <div class="flex">
              <div class="menu-link-num">3</div>
              <NuxtLink class="menu-link" to="/contact">CONTACT</NuxtLink>
            </div>
          </nav>
        </div>
      </div>
      <div
        class="bg-red_d flex-1 max-w-sm pt-4 pb-16 pl-4 pr-8 hidden sm:block translate-x-[100%] secondary-section-menu"
        ref="secondarySeMenu"
      >
        <div class="flex flex-col gap-4 h-full">
          <div class="box w-full">
            <div class="box-heading">Availability</div>
            <div class="box-body">End of December / 2023</div>
          </div>

          <div class="box w-full">
            <div class="box-heading">Recent Playlist</div>
            <div class="box-body">
              <NuxtLink
                to="https://music.youtube.com/playlist?list=PLJ0_tcAuWXvDIavpaE-8e1IAgbCogJ6k6&si=snlU2nMc_HLayCoR"
                target="_blank"
              >
                <svg class="h-28 cursor-pointer">
                  <path
                    class="fill-white hover:fill-white opacity-20 hover:opacity-25 shadow-2xl"
                    id="disk-outline"
                    d="
                    M 105, 55
                    a 50,50 0 1,1 100,0
                    a 50,50 0 1,1 -100,0
                "
                  />
                  <path
                    class="fill-white opacity-20"
                    d="
                    M 145, 55
                    a 10,10 0 1,1 20,0
                    a 10,10 0 1,1 -20,0
                "
                  />
                  <path
                    class="stroke-red_d stroke-2 fill-none opacity-50"
                    d="
                    M 135, 55
                    a 20,20 0 1,1 40,0
                    a 20,20 0 1,1 -40,0
                "
                  />
                  <path
                    id="disk-head"
                    class="fill-white opacity-60"
                    d="
                    M 145, 25
                    a 3,3 0 1,1 6,0
                    a 3,3 0 1,1 -6,0
                "
                  />
                </svg>
              </NuxtLink>
            </div>
          </div>
          <div class="box w-full h-full">
            <div class="box-heading flex justify-between">
              <span>Random Cat Facts</span>
              <Icon
                v-if="!facts"
                name="svg-spinners:pulse-rings-multiple"
                class="text-xl text-white opacity-60"
              />
            </div>
            <div class="box-body h-full overflow-hidden">
              <div v-if="!facts" class="p-2 max-w-sm w-full mx-auto mb-auto">
                <div class="animate-pulse flex space-x-4">
                  <div class="flex-1 space-y-6 py-1">
                    <div class="space-y-3">
                      <div class="h-2 bg-white opacity-20 rounded" />
                      <div class="grid grid-cols-3 gap-4">
                        <div
                          class="h-2 bg-white opacity-20 rounded col-span-2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="pb-8 w-full h-full flex flex-col justify-between items-center"
                v-else
              >
                <div class="w-full h-full meow-fact">
                  {{ currentFact.text }}
                </div>
                <div class="flex gap-2">
                  <div
                    v-for="(text, i) in facts"
                    :key="i"
                    @click="nextFact(i)"
                    class="w-2 h-2 rounded-full bg-white cursor-pointer"
                    :class="
                      currentFact.index === i ? 'opacity-90' : 'opacity-20'
                    "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import gsap from "gsap"
import MotionPathPlugin from "gsap/MotionPathPlugin"
import { useMeowFacts } from "~/composables/useMeowFacts"
gsap.registerPlugin(MotionPathPlugin)

const route = useRoute()
const mainSecMenu = ref<HTMLElement>()
const secondarySeMenu = ref<HTMLElement>()

useHead({
  meta: [
    {
      name: "description",
      content: "navigation menu",
    },
  ],
})

const facts = ref()
const factInterval = ref()
const currentFact = ref({
  text: "",
  index: -1,
})

onMounted(async () => {
  let tl = gsap.timeline()
  let ease = "power2.out"
  if (!mainSecMenu.value || !secondarySeMenu.value) return
  tl.to(secondarySeMenu.value, { x: "0", duration: 0.3, ease })
  tl.to(mainSecMenu.value, { x: "0", duration: 0.4, ease }, "-=0.3")

  let diskTL = gsap.timeline()
  diskTL.to("#disk-head", {
    motionPath: {
      path: "#disk-outline",
      align: "#disk-outline",
      alignOrigin: [0.5, 0.5],
    },
    duration: 15,
    ease: "none",
    repeat: -1,
  })

  facts.value = await useMeowFacts()
  initiateFactSlider()
})

const initiateFactSlider = () => {
  nextFact()
  factInterval.value = setInterval(nextFact, 15000)
}

const nextFact = async (goToFact?: number) => {
  let tl = gsap.timeline()
  await tl.to(".meow-fact", {
    xPercent: 120,
    duration: 0.5,
    autoAlpha: 0,
    ease: "power2",
    onComplete: () => {
      let nextIndex =
        goToFact ||
        (currentFact.value.index === facts.value.length - 1
          ? 0
          : currentFact.value.index + 1)

      currentFact.value = { text: facts.value[nextIndex], index: nextIndex }
      resetFactPos()
    },
  })

  await tl.from(
    ".meow-fact",
    {
      xPercent: -120,
      duration: 0.5,
      autoAlpha: 0,
      ease: "power2",
      onComplete: () => resetFactPos(),
    },
    ">-0.2"
  )

  if (goToFact) {
    clearInterval(factInterval.value)
    factInterval.value = setInterval(nextFact, 15000)
  }
}

const resetFactPos = () => {
  gsap.set(".meow-fact", { xPercent: 0, autoAlpha: 1 })
}

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

onUnmounted(() => {
  clearInterval(factInterval.value)
  currentFact.value = { text: "", index: -1 }
})

const emit = defineEmits(["hideMenu"])

watch(
  () => route.fullPath,
  () => {
    hideMenu()
  }
)
</script>

<style scoped>
.router-link-active {
  @apply text-red !important;
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
  @apply text-red_d font-[BigShoulders] font-black text-[11vh] md:text-[12vw] leading-none;
}

.menu-link:hover {
  animation: fadeToRedSecondary 0.4s;
  animation-fill-mode: forwards;
}
.menu-link-num {
  @apply border-grey text-red_2 border font-[BigShoulders] rounded-full h-max px-2 py-1 text-xs;
}

@keyframes fadeToRedSecondary {
  from {
    @apply text-red_d;
  }
  to {
    @apply text-red_2;
  }
}

@keyframes fadeToRedDark {
  from {
    @apply text-red_2;
  }
  to {
    @apply text-red_d;
  }
}

.box {
  @apply bg-red_2 rounded-md;
}
.box-heading {
  @apply text-red_lght border-red_d text-sm px-4 py-2 border-b;
}
.box-body {
  @apply text-white flex justify-center items-center text-sm p-4;
}
</style>
