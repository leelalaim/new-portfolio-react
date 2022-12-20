import './App.css'
import './assets/fonts/Inter-Regular.ttf'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Main from './components/Main'
// import Home from './components/Home/Home'
import About from './components/About'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  )
}

export default App
