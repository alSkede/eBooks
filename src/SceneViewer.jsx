import React from 'react'
import { useEbook } from './hooks/useEbook'

export default function SceneViewer() {
  const { currentScene } = useEbook()

  if (!currentScene) {
    return <div>⚠️ Keine Szene gefunden.</div>
  }

  return (
    <div className="scene-viewer">
      <h2>{currentScene.title || 'Ohne Titel'}</h2>
      <p>{currentScene.text || 'Kein Text verfügbar.'}</p>
      {/* Hier kannst du auch Bild, Audio etc. rendern */}
    </div>
  )
}
