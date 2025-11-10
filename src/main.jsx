import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Signin from './pages/Signin.jsx'
import Signup from './pages/Signup.jsx'

const router = createBrowserRouter([
  {
    path: "/signin",
    element: <Signin /> 
  },
  {
    path: "/signup",
    element: <Signup />
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
