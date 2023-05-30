import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './routes/Home.jsx'
import About from './routes/About.jsx'
import Contact from './routes/Contact.jsx'
import Projects from './routes/Projects.jsx'
import Skills from './routes/Skills.jsx'
import ErrorPage from './error-page.jsx'
import './css/index.css'

const router = createBrowserRouter([
  {
    path: "/portfolio-react",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/portfolio-react",
        element: <Home />
      },
      {
        path: "/portfolio-react/about",
        element: <About />
      },
      {
        path: "/portfolio-react/contact",
        element: <Contact />
      },
      {
        path: "/portfolio-react/skills",
        element: <Skills />
      },
      {
        path: "/portfolio-react/projects",
        element: <Projects />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
