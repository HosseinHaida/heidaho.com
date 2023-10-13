type HasPageCoor = { pageX: number; pageY: number }
export const useMouse = () => {
  const mouse = ref({ x: 0, y: 0 })

  const update = (event: HasPageCoor) => {
    mouse.value.x = event.pageX
    mouse.value.y = event.pageY
  }

  onMounted(() => window.addEventListener("mousemove", update))
  onUnmounted(() => window.removeEventListener("mousemove", update))

  return mouse
}
