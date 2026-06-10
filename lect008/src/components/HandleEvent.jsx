import React, { useState } from 'react'

const HandleEvent = () => {
    const [name, setName] = useState("Raj")
    // const [form, setForm] = useState({"email": "", "phone": ""})
    const [form, setForm] = useState({})

    const handleChange = (e) => {
        setName(e.target.value)
        // console.log(e)
    }
    const handleFormChange= (e) => {
        setForm({...form, [e.target.name]:e.target.value})
        console.log(form)
    }

    return (
        <div>
            <input type="text" value={name} onChange={handleChange}/>
            Enter your email: <input type="text" name='email' value={form.email?form.email:""} onChange={handleFormChange}/> 
            Enter your phone: <input type="text" name='phone' value={form.phone?form.phone:""} onChange={handleFormChange}/> 
        </div>
    )
}

export default HandleEvent
