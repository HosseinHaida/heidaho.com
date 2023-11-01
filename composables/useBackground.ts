const bgColor = ref("light")
export const useBackground = (bgColorInput?: string) => {
  if (bgColorInput) bgColor.value = bgColorInput

  return { bgColor }
}
