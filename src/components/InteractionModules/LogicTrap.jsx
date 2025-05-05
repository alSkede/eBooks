import React from 'react';

const LogicTrap = ({ prompt, options }) => {
  return (
    <div className="border-l-4 border-purple-400 bg-purple-50 p-4 rounded-xl shadow">
      <h3 className="text-lg font-semibold text-purple-800 mb-2">🌀 Li Bäh’s Logic Trap</h3>
      <p className="mb-3 italic text-gray-700">{prompt}</p>
      <ul className="list-disc ml-6 text-sm text-gray-600">
        {options.map((opt, idx) => <li key={idx}>{opt}</li>)}
      </ul>
    </div>
  );
};

export default LogicTrap;
