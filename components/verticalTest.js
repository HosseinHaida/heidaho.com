//  <section
//       class="bg-paper overflow-hidden w-full h-[100vh] flex flex-col justify-center"
//       ref="pillarsDescCon"
//     >
//       <div
//         class="text-red flex flex-col flex-nowrap px-20 w-max"
//         ref="pillarsDesc"
//       >
//         <div class="text-[15.5vw] font-[BigShoulders] font-black leading-none">
//           THERE IS ALWAYS SOMETHING THAT DRIVES YOU...
//         </div>
//       </div>
//       <div class="h-[150px] w-[100vw] z-10 layered-steps" />
//     </section>

// const pillarsDescCon = ref<HTMLElement>()
// const pillarsDesc = ref<HTMLElement>()

// const pillarsDescTW = (scrollAmount: number, trigger: HTMLElement) => {
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

// PILLARS text tween
// pillarsDescCon.value = pillarsDescCon.value as HTMLElement
// pillarsDesc.value = pillarsDesc.value as HTMLElement
// let pillarsDescScrollSize = -(
//   pillarsDesc.value?.scrollWidth +
//   window.innerWidth * 0.5 -
//   window.innerWidth
// )
// let pillarsDescTL = gsap.timeline()
// pillarsDescTL.to(
//   pillarsDesc.value,
//   pillarsDescTW(pillarsDescScrollSize, pillarsDescCon.value)
// )
