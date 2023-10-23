<template>
  <div class="text-black container-fluid mt-8 py-2" ref="homePageContainer">
    <section>
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
          class="text-red_d text-center mb-8 mt-8 sm:mt-2 enthusiast-for"
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
            <span class="text-white text-xs sm:text-sm md:text-md lg:text-lg">
              WHO AM I?
            </span>
          </div>

          <div class="text-red_d text-head">
            I was born in the land of Persia but I reckon we are all connected
            and to define geographical and scientific specifications is limiting
            ourselves to what we know thus far. I'm a passionate Developer who
            tries to step firmly on the path, in which time is an illusion, no
            past no future and what happens now, creates the later.
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

              <!-- <div class="flex justify-end mt-6">
                <button class="btn">MORE ABOUT ME</button>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="bg-paper_lt w-[90vw] sm:w-[95vw] mt-44 mb-2 rounded-2xl mx-auto py-36"
      ref="photosSec"
    >
      <div class="flex w-full h-full mb-40" ref="photosCon">
        <div
          v-for="(photo, i) in photos"
          :key="i"
          class="border-solid px-5 absolute left-[2vw] sm:left-[-7.5vw] single-photo invisible"
        >
          <img
            :src="photo"
            :alt="'photo-' + i"
            class="rounded-xl h-44 sm:h-60 shadow-2xl"
          />
        </div>
      </div>
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
      </div>
    </section>

    <section class="flex flex-col pb-[10vh] sm:pb-[5vh]" ref="basketballSec">
      <div class="flex items-start w-full justify-center py-16">
        <div
          class="text-red_2 self-end ml-6 sm:ml-4 mb-[-100px] sm:mb-96 left-20 w-[200px] sm:w-[190px] text-sm sm:text-lg absolute"
        >
          I DO SHARE A GOOD AMOUNT OF LOVE FOR BASKETBALL
        </div>
        <div class="z-0 basket-txt" ref="basketText">BASKET</div>
        <img
          :src="portfolioPicSrc"
          class="w-[30vw] sm:w-[25vw] left-20 z-10 pointer-events-none"
          alt="Balling picture of me"
          ref="bbalPic"
        />
        <div class="self-end z-20 ball-txt" ref="ballText">BALL</div>
      </div>
    </section>

    <section
      class="bg-paper_lt w-[90vw] sm:w-[50vw] p-4 rounded-2xl mx-6 h-44 mb-44"
    >
      <div class="text-red_d text-head font-extrabold">
        "Allright, enough about the fun, let's talk business."
      </div>
    </section>

    <!-- <section
      class="bg-paper overflow-hidden w-full h-[100vh] flex flex-col justify-center"
      ref="careerDescCon"
    >
      <div
        class="text-red flex flex-col flex-nowrap px-20 w-max"
        ref="careerDesc"
      >
        <div class="text-[15.5vw] font-[BigShoulders] font-black leading-none">
          LET'S HAVE A LOOK AT MY CAREER SO FAR...
        </div>
      </div>
      <div class="h-[150px] w-[100vw] z-10 layered-steps" />
    </section> -->

    <section class="h-max flex justify-center mx-auto">
      <experienceSection />
    </section>
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
import portfolioPicSrc from "~/assets/me-bb1.png"

const photos = ref([img1, img2, img3, img4, img5, img6])

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

const basketballSec = ref<HTMLElement>()
const basketText = ref<HTMLElement>()
const bbalPic = ref<HTMLElement>()
const ballText = ref<HTMLElement>()

const photosSec = ref<HTMLElement>()

// const careerDescCon = ref<HTMLElement>()
// const careerDesc = ref<HTMLElement>()

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
const whoAmIScroll = {
  trigger: whoAmISec.value,
  scrub: 5,
}
const bbalScroll = {
  trigger: whoAmISec.value,
  scrub: 10,
}
const photosSecScrollTW = {
  trigger: photosSec.value,
  start: "25% top",
}
// const careerDescTW = (scrollAmount: number, trigger: HTMLElement) => {
//   return {
//     x: scrollAmount,
//     duration: 3,
//     ease: "none",
//     scrollTrigger: {
//       trigger,
//       start: "top",
//       end: `+=${scrollAmount * -1} bottom`,
//       pin: true,
//       scrub: 1,
//     },
//   }
// }

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
    whoText.value = whoText.value as HTMLElement
    amIText.value = amIText.value as HTMLElement
    anonPic.value = anonPic.value as HTMLElement
    basketText.value = basketText.value as HTMLElement
    ballText.value = ballText.value as HTMLElement
    bbalPic.value = bbalPic.value as HTMLElement

    // 1st section tween TL
    let titleTL = gsap.timeline()
    titleTL.from(titleCon.value, yTween(titleCon.value))
    titleTL.from(enthusiastCon.value, yTween(enthusiastCon.value), ">-1.7")
    titleTL.from(interestsCon.value, yTween(interestsCon.value), ">-1.5")

    // WHO AM I Section Tween TL
    gsap.to(whoText.value, { x: 220, y: 20, scrollTrigger: whoAmIScroll })
    gsap.to(amIText.value, { x: -270, y: -20, scrollTrigger: whoAmIScroll })
    gsap.to(anonPic.value, { x: -50, y: 30, scrollTrigger: whoAmIScroll })

    // Photos section tween TL
    let photos = gsap.utils.toArray(".single-photo")
    let photoSecTL = gsap.timeline({
      scrollTrigger: photosSecScrollTW,
      paused: true,
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

    // WHO AM I Section Tween TL
    gsap.to(basketText.value, { x: 220, y: 20, scrollTrigger: bbalScroll })
    gsap.to(ballText.value, { x: -270, y: -20, scrollTrigger: bbalScroll })
    gsap.to(bbalPic.value, { x: -50, y: 30, scrollTrigger: bbalScroll })

    // CAREER text tween
    // careerDescCon.value = careerDescCon.value as HTMLElement
    // careerDesc.value = careerDesc.value as HTMLElement
    // let careerDescScrollSize = -(
    //   careerDesc.value?.scrollWidth +
    //   200 -
    //   window.innerWidth
    // )
    // let careerDescTL = gsap.timeline()
    // careerDescTL.to(
    //   careerDesc.value,
    //   careerDescTW(careerDescScrollSize, careerDescCon.value)
    // )
  }, homePageContainer.value) // <- Scope!
})

const getPhotoPath = (index: number, photosLength: number) => {
  return {
    path: [
      { x: 0, y: 0 },
      { x: window.innerWidth / 2 - 100, y: -200 },
      { x: window.innerWidth - 200, y: -90 },
    ],
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
.ami-txt,
.basket-txt,
.ball-txt {
  @apply text-red font-[BigShoulders] text-[17vw] sm:text-[15.5vw] font-black leading-tight;
}
.layered-steps {
  background: url(~/assets/layered-steps.svg);
}
.section-heading div {
  @apply font-[BigShoulders] text-[6vw] sm:text-[6vw] leading-none font-extrabold;
}
</style>
