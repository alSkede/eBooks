import React from 'react'
import '../styles/iconButtonStyles.css'

export default function IconButton({ type, onClick, label }) {
  return (
    <button className={`icon-button ${type}`} onClick={onClick} title={label}>
      {label[0]}
    </button>
  )
}
