import { Route, Routes } from 'react-router-dom'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import Layout from './components/Layout'
import Main from './components/Main'
import About from './components/About'
import Projects from './components/Projects'
import './App.css'
import './assets/fonts/Inter-Regular.ttf'

const theme = extendTheme({
  styles: {
    global: () => ({
      [`@media (min-width: 768px)`]: {
        body: {
          bg: '#1f1f1f',
          fontSize: '24px',
          fontFamily: 'Gilroy Light',
        },
      },
      body: {
        color: '#ffffff',
        bg: '#1f1f1f',
        fontSize: '16px',
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
