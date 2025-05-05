import React, { useState } from "react";

export default function LogicTrap({ question, options, solutionIndex }) {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleClick = (index) => {
    setSelected(index);
    setSubmitted(true);
  };

  return (
    <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4 rounded-xl shadow">
      <h3 className="text-lg font-semibold text-yellow-800 mb-2">🧠 Logic Trap</h3>
      <p className="mb-3 italic text-gray-700">{question}</p>
      <ul className="space-y-2">
        {options.map((opt, idx) => {
          const isSelected = idx === selected;
          const isCorrect = idx === solutionIndex;

          return (
            <li key={idx}>
              <button
                onClick={() => handleClick(idx)}
                className={`w-full text-left px-4 py-2 rounded-lg border
                  ${isSelected ? (isCorrect ? "bg-green-100 border-green-400" : "bg-red-100 border-red-400") : "bg-white border-gray-300"}
                  ${submitted ? "cursor-default" : "hover:bg-yellow-100"}`}
                disabled={submitted}
              >
                {opt}
              </button>
            </li>
          );
        })}
      </ul>
      {submitted && (
        <p className="mt-3 text-sm text-gray-600">
          {selected === solutionIndex ? "✔️ Richtig!" : "❌ Falsch. Versuche es nochmal beim nächsten Mal."}
        </p>
      )}
    </div>
  );
}
