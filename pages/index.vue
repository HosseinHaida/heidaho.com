<template>
  <div class="bg-paper container-fluid pb-4 rounded-2xl" ref="homePageWrapr">
    <section class="pb-[5vh] relative">
      <div
        class="absolute bg-red z-30 w-full h-[100vh] title-overlay rounded-2xl flex items-center justify-center overflow-hidden"
      >
        <div class="text-white absolute top-4 left-6 opacity-80 loading-init">
          Loading
          <Icon name="svg-spinners:pulse-rings-multiple" class="text-3xl" />
        </div>

        <div
          class="text-paper_lt font-[BigShoulders] font-black text-head welcome-text overflow-hidden invisible"
        >
          WELCOME
        </div>
      </div>
      <div class="overflow-hidden pt-14">
        <div
          ref="titleWrapr"
          class="text-red w-full flex flex-col sm:flex-row justify-center sm:text-center pl-4 sm:pl-0 overflow-hidden title-container"
        >
          <h1>ITS</h1>
          <h1 class="pl-0 sm:pl-6">HOSSEIN</h1>
        </div>
      </div>

      <div class="overflow-hidden">
        <div
          ref="enthusiastWrapr"
          class="text-red_d sm:text-center mb-2 sm:mb-8 mt-8 sm:mt-0 pl-4 sm:pl-0"
        >
          <h2
            class="font-extralight leading-none xl:leading-[10rem] text-[9vw] xl:text-[11vw]"
          >
            The Enthusiast For
          </h2>
        </div>
      </div>

      <div class="overflow-hidden pl-4 sm:pl-0">
        <div
          class="columns-2 md:columns-4 px-8 py-6 overflow-hidden"
          ref="interestsWrapr"
        >
          <div class="flex flex-col items-center pb-4">
            <div class="text-red_d w-[170px]">
              <h4 class="interests-heading">Lifestyle</h4>
              <p class="pt-2 text-body">Peace</p>
              <p class="pt-2 text-body">Slow Living</p>
              <p class="pt-2 text-body">Bohemianism</p>
            </div>
          </div>
          <div class="flex flex-col items-center pb-4">
            <div class="text-red_d w-[170px]">
              <h4 class="interests-heading">Well-being</h4>
              <p class="pt-2 text-body">Health</p>
              <p class="pt-2 text-body">Family</p>
              <p class="pt-2 text-body">Sports</p>
            </div>
          </div>
          <div class="flex flex-col items-center pb-4">
            <div class="text-red_d w-[170px]">
              <h4 class="interests-heading">Digitalization</h4>
              <p class="pt-2 text-body">Tech</p>
              <p class="pt-2 text-body">Web</p>
              <p class="pt-2 text-body">Motion</p>
            </div>
          </div>
          <div class="flex flex-col items-center pb-4">
            <div class="text-red_d w-[170px]">
              <h4 class="interests-heading">...</h4>
              <p class="pt-2 text-body">Universe</p>
              <p class="pt-2 text-body">Endlessness</p>
              <p class="pt-2 text-body">Possibilities</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="flex flex-col pb-[25vh] md:pb-[10vh] sm:pb-[5vh] whoami-sec"
    >
      <div class="flex items-start w-full justify-center py-16 relative">
        <div
          class="text-red_2 self-end ml-6 md:ml-4 bottom-[-6rem] md:bottom-0 md:left-20 w-[200px] sm:w-[190px] text-sm sm:text-lg absolute"
        >
          BEHIND THIS MASK THERE IS MORE THAN JUST FLESH.
          <p class="mt-4">
            BTW. THE BEANIE AND THE COOL ICE BREAKER ARE MY MOM'S HANDMADE :)
          </p>
        </div>
        <h2 class="z-0 hidden md:block who-text">WHO</h2>
        <div class="z-0 md:hidden flex flex-col ml-0 who-text">
          <h2>WHO</h2>
          <h2>AM</h2>
          <h2>I?</h2>
        </div>

        <img
          :src="whoAmIPicSrc"
          class="w-[40vw] sm:w-[20vw] left-20 z-10 ml-10 sm:ml-0 pointer-events-none whoami-pic"
          alt="Anonymous picture of me"
        />
        <h2 class="self-end z-20 hidden md:block ami-text">AM I?</h2>
      </div>
    </section>

    <section
      class="w-[90vw] sm:w-[95vw] mb-6 rounded-2xl mx-auto relative overflow-hidden photos-sec"
    >
      <div class="pt-20 md:pt-56" ref="photosCon">
        <div
          v-for="(photo, i) in photos"
          :key="i"
          class="border-solid px-5 absolute left-[-26vw] sm:left-[-10vw] single-photo"
        >
          <img
            :src="photo"
            :alt="'photo-' + i"
            class="rounded-xl h-36 sm:h-60 shadow-2xl"
          />
        </div>
      </div>
      <div class="bg-paper_lt rounded-2xl w-full pb-36 px-2">
        <div
          class="text-red flex flex-col justify-center items-center w-full pt-40 md:pt-[28] section-heading"
        >
          <h2>A FORM OF LIFE</h2>
          <h2>UNCONDITIONAL</h2>
        </div>

        <div
          class="text-red_d w-full sm:w-[50vw] text-center mt-10 text-body mx-auto"
        >
          <p>
            I am son of the Sun. I live, just like a bird lives. There are
            various forms of life. We are all parts of the Earth and we are
            conscious.
          </p>

          <p class="mt-6">
            Stop, listen, realise, learn, improvise, participate and to create
            something beautiful is my hobby.
          </p>

          <div class="flex justify-center mt-10">
            <nuxtBtn to="/about" btn-id="moreaboutme" label="MORE ABOUT ME" />
          </div>
        </div>
      </div>
    </section>

    <section
      class="flex flex-col pb-[10vh] sm:pb-[5vh] relative overflow-hidden career-sec"
    >
      <div
        class="w-full h-full absolute z-20 flex flex-col items-center gap-[2px]"
      >
        <div
          class="w-max flex flex-col items-center justify-center absolute top-6"
        >
          <div class="lock-head" />
          <div class="shadow-xl lock-body" @click="unlockCareer()">
            <div class="lock-hole flex items-center justify-center">
              <Icon name="fluent:target-20-regular" color="white" size="sm" />
            </div>
          </div>
        </div>
        <div
          v-for="i in 14"
          :key="i"
          class="w-full h-full flex columns-2 gap-[2px]"
        >
          <div
            class="bg-red_d flex-1 h-full rounded-tr-md rounded-br-md blind-l"
          />
          <div
            class="bg-red_d flex-1 h-full rounded-tl-md rounded-bl-md blind-r"
          />
        </div>
      </div>
      <div
        class="flex flex-col md:flex-row items-start w-full justify-center py-16"
      >
        <h2 class="z-0 hidden md:block mr-[-17vw] invisible car-text">CAR</h2>
        <h2 class="z-0 block md:hidden order-2 mx-auto invisible car-text">
          CAREER
        </h2>
        <img
          :src="careerIntroPicSrc"
          class="w-[60vw] sm:w-[40vw] left-20 z-0 pointer-events-none order-1 md:order-1 mb-[-6rem] mb-none invisible career-pic"
          alt="Official picture of me"
        />
        <h2 class="self-end z-10 hidden md:block md:order-3 invisible eer-text">
          EER
        </h2>
      </div>
    </section>

    <section
      :class="careerLocked ? 'invisible max-h-0 overflow-hidden' : 'mt-6'"
      class="bg-paper_lt w-[90vw] sm:w-[95vw] rounded-2xl mx-auto relative"
    >
      <div class="py-20 px-6 sm:px-28">
        <div class="container-fluid">
          <div
            class="absolute top-2 left-0 md:left-4 flex gap-1 items-center w-full justify-center md:justify-start"
          >
            <div class="w-2 h-2 rounded-md bg-red_d" />
            <div class="w-4 h-4 rounded-md bg-red_d" />
            <div class="w-6 h-6 rounded-lg bg-red_d" />
            <h4
              class="bg-red_d text-paper_lt rounded-2xl text-xs md:text-sm md:text-md lg:text-lg px-6 md:px-16 py-1"
            >
              WHAT DO I DO?
            </h4>
            <div class="w-6 h-6 rounded-lg bg-red_d" />
            <div class="w-4 h-4 rounded-md bg-red_d" />
            <div class="w-2 h-2 rounded-md bg-red_d" />
          </div>

          <p class="text-red_d text-head">
            As a software engineering graduate and a few years of experience
            dedicated to coding and web development, I can admit I've seen
            enough and I'd say there is always more and that really intrigues
            me.
          </p>

          <div
            class="text-red_d flex mt-6 md:mt-12 lg:mt-20 items-start columns-2 justify-between"
          >
            <div class="hidden md:flex gap-4 items-center">
              <div class="border-grey border rounded-full p-3">
                <span class="text-red_2 font-[BigShoulders] text-xl font-bold">
                </span>
              </div>
              <h5 class="text-[2vw]">Path</h5>
            </div>
            <div class="w-full md:w-[50vw] text-body mt-8 md:mt-0">
              <p>
                There is always a better and more creative way to solve things.
                Developing is much like hard-coding the creativity that as a
                thought would vanish in a glimpse.
              </p>

              <p class="mt-10">
                I know for a fact that things might not get the approval they
                deserve. I give elements the proper attention to maximise
                impact. Everyone is going to use web at some point and I'd like
                to make it as comfortable as I can.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      :class="
        careerLocked ? 'invisible max-h-0 overflow-hidden' : 'pt-28 pb-10 px-6'
      "
      class="flex justify-center"
    >
      <div class="text-red section-heading">
        <h2>PREVIOUS ROLES</h2>
      </div>
    </section>

    <section
      :class="
        careerLocked ? 'invisible max-h-0 overflow-hidden' : 'mt-10 md:mb-20'
      "
      class="h-max flex justify-center mx-auto"
    >
      <experienceSection />
    </section>
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap"
import MotionPathPlugin from "gsap/MotionPathPlugin"
gsap.registerPlugin(MotionPathPlugin)

import img1 from "~/assets/photos/IMG_1247.jpg"
import img2 from "~/assets/photos/IMG_4585.jpg"
import img3 from "~/assets/photos/IMG_6475.jpg"
import img4 from "~/assets/photos/IMG_6494.jpg"
import img5 from "~/assets/photos/IMG_7410.jpg"
import img6 from "~/assets/photos/IMG_7975.jpg"

import whoAmIPicSrc from "~/assets/me-masked.png"
import careerIntroPicSrc from "~/assets/career-intro.png"

const photos = ref([img1, img2, img3, img4, img5, img6])
const { $isMobile, $isTablet } = useNuxtApp()

let ctx: ReturnType<typeof gsap.context>
const homePageWrapr = ref<HTMLElement>()
const titleWrapr = ref<HTMLElement>()
const enthusiastWrapr = ref<HTMLElement>()
const interestsWrapr = ref<HTMLElement>()

const careerLocked = ref(true)

// anims
const yTween = (target: HTMLElement) => {
  return {
    y: 320,
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
  title: "Home | HeidaHo",
  meta: [{ name: "description", content: "Hossein Heidari | Web Developer" }],
})

onMounted(() => {
  ctx = gsap.context(() => {
    titleWrapr.value = titleWrapr.value as HTMLElement
    enthusiastWrapr.value = enthusiastWrapr.value as HTMLElement
    interestsWrapr.value = interestsWrapr.value as HTMLElement

    // 1st section tween TL
    let titleTL = gsap.timeline()
    titleTL.to(".loading-init", { autoAlpha: 0 })
    titleTL.to(".welcome-text", { autoAlpha: 1, duration: 0.5 })
    titleTL.to(".welcome-text", { height: 0, duration: 0.7 })
    titleTL.fromTo(
      ".title-overlay",
      { height: "100vh" },
      { height: 0, duration: 1 },
      ">-0.1"
    )
    titleTL.set(".title-overlay", { display: "none" })
    titleTL.from(titleWrapr.value, yTween(titleWrapr.value), ">-0.6")
    titleTL.from(enthusiastWrapr.value, yTween(enthusiastWrapr.value), ">-1.7")
    titleTL.from(interestsWrapr.value, yTween(interestsWrapr.value), ">-1.5")

    // WHO AM I Section Tween TL
    let whoAmIScroll = { trigger: ".whoami-sec", scrub: 5 }
    gsap.to(".who-text", { x: 80, y: 20, scrollTrigger: whoAmIScroll })
    gsap.to(".ami-text", { x: -90, y: -20, scrollTrigger: whoAmIScroll })
    gsap.to(".whoami-pic", { x: -20, y: 30, scrollTrigger: whoAmIScroll })

    // Photos section tween TL
    let photos = <HTMLElement[]>gsap.utils.toArray(".single-photo")
    let photoSecTL = gsap.timeline({
      paused: true,
      scrollTrigger: { trigger: ".photos-sec", start: "top 40%" },
    })
    for (const [i, photo] of photos.entries()) {
      photoSecTL.to(
        photo,
        {
          ease: "power2.inOut",
          motionPath: getPhotoPath(i, photos.length),
          immediateRender: true,
        },
        ">-0.3"
      )
    }

    // CAREER Section Tween TL
    let careerScroll = {
      trigger: ".career-sec",
      scrub: 5,
      start: "top bottom",
    }
    gsap.to(".car-text", { x: 30, y: 20, scrollTrigger: careerScroll })
    gsap.to(".eer-text", { x: -40, y: 30, scrollTrigger: careerScroll })
    gsap.to(".career-pic", { x: 60, y: -30, scrollTrigger: careerScroll })
  }, homePageWrapr.value) // <- Scope!
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

const unlockCareer = () => {
  let ease1 = "power1.out"
  let ease = "power2.inOut"
  let duration = 1
  let tl = gsap.timeline()

  tl.to(".lock-head", { y: -10, ease: ease1, duration: 0.3 })
  tl.to(".lock-head", { x: "-100vw", rotate: 40, ease: ease1, duration })
  tl.to(".lock-body", { x: "100vw", rotate: -40, ease: ease1, duration }, ">-1")
  tl.to(".blind-l", { x: "-100vw", stagger: 0.05, duration, ease }, ">-0.8")
  tl.to(".blind-r", { x: "100vw", stagger: 0.05, duration, ease }, "-=1.6")

  tl.fromTo(
    ".car-text",
    { xPercent: 50, autoAlpha: 0 },
    { xPercent: 0, autoAlpha: 1 },
    ">-1.1"
  )
  tl.fromTo(
    ".eer-text",
    { xPercent: -50, autoAlpha: 0 },
    { xPercent: 0, autoAlpha: 1 },
    ">-0.4"
  )
  tl.fromTo(
    ".career-pic",
    { xPercent: -50, yPercent: 50, autoAlpha: 0 },
    { xPercent: 0, yPercent: 0, autoAlpha: 1 },
    ">-0.4"
  )

  careerLocked.value = false
}

onUnmounted(() => {
  ctx.revert()
})
</script>

<style scoped>
.title-container h1 {
  @apply block md:inline-block font-[BigShoulders] text-[25vw] sm:text-[21vw] leading-none font-black cursor-default;
}

.interests-heading {
  @apply font-normal text-xl md:text-[2vw] lg:text-[1.7vw] xl:text-[1.6vw];
}

.who-text,
.who-text > h2,
.ami-text,
.car-text,
.car-text > h2,
.eer-text {
  @apply text-red font-[BigShoulders] text-[24vw] sm:text-[15.5vw] font-black leading-tight;
}

/* CAREER LOCK */
.lock-head {
  @apply border-t-4 border-l-4 border-r-4 border-paper_lt h-14 w-14 rounded-tr-full rounded-tl-full;
}
.lock-body {
  @apply bg-paper_lt h-20 w-20 rounded-xl flex justify-center items-center cursor-pointer;
}
.lock-hole {
  animation: fadeLockHoleToRed 1s infinite;
  @apply rounded-full w-8 h-8 bg-red;
}

.lock-body:hover > .lock-hole {
  animation: fadeLockHoleToGreen 1s;
  animation-fill-mode: both;
}

@keyframes fadeLockHoleToGreen {
  from {
    @apply bg-red;
  }
  to {
    @apply bg-green;
  }
}

@keyframes fadeLockHoleToRed {
  from {
    @apply bg-green;
  }
  to {
    @apply bg-red;
  }
}
</style>
