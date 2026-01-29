import imageRickMorty from './img/rick-morty.png'
import { Characters } from './components/Characters'
import { useCharacters } from './hooks/useCharacters'

function App() {
  const {
    characters, loading, page, totalPages,
    changePage, changeSpecies, species, resetApp, startSearch
  } = useCharacters()

  return (
    <div className="App container-fluid p-0 bg-dark d-flex flex-column min-vh-100">
      <header className="App-header py-5 text-center w-100">
        <h1 className="display-4 fw-bold text-white mb-4" style={{ fontFamily: 'roboto' }}>
          Rick & Morty
        </h1>

        {characters.length > 0 ? (
          <Characters
            characters={characters} species={species} onSpeciesChange={changeSpecies}
            page={page} totalPages={totalPages} onPageChange={changePage}
            loading={loading} onResetApp={resetApp}
          />
        ) : (
          !loading && (
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6 text-center">
                  <img
                    src={imageRickMorty}
                    className="img-fluid mb-4"
                    alt="Rick & Morty"
                  />
                  <button
                    onClick={startSearch}
                    className="btn btn-success btn-lg shadow rounded-pill px-5"
                  >
                    Buscar Personajes
                  </button>
                </div>
              </div>
            </div>

          )
        )}
        {loading && <p className="text-white lead">Cargando...</p>}
      </header>
    </div>
  )
}

export default App