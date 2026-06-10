import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Card from './components/Card'
import Counter from "./components/useState"
import { useEffect } from "react"

function App() {

  useEffect(() => {
    alert("Welcome to React tutorials")
  }, [])

  return (
    <>
      <Navbar />
      <main>
        This is the main content of the webpage.
        <div className="cards">
          <Card title="card 1" description= "description for card 1"/>
          <Card imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5_0CRmJGP9COfqnVEk6H_0cdTFf8qtBFCxA&s"/>
          <Card />
          <Card />
        </div>
        <Counter />
      </main>
      <Footer />
    </>
  )
}

export default App
