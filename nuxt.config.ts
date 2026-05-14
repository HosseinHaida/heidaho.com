// https://nuxt.com/docs/api/configuration/nuxt-config
import { ViteImageOptimizer } from "vite-plugin-image-optimizer"
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/global.css"],
  build: { transpile: ["gsap"] },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon"],
  vite: { plugins: [ViteImageOptimizer()] },
})
