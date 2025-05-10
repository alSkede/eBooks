import { useEbook } from "../../hooks/useEbook";

export default function Quiz() {
  const { currentScene } = useEbook();
  const questions = currentScene?.interactions || [];

  if (!questions.length) {
    return <p className="text-center text-gray-500">No quiz for this scene.</p>;
  }

  return (
    <div className="space-y-6 p-4 max-w-xl mx-auto">
      {questions.map((q, index) => (
        <div key={index}>
          <p className="font-semibold mb-2">{q.prompt}</p>
          <ul className="list-disc ml-5 space-y-1">
            {q.options.map((opt, i) => (
              <li key={i}>{opt}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
