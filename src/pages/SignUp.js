import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import { signup } from '../firebase/auth'

export default function SignUp(props) {
    const { register, handleSubmit, reset } = useForm()
    const [isLoading, setLoading] = useState(false)
    const onSubmit = async (data) => {
        let newUser
        setLoading(true)
        try {
            newUser = await signup(data)
            reset()
        } catch (error) {
            console.log(error)
        }

        if (newUser) {
            props.history.push(`/profile/${newUser.uid}`)
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
                        <label>First name:</label>
                        <input
                            type='text'
                            name='firstName'
                            placeholder='First Name'
                            ref={register}
                        />
                    </li>
                    <li>
                        <label>Last name:</label>
                        <input
                            type='text'
                            name='lastName'
                            placeholder='Last Name'
                            ref={register}
                        />
                    </li>
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
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    )
}
