import React, { useState } from "react";
import { sceneData } from "../../data/sceneDataFull";
import SceneInteractive from "../SceneInteractive";

export default function SceneViewer() {
  const [selectedScene, setSelectedScene] = useState(sceneData[0]);
  const numericSceneId = parseInt(selectedScene.id.replace("scene-", ""), 10);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "2rem", textAlign: "center" }}>
        Tryll & Li Bäh — Interactive eBook
      </h1>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "0.5rem",
        marginBottom: "2rem"
      }}>
        {sceneData.map(scene => (
          <button
            key={scene.id}
            onClick={() => setSelectedScene(scene)}
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "9999px",
              border: "1px solid #3b82f6",
              backgroundColor: selectedScene.id === scene.id ? "#3b82f6" : "#fff",
              color: selectedScene.id === scene.id ? "#fff" : "#3b82f6",
              cursor: "pointer"
            }}
          >
            {scene.title}
          </button>
        ))}
      </div>
      <div style={{ backgroundColor: "#f9fafb", padding: "1.5rem", borderRadius: "1rem", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem" }}>
          {selectedScene.title}
        </h2>
        {selectedScene.narration.map((line, index) => (
          <p key={index} style={{ marginBottom: "0.75rem" }}>
            <strong style={{ fontFamily: "monospace", color: "#2563eb" }}>{line.speaker}:</strong> {line.text}
          </p>
        ))}
        <img
          src={selectedScene.visual}
          alt={selectedScene.title}
          style={{
            width: "100%",
            maxWidth: "600px",
            margin: "2rem auto 0",
            display: "block",
            borderRadius: "1rem",
            boxShadow: "0 5px 20px rgba(0,0,0,0.1)"
          }}
        />
        <SceneInteractive sceneId={numericSceneId} />
      </div>
    </div>
  );
}
