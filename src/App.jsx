import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Background from './components/Background'
import Footer from './components/Footer'
import Nav from './components/Nav'
import { ThemeContext } from './contexts/ThemeContext'

function App() {
  const {theme, setTheme} = useContext(ThemeContext)

  return (
    <>
      <Background />
      <Nav/>
      <main className={theme+"_theme"}>
        <Outlet/>
      </main>
      <Footer />
    </>
  )
}

export default App
