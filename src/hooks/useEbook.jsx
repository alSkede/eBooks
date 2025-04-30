import React, { createContext, useContext, useState } from 'react'
import { sceneData } from '../data/sceneDataFull'

const EbookContext = createContext()

export function EbookProvider({ children }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const currentScene = sceneData[currentIndex]

  const nextScene = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, sceneData.length - 1))
  }

  const prevScene = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  return (
    <EbookContext.Provider
      value={{ currentIndex, currentScene, nextScene, prevScene }}
    >
      {children}
    </EbookContext.Provider>
  )
}

export function useEbook() {
  const context = useContext(EbookContext)
  if (!context) {
    throw new Error('useEbook must be used within an EbookProvider')
  }
  return context
}
