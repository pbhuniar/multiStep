import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Address from '../Address/Address'
import Home from '../Home/Home'
import Login from '../Login/Login'

import Profile from '../Profile/Profile'
import ProtectedRoute from '../ProtectedRout/ProtectedRoute'

import Register from '../Register/Register'
const Routing = () => {
    return (
        <div>
            <BrowserRouter>
                
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/registation" component={Register}/>
                    <Route exact path="/address" component={Address}/>
                    <ProtectedRoute exact path="/profile" component={Profile} ></ProtectedRoute>
                    <Route render={() => <>404 Not Found</>} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}
export default Routing
