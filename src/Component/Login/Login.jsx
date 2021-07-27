import React from 'react'
import { useFormik } from 'formik';
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux';
import { login } from '../../Action/UserAuth';
import NavbarNew from '../NavbarNew/NavbarNew';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom'
const Login = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: values => {
            console.log(values)
            dispatch(login(values))
            const sstoken = sessionStorage.getItem('token')
            if (sstoken !== null) {
                history.push("/profile")
            }
        },
        validate: values => {
            const errors = {}
            if (!values.email) {
                errors.email = "Email required"
            }
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = "Email formate is not valid"
            }

            if (!values.password) {
                errors.password = "Password Required"
            }
            else if (values.password.length < 8) {
                errors.password = "Password is too short"
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
<img src="https://images.unsplash.com/photo-1518710920008-43f70d20e48a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="" />
                    </div>
                    <div className="col col-lg-6 col-md-6">
                        <h2 style={{ textAlign: "center" }}>Login Now</h2>
                        <p style={{ textAlign: "center" }}>Don't have account?<Link to="/registation">Signup</Link></p>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" name="email" id="password" onChange={formik.handleChange} />
                                <div style={{ color: "red" }}>{formik.errors.email ? <div>{formik.errors.email}</div> : null}</div>
                            </div>

                            <div className="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Password</label>
                                <input type="password" className="form-control" name="password" id="password" onChange={formik.handleChange} />
                                <div style={{ color: "red" }}>{formik.errors.password ? <div>{formik.errors.password}</div> : null}</div>
                            </div>

                            <button type="submit" className="btn btn-success">Submit</button>
                        </form>
                    </div>

                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Login
