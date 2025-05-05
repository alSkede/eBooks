import React, { useState } from 'react';
import SceneViewer from './SceneViewer';
import Museum from './components/Museum/Museum';
import Quiz from './components/Quiz/Quiz';
import Journal from './components/Journal/Journal';
import './styles/buttonStyles.css';
import './styles/iconButtonStyles.css';
import './index.css';

export default function App() {
  const [showMuseum, setShowMuseum] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showJournal, setShowJournal] = useState(false);

  return (
    <div className="p-4 text-center">
      <SceneViewer
        onOpenMuseum={() => setShowMuseum(true)}
        onOpenQuiz={() => setShowQuiz(true)}
        onOpenJournal={() => setShowJournal(true)}
      />

      {showMuseum && (
        <div className="fixed inset-0 bg-white bg-opacity-95 z-50 overflow-y-auto p-6">
          <Museum />
          <button onClick={() => setShowMuseum(false)} className="mt-4 text-blue-600 underline text-sm">✖ Close Museum</button>
        </div>
      )}

      {showQuiz && (
        <div className="fixed inset-0 bg-white bg-opacity-95 z-50 overflow-y-auto p-6">
          <Quiz />
          <button onClick={() => setShowQuiz(false)} className="mt-4 text-blue-600 underline text-sm">✖ Close Quiz</button>
        </div>
      )}

      {showJournal && (
        <div className="fixed inset-0 bg-white bg-opacity-95 z-50 overflow-y-auto p-6">
          <Journal />
          <button onClick={() => setShowJournal(false)} className="mt-4 text-blue-600 underline text-sm">✖ Close Journal</button>
        </div>
      )}
    </div>
  );
}
