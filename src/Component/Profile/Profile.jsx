import React from 'react'
import { useSelector } from 'react-redux'
import Footer from '../Footer/Footer'
import NavbarNew from '../NavbarNew/NavbarNew'

const Profile = () => {
 const state = useSelector(state => state.UserData)
 console.log(state)
    return (
        <div>
            <NavbarNew/>
            <div className="container">
            <div className="row">
<div className="col col-lg-6 col-md-6">
<img src="https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80" alt="" />
</div>
<div className="col col-lg-6 col-md-6">
<h1 style={{textAlign:"center"}}>Welocome Mr. {state.firstname}</h1>
            <div style={{textAlign:"center"}}>
            <h2>USER DETAILS</h2>
            <br />
            <h3>Name: {state.firstname} {state.lastname}</h3>
            <br />
            <h3>Email: {state.email}</h3>
            <br />
            <h3>Phone: +91 {state.phone}</h3>
            <br />
            <h2>USER ADDRESS</h2>
            <br />
            <h3>City: {state.city}</h3>
            <br />
            <h3>State: {state.stateAddress}</h3>
            <br />
            <h3>ZIP: {state.zip}</h3>
            </div> 
</div>
            </div>
            </div>
           
            <Footer/>
        </div>
    )
}

export default Profile
