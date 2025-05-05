import { useState } from "react";
import { sceneData } from "../data/sceneDataFull"; // ggf. Pfad anpassen

export function useEbook() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentScene = sceneData[currentIndex] ?? null;

  return {
    currentSceneIndex: currentIndex,
    currentScene,
    setCurrentSceneIndex: setCurrentIndex
  };
}
