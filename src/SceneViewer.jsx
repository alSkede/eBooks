import React from 'react';
import { useEbook } from './hooks/useEbook';
import SceneNavigation from './components/SceneNavigation';
import IconButton from './components/IconButton';
import { sceneRegistry } from './sceneRegistry';

export default function SceneViewer({ onOpenMuseum, onOpenQuiz, onOpenJournal }) {
  const { currentScene, currentSceneIndex } = useEbook();

console.log("sceneIndex:", currentSceneIndex);
console.log("scene features:", sceneRegistry.getSceneFeatures(currentSceneIndex));
  
  if (!currentScene) return <div>⚠️ No scene loaded.</div>;

  const { title, visual, narration, audio } = currentScene;
  const combinedText = narration?.map(n => `${n.speaker}: ${n.text}`).join('\n\n');

  const { hasQuiz, hasMuseum, hasJournal } = sceneRegistry.getSceneFeatures(currentSceneIndex);

  return (
    <div className="scene-viewer text-center p-4">
      <h2 className="text-xl font-bold mb-4">{title}</h2>

      {visual && (
        <img
          src={visual}
          alt="Scene visual"
          className="mx-auto rounded-xl my-4 max-w-full"
          style={{ maxHeight: '400px', objectFit: 'contain' }}
        />
      )}

      {audio && (
        <audio
          key={audio}
          controls
          preload="metadata"
          className="mx-auto my-4 w-full max-w-md"
        >
          <source src={audio} type="audio/mp4" />
        </audio>
      )}

      {combinedText && (
        <p className="whitespace-pre-wrap mx-auto my-4 max-w-xl text-sm text-gray-800">
          {combinedText}
        </p>
      )}

      <div className="flex justify-center gap-4 mt-6">
        <SceneNavigation />
      </div>

      {(hasQuiz || hasMuseum || hasJournal) && (
        <div className="flex justify-center gap-4 mt-4">
          {hasQuiz && <IconButton type="quiz" label="Quiz" onClick={onOpenQuiz} />}
          {hasMuseum && <IconButton type="museum" label="Museum" onClick={onOpenMuseum} />}
          {hasJournal && <IconButton type="journal" label="Journal" onClick={onOpenJournal} />}
        </div>
      )}
    </div>
  );
}
