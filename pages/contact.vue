<template>
  <div class="w-full pt-24">
    <div
      class="text-paper_lt flex flex-col w-full px-6 lg:px-36 section-heading h-max"
    >
      <div class="border-paper_lt w-full h-full border-b-4 pb-10 contact-title">
        <div>KEEP IN TOUCH</div>
        <span class="mt-4 block text-lg">
          Feel free to reach me if you have a project, idea, suggestion or just
          to chat
        </span>
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

    <div class="max-w-sm absolute bottom-0 right-0">
      <div class="w-full h-[4px] border-paper_lt border-t-4 contact-border" />
      <img
        :src="meContact"
        alt="Laughing picture of me"
        class="max-w-xs contact-img"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import meContact from "~/assets/me-contact.png"
import gsap from "gsap"
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
  const tl = gsap.timeline()
  tl.from(".contact-title", { x: -100, width: 0 })
  tl.from(".contact-details", { y: 150 })
  tl.from(".contact-border", { xPercent: 100 })
  tl.from(".contact-img", { autoAlpha: 0 }, ">-0.2")
})

onUnmounted(() => {
  useBackground("light")
})
</script>

<style scoped>
.contact-link::before {
  content: "";
  transform-origin: right;
  transform: scaleX(0);
  transition: transform 0.2s ease-in-out;
  @apply bg-paper_lt absolute w-[100%] h-[2px] bottom-0 left-0;
}

.contact-link:hover::before {
  transform-origin: left;
  transform: scaleX(1);
}
</style>
