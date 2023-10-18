const tl = gsap.timeline()
boxes.forEach((box, i) => {
  if (i !== 0) {
    tl.fromTo(
      box,
      { opacity: 0, yPercent: 100 },
      { opacity: 1, yPercent: 0 },
      i
    )
  }
  if (i !== boxes.length - 1) {
    tl.fromTo(
      box,
      { opacity: 1, yPercent: 0 },
      { opacity: 0, yPercent: -100, delay: 1 },
      i
    )
  }
})
console.log(section)
ScrollTrigger.create({
  trigger: section,
  pin: true,
  markers: true,
  start: "top top",
  end: `+=${window.innerHeight * boxes.length}`,
  animation: tl,
  scrub: true,
})
