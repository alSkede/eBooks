import React from "react";
import { sceneInteractions } from "../data/sceneInteractions";

const SceneInteractive = ({ sceneId }) => {
  const interactions = sceneInteractions[sceneId] || [];

  return (
    <div style={{ marginTop: "2rem" }}>
      {interactions.map((interaction, index) => (
        <div key={index} style={{ marginBottom: "1.5rem" }}>
          <p><strong>{interaction.prompt}</strong></p>
          <ul>
            {interaction.options.map((opt, i) => (
              <li key={i}>– {opt}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SceneInteractive;
