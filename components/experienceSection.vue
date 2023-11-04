<template>
  <section ref="rootContainer">
    <div
      class="w-[90vw] sm:w-[95vw] h-max rounded-2xl mx-auto"
      ref="danaxaDescSec"
    >
      <div class="flex h-full items-center justify-center overflow-hidden">
        <div
          class="w-full pb-10 flex flex-col justify-center md:flex-row gap-4"
        >
          <div class="flex flex-col z-0">
            <video
              autoplay
              loop
              muted
              class="rounded-2xl md:h-[70vh]"
              ref="dlabelVid"
            >
              <source autoplay :src="dlabelVidMP4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div
            class="bg-paper rounded-2xl w-full md:w-96 h-max flex flex-col gap-4 z-10"
            ref="danaxaDesc"
          >
            <div
              class="bg-paper_lt rounded-2xl p-4 flex flex-col justify-between md:h-[70vh] pr-4"
            >
              <NuxtLink to="https://danaxa.com">
                <img :src="danaXaLogo" class="w-24" alt="danaXa Logo" />
              </NuxtLink>

              <div class="text-red text-head font-semibold mt-12">
                Frontend Developer
                <div class="text-lg font-normal">
                  Aug 2020 - Jul 2023 | Canberra, Australia
                </div>

                <div class="flex flex-wrap gap-1 mt-4">
                  <div class="tech-chip">JavaScript</div>
                  <div class="tech-chip">Vue.js</div>
                  <div class="tech-chip">Kanva.js</div>
                  <div class="tech-chip">Flask</div>
                </div>

                <div class="text-red w-full flex mt-6">
                  <nuxtBtn
                    to="https://dlabel.org/annotation/tool"
                    btn-id="dlabelbtn"
                    model-value="GO TO APP"
                  />
                </div>
              </div>
            </div>
            <!-- <div
              class="text-red_d bg-paper_lt pb-12 pt-6 pl-6 pr-4 rounded-2xl text-body"
            >
              <div class="text-red w-full flex justify-end pb-6"><li></li></div>
              <div class="pr-4">
                Development of multiple AI-powered computer vision tools,
                including an image/video annotation engine.
              </div>
            </div>
            <div
              class="text-red_d bg-paper_lt pb-12 pt-6 pl-6 pr-4 rounded-2xl text-body"
            >
              <div class="text-red w-full flex justify-end pb-6"><li></li></div>
              <div class="pr-4">
                Design and implementation of the tools mainly using Vue.js,
                Konva.js and GSAP for animations.
              </div>
            </div>
            <div
              class="text-red_d bg-paper_lt pb-12 pt-6 pl-6 pr-4 rounded-2xl text-body"
            >
              <div class="text-red w-full flex justify-end pb-6"><li></li></div>
              <div class="pr-4">
                Application performance improvements in topics such as
                filtering, list virtualizations, drag-and-drop,...
              </div>
            </div>
            <div
              class="text-red_d bg-paper_lt pb-12 pt-6 pl-6 pr-4 rounded-2xl text-body"
            >
              <div class="text-red w-full flex justify-end pb-6"><li></li></div>
              <div class="pr-4">
                Building landing pages and a blog using Nuxt.js and SASS.
              </div>
            </div>
            <div
              class="text-red_d bg-paper_lt pb-12 pt-6 pl-6 pr-4 rounded-2xl text-body"
            >
              <div class="text-red w-full flex justify-end pb-6"><li></li></div>
              <div class="pr-4">
                Using web sockets between frontend and Flask backend for
                real-time messaging and QA system.
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>

    <div
      class="w-[90vw] sm:w-[95vw] h-max rounded-2xl mx-auto mt-12"
      ref="netaaDescSec"
    >
      <div class="flex h-full items-center justify-center overflow-hidden">
        <div
          class="w-full pb-10 flex flex-col justify-center md:flex-row gap-4"
        >
          <div class="flex flex-col z-0">
            <img
              class="bg-paper_lt rounded-2xl p-2 w-full md:w-auto h-auto md:h-[59vh]"
              :src="netaaCollage"
            />
          </div>

          <div
            class="bg-paper rounded-2xl w-full md:w-96 h-max flex flex-col gap-4 z-10 pr-4"
            ref="netaaDesc"
          >
            <div
              class="bg-paper_lt rounded-2xl p-4 flex flex-col justify-between md:h-[58vh]"
            >
              <NuxtLink to="https://netaa.ir/">
                <img :src="netaaLogo" class="w-32" alt="netaa Logo" />
              </NuxtLink>

              <div class="text-red text-head font-semibold mt-12">
                Fullstack Developer
                <div class="text-lg font-normal">
                  Sep 2017 - Jul 2020 | Esfahan, Iran
                </div>

                <div class="flex gap-1 mt-4 flex-wrap">
                  <div class="tech-chip">JavaScript</div>
                  <div class="tech-chip">Vue.js</div>
                  <div class="tech-chip">Quasar</div>
                  <div class="tech-chip">Hapi.js</div>
                  <div class="tech-chip">Express.js</div>
                  <div class="tech-chip">PostgreSQL</div>
                </div>

                <div class="text-red w-full flex mt-6">
                  <nuxtBtn
                    to="https://samanesalamat.com/en"
                    btn-id="netaabtn"
                    model-value="GO TO APP"
                  />
                </div>
              </div>
            </div>
            <!-- <div
              class="text-red_d bg-paper_lt pb-12 pt-6 pl-6 pr-4 rounded-2xl text-body"
            >
              <div class="text-red w-full flex justify-end pb-6"><li></li></div>
              <div class="pr-4">
                Development of a comprehensive “Occupational Safety and Health”
                SaaS Vue.js web app.
              </div>
            </div>
            <div
              class="text-red_d bg-paper_lt pb-12 pt-6 pl-6 pr-4 rounded-2xl text-body"
            >
              <div class="text-red w-full flex justify-end pb-6"><li></li></div>
              <div class="pr-4">
                Implementation of an HR-Automation system web app using Node.js
                and Vue.js (Quasar Framework) and MSSQL Server.
              </div>
            </div>
            <div
              class="text-red_d bg-paper_lt pb-12 pt-6 pl-6 pr-4 rounded-2xl text-body"
            >
              <div class="text-red w-full flex justify-end pb-6"><li></li></div>
              <div class="pr-4">Design and creation of landing pages.</div>
            </div>
            <div
              class="text-red_d bg-paper_lt pb-12 pt-6 pl-6 pr-4 rounded-2xl text-body"
            >
              <div class="text-red w-full flex justify-end pb-6"><li></li></div>
              <div class="pr-4">Refactoring old and legacy codebase.</div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import gsap from "gsap"
import dlabelVidMP4 from "~/assets/dlabel-vid.mp4"
import danaXaLogo from "~/assets/danaxa.png"

import netaaCollage from "~/assets/healthyline-collage.jpg"
import netaaLogo from "~/assets/netaa.png"

const dlabelVid = ref<HTMLVideoElement>()

// let ctx: ReturnType<typeof gsap.context>

// const rootContainer = ref<HTMLElement>()
// const danaxaDescSec = ref<HTMLElement>()
// const danaxaDesc = ref<HTMLElement>()
// const netaaDescSec = ref<HTMLElement>()
// const netaaDesc = ref<HTMLElement>()

// const positionDescTW = (scrollAmount: number, trigger: HTMLElement) => {
//   return {
//     y: scrollAmount,
//     duration: 1,
//     ease: "none",
//     scrollTrigger: {
//       trigger,
//       start: "top",
//       end: `+=${scrollAmount * -1}`,
//       pin: true,
//       scrub: 1,
//       immediateRender: false,
//     },
//   }
// }

onMounted(() => {
  // ctx = gsap.context(() => {
  //   danaxaDescSec.value = danaxaDescSec.value as HTMLElement
  //   danaxaDesc.value = danaxaDesc.value as HTMLElement
  //   netaaDescSec.value = netaaDescSec.value as HTMLElement
  //   netaaDesc.value = netaaDesc.value as HTMLElement
  //   // danaXa desc tween
  //   let danaxaDescScrollSize = -(
  //     danaxaDesc.value?.scrollHeight +
  //     0.3 * window.innerHeight -
  //     window.innerHeight
  //   )
  //   gsap.to(
  //     danaxaDesc.value,
  //     positionDescTW(danaxaDescScrollSize, danaxaDescSec.value)
  //   )
  //   // netaa desc tween
  //   let netaaDescScrollSize = -(
  //     netaaDesc.value?.scrollHeight +
  //     0.5 * window.innerHeight -
  //     window.innerHeight
  //   )
  //   gsap.to(
  //     netaaDesc.value,
  //     positionDescTW(netaaDescScrollSize, netaaDescSec.value)
  //   )
  // }, rootContainer.value) // <- Scope!
})

onUnmounted(() => {
  // ctx.revert()
})
</script>

<style scoped>
.tech-chip {
  @apply bg-paper text-red px-4 py-1 text-sm rounded-sm;
}
</style>
