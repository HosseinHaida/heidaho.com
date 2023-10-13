<template>
  <div class="container-fluid mt-4 py-2 text-black z-1">
    <div class="text-red w-full flex justify-center title-container">
      HOSSEINHEIDARI
    </div>
    <div
      class="bg-red text-white mx-8 flex justify-center enthusiast-container"
    >
      The Enthusiast For
    </div>
    <div
      class="grid grid-cols-4 gap-20 px-6 py-6 justify-between interests-container"
    >
      <div class="grid grid-rows-4 justify-center">
        <div class="text-2xl">Lifestyle</div>
        <div class="pt-2 interests-item">Positivity</div>
        <div class="pt-2 interests-item">Traveling</div>
        <div class="pt-2 interests-item">Nature</div>
      </div>
      <div class="grid grid-rows-4 justify-center">
        <div class="text-2xl">Well-being</div>
        <div class="pt-2 interests-item">Health</div>
        <div class="pt-2 interests-item">Family</div>
        <div class="pt-2 interests-item">Sports</div>
      </div>
      <div class="grid grid-rows-4 justify-center">
        <div class="text-2xl">Digitalization</div>
        <div class="pt-2 interests-item">Tech</div>
        <div class="pt-2 interests-item">Web</div>
        <div class="pt-2 interests-item">Animations</div>
      </div>
      <div class="grid grid-rows-4 justify-center">
        <div class="text-2xl">Culture</div>
        <div class="pt-2 interests-item">Music</div>
        <div class="pt-2 interests-item">Movies</div>
        <div class="pt-2 interests-item">Creativity</div>
      </div>
      <!--  -->
      <div class="grid grid-rows-4 justify-center">
        <div class="text-2xl">Culture</div>
        <div class="pt-2 interests-item">Music</div>
        <div class="pt-2 interests-item">Movies</div>
        <div class="pt-2 interests-item">Creativity</div>
      </div>
      <div class="grid grid-rows-4 justify-center">
        <div class="text-2xl">Culture</div>
        <div class="pt-2 interests-item">Music</div>
        <div class="pt-2 interests-item">Movies</div>
        <div class="pt-2 interests-item">Creativity</div>
      </div>
      <div class="grid grid-rows-4 justify-center">
        <div class="text-2xl">Culture</div>
        <div class="pt-2 interests-item">Music</div>
        <div class="pt-2 interests-item">Movies</div>
        <div class="pt-2 interests-item">Creativity</div>
      </div>
      <div class="grid grid-rows-4 justify-center">
        <div class="text-2xl">Culture</div>
        <div class="pt-2 interests-item">Music</div>
        <div class="pt-2 interests-item">Movies</div>
        <div class="pt-2 interests-item">Creativity</div>
      </div>
      <div class="grid grid-rows-4 justify-center">
        <div class="text-2xl">Culture</div>
        <div class="pt-2 interests-item">Music</div>
        <div class="pt-2 interests-item">Movies</div>
        <div class="pt-2 interests-item">Creativity</div>
      </div>
      <div class="grid grid-rows-4 justify-center">
        <div class="text-2xl">Culture</div>
        <div class="pt-2 interests-item">Music</div>
        <div class="pt-2 interests-item">Movies</div>
        <div class="pt-2 interests-item">Creativity</div>
      </div>
      <div class="grid grid-rows-4 justify-center">
        <div class="text-2xl">Culture</div>
        <div class="pt-2 interests-item">Music</div>
        <div class="pt-2 interests-item">Movies</div>
        <div class="pt-2 interests-item">Creativity</div>
      </div>
      <div class="grid grid-rows-4 justify-center">
        <div class="text-2xl">Culture</div>
        <div class="pt-2 interests-item">Music</div>
        <div class="pt-2 interests-item">Movies</div>
        <div class="pt-2 interests-item">Creativity</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import gsap from "gsap"
useHead({
  title: "Home | Hossein's Approach",
  meta: [
    {
      name: "description",
      content:
        "Hossein is a software engineer passionate in frontend development.",
    },
  ],
})

// onMounted(() => {
//   gsap.from("#o-in-hossein", {
//     autoAlpha: 0,
//     scale: 50,
//     ease: "power4.inOut",
//     duration: 1,
//   })
// })
</script>

<style scoped>
.title-container,
.title-container span {
  font-family: BigShouldersStencilDisplay;
  font-size: 16vw;
  line-height: 1;
  font-weight: 900;
  cursor: default;
}
.enthusiast-container {
  font-family: K2D;
  font-size: 7vw;
  font-weight: 500;
}
.interests-container * {
  font-family: K2D;
}
.interests-item {
  font-weight: 100;
  font-size: larger;
  line-height: 1;
}
</style>
