function getImagePath(path) {
  if (path.startsWith('/')) return path
  if (!path.includes('/')) return `/scene-images/${path}`
  return `/${path}`
}

export default function SceneViewer({ currentScene }) {
  return (
    <div className="scene-container max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">{currentScene.title}</h2>

      <img
        src={getImagePath(currentScene.visual)}
        alt={currentScene.title}
        className="w-full max-w-3xl mx-auto my-4 rounded-xl shadow-md"
      />

      <div className="narration space-y-2">
        {currentScene.narration.map((line, index) => (
          <p key={index}><strong>{line.speaker}:</strong> {line.text}</p>
        ))}
      </div>
    </div>
  )
}
