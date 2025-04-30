import React from 'react'
import '../styles/iconButtonStyles.css'

export default function IconButton({ type, onClick, label }) {
  const emojiMap = {
    quiz: "❓",
    museum: "🏛️",
    journal: "📓"
  }

  const emoji = emojiMap[type] || "🔘"

  return (
    <button
      className={`icon-button ${type}`}
      onClick={onClick}
      title={label}
      aria-label={label}
    >
      {emoji}
    </button>
  )
}
