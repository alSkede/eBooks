// components/SceneInteractive.js
import React from "react";
import { sceneInteractions } from "../data/sceneInteractions";
import TryllMeaningMoment from "./InteractionModules/TryllMeaningMoment";

const SceneInteractive = ({ sceneId }) => {
  const interactions = sceneInteractions[sceneId] || [];

  return (
    <div className="mt-6 space-y-6">
      {interactions.map((interaction, index) => {
        switch (interaction.type) {
          case "TryllMeaning":
            return <TryllMeaningMoment key={index} {...interaction} />;
          // weitere Interaktionstypen wie "LogicTrap", "MuseumItem" usw. hier ergänzen
          default:
            return null;
        }
      })}
    </div>
  );
};

export default SceneInteractive;
