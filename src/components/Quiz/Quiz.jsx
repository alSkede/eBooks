import { useEbook } from "../../hooks/useEbook";
import { quizData } from "./quizData";
import TryllMeaningMoment from "../InteractionModules/TryllMeaningMoment";
import RealityCheck from "../InteractionModules/RealityCheck";
import LogicTrap from "../InteractionModules/LogicTrap";
import ReaderCreation from "../InteractionModules/ReaderCreation";

export default function Quiz() {
  const { currentSceneIndex } = useEbook();
  const data = quizData[currentSceneIndex];

  const isValid = (part) =>
    part && typeof part === "object" && Object.keys(part).length > 0;

  if (!isValid(data)) {
    return <p className="text-center text-gray-500">No quiz for this scene.</p>;
  }

  return (
    <div className="space-y-8 p-4">
      {isValid(data.tryll) && <TryllMeaningMoment {...data.tryll} />}
      {isValid(data.reality) && <RealityCheck {...data.reality} />}
      {isValid(data.logic) && <LogicTrap {...data.logic} />}
      {isValid(data.creation) && <ReaderCreation {...data.creation} />}
    </div>
  );
}
