type HasPageCoor = { x: number; y: number; offsetX: number; offsetY: number }
export const useMouse = () => {
  const mouse = ref({ x: 0, y: 0, offsetX: 0, offsetY: 0 })

  const update = (event: HasPageCoor) => {
    mouse.value.x = event.x
    mouse.value.y = event.y
    mouse.value.offsetX = event.offsetX
    mouse.value.offsetY = event.offsetY
  }

  onMounted(() => window.addEventListener("mousemove", update))
  onUnmounted(() => window.removeEventListener("mousemove", update))

  return mouse
}
