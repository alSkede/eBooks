import React from 'react'
import '../styles/buttonStyles.css'

export default function SceneNavigation({ onBack, onNext }) {
  return (
    <div className="button-group">
      <button onClick={onBack} className="button-secondary">Zurück</button>
      <button onClick={onNext}>Weiter</button>
    </div>
  )
}
