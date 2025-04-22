import React, { useState } from 'react';

const TryllMeaningMoment = ({ prompt, options, correct }) => {
  const [selected, setSelected] = useState(null);
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="border-l-4 border-orange-400 bg-orange-50 p-4 rounded-xl shadow">
      <h3 className="text-lg font-semibold text-orange-800 mb-2">🎭 Tryll’s Meaning Moment</h3>
      <p className="italic mb-4 text-gray-700">“{prompt}”</p>
      <div className="space-y-2">
        {options.map((opt, i) => (
          <button
            key={i}
            onClick={() => { setSelected(i); setRevealed(true); }}
            className={`block w-full px-4 py-2 text-left rounded border ${revealed
              ? i === correct
                ? 'bg-green-100 border-green-400 text-green-800'
                : i === selected
                ? 'bg-red-100 border-red-400 text-red-800'
                : 'bg-white border-gray-300 text-gray-600'
              : 'bg-white border-gray-300 hover:bg-orange-100'}`}
          >
            {opt}
          </button>
        ))}
      </div>
      {revealed && (
        <p className="mt-3 text-sm text-gray-500">
          {selected === correct ? '🌟 Tryll approves!' : '🤔 Not quite the wiggle she meant.'}
        </p>
      )}
    </div>
  );
};

export default TryllMeaningMoment;