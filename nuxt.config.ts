// https://nuxt.com/docs/api/configuration/nuxt-config
import vsharp from "vite-plugin-vsharp"
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/global.css"],
  build: { transpile: ["gsap"] },
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon"],
  vite: { plugins: [vsharp()] },
})
