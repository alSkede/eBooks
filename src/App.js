import React, { useState } from 'react';
import { sceneData } from './data/sceneDataFull';
import { sceneInteractions } from './data/sceneInteractions';
import SceneInteractive from './components/SceneInteractive';

export default function App() {
  const [selectedScene, setSelectedScene] = useState(sceneData[0]);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        Tryll & Li Bäh — Interactive eBook
      </h1>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
        {sceneData.map(scene => (
          <button
            key={scene.id}
            onClick={() => setSelectedScene(scene)}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '9999px',
              border: '1px solid',
              backgroundColor: selectedScene.id === scene.id ? '#3b82f6' : '#fff',
              color: selectedScene.id === scene.id ? '#fff' : '#3b82f6'
            }}
          >
            {scene.title}
          </button>
        ))}
      </div>

      <div style={{ backgroundColor: '#f3f4f6', padding: '1rem', borderRadius: '1rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>
          {selectedScene.title}
        </h2>
        {selectedScene.narration.map((line, index) => (
          <p key={index} style={{ marginBottom: '0.75rem' }}>
            <span style={{ fontFamily: 'monospace', color: '#2563eb' }}>{line.speaker}:</span> {line.text}
          </p>
        ))}

        <img
          src={selectedScene.visual}
          alt={selectedScene.title}
          style={{
            width: '100%',
            maxWidth: '600px',
            margin: '2rem auto 0',
            display: 'block',
            borderRadius: '1rem',
            boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
          }}
        />
      </div>
    </div> // ✅ DAS ist das korrekt schließende äußere <div>
  );
}
