import React from "react";
import tryllImage from "./TK_Wiggle.png"; // relativer Pfad im gleichen Ordner

export default function Start({ onStart }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6 text-center">
    <img
      src={tryllImage}
      alt="Tryll & Li Bäh"
      className="mx-auto rounded-xl my-4 max-w-full"
      style={{ maxHeight: '400px', objectFit: 'contain' }}
    />

      <button
        onClick={onStart}
        className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 shadow"
      >
        ENTER
      </button>
    </div>
  );
}
