import React from 'react'
import { useEbook } from '../hooks/useEbook'
import { sceneData } from '../data/sceneDataFull'

export default function SceneNavigation() {
  const { currentIndex, setCurrentIndex } = useEbook()

  const prevScene = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1)
  }

  const nextScene = () => {
    if (currentIndex < sceneData.length - 1) setCurrentIndex(currentIndex + 1)
  }

  return (
    <div className="button-group scene-navigation">
      <button
        onClick={prevScene}
        className="button-secondary"
        disabled={currentIndex === 0}
      >
        ⬅️ Zurück
      </button>

      <button
        onClick={nextScene}
        disabled={currentIndex >= sceneData.length - 1}
      >
        ➡️ Weiter
      </button>
    </div>
  )
}
