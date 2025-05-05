import React, { useState } from "react";

export default function TryllMeaningMoment({ prompt, choices }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="border-l-4 border-purple-400 bg-purple-50 p-4 rounded-xl shadow">
      <h3 className="text-lg font-semibold text-purple-800 mb-2">🌀 Tryll's Meaning Moment</h3>
      <p className="mb-3 italic text-gray-700">{prompt}</p>
      <ul className="space-y-2">
        {choices.map((choice, idx) => (
          <li key={idx}>
            <button
              onClick={() => setSelected(idx)}
              className={`w-full text-left px-4 py-2 rounded-lg border
                ${selected === idx ? "bg-purple-100 border-purple-500" : "bg-white border-gray-300"}
                hover:bg-purple-50`}
            >
              {choice}
            </button>
          </li>
        ))}
      </ul>
      {selected !== null && (
        <p className="mt-3 text-sm text-gray-600">
          You selected: {choices[selected]}
        </p>
      )}
    </div>
  );
}
