import React from 'react';

const ReaderCreation = ({ prompt, options }) => {
  return (
    <div className="border-l-4 border-indigo-400 bg-indigo-50 p-4 rounded-xl shadow">
      <h3 className="text-lg font-semibold text-indigo-800 mb-2">✏️ Reader&apos;s Creative Choice</h3>
      <p className="mb-3 italic text-gray-700">{prompt}</p>
      <ul className="list-disc ml-6 text-sm text-gray-600">
        {options && options.map((opt, idx) => (
          <li key={idx}>{opt}</li>
        ))}
      </ul>
    </div>
  );
};

export default ReaderCreation;
