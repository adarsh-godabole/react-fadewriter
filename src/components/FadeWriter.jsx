const STYLES = `
.fade-writer__char {
  display: inline-block;
  opacity: 0;
  animation: fw-fade-in 0.4s ease forwards;
  white-space: pre;
}
.fade-writer__word {
  display: inline-block;
  opacity: 0;
  animation: fw-fade-in 0.4s ease forwards;
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

export default function FadeWriter({
  text = '',
  speed = 80,
  mode = 'char',
  className = '',
  onComplete,
}) {
  const tokens = mode === 'word' ? text.split(' ') : text.split('')
  const last = tokens.length - 1

  return (
    <span className={`fade-writer ${className}`} aria-label={text}>
      {tokens.map((token, i) => (
        <span
          key={i}
          className={mode === 'word' ? 'fade-writer__word' : 'fade-writer__char'}
          style={{ animationDelay: `${i * speed}ms` }}
          onAnimationEnd={i === last ? onComplete : undefined}
          aria-hidden="true"
        >
          {token}{mode === 'word' && i < last ? ' ' : ''}
        </span>
      ))}
    </span>
  )
}
