<template>
  <div class="container-fluid mt-8 py-2" ref="homePageContainer">
    <section class="relative">
      <div
        class="absolute top-[-4.5rem] bg-red z-30 w-full h-[100vh] title-overlay rounded-2xl flex items-center justify-center overflow-hidden"
      >
        <div
          class="text-paper_lt font-[BigShoulders] font-black text-head welcome-text overflow-hidden invisible"
        >
          WELCOME
        </div>
      </div>
      <div class="overflow-hidden">
        <div
          ref="titleCon"
          class="text-red w-full flex flex-col sm:flex-row justify-center text-center overflow-hidden title-container"
        >
          <span> HOSSEIN </span>
          <span class="pl-0 sm:pl-4"> HEIDARI </span>
        </div>
      </div>

      <div class="overflow-hidden">
        <div
          ref="enthusiastCon"
          class="text-red_d text-center mb-8 mt-8 sm:mt-2"
        >
          <span class="font-extralight leading-none text-[9vw] xl:text-[11vw]">
            The Enthusiast For
          </span>
        </div>
      </div>

      <div class="overflow-hidden">
        <div
          class="columns-2 md:columns-4 mx-8 py-6 overflow-hidden"
          ref="interestsCon"
        >
          <div class="flex flex-col items-center pb-4">
            <div class="text-red_d w-[170px]">
              <div class="interests-heading">Lifestyle</div>
              <div class="pt-2 text-body">Peace</div>
              <div class="pt-2 text-body">Mindfulness</div>
              <div class="pt-2 text-body">Nature</div>
            </div>
          </div>
          <div class="flex flex-col items-center pb-4">
            <div class="text-red_d w-[170px]">
              <div class="interests-heading">Well-being</div>
              <div class="pt-2 text-body">Health</div>
              <div class="pt-2 text-body">Family</div>
              <div class="pt-2 text-body">Sports</div>
            </div>
          </div>
          <div class="flex flex-col items-center pb-4">
            <div class="text-red_d w-[170px]">
              <div class="interests-heading">Digitalization</div>
              <div class="pt-2 text-body">Tech</div>
              <div class="pt-2 text-body">Web</div>
              <div class="pt-2 text-body">Motion</div>
            </div>
          </div>
          <div class="flex flex-col items-center pb-4">
            <div class="text-red_d w-[170px]">
              <div class="interests-heading">...</div>
              <div class="pt-2 text-body">Universe</div>
              <div class="pt-2 text-body">Endlessness</div>
              <div class="pt-2 text-body">Possibilities</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="flex flex-col pb-[10vh] sm:pb-[5vh]" ref="whoAmISec">
      <div class="flex items-start w-full justify-center py-16">
        <div
          class="text-red_2 self-end ml-6 sm:ml-4 mb-[-100px] sm:mb-10 left-20 w-[200px] sm:w-[190px] text-sm sm:text-lg absolute"
        >
          THE BEANIE AND THE COOL ICE BREAKER ARE MY MOM'S HANDMADE :)
        </div>
        <div class="z-0 who-txt" ref="whoText">WHO</div>
        <img
          :src="anonPicSrc"
          class="w-[30vw] sm:w-[20vw] left-20 z-10 pointer-events-none anon-pic"
          alt="Anonymous picture of me"
          ref="anonPic"
        />
        <div class="self-end z-20 ami-txt" ref="amIText">AM I?</div>
      </div>
    </section>

    <section class="bg-paper_lt w-[90vw] sm:w-[95vw] rounded-2xl mx-auto">
      <div class="py-16 px-6 sm:px-28">
        <div class="container-fluid">
          <div
            class="bg-red_d rounded-full float-left mt-[-1rem] xl:mt-0 px-6 sm:px-16 py-1 mr-3 md:mr-6"
          >
            <span
              class="text-paper_lt text-xs sm:text-sm md:text-md lg:text-lg"
            >
              WHO AM I?
            </span>
          </div>

          <div class="text-red_d text-head">
            I am Persian, but I reckon we are all connected, and to define
            geographical and scientific specifications is limiting ourselves to
            what we know thus far. I'm a passionate Developer who tries to step
            firmly on the path, in which time is an illusion, no past no future
            and what happens now, creates the latter.
          </div>

          <div
            class="text-red_d flex mt-6 md:mt-12 lg:mt-20 items-start columns-2 justify-between"
          >
            <div class="hidden md:flex gap-4 items-center">
              <div class="border-grey border rounded-full px-6 py-3">
                <span class="text-red_2 font-[BigShoulders] text-xl font-bold">
                  1
                </span>
              </div>
              <div class="text-[2vw]">Intro</div>
            </div>
            <div class="w-full sm:w-[50vw] text-body">
              I believe the possibility to have all the different variations of
              activities and being able to share a common sense of love for
              everything and still having the power not to get attached to it's
              mundanity is what makes us the most developed creatures on earth.
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="border-paper_lt border-solid border-r-4 border-l-4 w-[90vw] sm:w-[95vw] rounded-tl-2xl rounded-tr-2xl mx-auto h-64 mt-24"
      ref="photosSec"
    >
      <div
        class="bg-paper_lt w-full h-6 rounded-tl-xl rounded-tr-xl flex items-center px-4 gap-2 opacity-90"
      >
        <div class="w-2 h-2 bg-red_d rounded-sm" />
        <div class="w-2 h-2 bg-red_d rounded-sm" />
        <div class="w-2 h-2 bg-red_d rounded-sm" />
      </div>

      <div class="flex w-full h-full mt-20 md:mt-56" ref="photosCon">
        <div
          v-for="(photo, i) in photos"
          :key="i"
          class="border-solid px-5 absolute left-[-20vw] sm:left-[-7.5vw] single-photo invisible"
        >
          <img
            :src="photo"
            :alt="'photo-' + i"
            class="rounded-xl h-36 sm:h-60 shadow-2xl"
          />
        </div>
      </div>
    </section>
    <section
      class="bg-paper_lt w-[90vw] sm:w-[95vw] mb-2 rounded-2xl pt-10 md:pt-36 pb-36 mx-auto"
    >
      <div
        class="text-red flex flex-col justify-center items-center w-full section-heading"
      >
        <div>STRICT BUT</div>
        <div>UNCONDITIONAL</div>
      </div>

      <div
        class="text-red_d w-full sm:w-[50vw] text-center mt-10 text-body mx-auto"
      >
        I'm given a chance. A chance to be lively and to know more. I try to use
        my human intelligence, memory and intuition to get a better
        understanding of the moment and act more constructively.

        <div class="mt-6">
          Stop, listen, realise, learn, improvise, participate and to create
          something beautiful is my hobby.
        </div>

        <div class="flex justify-center mt-10">
          <nuxtBtn
            to="/about"
            btn-id="moreaboutme"
            model-value="MORE ABOUT ME"
          />
        </div>
      </div>
    </section>

    <section class="flex flex-col pb-[10vh] sm:pb-[5vh]" ref="cvSec">
      <div class="flex items-start w-full justify-center py-16">
        <!-- <div
          class="text-red_2 self-end ml-6 sm:ml-4 mb-[-100px] sm:mb-10 left-20 w-[200px] sm:w-[190px] text-sm sm:text-lg absolute"
        >
          THE BEANIE AND THE COOL ICE BREAKER ARE MY MOM'S HANDMADE :)
        </div> -->
        <div
          class="z-0 c-txt text-red font-[BigShoulders] text-[17vw] sm:text-[24vw] font-black leading-tight"
          ref="cText"
        >
          C
        </div>
        <img
          :src="cvPicSrc"
          class="w-[30vw] sm:w-[40vw] left-20 z-10 pointer-events-none cv-pic"
          alt="Official picture of me"
          ref="cvPic"
        />
        <div
          class="self-end z-20 v-txt text-red font-[BigShoulders] text-[17vw] sm:text-[24vw] font-black leading-tight"
          ref="vText"
        >
          V
        </div>
      </div>
    </section>

    <section class="bg-paper_lt w-[90vw] sm:w-[95vw] rounded-2xl mx-auto">
      <div class="py-16 px-6 sm:px-28">
        <div class="container-fluid">
          <div
            class="bg-red_d rounded-full float-left mt-[-1rem] xl:mt-0 px-6 sm:px-16 py-1 mr-3 md:mr-6"
          >
            <span
              class="text-paper_lt text-xs sm:text-sm md:text-md lg:text-lg"
            >
              WHERE AM I?
            </span>
          </div>

          <div class="text-red_d text-head">
            As a computer software engineering graduate and years of experience
            dedicated to coding and web development, I can admit I've seen
            enough and I'd say there is always more and that really intrigues
            me.
          </div>

          <div
            class="text-red_d flex mt-6 md:mt-12 lg:mt-20 items-start columns-2 justify-between"
          >
            <div class="hidden md:flex gap-4 items-center">
              <div class="border-grey border rounded-full px-6 py-3">
                <span class="text-red_2 font-[BigShoulders] text-xl font-bold">
                  2
                </span>
              </div>
              <div class="text-[2vw]">Path</div>
            </div>
            <div class="w-full sm:w-[50vw] text-body">
              <div>
                There is always a better and more creative way to solve things.
                Developing is much like hard-coding the creativity that as a
                thought would vanish in a glimpse.
              </div>

              <div class="mt-12">
                There is always a better and more creative way to solve things.
                Developing is much like hard-coding the creativity that as
                thought would vanish in a glimpse.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- <section class="h-max flex justify-center mx-auto">
      <experienceSection />
    </section> -->
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap"
import MotionPathPlugin from "gsap/MotionPathPlugin"
gsap.registerPlugin(MotionPathPlugin)

import img1 from "~/assets/photos/IMG_1247.jpg"
import img2 from "~/assets/photos/IMG_4585.jpeg"
import img3 from "~/assets/photos/IMG_6475.jpg"
import img4 from "~/assets/photos/IMG_6494.jpg"
import img5 from "~/assets/photos/IMG_7410.jpg"
import img6 from "~/assets/photos/IMG_7975.jpg"

import anonPicSrc from "~/assets/me.yellow.png"
import cvPicSrc from "~/assets/cv.png"

const photos = ref([img1, img2, img3, img4, img5, img6])
const { $isMobile, $isTablet } = useNuxtApp()
// const landingLoading = ref(true)

let ctx: ReturnType<typeof gsap.context>
const homePageContainer = ref<HTMLElement>()
const titleCon = ref<HTMLElement>()
const enthusiastCon = ref<HTMLElement>()
const interestsCon = ref<HTMLElement>()

const whoAmISec = ref<HTMLElement>()
const whoText = ref<HTMLElement>()
const anonPic = ref<HTMLElement>()
const amIText = ref<HTMLElement>()

const photosSec = ref<HTMLElement>()

// anims
const yTween = (target: HTMLElement) => {
  return {
    y: 250,
    ease: "power3.out",
    duration: 2,
    onComplete: (target: HTMLElement) => {
      target?.removeAttribute("style")
    },
    onCompleteParams: [target],
  }
}
// end of anims

useHead({
  title: "Home | A Developers Approach",
  meta: [{ name: "description", content: "A " }],
})

onMounted(() => {
  // landingLoading.value = false

  ctx = gsap.context(() => {
    titleCon.value = titleCon.value as HTMLElement
    enthusiastCon.value = enthusiastCon.value as HTMLElement
    interestsCon.value = interestsCon.value as HTMLElement
    whoAmISec.value = whoAmISec.value as HTMLElement
    whoText.value = whoText.value as HTMLElement
    amIText.value = amIText.value as HTMLElement
    anonPic.value = anonPic.value as HTMLElement
    photosSec.value = photosSec.value as HTMLElement

    // 1st section tween TL
    let titleTL = gsap.timeline()
    titleTL.to(".welcome-text", { autoAlpha: 1, duration: 0.5 })
    titleTL.to(".welcome-text", { height: 0, duration: 0.7 })
    titleTL.fromTo(
      ".title-overlay",
      { height: "100vh" },
      { height: 0, duration: 1 },
      ">-0.1"
    )
    titleTL.from(titleCon.value, yTween(titleCon.value), ">-0.6")
    titleTL.from(enthusiastCon.value, yTween(enthusiastCon.value), ">-1.7")
    titleTL.from(interestsCon.value, yTween(interestsCon.value), ">-1.5")

    // WHO AM I Section Tween TL
    let whoAmIScroll = { trigger: whoAmISec.value, scrub: 5 }
    gsap.to(whoText.value, { x: 140, y: 20, scrollTrigger: whoAmIScroll })
    gsap.to(amIText.value, { x: -160, y: -20, scrollTrigger: whoAmIScroll })
    gsap.to(anonPic.value, { x: -20, y: 30, scrollTrigger: whoAmIScroll })

    // Photos section tween TL
    let photos = gsap.utils.toArray(".single-photo")
    let photoSecTL = gsap.timeline({
      scrollTrigger: { trigger: photosSec.value, start: "top 50%" },
    })
    for (const [i, photo] of photos.entries()) {
      photoSecTL.to(
        photo,
        {
          autoAlpha: 1,
          ease: "power2.inOut",
          motionPath: getPhotoPath(i, photos.length),
          immediateRender: true,
        },
        ">-0.3"
      )
    }
  }, homePageContainer.value) // <- Scope!
})

const getPhotoPath = (index: number, photosLength: number) => {
  const path =
    $isMobile() || $isTablet()
      ? [
          { x: 0, y: 0 },
          { x: window.innerWidth / 2 - 20, y: -40 },
          { x: window.innerWidth - 40, y: -18 },
        ]
      : [
          { x: 0, y: 0 },
          { x: window.innerWidth / 2 - 100, y: -200 },
          { x: window.innerWidth - 200, y: -90 },
        ]

  return {
    path,
    curviness: 2,
    autoRotate: true,
    end: (photosLength - index) * (1 / photosLength),
  }
}

onUnmounted(() => {
  ctx.revert()
})
</script>

<style scoped>
.title-container span {
  @apply block md:inline-block font-[BigShoulders] text-[28vw] sm:text-[15.5vw] leading-none font-black cursor-default;
}

.interests-heading {
  @apply font-normal text-xl md:text-[2vw] lg:text-[1.7vw] xl:text-[1.6vw];
}

.who-txt,
.ami-txt {
  @apply text-red font-[BigShoulders] text-[17vw] sm:text-[15.5vw] font-black leading-tight;
}
.layered-steps {
  background: url(~/assets/layered-steps.svg);
}
</style>
