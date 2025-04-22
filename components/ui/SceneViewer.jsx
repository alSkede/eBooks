function SceneViewer({ currentScene }) {
  return (
    <div className="scene-container">
      <h2>{currentScene.title}</h2>

      <img
        src={currentScene.visual.includes('scene-images/}
            ? currentScene.visual 
            : `scene-images/${currentScene.visual}`}
        alt={currentScene.title}
        className="w-full max-w-3xl mx-auto my-4 rounded-xl shadow-md"
      />

      {currentScene.narration.map((line, index) => (
        <p key={index}><strong>{line.speaker}:</strong> {line.text}</p>
      ))}
    </div>
  );
}
// Füge diese Funktion innerhalb der Komponente hinzu
function getImagePath(path) {
  // Wenn es bereits ein vollständiger Pfad ist (beginnt mit /)
  if (path.startsWith('/')) {
    return path.substring(1); // Entferne den führenden /
  }
  
  // Wenn es nur ein Dateiname ist, füge den Ordner hinzu
  if (!path.includes('/')) {
    return `scene-images/${path}`;
  }
  
  // Andernfalls gib den Pfad unverändert zurück
  return path;
}

// Und verwende sie im img-Tag:
<img
  src={getImagePath(currentScene.visual)}
  alt={currentScene.title}
  // weitere Attribute...
/>
