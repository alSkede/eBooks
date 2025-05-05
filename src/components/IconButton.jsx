export default function IconButton({ type, label, onClick }) {
  return (
    <button
      className={`icon-button ${type}`}
      title={label}
      onClick={onClick}
    >
      {label === 'Quiz' ? '❓' : label === 'Museum' ? '🏛️' : '📖'}
    </button>
  )
}
