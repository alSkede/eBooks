import React from 'react'
import { useEbook } from './hooks/useEbook'
import SceneNavigation from './components/SceneNavigation'
import IconButton from './components/IconButton'

export default function SceneViewer() {
  const { currentScene } = useEbook()

  if (!currentScene) return <div>⚠️ No scene loaded.</div>

  const { title, text, image, quiz, museum, journal } = currentScene

  return (
    <div className="scene-viewer text-center p-4">
      {/* 1. Title */}
      <h2>{title || 'Untitled Scene'}</h2>

      {/* 2. Image (if present) */}
      {image && (
        <div style={{ marginTop: '1rem' }}>
          <img src={image} alt="Scene" style={{ maxWidth: '100%', borderRadius: '12px' }} />
        </div>
      )}

      {/* 3. Text (if present) */}
      {text && (
        <p style={{ marginTop: '1rem', maxWidth: '600px', marginInline: 'auto' }}>
          {text}
        </p>
      )}

      {/* 4. Navigation Buttons */}
      <div style={{ marginTop: '1.5rem' }}>
        <SceneNavigation />
      </div>

      {/* 5. Icon Buttons (only if defined in sceneData) */}
      {(quiz || museum || journal) && (
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '1rem' }}>
          {quiz && <IconButton type="quiz" label="Quiz" onClick={() => alert('Quiz opened')} />}
          {museum && <IconButton type="museum" label="Museum" onClick={() => alert('Museum opened')} />}
          {journal && <IconButton type="journal" label="Journal" onClick={() => alert('Journal opened')} />}
        </div>
      )}
    </div>
  )
}
