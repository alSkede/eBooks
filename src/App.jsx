import { useState } from 'react'
import './styles/buttonStyles.css'
import './styles/iconButtonStyles.css'
import { sceneData } from "./data/sceneDataFull"
import SceneViewer from './SceneViewer'
import { useEbook } from './hooks/useEbook'
import SceneNavigation from './components/SceneNavigation'
import IconButton from './components/IconButton'

export default function App() {
  const { currentScene, nextScene, prevScene } = useEbook()

  function prevScene() {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  function openQuiz() {
    alert("Quiz geöffnet!") // Platzhalter für echte Interaktion
  }

  function openMuseum() {
    alert("Museum geöffnet!") // Platzhalter
  }

  function openJournal() {
    alert("Tagebuch geöffnet!") // Platzhalter
  }

  return (
    <div className="p-4 text-center">
      <SceneViewer currentScene={currentScene} />

      <SceneNavigation onBack={prevScene} onNext={nextScene} />

      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '1rem' }}>
        <IconButton type="quiz" label="Quiz" onClick={openQuiz} />
        <IconButton type="museum" label="Museum" onClick={openMuseum} />
        <IconButton type="journal" label="Tagebuch" onClick={openJournal} />
      </div>
    </div>
  )
}
