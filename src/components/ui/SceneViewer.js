import { useState } from 'react';
import { sceneData } from '../data/sceneDataFull';
import { sceneInteractions } from '../data/sceneInteractions';
import SceneInteractive from '../components/SceneInteractive';

export default function SceneViewer() {
  const [selectedScene, setSelectedScene] = useState(sceneData[0]);
  const numericSceneId = parseInt(selectedScene.id.replace('scene-', ''), 10);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center text-blue-700">
        Tryll & Li Bäh — Interactive eBook
      </h1>

      {/* Scene Selector */}
      <div className="flex flex-wrap justify-center gap-2">
        {sceneData.map(scene => (
          <button
            key={scene.id}
            onClick={() => setSelectedScene(scene)}
            className={`px-4 py-2 rounded-full border transition ${
              selectedScene.id === scene.id
                ? 'bg-blue-500 text-white'
                : 'bg-white text-blue-500 hover:bg-blue-100'
            }`}
          >
            {scene.title}
          </button>
        ))}
      </div>

      {/* Scene Content */}
      <div className="bg-gray-50 p-6 rounded-xl shadow space-y-4">
        <h2 className="text-2xl font-semibold text-blue-800">{selectedScene.title}</h2>

        {/* Narration */}
        <div className="space-y-2">
          {selectedScene.narration.map((line, index) => (
            <p key={index}>
              <span className="font-mono text-blue-700">{line.speaker}:</span>{' '}
              <span>{line.text}</span>
            </p>
          ))}
        </div>

        {/* Visual */}
        {selectedScene.visual && (
          <div className="pt-4 text-center">
            <img
              src={`/assets/${selectedScene.visual}`}
              alt={selectedScene.title}
              className="inline-block max-w-full rounded-xl border border-gray-300 shadow-sm"
            />
          </div>
        )}

        {/* Interaktion */}
        <SceneInteractive sceneId={numericSceneId} />
      </div>
    </div>
  );
}
