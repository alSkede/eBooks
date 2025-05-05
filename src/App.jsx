import React from 'react'
import SceneViewer from './SceneViewer'
import './styles/buttonStyles.css'
import './styles/iconButtonStyles.css'
import './index.css' // falls vorhanden

export default function App() {
  return (
    <div className="p-4 text-center">
      <SceneViewer />
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
