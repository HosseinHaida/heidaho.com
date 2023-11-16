<template>
  <div class="w-full pt-24" ref="contactPageWrapr">
    <div
      class="text-paper_lt flex flex-col w-full px-6 lg:px-36 section-heading h-max"
    >
      <div class="border-paper_lt w-full h-full border-b-4 pb-10 contact-title">
        <h2>KEEP IN TOUCH</h2>
        <p class="mt-4 block text-lg">
          Feel free to reach me if you have a project, idea, suggestion or just
          to chat
        </p>
      </div>
    </div>

    <div
      class="text-paper_lt flex flex-col md:flex-row w-full px-6 lg:px-36 mt-4 overflow-hidden"
    >
      <div
        class="flex w-full lg:w-[50%] text-md md:text-2xl overflow-hidden contact-details"
      >
        <div class="flex h-max">
          <div class="font-black mr-2 md:mr-6">MAIL</div>
          <NuxtLink
            to="mailto:hossein@heidaho.com"
            target="_blank"
            class="relative w-max contact-link"
          >
            <div>
              <div class="inline">hossein@heidaho.com</div>
              <Icon
                name="mdi:arrow-top-right-thick"
                class="pointer-events-none z-10 ml-1"
                size="1.6rem"
              />
            </div>
          </NuxtLink>
        </div>
      </div>

      <div
        class="flex flex-col text-md md:text-2xl overflow-hidden contact-details"
      >
        <NuxtLink
          to="https://www.linkedin.com/in/hossein-heidari-a14a0a20b"
          target="_blank"
          class="mt-1 md:mt-0 relative w-max contact-link"
        >
          <div class="font-black inline">LINKEDIN</div>
          <Icon
            name="mdi:arrow-top-right-thick"
            class="pointer-events-none z-10 ml-1"
            size="1.6rem"
          />
        </NuxtLink>

        <NuxtLink
          to="https://t.me/heidaho"
          target="_blank"
          class="mt-1 relative w-max contact-link"
        >
          <div class="font-black inline">TELEGRAM</div>
          <Icon
            name="mdi:arrow-top-right-thick"
            class="pointer-events-none z-10 ml-1"
            size="1.6rem"
          />
        </NuxtLink>
      </div>
    </div>

    <div
      class="absolute bottom-0 right-0 hidden lg:block w-[100vw] h-[19rem] overflow-hidden"
    >
      <div class="w-full h-full flex justify-end relative">
        <div
          class="absolute top-0 right-0 w-[40vw] border-paper_lt border-t-4 h-1"
        />
        <div class="w-sm h-full mt-1 order-2">
          <div class="absolute contact-img-dark">
            <img
              :src="meContactDark"
              alt="Laughing picture of me in the dark"
              class="w-[24rem]"
            />
          </div>
          <div
            class="bg-gradient-to-r from-paper_lt/50 to-paper_lt/0 invisible contact-img-flashlight-bg"
          >
            <img
              :src="meContact"
              alt="Laughing picture of me"
              class="w-[24rem]"
            />
          </div>
        </div>
        <div class="w-full h-full order-1 relative">
          <div class="absolute bottom-28 right-[29rem]">
            <div class="flashlight">
              <div class="flashlight-head">
                <div class="flashlight-light invisible" />
              </div>
              <div class="flashlight-body">
                <div class="flashlight-attachment" />
                <div class="flashlight-switch-wrapper">
                  <label class="flashlight-switch">
                    <input
                      v-model="flashlightState"
                      @change="toggleFlashlight"
                      type="checkbox"
                    />
                    <span class="flashlight-slider" />
                  </label>
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
import meContact from "~/assets/me-contact.png"
import meContactDark from "~/assets/me-contact-dark.png"
import gsap from "gsap"

const contactPageWrapr = ref<HTMLElement>()
let ctx: ReturnType<typeof gsap.context>

const flashlightState = ref(false)

const toggleFlashlight = () => {
  flashlightState.value ? onFlashlightOn() : onFlashlightOff()
}

const onFlashlightOn = () => {
  let tl = gsap.timeline()
  tl.to(".flashlight", { yPercent: 0, rotate: 0 })
  tl.to(".contact-img-dark", { autoAlpha: 0, duration: 0.3 })
  tl.to(
    [".flashlight-light", ".contact-img-flashlight-bg"],
    {
      autoAlpha: 1,
      duration: 0.3,
    },
    ">-0.3"
  )
}

const onFlashlightOff = () => {
  let tl = gsap.timeline()
  tl.to([".flashlight-light", ".contact-img-flashlight-bg"], {
    autoAlpha: 0,
    duration: 0.3,
  })
  tl.to(".contact-img-dark", { autoAlpha: 1, duration: 0.3 }, ">-0.3")
  tl.to(".flashlight", { yPercent: 150, rotate: -5 })
}

onBeforeMount(() => {
  useBackground("dark")
})

useHead({
  title: "Contact | HeidaHo",
  meta: [
    {
      name: "description",
      content: "Contact Hossein Heidari",
    },
  ],
})

onMounted(() => {
  ctx = gsap.context(() => {
    const tl = gsap.timeline()
    tl.set(".flashlight", { yPercent: 150, rotate: -5 })
    tl.from(".contact-title", { x: -100, width: 0 })
    tl.from(".contact-details", { y: 150 })
  }, contactPageWrapr.value)
})

onUnmounted(() => {
  ctx.revert()
  useBackground("light")
})
</script>

<style scoped>
.contact-link::before {
  @apply bg-paper_lt absolute w-[100%] h-[2px] bottom-0 left-0 content-[''] scale-x-0 origin-right transition-transform;
}
.contact-link:hover::before {
  @apply origin-left scale-x-100;
}

.flashlight {
  @apply w-80 h-20 flex flex-row-reverse items-center;
}
.flashlight-head {
  @apply bg-paper_lt w-[25%] rounded-tl-full rounded-bl-full h-full relative;
}
.flashlight-attachment {
  @apply w-[1rem] h-full rounded-sm bg-black;
}
.flashlight-light {
  @apply border-r-paper_lt/50 border-t-transparent border-b-transparent border-t-[10rem] border-b-[10rem] border-r-[34rem] w-1 h-1 absolute top-[50%] left-0 translate-y-[-50%];
}
.flashlight-body {
  @apply bg-paper_lt w-[75%] h-[50%] rounded-full flex flex-row-reverse;
}

.flashlight-switch-wrapper {
  @apply w-full h-full flex items-center justify-end px-2 relative;
}
.flashlight-switch {
  @apply relative inline-block w-16 h-8;
}
.flashlight-switch input {
  @apply opacity-0 w-0 h-0;
}
.flashlight-slider {
  @apply bg-black absolute cursor-pointer top-0 left-0 right-0 bottom-0  flex items-center justify-start px-1 ease-in-out rounded-full duration-300;
}
.flashlight-slider:before {
  @apply bg-paper_lt content-[''] h-6 w-6 left-0 bottom-0 ease-in-out rounded-full duration-300;
}
input:checked + .flashlight-slider {
  @apply bg-red;
}
input:focus + .flashlight-slider {
  @apply shadow-xl;
}

input:checked + .flashlight-slider:before {
  @apply translate-x-8;
}
</style>
