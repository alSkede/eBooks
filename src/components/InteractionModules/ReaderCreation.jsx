import React, { useState } from "react";

export default function ReaderCreation({ prompt, options }) {
  const [selected, setSelected] = useState([]);

  const toggleOption = (index) => {
    setSelected((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="border-l-4 border-indigo-400 bg-indigo-50 p-4 rounded-xl shadow">
      <h3 className="text-lg font-semibold text-indigo-800 mb-2">✏️ Reader’s Creative Choice</h3>
      <p className="mb-3 italic text-gray-700">{prompt}</p>
      <ul className="space-y-2">
        {options.map((opt, idx) => (
          <li key={idx}>
            <button
              onClick={() => toggleOption(idx)}
              className={`w-full text-left px-4 py-2 rounded-lg border
                ${selected.includes(idx) ? "bg-indigo-100 border-indigo-500" : "bg-white border-gray-300"}
                hover:bg-indigo-50`}
            >
              {opt}
            </button>
          </li>
        ))}
      </ul>
      {selected.length > 0 && (
        <p className="mt-3 text-sm text-gray-600">
          You selected: {selected.map(i => options[i]).join(", ")}
        </p>
      )}
    </div>
  );
}
