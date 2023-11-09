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
              webkit-playsinline
              playsinline
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
              class="bg-paper_lt rounded-2xl p-4 flex flex-col justify-between md:h-[70vh]"
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
                    label="GO TO APP"
                  />
                </div>
              </div>
            </div>
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
              alt="A collage of healthyline.com OSH app"
            />
          </div>

          <div
            class="bg-paper rounded-2xl w-full md:w-96 h-max flex flex-col gap-4 z-10"
            ref="netaaDesc"
          >
            <div
              class="bg-paper_lt rounded-2xl p-4 flex flex-col justify-between md:h-[59vh]"
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
                    label="GO TO APP"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import dlabelVidMP4 from "~/assets/dlabel-vid.mp4"
import danaXaLogo from "~/assets/danaxa.png"
import netaaCollage from "~/assets/healthyline-collage.jpg"
import netaaLogo from "~/assets/netaa.png"
</script>

<style scoped>
.tech-chip {
  @apply bg-paper text-red px-4 py-1 text-sm rounded-sm;
}
</style>
