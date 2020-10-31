import React from 'react'
import { logout } from '../firebase/auth'
import { useHistory } from 'react-router-dom'
import { useSession } from '../firebase/UserProvider'
export default function Header() {
    const history = useHistory()
    const { user } = useSession()
    const logoutUser = async () => {
        await logout()
        history.push('/login')
    }
    return (
        <div>
            <header>
                <h2>Cyberpunk</h2>
                {!!user && <button onClick={logoutUser}>Logout</button>}
            </header>
        </div>
    )
}
