import { quizData } from "./components/Quiz/quizData";
import { museumData } from "./components/Museum/museumData";
import { journalData } from "./components/Journal/journalData";

export const sceneRegistry = {
  getSceneFeatures(sceneIndex) {
    if (!Number.isInteger(sceneIndex)) {
      return {
        hasQuiz: false,
        hasMuseum: false,
        hasJournal: false
      };
    }

    return {
      hasQuiz:
        Object.prototype.hasOwnProperty.call(quizData, sceneIndex) &&
        Object.keys(quizData[sceneIndex]).length > 0,

      hasMuseum:
        Object.prototype.hasOwnProperty.call(museumData, sceneIndex) &&
        Object.keys(museumData[sceneIndex]).length > 0,

      hasJournal:
        Object.prototype.hasOwnProperty.call(journalData, sceneIndex) &&
        Object.keys(journalData[sceneIndex]).length > 0
    };
  }
};
