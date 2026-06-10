import React from 'react'
import { useState } from 'react'
import './Conditionals.css'

const Conditionals = () => {
    const [showbtn, setshowbtn] = useState(false)
    const [todos, setTodos] = useState([
        {
            title: "Groceries",
            description: "peanuts, olive-oil, bread"
        },
        {
            title: "Stationary",
            description: "scale, pens, notebook"
        },
        {
            title: "meetings",
            description: "meeting@9am, meeting@2pm"
        }
    ])

    const Todo = (todo) => {
        return (
            <>
                <div className={todo.className}>
                    <h2>{todo.title}</h2>
                    <p>{todo.description}</p>
                </div>
            </>
        )
    }

    return (
        <div>
            <div className='conditionals'>
                {/* {showbtn? <button>Click me</button> : "button unavailable"} */}
                {showbtn && <button>Click me</button>}
                <button onClick={() => { setshowbtn(!showbtn) }}>Magic?!</button>
            </div>
            <div className='displayLists'>
                {todos.map((item, index) => {
                    return <Todo key={index} className="listItem" title={item.title} description={item.description} />
                })}
            </div>
        </div>
    )
}

export default Conditionals
