import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Main from './components/Main'
import About from './components/About'
import Projects from './components/Projects'
import './App.css'
import './assets/fonts/Inter-Regular.ttf'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Route>
    </Routes>
  )
}

export default App
