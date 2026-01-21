import { useState } from 'react'

export const useCharacters = () => {
  const [characters, setCharacters] = useState([])
  const [nextPage, setNextPage] = useState(null)
  const [loading, setLoading] = useState(false)
  const [species, setSpecies] = useState('')

  const loadCharacters = async (url = null, speciesValue = species) => {
    setLoading(true)
    try {
      const base = 'https://rickandmortyapi.com/api/character'
      const finalUrl = url
        ? url
        : speciesValue
          ? `${base}?species=${speciesValue}`
          : base

      const res = await fetch(finalUrl)
      const data = await res.json()

      setCharacters(prev => [...prev, ...data.results])
      setNextPage(data.info.next)
    } catch {
      setCharacters([])
      setNextPage(null)
    } finally {
      setLoading(false)
    }
  }

  const changeSpecies = (value) => {
    setSpecies(value)
    setCharacters([])
    setNextPage(null)
    loadCharacters(null, value)
  }

  return {
    characters,
    nextPage,
    loading,
    species,
    loadCharacters,
    changeSpecies
  }
}