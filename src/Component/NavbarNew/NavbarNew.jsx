import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { logout } from '../../Action/UserAuth'
const NavbarNew = () => {
  const historory = useHistory()
  const dispatch = useDispatch()
  const authenticated =  sessionStorage.getItem('token')
  useEffect(() => {
    sessionStorage.getItem('token')
  },)
  
  const out = () => {
    dispatch(logout());
    historory.push("/login")
  }
  return (
    <div>
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
         <Link  style={{textDecoration:"none"}} to="/"> <a className="navbar-brand" data-bs-toggle="tooltip" data-bs-placement="bottom" title="goto home page" href="#">Navbar</a></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {/* <ul className="navbar-nav mr-auto mb-2 mb-lg-0"></ul> */}
              <Link style={{textDecoration:"none"}} to="/"><a className="nav-link active" aria-current="page" href="#">Home</a></Link>
              <Link  style={{textDecoration:"none"}} to="/profile"><a className="nav-link" href="#"><i className="fas fa-user fa-lg" style={{color:"black"}}></i></a></Link>
              {
                (authenticated !== null) ? (
                  <>
                    <button onClick={out} className="btn btn-danger">Logout</button>
                  </>
                ) : (
                  <>
                    <Link style={{textDecoration:"none"}} to="/login"><button className="btn btn-success" data-bs-toggle="tooltip" data-bs-placement="bottom" title="login here" style={{marginRight:"1rem"}}>Login</button></Link>
                    <Link style={{textDecoration:"none"}} to="/registation"><button className="btn btn-info">Register</button></Link>
                  </>
                )
              }
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavbarNew
