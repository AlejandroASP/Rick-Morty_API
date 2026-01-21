const SPECIES = [
  { label: 'Todas', value: '' },
  { label: 'Humanos', value: 'Human' },
  { label: 'Aliens', value: 'Alien' },
  { label: 'Robots', value: 'Robot' },
  { label: 'Humanoid', value: 'Humanoid' },
  { label: 'Desconocido', value: 'unknown' }
]

export const Filters = ({ species, onChange }) => (
  <div className="filters">
    {SPECIES.map(sp => (
      <button
        key={sp.value}
        className={`btn-filter ${species === sp.value ? 'active' : ''}`}
        onClick={() => onChange(sp.value)}
      >
        {sp.label}
      </button>
    ))}
  </div>
)