import React from 'react'
import {Redirect} from 'react-router-dom'
const ProtectedRoute = (props) => {
    const Check = props.component
    const id = sessionStorage.getItem('token')
    return (
        <div>
            {id?(<Check/>):(<Redirect to={{pathname:'/login'}}/>)}
        </div>
    )
}

export default ProtectedRoute
