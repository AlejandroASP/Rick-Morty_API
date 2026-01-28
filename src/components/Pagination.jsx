import { useState } from "react"
import translations from "../translate/Translations"

export const Pagination = ({ page, totalPages, onPageChange, language }) => {
  const t = translations[language]

  return (
    <div className="d-flex justify-content-center align-items-center mt-5 gap-3">
      <button
        className="btn btn-pag fw-bold text-uppercase"
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
      >
        {t.previous}
      </button>

      <span className="fw-bold" style={{ color: '#aaffc3', fontSize: '1.2rem' }}>
        {page} / {totalPages}
      </span>

      <button
        className="btn btn-pag fw-bold text-uppercase"
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
      >
        {t.next}
      </button>
    </div>
  )
}