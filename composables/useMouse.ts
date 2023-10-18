type HasPageCoor = { x: number; y: number }
export const useMouse = () => {
  const mouse = ref({ x: 0, y: 0 })

  const update = (event: HasPageCoor) => {
    mouse.value.x = event.x
    mouse.value.y = event.y
  }

  onMounted(() => window.addEventListener("mousemove", update))
  onUnmounted(() => window.removeEventListener("mousemove", update))

  return mouse
}
