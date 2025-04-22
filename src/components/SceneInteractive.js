
import React from "react";
import { sceneInteractions } from "../data/sceneInteractions";
import TryllMeaningMoment from "./InteractionModules/TryllMeaningMoment";
import LogicTrap from "./InteractionModules/LogicTrap";
import RealityCheck from "./InteractionModules/RealityCheck";
import MuseumItem from "./InteractionModules/MuseumItem";
import ReaderCreation from "./InteractionModules/ReaderCreation";

console.log('TryllMeaningMoment loaded:', prompt);
const SceneInteractive = ({ sceneId }) => {
  const interactions = sceneInteractions[sceneId] || [];

  return (
    <div className="mt-6 space-y-6">
      {interactions.map((interaction, index) => {
        switch (interaction.type) {
          case "TryllMeaning":
            return <TryllMeaningMoment key={index} {...interaction} />;
          case "LogicTrap":
            return <LogicTrap key={index} {...interaction} />;
          case "RealityCheck":
            return <RealityCheck key={index} {...interaction} />;
          case "MuseumItem":
            return <MuseumItem key={index} {...interaction} />;
          case "ReaderCreation":
            return <ReaderCreation key={index} {...interaction} />;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default SceneInteractive;
