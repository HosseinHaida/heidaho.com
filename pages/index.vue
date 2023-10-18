<template>
  <div class="text-black container-fluid mt-8 py-2" ref="homePageContainer">
    <section>
      <div
        class="text-red w-full flex flex-col sm:flex-row justify-center text-center overflow-hidden title-container"
        ref="titleContainer"
      >
        <span> HOSSEIN </span>
        <span class="pl-0 sm:pl-4"> HEIDARI </span>
      </div>

      <div class="text-red_d text-center mb-8 mt-8 sm:mt-2">
        <span class="font-extralight leading-none text-[9vw] xl:text-[11vw]">
          The Enthusiast For
        </span>
      </div>
      <div class="columns-2 md:columns-4 mx-8 py-6 interests-container">
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
    </section>

    <section class="flex flex-col pb-[10vh] sm:pb-[5vh]" ref="whoAmISec">
      <!-- <div class="h-[150px] mb-10 w-full z-20 layered-steps" /> -->
      <div class="flex items-start w-full justify-center py-16">
        <div
          class="text-red_2 self-end ml-6 sm:ml-4 mb-[-100px] sm:mb-10 left-20 w-[200px] sm:w-[190px] text-sm sm:text-lg absolute"
        >
          THE BEANIE AND THE COOL ICE BREAKER ARE MY MOM'S HANDMADE :)
        </div>
        <div class="who-txt z-0">WHO</div>
        <img
          src="~/assets/me.yellow.png"
          class="w-[30vw] sm:w-[20vw] left-20 z-10 pointer-events-none anon-pic"
          alt="Anonymous picture of me"
        />
        <div class="ami-txt self-end z-20">AM I?</div>
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

    <section class="w-[90vw] sm:w-[95vw] mt-72" ref="photosSec">
      <div class="flex w-full h-full" ref="photosCon">
        <div
          v-for="(photo, i) in photos"
          :key="i"
          class="border-solid px-5 absolute left-[2vw] sm:left-[-7.5vw] single-photo"
        >
          <img
            :src="photo"
            :alt="'photo-' + i"
            class="rounded-xl h-44 sm:h-60 shadow-2xl"
          />
        </div>
      </div>
    </section>

    <section class="bg-paper_lt w-[90vw] sm:w-[95vw] rounded-2xl mx-auto py-32">
      <div
        class="text-red flex flex-col justify-center items-center w-full section-heading"
      >
        <div>WAKE UP</div>
        <div>AND BREATHE</div>
      </div>

      <div
        class="text-red_d w-full sm:w-[50vw] text-center mt-10 text-body mx-auto"
      >
        I'm given a chance. A chance to be lively and to know more. I try to use
        my human intelligence like memory and intuition to get a better
        understanding of the moment and act more constructively.

        <div class="mt-6">
          Stopp, listen, realise, learn, improvise, participate and to create
          something beautiful is my hobby.
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap"
import MotionPathPlugin from "gsap/MotionPathPlugin"
gsap.registerPlugin(MotionPathPlugin)

import img4 from "~/assets/photos/IMG_1247.jpg"
import img5 from "~/assets/photos/IMG_4585.jpeg"
import img6 from "~/assets/photos/IMG_6475.jpg"
import img7 from "~/assets/photos/IMG_6494.jpg"
import img9 from "~/assets/photos/IMG_7410.jpg"
import img11 from "~/assets/photos/IMG_7975.jpg"

const photos = ref([img4, img5, img6, img7, img9, img11])
// const landingLoading = ref(true)

let ctx: ReturnType<typeof gsap.context>

const homePageContainer = ref<HTMLElement>()
const titleContainer = ref<HTMLElement>()
const whoAmISec = ref<HTMLElement>()
const photosSec = ref<HTMLElement>()

// anims
const titleContainerAnim = {
  height: 0,
  y: "200px",
  ease: "power3.out",
  duration: 1.5,
  onComplete: () => {
    titleContainer.value?.removeAttribute("style")
  },
}
const whoAmIScrollAnim = {
  trigger: whoAmISec.value,
  start: "30% bottom",
  end: "bottom 30%",
  scrub: 2,
}
const photosSecScrollAnim = { trigger: photosSec.value, start: "50% top" }
// end of enims

useHead({
  title: "Home | A Developers Approach",
  meta: [
    {
      name: "description",
      content: "A ",
    },
  ],
})

onMounted(() => {
  // landingLoading.value = false

  ctx = gsap.context((self) => {
    if (!self?.selector) return

    const main = gsap.timeline()

    // title animation timeline
    const titleCont = self.selector(".title-container")
    let titleTL = gsap.timeline().from(titleCont, titleContainerAnim)
    main.add(titleTL)

    // who am i section animation timeline
    const whoText = self.selector(".who-txt")
    const amIText = self.selector(".ami-txt")
    const anonPic = self.selector(".anon-pic")
    let whoAmITL = gsap.timeline()
    whoAmITL.to(whoText, { x: 100, y: 20, scrollTrigger: whoAmIScrollAnim })
    whoAmITL.to(amIText, { x: -150, y: -20, scrollTrigger: whoAmIScrollAnim })
    whoAmITL.to(anonPic, { x: -50, y: 30, scrollTrigger: whoAmIScrollAnim })
    main.add(whoAmITL)

    // photo sec anim

    // main.add(photoSecTL)
  }, homePageContainer.value) // <- Scope!

  // photos section animation timeline
  const photos = gsap.utils.toArray(".single-photo")
  const photoSecTL = gsap.timeline({ scrollTrigger: photosSecScrollAnim })
  photos.forEach((photo, i) => {
    photoSecTL.to(
      photo,
      {
        duration: 2,
        immediateRender: true,
        ease: "power2.inOut",
        // autoAlpha: 1,
        motionPath: {
          path: [
            { x: 0, y: 0 },
            { x: window.innerWidth / 2 - 100, y: -200 },
            { x: window.innerWidth - 200, y: -90 },
          ],
          curviness: 2,
          autoRotate: true,
          end: (photos.length - i) * (1 / photos.length),
        },
      },
      "-=1.5"
    )
  })
})

onUnmounted(() => {
  ctx.revert() // <- Easy Cleanup!
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
.section-heading div {
  @apply font-[BigShoulders] text-[6vw] sm:text-[6vw] leading-none font-extrabold;
}
</style>
