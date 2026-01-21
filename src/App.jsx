import './App.css'
import imageRickMorty from './img/rick-morty.png'
import { Characters } from './components/Characters'
import { Filters } from './components/Filters'
import { useCharacters } from './hooks/useCharacters'

function App() {
  const {
    characters,
    loading,
    nextPage,
    loadCharacters,
    changeSpecies,
    species
  } = useCharacters()

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>

        {characters.length > 0 ? (
          <>
            <Characters
              characters={characters}
              species={species}
              onSpeciesChange={changeSpecies}
            />

            {nextPage && (
              <button
                onClick={() => loadCharacters(nextPage)}
                className="btn-search"
                disabled={loading}
              >
                {loading ? 'Cargando...' : 'Cargar más'}
              </button>
            )}
          </>
        ) : (
          !loading && (
            <>
              <img src={imageRickMorty} alt="Rick & Morty" className="img-home" />
              <button onClick={() => loadCharacters()} className="btn-search">
                Buscar Personajes
              </button>
            </>
          )
        )}

        {loading && <p>Cargando...</p>}
      </header>
    </div>
  )
}

export default App
