import { useEbook } from "../../hooks/useEbook";
import { quizData } from "./quizData";
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
      {data.tryll && <TryllMeaningMoment {...data.tryll} />}
      {data.reality && <RealityCheck {...data.reality} />}
      {data.logic && <LogicTrap {...data.logic} />}
      {data.creation && <ReaderCreation {...data.creation} />}
    </div>
  );
}
