import React, { createContext, useContext, useState } from 'react'
import { sceneData } from '../data/sceneDataFull'

const EbookContext = createContext()

export function EbookProvider({ children }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const currentScene = sceneData[currentIndex]

  return (
    <EbookContext.Provider
      value={{ currentIndex, setCurrentIndex, currentScene }}
    >
      {children}
    </EbookContext.Provider>
  )
}

export function useEbook() {
  return useContext(EbookContext)
}
