// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/global.css"],
  build: { transpile: ["gsap"] },
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon"],
})
