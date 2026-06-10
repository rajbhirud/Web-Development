import React from 'react'
import { useState, useEffect, useRef } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)

    // useEffect(() => {
    //     alert("Count was updated")
    // }, [count])

    let a = 0
    const b = useRef(0)
    useEffect(() => {
        a++
        b.current++
        console.log(`rerendering with the a=${a} and b=${b.current}...`)
    })

    const btnref = useRef()
    useEffect(() => {
        console.log("First render...")
        btnref.current.style.backgroundColor = "cyan"
        btnref.current.style.padding = "1px"
        btnref.current.style.border = "1px solid black"
        btnref.current.style.borderRadius = "3px"
    }, [])

    return (
        <div className="counter" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
            <div>Current count: {count}</div>
            <button ref={btnref} onClick={() => setCount(count + 1)}>Update count</button>
        </div>
    )
}

export default Counter
