import Navbar from "./components/Navbar"
import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"

import { useEffect } from "react"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {

  useEffect(() => {
    alert("Welcome to React tutorials")
  }, [])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home /></>
    },
    {
      path: "/about",
      element: <><Navbar /><About /></>
    },
    {
      path: "/contact",
      element: <><Navbar /><Contact /></>
    }
  ])


  return (
    <>
      {/* <Navbar /> */}
      <RouterProvider router={router}/>
    </>
  )
}

export default App
