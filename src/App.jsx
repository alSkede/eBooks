import React from 'react'
import SceneViewer from './SceneViewer'
import SceneNavigation from './components/SceneNavigation'
import IconButton from './components/IconButton'
import './styles/buttonStyles.css'
import './styles/iconButtonStyles.css'
import './index.css' // nur wenn vorhanden

import { useEbook } from './hooks/useEbook'

export default function App() {
  const { openQuiz, openMuseum, openJournal } = useFakeActions()

  return (
    <div className="p-4 text-center">
      <SceneViewer />

      <SceneNavigation />

      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '1rem' }}>
        <IconButton type="quiz" label="Quiz" onClick={openQuiz} />
        <IconButton type="museum" label="Museum" onClick={openMuseum} />
        <IconButton type="journal" label="Tagebuch" onClick={openJournal} />
      </div>
    </div>
  )
}

// Dummy-Interaktionen – ersetzen durch echte Modalfunktionen
function useFakeActions() {
  return {
    openQuiz: () => alert("🎯 Quiz geöffnet!"),
    openMuseum: () => alert("🏛️ Museum geöffnet!"),
    openJournal: () => alert("📓 Tagebuch geöffnet!")
  }
}
