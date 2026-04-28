import { useState } from 'react'
import FadeWriter from './components/FadeWriter'
import './App.css'

function App() {
  const [done, setDone] = useState(false)

  return (
    <section id="center">
      <div>
        <h1>
          <FadeWriter
            text="Hello, FadeWriter!"
            speed={60}
            onComplete={() => setDone(true)}
          />
        </h1>
        {done && <p>Animation complete!</p>}
        <p>
          <FadeWriter
            text="Word by word this time"
            mode="word"
            speed={200}
          />
        </p>
      </div>
    </section>
  )
}

export default App
