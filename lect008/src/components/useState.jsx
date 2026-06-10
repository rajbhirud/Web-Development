import React from 'react'
import { useEffect, useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        alert("Count was updated")
    }, [count])

    return (
        <div className="counter" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
            <div>Current count: {count}</div>
            <button onClick={() => setCount(count + 1)}>Update count</button>
        </div>
    )
}

export default Counter
