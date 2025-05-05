import React from 'react';
import { useEbook } from './hooks/useEbook';
import SceneNavigation from './components/SceneNavigation';
import IconButton from './components/IconButton';

export default function SceneViewer({ onOpenMuseum, onOpenQuiz, onOpenJournal }) {
  const { currentScene } = useEbook();

  if (!currentScene) return <div>⚠️ No scene loaded.</div>;

  const { title, visual, narration, audio, quiz, museum, journal } = currentScene;
  const combinedText = narration?.map(n => `${n.speaker}: ${n.text}`).join('\n\n');

  return (
    <div className="scene-viewer text-center p-4">
      <h2 className="text-xl font-bold mb-4">{title}</h2>

      {visual && (
        <img
          src={visual}
          alt="Scene visual"
          className="mx-auto rounded-xl my-4 max-w-full"
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

      {(quiz || museum || journal) && (
        <div className="flex justify-center gap-4 mt-4">
          {quiz && <IconButton type="quiz" label="Quiz" onClick={onOpenQuiz} />}
          {museum && <IconButton type="museum" label="Museum" onClick={onOpenMuseum} />}
          {journal && <IconButton type="journal" label="Journal" onClick={onOpenJournal} />}
        </div>
      )}
    </div>
  );
}
