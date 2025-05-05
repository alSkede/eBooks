import TryllMeaningMoment from "../InteractionModules/TryllMeaningMoment";
import RealityCheck from "../InteractionModules/RealityCheck";
import LogicTrap from "../InteractionModules/LogicTrap";
import ReaderCreation from "../InteractionModules/ReaderCreation";

export default function Quiz() {
  return (
    <div className="space-y-8 p-4">
      <TryllMeaningMoment
        prompt="He became two… but they were both the same idea in different moods!"
        options={[
          "Mitosis as emotional mirroring",
          "One cell apologized to itself",
          "Identity got bored"
        ]}
        correct={0}
      />

      <RealityCheck
        prompt="What is true about mitosis?"
        options={[
          "Single cells divide this way",
          "Protozoa name themselves Greg",
          "Emotions trigger replication"
        ]}
        correct={0}
      />

      <LogicTrap
        prompt="If A splits into A and A…"
        options={[
          "They are more A",
          "They are less A",
          "They are ∞A"]}
      />

      <ReaderCreation
        prompt="Invent the next evolution!"
        options={[
          "A cloud that forgets itself",
          "A chair that dreams"]}
      />
    </div>
  );
}
