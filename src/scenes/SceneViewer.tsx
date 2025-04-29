import { useState } from 'react';
import { sceneData } from '../src/data/sceneDataFull'; // oder '../data/sceneData' wenn noch nicht umbenannt
import { sceneInteractions } from '../src/data/sceneInteractions';
import SceneInteractive from '../src/components/SceneInteractive';

export default function SceneViewer() {
  const [selectedScene, setSelectedScene] = useState(sceneData[0]);

  const numericSceneId = parseInt(selectedScene.id.replace('scene-', ''), 10);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Tryll & Li Bäh — Interactive eBook</h1>

      {/* Scene Selector */}
      <div className="mb-6 flex flex-wrap gap-2">
        {sceneData.map(scene => (
          <button
            key={scene.id}
            onClick={() => setSelectedScene(scene)}
            className={`px-4 py-2 rounded-full border transition ${
              selectedScene.id === scene.id ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
            }`}
          >
            {scene.title}
          </button>
        ))}
      </div>

      {/* Narration Viewer */}
      <div className="bg-gray-100 p-4 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-2">{selectedScene.title}</h2>

        {selectedScene.narration.map((line, index) => (
          <p key={index} className="mb-2">
            <span className="font-mono text-blue-700">{line.speaker}:</span>{' '}
            <span>{line.text}</span>
          </p>
        ))}
      </div>

      {/* Visual Viewer */}
      <div className="mt-4 text-sm text-gray-500 italic">
        [Visual: {selectedScene.visual}]
      </div>

      {/* 🧩 Interactive Modules */}
      {sceneInteractions[numericSceneId] && (
        <div className="mt-6">
          <SceneInteractive sceneId={numericSceneId} />
        </div>
      )}
    </div>
  );
}
