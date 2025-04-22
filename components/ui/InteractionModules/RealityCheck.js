import React, { useState } from 'react';

const RealityCheck = ({ prompt, options, correct }) => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="border-l-4 border-green-400 bg-green-50 p-4 rounded-xl shadow">
      <h3 className="text-lg font-semibold text-green-800 mb-2">🧪 Reality Check</h3>
      <p className="mb-3 italic text-gray-700">{prompt}</p>
      <div className="space-y-2">
        {options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => setSelected(idx)}
            className={`block w-full text-left px-4 py-2 rounded border ${selected === idx && idx === correct
              ? 'bg-green-200 border-green-500 text-green-900'
              : selected === idx
              ? 'bg-red-100 border-red-400 text-red-700'
              : 'bg-white border-gray-300 hover:bg-green-100'}`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RealityCheck;