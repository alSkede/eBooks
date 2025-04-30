import { useState } from 'react'
import './styles/buttonStyles.css'
import './styles/iconButtonStyles.css'
import { sceneData } from "./data/sceneDataFull"
import SceneViewer from './SceneViewer'
import SceneNavigation from './components/SceneNavigation'
import IconButton from './components/IconButton'

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentScene = sceneData[currentIndex]

  function nextScene() {
    setCurrentIndex((prev) => Math.min(prev + 1, sceneData.length - 1))
  }

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
