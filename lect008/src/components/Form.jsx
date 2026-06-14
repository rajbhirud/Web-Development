import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './Form.css'

const Form = () => {
    const [message, setMessage] = useState("");
    useEffect(() => {
        setTimeout(() => {
            setMessage("");
        }, 5000);
    }, [message]);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting }
    } = useForm()

    const delay = (d) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()
            }, d*1000);
        })
    }

    const onSubmit = async (data) => {
        await delay(2)      // simulating server delay
        let r = await fetch("http://localhost:3000/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)})
        let res = await r.json()
        console.log(res)

        setMessage(res.message);
        if (res.success) {
            reset();
        }
    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit(onSubmit)}>

                <h2>User Registration</h2>
                <div>
                    <label>Username</label>
                    <input
                        type="text"
                        placeholder="Enter username"
                        {...register("username", {
                            required: "Username is required",
                            minLength: {
                                value: 3,
                                message: "Username must be at least 3 characters"
                            },
                            maxLength: {
                                value: 8,
                                message: "Username cannot exceed 8 characters"
                            },
                            pattern: {
                                value: /^[a-zA-Z_][a-zA-Z0-9_]*$/,
                                message: "Only letters, numbers, and underscores allowed. Cannot start with a number."
                            }
                        })}
                    />

                    {errors.username && <p className='error'>{errors.username.message}</p>}
                </div>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        placeholder="Enter your name here"
                        {...register("fullname", {
                            required: "Name is required"
                        })}
                    />
                    {errors.fullname && <p className='error'>{errors.fullname.message}</p>}
                </div>

                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="Enter your e-mail here"
                        {...register("email", {
                            required: "Email is required"
                        })}
                    />
                    {errors.email && <p className='error'>{errors.email.message}</p>}
                </div>

                <div>
                    <label>Age</label>
                    <input
                        type="number"
                        placeholder="Enter your age here"
                        {...register("age", {
                            required: "Age is required",
                            min: {
                                value: 1,
                                message: "Age must be greater than 0"
                            }
                        })}
                    />
                    {errors.age && <p className='error'>{errors.age.message}</p>}
                </div>

                <div>
                    <label>Gender</label>
                    <select {...register("gender")}>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <button disabled={isSubmitting} type="submit">
                    Submit
                </button>
                {isSubmitting && <div>Submitting...</div>}
                {message && <p className="success">{message}</p>}
            </form>
        </div>
    )
}

export default Form