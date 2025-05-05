return (
  <div className="button-group scene-navigation">
    <button
      onClick={prevScene}
      className="nav-button nav-button--back"
      disabled={currentIndex === 0}
    >
      ⬅️ Zurück
    </button>

    <button
      onClick={nextScene}
      className="nav-button nav-button--next"
      disabled={currentIndex >= sceneData.length - 1}
    >
      ➡️ Weiter
    </button>
  </div>
)
