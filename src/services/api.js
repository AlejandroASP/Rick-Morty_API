export const fetchCharacters = async (url) => {
  const res = await fetch(url)
  if (!res.ok) throw new Error('API Error')
  return res.json()
}