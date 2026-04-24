import FadeWriter from './components/FadeWriter'
import './App.css'

function App() {
  return (
    <section id="center">
      <div>
        <h1><FadeWriter text="Hello, FadeWriter!" speed={60} /></h1>
        <p><FadeWriter text="Each character fades in one by one." speed={40} /></p>
      </div>
    </section>
  )
}

export default App
