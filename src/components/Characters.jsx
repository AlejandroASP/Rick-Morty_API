import { useState } from "react"
import translations from "../translate/Translations"
import flagEs from "../img/españa.png"
import flagEn from "../img/reino_unido.png"

const SPECIES = [
    '',          
    'Human',
    'Alien',
    'Robot',
    'Humanoid',
    'unknown'
]

export function Characters({ characters, species, onSpeciesChange }) {
    const [language, setLanguage] = useState('es')
    const t = translations[language]

    return (
        <div className="characters">
            <div className="language-buttons">
                <img
                    src={flagEs}
                    alt="Español"
                    onClick={() => setLanguage('es')}
                    className={`flag ${language === 'es' ? 'active' : ''}`}
                />

                <img
                    src={flagEn}
                    alt="English"
                    onClick={() => setLanguage('en')}
                    className={`flag ${language === 'en' ? 'active' : ''}`}
                />
            </div>

            <h1>{t.characters}</h1>

            <div className="filters">
                {SPECIES.map(value => (
                    <button
                        key={value || 'all'}
                        className={`btn-filter ${species === value ? 'active' : ''}`}
                        onClick={() => onSpeciesChange(value)}
                    >
                        {value === ''
                            ? (language === 'es' ? 'Todas' : 'All')
                            : t.species[value]}
                    </button>
                ))}
            </div>

            <span
                className="back-home"
                onClick={() => window.location.reload()}
            >
                {t.back}
            </span>

            <div className="container-characters">
                {characters.map(character => (
                    <div className="character-container" key={character.id}>
                        <div>
                            <img src={character.image} alt={character.name} />
                        </div>

                        <div>
                            <h3>{character.name}</h3>

                            <h6>
                                {character.status === 'Alive' ? (
                                    <>
                                        <span className="alive" /> {t.status[character.status]}
                                    </>
                                ) : (
                                    <>
                                        <span className="dead" /> {t.status[character.status]}
                                    </>
                                )}
                            </h6>

                            <p>
                                <span className="text-grey">{t.episodes}:</span>
                                <span>{character.episode.length}</span>
                            </p>

                            <p>
                                <span className="text-grey">{t.speciesLabel}:</span>
                                <span>
                                    {t.species[character.species] || character.species}
                                </span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}   