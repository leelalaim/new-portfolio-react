import './App.css'
import './assets/fonts/Inter-Regular.ttf'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Main from './components/Main'
// import Home from './components/Home/Home'
import About from './components/About'
import Projects from './components/Projects'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        color: '#ffffff',
        bg: '#1f1f1f',
      },
    }),
  },
  components: {
    DrawerBody: {
      color: '#1f1f1f',
    },
  },
})

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </ChakraProvider>
  )
}

export default App
