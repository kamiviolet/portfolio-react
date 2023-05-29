import { Outlet } from 'react-router-dom'
import Background from './components/Background'
import Footer from './components/Footer'
import Nav from './components/Nav'


function App() {

  return (
    <>
      <Background />
      <Nav />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
