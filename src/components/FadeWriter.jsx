const STYLES = `
.fade-writer__char {
  display: inline-block;
  opacity: 0;
  animation: fw-fade-in 0.4s ease forwards;
  white-space: pre;
}
@keyframes fw-fade-in {
  from { opacity: 0; }
  to   { opacity: 1; }
}
`

function injectStyles() {
  if (typeof document === 'undefined') return
  if (document.getElementById('fw-styles')) return
  const style = document.createElement('style')
  style.id = 'fw-styles'
  style.textContent = STYLES
  document.head.appendChild(style)
}

injectStyles()

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
          {char === ' ' ? ' ' : char}
        </span>
      ))}
    </span>
  )
}
