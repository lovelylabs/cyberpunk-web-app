import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSession } from '../firebase/UserProvider'

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { user } = useSession()

    return (
        <Route
            {...rest}
            render={(props) => {
                const id = props.match.params.id
                if (!!user && user.uid === id) {
                    return <Component {...props}></Component>
                } else {
                    return <Redirect to='/login'></Redirect>
                }
            }}></Route>
    )
}

export default PrivateRoute
