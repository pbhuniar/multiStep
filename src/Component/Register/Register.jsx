import React, { useState } from 'react'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { register } from '../../Action/UserAuth'
import { Link } from 'react-router-dom'
import NavbarNew from '../NavbarNew/NavbarNew'
import Footer from '../Footer/Footer'
const Register = () => {
    const dispatch = useDispatch()
    const [isvalidated, setIsvalidated] = useState(false)
    // const state = useSelector(state => state.UserData)
    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            password: "",
            cpassword: ""
        },
        onSubmit: values => {
            console.log(values);
            setIsvalidated(true)
            dispatch(register(values))

        },
        validate: values => {
            const errors = {}
            if (!values.firstname) {
                errors.firstname = "First name Required"
            }
            if (!values.lastname) {
                errors.lastname = "Last name Required"
            }
            if (!values.email) {
                errors.email = "require email for registration"
            }
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = "inavalid email input"
            }
            if (!values.phone) {
                errors.phone = "you can't keep this empty"
            }
            else if (values.phone.length <= 9) {
                errors.phone = "phone number is invalid"
            }
            if (!values.password) {
                errors.password = "password require"
            }
            else if (values.password.length < 8) {
                errors.password = "password is too short"
            }
            if (!values.cpassword) {
                errors.cpassword = "confirm password required"
            }
            else if (values.cpassword !== values.password) {
                errors.cpassword = "confirm password is not matched"
            }
            return errors
        }
    })
    return (
        <div>
            <NavbarNew />
            <div className="container">
                <div className="row">
                    <div className="col col-lg-6 col-md-6">
                        <img style={{ marginTop: "1.5rem",width:"80%" }} src="https://images.unsplash.com/photo-1556742208-999815fca738?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                      <p style={{width:"80%"}}>
                      Contrary to popular belief, Lorem Ipsum is not simply random text. 
                        It has roots in a piece of classical Latin literature from 45 BC, 
                      </p>
                    </div>
                    <div className="col col-lg-6 col-md-6">
                        <h2 style={{ textAlign: "center",marginBottom:"2.5rem" }}>User Registration</h2>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="mb-3">
                              
                                <input type="text" name="firstname" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={formik.handleChange} placeholder="Enter your first name *" />
                                <div style={{ color: "red" }}>{formik.errors.firstname ? <div>{formik.errors.firstname}</div> : null}</div>
                            </div>
                            <div className="mb-3">
                             
                                <input type="text" name="lastname" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={formik.handleChange} placeholder="Enter your last name *" />
                                <div style={{ color: "red" }}>{formik.errors.lastname ? <div>{formik.errors.lastname}</div> : null}</div>
                            </div>
                            <div className="mb-3">
                                
                                <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={formik.handleChange} placeholder="Enter your email address *" />
                                <div style={{ color: "red" }}>{formik.errors.email ? <div>{formik.errors.email}</div> : null}</div>
                            </div>
                            <div className="mb-3">
                             
                                <input type="tel" name="phone" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={formik.handleChange} placeholder="Enter your phone number *" />
                                <div style={{ color: "red" }}>{formik.errors.phone ? <div>{formik.errors.phone}</div> : null}</div>
                            </div>
                            <div className="mb-3">
                                
                                <input type="password" name="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={formik.handleChange} placeholder="Enter your password" />
                                <div style={{ color: "red" }}>{formik.errors.password ? <div>{formik.errors.password}</div> : null}</div>
                            </div>
                            <div className="mb-3">
                             
                                <input type="password" name="cpassword" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={formik.handleChange} placeholder="Enter your Confirm password *" />
                                <div style={{ color: "red" }}>{formik.errors.cpassword ? <div>{formik.errors.cpassword}</div> : null}</div>
                            </div>
                            <div style={{ display: "inline-block" }}>

                            </div>
                            <button type="submit" style={{ marginRight: "2rem" }} className="btn btn-danger">Register</button>
                            <button disabled={!isvalidated} className="btn btn-primary"><Link style={{ textDecoration: "none", color: "white" }} to="/address">Next</Link></button>
                        </form>
                    </div>
                </div>


            </div>

            <Footer />
        </div>
    )
}

export default Register
