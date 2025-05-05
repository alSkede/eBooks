import { useEbook } from "../../hooks/useEbook";
import { quizData } from "./quizData";
import TryllMeaningMoment from "../InteractionModules/TryllMeaningMoment";
import RealityCheck from "../InteractionModules/RealityCheck";
import LogicTrap from "../InteractionModules/LogicTrap";
import ReaderCreation from "../InteractionModules/ReaderCreation";

export default function Quiz() {
  const { currentSceneIndex } = useEbook();
  const data = quizData[currentSceneIndex];

  const isFilled = (value) =>
    value && typeof value === "object" && !Array.isArray(value) && Object.keys(value).length > 0;

  if (!isFilled(data)) {
    return <p className="text-center text-gray-500">No quiz for this scene.</p>;
  }

  return (
    <div className="space-y-8 p-4">
      {isFilled(data.tryll) && <TryllMeaningMoment {...data.tryll} />}
      {isFilled(data.reality) && <RealityCheck {...data.reality} />}
      {isFilled(data.logic) && <LogicTrap {...data.logic} />}
      {isFilled(data.creation) && <ReaderCreation {...data.creation} />}
    </div>
  );
}
