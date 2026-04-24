import './FadeWriter.css'

export default function FadeWriter({ text = '', speed = 80, className = '' }) {
  return (
    <span className={`fade-writer ${className}`} aria-label={text}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          className="fade-writer__char"
          style={{ animationDelay: `${i * speed}ms` }}
          aria-hidden="true"
        >
          {char === ' ' ? ' ' : char}
        </span>
      ))}
    </span>
  )
}
