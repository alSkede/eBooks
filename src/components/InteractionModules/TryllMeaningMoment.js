// components/InteractionModules/TryllMeaningMoment.js
import React, { useState } from "react";
import { motion } from "framer-motion";

const TryllMeaningMoment = ({ prompt, options, correct }) => {
  const [selected, setSelected] = useState(null);
  const [revealed, setRevealed] = useState(false);

  const handleClick = (index) => {
    if (!revealed) {
      setSelected(index);
      setRevealed(true);
    }
  };

  return (
    <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-xl shadow-md">
      <h3 className="text-lg font-semibold text-orange-800 mb-2">🎭 Tryll’s Thought</h3>
      <p className="text-gray-700 italic mb-4">“{prompt}”</p>
      <div className="space-y-2">
        {options.map((option, index) => (
          <motion.button
            key={index}
            onClick={() => handleClick(index)}
            whileTap={{ scale: 0.95 }}
            className={`w-full text-left px-4 py-2 rounded-lg border transition duration-300
              ${revealed
                ? index === correct
                  ? "bg-green-100 border-green-400 text-green-800"
                  : index === selected
                  ? "bg-red-100 border-red-400 text-red-800"
                  : "bg-white border-gray-300 text-gray-600"
                : "bg-white border-gray-300 hover:bg-orange-100"}`}
          >
            {option}
          </motion.button>
        ))}
      </div>
      {revealed && (
        <p className="mt-4 text-sm text-gray-500">
          {selected === correct
            ? "🌟 Tryll flutters approvingly. You’ve felt the meaning."
            : "🤷‍♀️ Tryll tilts her head. Close, but the wiggle wiggled elsewhere."}
        </p>
      )}
    </div>
  );
};

export default TryllMeaningMoment;
