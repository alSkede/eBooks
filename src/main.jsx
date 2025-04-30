import React from 'react'
import './styles/buttonStyles.css'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' // optional, je nachdem ob du eine CSS-Datei nutzt

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
