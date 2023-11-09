<template>
  <div class="bg-paper container-fluid rounded-2xl" ref="aboutPageCon">
    <section
      ref="hafezSec"
      class="flex flex-col items-center justify-center h-[100vh] pb-12 md:pb-0"
    >
      <div
        class="w-full flex flex-col items-center justify-center overflow-hidden"
      >
        <img
          class="md:mr-[-15vw] max-w-3xl w-full hafez-sonnet-1st"
          :src="hafezImg1"
          alt="Hafez Sonnet No. 80 1st"
        />
        <img
          class="md:ml-[-15vw] max-w-3xl w-full hafez-sonnet-2nd"
          :src="hafezImg2"
          alt="Hafez Sonnet No. 80 2nd"
        />
      </div>

      <div
        class="text-red_2 self-end ml-6 md:ml-4 left-2 md:left-20 bottom-[-4rem] md:bottom-20 w-[200px] md:w-[190px] text-sm md:text-lg absolute overflow-hidden"
      >
        <div class="hafez-sonnet-ref">
          <p>
            Ḥāfeẓ-e Shīrāzī <br />
            SONNET NO. 80 <br />
            14TH CENTURY
          </p>
        </div>
      </div>

      <div
        class="text-red mt-20 w-full md:w-[55vw] px-4 text-body overflow-hidden"
      >
        <div class="hafez-sonnet-tran h-full">
          <h5 class="font-normal">This is how I'd put it in English:</h5>
          <p class="my-4 md:ml-20">
            All seek that, either alert and perceptive or intoxicated and
            unconscious
          </p>
          <p class="md:ml-40">
            Everywhere is home to love, no matter Mosque or Synagogue (בית כנסת)
          </p>
        </div>
      </div>
    </section>

    <section
      class="bg-paper_lt w-[90vw] md:w-[95vw] rounded-2xl mx-auto mt-[10vh] mb-28 md:mb-0 relative"
    >
      <div class="py-20 px-6 md:px-28">
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
              ABOUT ME
            </h4>
            <div class="w-6 h-6 rounded-lg bg-red_d" />
            <div class="w-4 h-4 rounded-md bg-red_d" />
            <div class="w-2 h-2 rounded-md bg-red_d" />
          </div>

          <p class="text-red_d text-head">
            I'm Hossein, a passionate Frontend Web Developer from Iran. I
            exercise daily and enjoy pausing for a moment of realization.
          </p>

          <div
            class="text-red_d flex mt-6 md:mt-12 lg:mt-20 items-start columns-2 justify-between"
          >
            <div class="hidden md:flex gap-4 items-center">
              <div class="border-grey border rounded-full p-3">
                <span class="text-red_2 font-[BigShoulders] text-xl font-bold">
                </span>
              </div>
              <div class="text-[2vw]">Ideas</div>
            </div>
            <div class="w-full sm:w-[50vw] text-body">
              <p>
                There is no limit on how different of a thought you would have
                at a moment, and yet you choose to hold on to it for about some
                time. I love challenges. They let you think about something
                creatively and learn something new.
              </p>

              <p class="mt-10">
                I appreciate aesthetics in any form. An unobtrusive detail with
                potential catches my attention like nothing else.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      ref="preferencesSec"
      class="w-[90vw] md:w-[95vw] md:min-h-[100vh] rounded-2xl mx-auto mt-[5vw] py-16 flex flex-col md:flex-row items-center md:overflow-hidden"
    >
      <div class="h-[30vh] md:h-full flex items-center flex-1 w-full md:w-2/5">
        <div class="preferences relative">
          <div class="preference-item preference-core"><span> 1 </span></div>
          <div class="preference-item preference-inner1"><span> 2 </span></div>
          <div class="preference-item preference-inner2"><span> 3 </span></div>
          <div class="preference-item preference-outer"><span> 4 </span></div>
        </div>
      </div>

      <div
        class="min-h-[100vh] md:h-full w-full md:w-3/5 flex flex-col pl-0 md:pl-[2vw] mt-36 md:mt-0"
      >
        <div class="flex items-center">
          <div class="section-heading text-red text-center md:text-left pl-2">
            <h2>PREFERENCES</h2>
          </div>

          <span class="ml-4 text-md text-red max-w-sm">THAT DRIVE ME</span>
        </div>

        <div class="mt-10 md:ml-16 preference-text">
          <span>01.</span>
          <div>
            <h4 class="font-semibold mb-2">Health</h4>
            <p>
              The energy to fulfill physical and mental satisfaction comes from
              within. I work on my well-being on a daily basis. Books and sports
              play an important of a role.
            </p>
          </div>
        </div>

        <div class="mt-4 md:ml-28 preference-text">
          <span>02.</span>
          <div>
            <h4 class="font-semibold mb-2">Family</h4>
            <p>
              The emotional ties are kept in the safest place. Family is a
              begining for one to feel responsible. It's fuel to my desire to
              keep trying, to feel good.
            </p>
          </div>
        </div>

        <div class="mt-4 md:ml-24 preference-text">
          <span>03.</span>
          <div>
            <h4 class="font-semibold mb-2">Career</h4>
            <p>
              It gives me a sense of satisfaction and purpose doing what I do. I
              enjoy overcoming obstacles and making an impact.
            </p>
          </div>
        </div>

        <div class="mt-4 md:ml-4 preference-text">
          <span>04.</span>
          <div>
            <h4 class="font-semibold mb-2">Personal Growth</h4>
            <p>
              I have been developing as a mankind for over 200 centuries. I know
              I'm capable of who knows what and I'm always trying to find out
              about things I could do better.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section
      class="flex flex-col pb-[10vh] sm:p-[5vh] mt-[2vh] relative overflow-hidden"
    >
      <bballSection />
    </section>
  </div>
</template>

<script lang="ts" setup>
import gsap from "gsap"
import hafezImg1 from "~/assets/hafez1.png"
import hafezImg2 from "~/assets/hafez2.png"

let ctx: ReturnType<typeof gsap.context>
const aboutPageCon = ref<HTMLElement>()
const hafezSec = ref<HTMLElement>()
const preferencesSec = ref<HTMLElement>()

// anims
const yTween = (target: HTMLElement) => {
  return {
    y: 350,
    ease: "power3.out",
    duration: 2,
    onComplete: (target: HTMLElement) => {
      target?.removeAttribute("style")
    },
    onCompleteParams: [target],
  }
}

useHead({
  title: "About | HeidaHo",
  meta: [
    {
      name: "description",
      content: "About Hossein Heidari",
    },
  ],
})

onMounted(() => {
  ctx = gsap.context(() => {
    hafezSec.value = hafezSec.value as HTMLElement
    preferencesSec.value = preferencesSec.value as HTMLElement

    let sonnetTL = gsap.timeline()
    sonnetTL.from(".hafez-sonnet-1st", yTween(hafezSec.value))
    sonnetTL.from(".hafez-sonnet-2nd", yTween(hafezSec.value), ">-1.7")
    sonnetTL.from(".hafez-sonnet-ref", yTween(hafezSec.value), ">-1.5")
    sonnetTL.from(".hafez-sonnet-tran", yTween(hafezSec.value))

    let preferencesTL = gsap.timeline({
      scrollTrigger: { trigger: preferencesSec.value, start: "top 70%" },
    })
    preferencesTL.to(".preference-item", {
      scale: 1,
      stagger: 0.5,
      ease: "power1",
    })
    preferencesTL.from(
      ".preference-text",
      {
        x: -100,
        y: -20,
        autoAlpha: 0,
        stagger: 0.5,
        ease: "power1",
      },
      ">-1.8"
    )
  }, aboutPageCon.value)
})

onUnmounted(() => {
  ctx.revert()
})
</script>

<style scoped>
.preference-text {
  @apply text-red_d bg-paper_lt flex max-w-full md:max-w-[40vw] px-6 py-4 rounded-2xl leading-tight font-light text-xl md:text-[2vw] lg:text-[1.5vw] xl:text-[1.2vw];
}
.preference-text span {
  @apply mr-2 text-sm font-semibold;
}
.preferences .preference-item {
  @apply bg-red rounded-full absolute top-0 left-0 translate-y-[-50%] translate-x-[-50%] scale-0 flex items-center justify-end pr-6;
}
.preferences .preference-item span {
  @apply text-white rounded-full text-[BigShoulders] font-semibold;
}
.preferences .preference-core {
  @apply w-[10vh] h-[10vh] md:w-[17vw] md:h-[17vw];
}
.preferences .preference-inner1 {
  @apply w-[25vh] h-[25vh] md:w-[27vw] md:h-[27vw] opacity-30;
}
.preferences .preference-inner2 {
  @apply w-[35vh] h-[35vh] md:w-[37vw] md:h-[37vw] opacity-20;
}
.preferences .preference-outer {
  @apply w-[45vh] h-[45vh] md:w-[47vw] md:h-[47vw] opacity-10;
}
</style>
