import { quizData } from "./components/Quiz/quizData";
import { museumData } from "./components/Museum/museumData";
import { journalData } from "./components/Journal/journalData";

export const sceneRegistry = {
  getSceneFeatures(sceneIndex) {
    if (typeof sceneIndex !== "number" || isNaN(sceneIndex)) {
      return {
        hasQuiz: false,
        hasMuseum: false,
        hasJournal: false
      };
    }
    return {
      hasQuiz: !!(quizData[sceneIndex] && Object.keys(quizData[sceneIndex]).length > 0)
      hasMuseum: !!(museumData[sceneIndex] && Object.keys(museumData[sceneIndex]).length > 0),
      hasJournal: !!(journalData[sceneIndex] && Object.keys(journalData[sceneIndex]).length > 0)
    };
  }
};
