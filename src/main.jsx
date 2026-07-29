import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter ,RouterProvider} from 'react-router-dom'
import Projects from './pages/Projects'
import Experience from './sections/Experience'
import Home from './pages/Home'
import TalkToMe from './pages/TalkToMe'
import About from './pages/About'

const router=createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
          path:"/projects",
          element:<Projects/>
        },
        
        {
          path:"/talkToMe",
          element:<TalkToMe/>
        },
      
        {
          path:"/about",
          element:<About/>
        },

      ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
