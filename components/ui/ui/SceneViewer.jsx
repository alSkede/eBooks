function SceneViewer({ currentScene }) {
  return (
    <div className="scene-container">
      <h2>{currentScene.title}</h2>

      <img
        src={currentScene.visual}
        alt={currentScene.title}
        className="w-full max-w-3xl mx-auto my-4 rounded-xl shadow-md"
      />

      {currentScene.narration.map((line, index) => (
        <p key={index}><strong>{line.speaker}:</strong> {line.text}</p>
      ))}
    </div>
  );
}
