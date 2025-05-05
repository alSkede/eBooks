import React from 'react'
import { useEbook } from './hooks/useEbook'
import SceneNavigation from './components/SceneNavigation'
import IconButton from './components/IconButton'

export default function SceneViewer() {
  const { currentScene } = useEbook()

  if (!currentScene) return <div>⚠️ No scene loaded.</div>

  const { title, visual, narration, audio, quiz, museum, journal } = currentScene

  const combinedText = narration?.map(n => `${n.speaker}: ${n.text}`).join('\n\n')

  return (
    <div className="scene-viewer text-center p-4">
      {/* 1. Title */}
      <h2>{title || 'Untitled Scene'}</h2>
      <p> Aktuelle Szene: {currentScene?.id}</p>
      {/* 2. Image */}
      {visual && (
        <div style={{ marginTop: '1rem' }}>
          <img src={`/src/assets/${visual}`} alt="Scene visual" style={{ maxWidth: '100%', borderRadius: '12px' }} />
        </div>
      )}

      {/* 3. Audio */}
      {audio && (
        <div style={{ marginTop: '1rem' }}>
          <audio controls preload="metadata" style={{ maxWidth: '100%' }}>
            <source src={audio} type="audio/mp4" />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}

      {/* 4. Narration */}
      {combinedText && (
        <p style={{ whiteSpace: 'pre-wrap', marginTop: '1rem', maxWidth: '600px', marginInline: 'auto' }}>
          {combinedText}
        </p>
      )}

      {/* 5. Navigation */}
      <div style={{ marginTop: '1.5rem' }}>
        <SceneNavigation />
      </div>

      {/* 6. Icon Buttons */}
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
