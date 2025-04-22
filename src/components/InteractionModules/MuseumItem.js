import React from 'react';

const MuseumItem = ({ prompt, options }) => {
  return (
    <div className="border-l-4 border-yellow-400 bg-yellow-50 p-4 rounded-xl shadow">
      <h3 className="text-lg font-semibold text-yellow-800 mb-2">🏛️ Tryll’s Museum Entry</h3>
      <p className="mb-3 italic text-gray-700">{prompt}</p>
      <ul className="list-disc ml-6 text-sm text-gray-600">
        {options.map((opt, idx) => <li key={idx}>{opt}</li>)}
      </ul>
    </div>
  );
};

export default MuseumItem;