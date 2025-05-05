import { quizData } from "./quizData";
import { useEbook } from "../../hooks/useEbook";
import TryllMeaningMoment from "../InteractionModules/TryllMeaningMoment";
import RealityCheck from "../InteractionModules/RealityCheck";
import LogicTrap from "../InteractionModules/LogicTrap";
import ReaderCreation from "../InteractionModules/ReaderCreation";

export default function Quiz() {
  const { currentSceneIndex } = useEbook();
  const data = quizData[currentSceneIndex];

  if (!data) return <p className="text-center text-gray-500">No quiz for this scene.</p>;

  return (
    <div className="space-y-8 p-4">
      <TryllMeaningMoment {...data.tryll} />
      <RealityCheck {...data.reality} />
      <LogicTrap {...data.logic} />
      <ReaderCreation {...data.creation} />
    </div>
  );
}
