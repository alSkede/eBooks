import React from 'react'
import { useEbook } from './hooks/useEbook'
import SceneNavigation from './components/SceneNavigation'
import IconButton from './components/IconButton'

export default function SceneViewer({ onOpenMuseum, onOpenQuiz }) {
  const { currentScene } = useEbook()

  if (!currentScene) return <div>⚠️ No scene loaded.</div>

  const { title, visual, narration, audio, quiz, museum, journal } = currentScene
  const combinedText = narration?.map(n => `${n.speaker}: ${n.text}`).join('\n\n')

  return (
    <div className="scene-viewer text-center p-4">
      <h2>{title}</h2>

      {visual && (
        <img
          src={visual}
          alt="Scene visual"
          style={{ maxWidth: '100%', borderRadius: '12px', marginTop: '1rem' }}
        />
      )}

      {audio && (
        <audio
          key={audio}
          controls
          preload="metadata"
          style={{ display: 'block', margin: '1rem auto', maxWidth: '100%' }}
        >
          <source src={audio} type="audio/mp4" />
        </audio>
      )}

      {combinedText && (
        <p style={{ whiteSpace: 'pre-wrap', marginTop: '1rem', maxWidth: '600px', marginInline: 'auto' }}>
          {combinedText}
        </p>
      )}

      {/* Szene-Navigation – nur einmal */}
      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '12px' }}>
        <SceneNavigation />
      </div>

     {(quiz || museum || journal) && (
       <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '1rem' }}>
         {quiz && <IconButton type="quiz" label="Quiz" onClick={onOpenQuiz} />}
         {museum && <IconButton type="museum" label="Museum" onClick={onOpenMuseum} />}
         {journal && <IconButton type="journal" label="Journal" onClick={() => alert('Journal geöffnet')} />}
       </div>
       )}
    </div>
  )
}
