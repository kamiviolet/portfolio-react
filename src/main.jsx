import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from './contexts/ThemeContext.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './routes/Home.jsx'
import About from './routes/About.jsx'
import Contact from './routes/Contact.jsx'
import Projects from './routes/Projects.jsx'
import Skills from './routes/Skills.jsx'
import ErrorPage from './error-page.jsx'
import DevelopmentMsg from './routes/DevelopmentMsg.jsx'
import SVGCollection from './routes/SVGCollection.jsx'
import './css/index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/skills",
        element: <Skills />
      },
      {
        path: "/svg_collections",
        element: <SVGCollection />
      },
      {
        path: "/albums",
        element: <DevelopmentMsg />
      },
      {
        path: "/projects",
        element: <Projects />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
