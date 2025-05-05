import React from "react";
import tryllImage from "./TK_Wiggle.png"; // relativer Pfad im gleichen Ordner

export default function Start({ onStart }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6 text-center">
      <img
        src={tryllImage}
        alt="Tryll & Li Bäh"
        className="max-w-full max-h-[400px] mb-8 rounded-xl shadow"
      />
      <h1 className="text-3xl font-bold mb-4">Willkommen bei Tryll & Li Bäh</h1>
      <p className="text-gray-600 mb-6 max-w-xl">
        Eine interaktive Reise durch Ideen, Fragen und überraschende Bedeutungen.
        Bist du bereit, dich auf Trylls Spurensuche einzulassen?
      </p>
      <button
        onClick={onStart}
        className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 shadow"
      >
        Los geht’s
      </button>
    </div>
  );
}
