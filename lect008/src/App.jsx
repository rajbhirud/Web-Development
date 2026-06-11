import Navbar from "./components/Navbar"
import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import { counterContext } from './context/context'

import { useEffect, useState } from "react"
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

  const [count, setCount] = useState(0);

  return (
    <>
      <counterContext.Provider value={{count, setCount}}>
        {/* <Navbar /> */}
        <RouterProvider router={router} />
      </counterContext.Provider>
    </>
  )
}

export default App
