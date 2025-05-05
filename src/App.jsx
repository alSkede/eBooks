import React, { useState } from 'react'
import SceneViewer from './SceneViewer'
import { Card, CardContent } from "./components/ui/card";
import './styles/buttonStyles.css'
import './styles/iconButtonStyles.css'
import './index.css'

export default function App() {
  const [showMuseum, setShowMuseum] = useState(false)
  const [showQuiz, setShowQuiz] = useState(false)

  return (
    <div className="p-4 text-center">
      <SceneViewer
        onOpenMuseum={() => setShowMuseum(true)}
        onOpenQuiz={() => setShowQuiz(true)}
      />

      {showMuseum && <Museum onClose={() => setShowMuseum(false)} />}
      {showQuiz && <Quiz onClose={() => setShowQuiz(false)} />}
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
