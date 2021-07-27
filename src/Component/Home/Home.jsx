import React from 'react'
import Footer from '../Footer/Footer'
import NavbarNew from '../NavbarNew/NavbarNew'

const Home = () => {
    return (
        <div>
            <NavbarNew />
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img style={{ height: "24rem", width: "100%" }} src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img style={{ height: "24rem", width: "100%" }} src="https://images.unsplash.com/photo-1487215078519-e21cc028cb29?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img style={{ height: "24rem", width: "100%" }} src="https://images.unsplash.com/photo-1593121925328-369cc8459c08?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" className="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
            <div className="container"style={{marginTop:"1rem",marginBottom:"1rem"}}>
<h2 style={{textAlign:"center"}}>About Us</h2>
<div class="container-fluid"> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
            </div>
            <div style={{ backgroundColor: "#C9D8B6" }}>
                <div style={{backgroundColor:"#C9D8B6",paddingTop:"1rem",paddingBottom:"1rem"}} className="container">
                    <div style={{ backgroundColor: "#C9D8B6"}} className="row">
                        <div className="col-4">
                            <img style={{ width: "14rem" }} src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80" alt="" />
                        </div>
                        <div className="col-4">
                            <img style={{ width: "14rem" }} src="https://images.unsplash.com/photo-1543132220-3ec99c6094dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80" alt="" />
                        </div>
                        <div className="col-4">
                            <img style={{ width: "14rem" }} src="https://images.unsplash.com/photo-1472417583565-62e7bdeda490?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home
