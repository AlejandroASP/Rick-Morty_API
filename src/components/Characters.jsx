import { useState } from "react"
import translations from "../translate/Translations"
import flagEs from "../img/españa.png"
import flagEn from "../img/reino_unido.png"
import { Filters } from "./Filters"
import { Pagination } from "./Pagination"

export function Characters({ characters, species, onSpeciesChange, page, totalPages, onPageChange, loading, onResetApp }) {
    const [language, setLanguage] = useState('es')
    const t = translations[language]

    return (
        <div className="container py-5">
            <div className="d-flex justify-content-center gap-3 mb-4">
                <img
                    src={flagEs}
                    alt="Español"
                    onClick={() => setLanguage('es')}
                    className={`${language === 'es' ? 'border-success border-2' : 'border-secondary opacity-50'}`}
                    style={{ width: '42px', cursor: 'pointer', objectFit: 'cover' }}
                />
                <img
                    src={flagEn}
                    alt="English"
                    onClick={() => setLanguage('en')}
                    className={`${language === 'en' ? 'border-success border-2' : 'border-secondary opacity-50'}`}
                    style={{ width: '42px', cursor: 'pointer', objectFit: 'cover' }}
                />
            </div>

            <h1 className="text-white text-center fw-bold">{t.characters}</h1>
            
            <div className="text-center my-4">
                <span
                    className="text-white text-decoration-underline"
                    style={{ cursor: 'pointer', fontSize: '1rem' }}
                    onClick={onResetApp}
                >
                    {t.back}
                </span>
            </div>

            <Filters species={species} onChange={onSpeciesChange} language={language} t={t} />

            <div className="row g-4 justify-content-center">
                {characters.map(character => (
                    <div className="col-12 col-md-6 col-lg-4" key={character.id}>
                        <div className="card bg-secondary text-white border-0 h-100 shadow">
                            <div className="row g-0 h-100">
                                <div className="col-5">
                                    <img
                                        src={character.image}
                                        alt={character.name}
                                        className="img-fluid h-100 object-fit-cover rounded-start"
                                    />
                                </div>
                                <div className="col-7 d-flex flex-column justify-content-center">
                                    <div className="card-body p-3 mt-3 text-center text-md-start">
                                        <h3 className="card-title h5 fw-bold mb-2">{character.name}</h3>
                                        <h6 className="card-subtitle mb-3 d-flex align-items-center justify-content-center justify-content-md-start">
                                            <span
                                                className={`d-inline-block rounded-circle me-2 ${
                                                    character.status === 'Alive'
                                                        ? 'bg-success'
                                                        : character.status === 'Dead'
                                                            ? 'bg-danger'
                                                            : 'bg-secondary'
                                                }`}
                                                style={{ width: '10px', height: '10px' }}
                                            ></span>
                                            <small className="text-light">{t.status[character.status]}</small>
                                        </h6>

                                        <div className="mb-1">
                                            <span className="small fw-bold">{t.episodes}:</span>
                                            <span className="ms-1 text-white small">{character.episode.length}</span>
                                        </div>

                                        <div className="mb-0">
                                            <span className="small fw-bold">{t.speciesLabel}:</span>
                                            <span className="ms-1 text-white small">
                                                {t.species[character.species] || character.species}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Pagination page={page} totalPages={totalPages} onPageChange={onPageChange} language={language} />
        </div>
    )
}