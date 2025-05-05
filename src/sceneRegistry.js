import { quizData } from "./components/Quiz/quizData";
import { museumData } from "./components/Museum/museumData";
import { journalData } from "./components/Journal/journalData";

export const sceneRegistry = {
  getSceneFeatures(sceneIndex) {
    return {
      hasQuiz: !!quizData[sceneIndex],
      hasMuseum: !!museumData[sceneIndex],
      hasJournal: !!journalData[sceneIndex]
    };
  }
};
