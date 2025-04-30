import { useEbook } from '../hooks/useEbook'
import '../styles/buttonStyles.css'

export default function SceneNavigation() {
  const { currentIndex, nextScene, prevScene } = useEbook()

  return (
    <div className="button-group">
      <button onClick={prevScene} className="button-secondary" disabled={currentIndex === 0}>
        ⬅️ Zurück
      </button>
      <button onClick={nextScene} disabled={currentIndex >= 19}>
        ➡️ Weiter
      </button>
    </div>
  )
}
