import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import Login from './pages/Login'
import ProfileRedirect from './router/ProfileRedirect'
import Header from './components/Header'
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom'
import './firebase/config'
import { UserProvider } from './firebase/UserProvider'

import './App.css'

function App() {
    return (
        <UserProvider>
            <BrowserRouter>
                <Header></Header>
                <div className='App'>
                    <h1>Hello Cyberpunk Red</h1>
                </div>

                <Switch>
                    <ProfileRedirect
                        exact
                        path='/signup'
                        component={SignUp}></ProfileRedirect>
                    <Route exact path='/profile/:id' component={Profile}></Route>
                    <ProfileRedirect
                        exact
                        path='/login'
                        component={Login}></ProfileRedirect>
                    <Route exact path='/'>
                        <Redirect to='/login'></Redirect>
                    </Route>
                </Switch>
            </BrowserRouter>
        </UserProvider>
    )
}

export default App
