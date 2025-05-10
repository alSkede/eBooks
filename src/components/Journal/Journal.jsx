import { useEbook } from "../../hooks/useEbook";

export default function Journal() {
  const { currentScene } = useEbook();
  const entry = currentScene?.journal;

  if (!entry) {
    return <p className="text-center text-gray-500">No journal entry for this scene.</p>;
  }

  return (
    <div className="p-4 max-w-xl mx-auto text-left">
      <h2 className="text-lg font-semibold mb-2">Tagebuchnotiz</h2>
      <p>{entry}</p>
    </div>
  );
}
