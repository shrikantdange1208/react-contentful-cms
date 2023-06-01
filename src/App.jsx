import { useState } from 'react'
import Hero from './components/Hero'
import Projects from './components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Hero />
      <Projects />
    </main>
  )
}

export default App
