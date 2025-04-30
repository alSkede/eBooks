import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' // optional, je nachdem ob du eine CSS-Datei nutzt
import { EbookProvider } from './hooks/useEbook'
import './styles/buttonStyles.css'
import './styles/iconButtonStyles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <EbookProvider>
      <App />
    </EbookProvider>
  </React.StrictMode>
)
