const SPECIES = [
  '', 'Human', 'Alien', 'Robot', 'Humanoid', 'unknown'
]

export const Filters = ({ species, onChange, language, t }) => (
  <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
    {SPECIES.map(value => (
      <button
        key={value || 'all'}
        className={`btn fw-medium shadow-sm ${species === value ? 'btn-light text-success' : 'btn-success'}`}
        onClick={() => onChange(value)}
      >
        {value === '' ? (language === 'es' ? 'Todas' : 'All') : t.species[value]}
      </button>
    ))}
  </div>
)