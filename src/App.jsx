import { useState } from 'react'
import './styles/buttonStyles.css'
import { sceneData } from "./data/sceneDataFull"
import SceneViewer from './SceneViewer'

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentScene = sceneData[currentIndex]

  function nextScene() {
    setCurrentIndex((prev) => Math.min(prev + 1, sceneData.length - 1))
  }

  function prevScene() {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  return (
    <div className="p-4 text-center">
      <SceneViewer currentScene={currentScene} />
      <div className="mt-6 space-x-4">
        <button onClick={prevScene} disabled={currentIndex === 0}>⬅️ Back</button>
        <button onClick={nextScene} disabled={currentIndex === sceneData.length - 1}>➡️ Next</button>
      </div>
    </div>
  )
}
