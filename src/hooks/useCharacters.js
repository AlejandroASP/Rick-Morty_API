import { useState, useEffect } from "react";

export const useCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [species, setSpecies] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (!isSearching) return;

    const fetchCharacters = async () => {
      setLoading(true);
      try {
        let url = `https://rickandmortyapi.com/api/character/?page=${page}`;
        if (species) {
          url += `&species=${species}`;
        }

        const response = await fetch(url);
        const data = await response.json();

        setCharacters(data.results || []);
        setTotalPages(data.info?.pages || 0);
      } catch (error) {
        console.error("Error fetching characters:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [page, species, isSearching]);

  const changeSpecies = (newSpecies) => {
    setSpecies(newSpecies);
    setPage(1);
  };

  const changePage = (newPage) => {
    setPage(newPage);
    window.scrollTo(0, 0);
  };

  
  const startSearch = () => {
    setIsSearching(true);
    setPage(1);
    setSpecies("");
    setCharacters([]);
  };

  const resetApp = () => {
    setIsSearching(false);
    setCharacters([]);
    setPage(1);
    setSpecies("");
    setLoading(false);
  };

  return {
    characters,
    loading,
    page,
    totalPages,
    changePage,
    changeSpecies,
    species,
    resetApp,
    startSearch
  };
};