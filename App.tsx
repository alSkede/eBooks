import SceneViewer from './scenes/SceneViewer';

import { sceneData } from './sceneDataFull';
import { sceneInteractions } from './data/sceneInteractions';
import SceneInteractive from './components/SceneInteractive';

export default function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <SceneViewer />
    </div>
  );
}
