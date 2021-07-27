import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { useHistory } from 'react-router'
import { address } from '../../Action/UserAuth'
import NavbarNew from '../NavbarNew/NavbarNew'
import Footer from '../Footer/Footer'
const Address = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const formik = useFormik({
        initialValues: {
            stateAddress: "",
            city: "",
            zip: ""
        },
        onSubmit: values => {
            console.log(values);
            dispatch(address(values))
            history.push("/login")
        },
        validate: values => {
            const errors = {}
            if (!values.stateAddress) {
                errors.stateAddress = "state address is mandatory"
            }
            if (!values.city) {
                errors.city = "City name required"
            }
            if (!values.zip) {
                errors.zip = "zip number is empty"
            }
            else if (values.zip.length !== 6) {
                errors.zip = "invalid zip code"
            }
            return errors
        }
    })
    return (
        <div>
            <NavbarNew />
            <div class="container">
                <div class="row">
                    <div class="col col-lg-6 col-md-6">
                        <img src="https://images.unsplash.com/photo-1524778219663-26b4a0ccc132?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80" alt="" />
                    </div>
                    <div class="col col-lg-6 col-md-6">
                        <h2 style={{ textAlign: "center",marginTop:"2rem",marginBottom:"2rem" }}>Enter your address</h2>
                        <form onSubmit={formik.handleSubmit}>
                            <div class="mb-3">

                                <input type="text" name="stateAddress" class="form-control" id="exampleInputEmail1" onChange={formik.handleChange} placeholder="Enter your state *" />
                                <div style={{ color: "red" }}>{formik.errors.stateAddress ? <div>{formik.errors.stateAddress}</div> : null}</div>
                            </div>
                            <div class="mb-3">
                             
                                <input type="text" name="city" class="form-control" id="exampleInputPassword1" onChange={formik.handleChange} placeholder="Enter your city name *" />
                                <div style={{ color: "red" }}>{formik.errors.city ? <div>{formik.errors.city}</div> : null}</div>
                            </div>
                            <div class="mb-3">
                   
                                <input type="tel" name="zip" class="form-control" id="exampleInputPassword1" onChange={formik.handleChange} placeholder="Enter your ZIP code" />
                                <div style={{ color: "red" }}>{formik.errors.zip ? <div>{formik.errors.zip}</div> : null}</div>
                            </div>
                            <button className="btn btn-warning" style={{ marginRight: "3rem" }}><Link to="/registation">Back</Link></button>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Address


