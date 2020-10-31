import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { login } from '../firebase/auth'

export default function Login(props) {
    const { register, handleSubmit, reset } = useForm()
    const [isLoading, setLoading] = useState(false)
    const onSubmit = async (data) => {
        let user
        setLoading(true)
        try {
            user = await login(data)
            reset()
        } catch (error) {
            console.log(error)
        }

        if (user) {
            props.history.push(`/profile/${user.uid}`)
        } else {
            setLoading(false)
        }
    }
    return (
        <div>
            <h2>This is the sign up page</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <ul>
                    <li>
                        <label>Email:</label>
                        <input
                            type='email'
                            name='email'
                            placeholder='Email'
                            ref={register}
                        />
                    </li>
                    <li>
                        <label>Email:</label>
                        <input
                            type='password'
                            name='password'
                            placeholder='Password'
                            ref={register}
                        />
                    </li>
                </ul>
                <button type='submit'>Log In</button>
                <Link to='/signup'>Sign Up</Link>
            </form>
        </div>
    )
}
