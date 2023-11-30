import { useState } from 'react' 
import './App.css'
import Navbar from './components/Navbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
      <h1>Hola</h1>
    </header>
    <Navbar />
    </>
  )
}

export default App
