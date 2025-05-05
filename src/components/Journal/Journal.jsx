import { useEbook } from "../../hooks/useEbook";
import { journalData } from "./journalData";
import ReaderCreation from "../InteractionModules/ReaderCreation";

export default function Journal() {
  const { currentSceneIndex } = useEbook();
  const data = journalData[currentSceneIndex];

  if (!data) return <p className="text-center text-gray-500">Nothing journal-worthy here…</p>;

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">📓 Tryll & Li Bäh’s Journal</h1>
      <ReaderCreation {...data} />
    </div>
  );
}
