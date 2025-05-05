import React, { useState } from "react";

export default function MuseumItem({ title, scene, tryll, libaeh }) {
  const [showNote, setShowNote] = useState(false);

  return (
    <div className="border-l-4 border-rose-400 bg-rose-50 p-4 rounded-xl shadow">
      <h3 className="text-xl font-bold text-rose-800">{title}</h3>
      <p className="text-sm italic text-gray-500">{scene}</p>
      <div className="mt-3">
        <p><strong>Tryll’s Label:</strong> {tryll}</p>
        <button
          onClick={() => setShowNote(!showNote)}
          className="text-sm text-blue-600 underline mt-2"
        >
          {showNote ? "Hide Li Bäh’s Note" : "Show Li Bäh’s Note"}
        </button>
        {showNote && (
          <p className="text-sm text-gray-700 mt-2"><strong>Li Bäh’s Note:</strong> {libaeh}</p>
        )}
      </div>
    </div>
  );
}
