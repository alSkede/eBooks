import React, { createContext, useContext, useState } from "react";
import { sceneData } from "../data/sceneDataFull";

const EbookContext = createContext();

export function EbookProvider({ children }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentScene = sceneData[currentIndex] ?? null;

  return (
    <EbookContext.Provider value={{
      currentSceneIndex: currentIndex,
      currentScene,
      setCurrentSceneIndex: setCurrentIndex
    }}>
      {children}
    </EbookContext.Provider>
  );
}

export function useEbook() {
  return useContext(EbookContext);
}
