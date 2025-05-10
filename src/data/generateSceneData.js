import { sceneDataCore } from './sceneDataCore.js'
import { sceneAudio } from './sceneAudio.js'
import { sceneInteractions } from './sceneInteractions.js'

export const sceneData = sceneDataCore.map((scene, index) => ({
  ...scene,
  audio: sceneAudio[scene.id] || null,
  interactions: sceneInteractions[index + 1] || [],
  quiz: !!sceneInteractions[index + 1],
  museum: false,
  journal: false
}));
