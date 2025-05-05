import { quizData } from "./quizData";
import { useEbook } from "../hooks/useEbook";

export default function Quiz() {
  const { currentSceneIndex } = useEbook();
  const data = quizData[currentSceneIndex];

  if (!data) return <p>No quiz for this scene.</p>;

  return (
    <div className="space-y-6 p-4">
      <TryllMeaningMoment {...data.tryll} />
      <RealityCheck {...data.reality} />
      <LogicTrap {...data.logic} />
      <ReaderCreation {...data.creation} />
    </div>
  );
}
