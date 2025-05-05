import React from 'react';
import { useEbook } from '../hooks/useEbook';
import { sceneData } from '../data/sceneDataFull';

export default function SceneNavigation() {
  const { currentSceneIndex, setCurrentSceneIndex } = useEbook();

  const prevScene = () => {
    if (currentSceneIndex > 0) {
      setCurrentSceneIndex(currentSceneIndex - 1);
    }
  };

  const nextScene = () => {
    if (currentSceneIndex < sceneData.length - 1) {
      setCurrentSceneIndex(currentSceneIndex + 1);
    }
  };

  return (
    <>
      <button
        onClick={prevScene}
        className="button-secondary"
        disabled={currentSceneIndex === 0}
      >
        ⬅️ Zurück
      </button>

      <button
        onClick={nextScene}
        disabled={currentSceneIndex >= sceneData.length - 1}
      >
        ➡️ Weiter
      </button>
    </>
  );
}
