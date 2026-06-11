import React, { useContext } from 'react'
import Footer from "./Footer"
import Card from './Card'
import Counter from "./useState"
import Conditionals from "./Conditionals"
import HandleEvent from "./HandleEvent"
import { counterContext } from '../context/context'
import './Home.css'

const Home = () => {
    const { count, setCount } = useContext(counterContext);
    return (
        <div>
            <main>
                This is the main content of the webpage.
                <div className="cards">
                    <Card title="card 1" description="description for card 1" />
                    <Card imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5_0CRmJGP9COfqnVEk6H_0cdTFf8qtBFCxA&s" />
                    <Card />
                    <Card />
                </div>
                <Counter />
                <Conditionals />
                <HandleEvent />
                <div className='displayCountHome'>
                    The counter is {count}
                </div>

                <div style={{ height: "5vw" }} />
            </main>
            <Footer />
        </div>
    )
}

export default Home