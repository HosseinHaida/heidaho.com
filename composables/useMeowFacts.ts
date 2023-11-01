const facts = ref()

type factEntity = {
  fact: string
  length: number
}

type Data = {
  current_page: number
  data: factEntity[]
}

export const useMeowFacts = async (force?: boolean) => {
  if (!force && facts.value) return facts.value

  const rndmPageFrom1to34 = Math.floor(Math.random() * 34) + 1

  const { data, error } = await useFetch<Data>(
    `https://catfact.ninja/facts?page=${rndmPageFrom1to34}`
  )

  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: "Could not fetch Meow Facts",
    })
  }

  facts.value = data.value?.data.map((factEntity) => factEntity.fact)
  return facts.value
}
