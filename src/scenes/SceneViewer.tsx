function getImagePath(path) {
  // Wenn der Pfad schon mit '/' beginnt, ist er fertig
  if (path.startsWith('/')) {
    return path; // Keine Änderung nötig
  }

  // Wenn der Pfad noch keinen Slash hat, füge "scene-images/" hinzu
  if (!path.includes('/')) {
    return `/scene-images/${path}`;
  }

  // Sonst: Standardmäßig sicherstellen, dass ein / davor ist
  return `/${path}`;
}

export default function SceneViewer({ currentScene }) {
  return (
    <div className="scene-container">
      <h2 className="text-2xl font-bold mb-4">{currentScene.title}</h2>

      {/* Bild richtig laden */}
      <img
        src={getImagePath(currentScene.visual)}
        alt={currentScene.title}
        className="w-full max-w-3xl mx-auto my-4 rounded-xl shadow-md"
      />

      {/* Narration ausgeben */}
      <div className="narration space-y-2">
        {currentScene.narration.map((line, index) => (
          <p key={index}>
            <strong>{line.speaker}:</strong> {line.text}
          </p>
        ))}
      </div>
    </div>
  );
}
