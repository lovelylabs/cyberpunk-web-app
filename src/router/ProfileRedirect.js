import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSession } from '../firebase/UserProvider'

const ProfileRedirect = ({ component: Component, ...rest }) => {
    const { user } = useSession()

    return (
        <Route
            {...rest}
            render={(props) =>
                !user ? (
                    <Component {...props}></Component>
                ) : (
                    <Redirect
                        to={{
                            pathname: `/profile/${user.uid}`,
                            state: { from: props.location },
                        }}></Redirect>
                )
            }></Route>
    )
}

export default ProfileRedirect
