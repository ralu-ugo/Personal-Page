import React from 'react'

const Header = () => {
    return(
        <div>
           <div id="home" className="header-area">
        <div className="navigation fixed-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <nav className="navbar navbar-expand-lg">
                            <a className="navbar-brand" href="index.html">
                                {/* <img src="assets/images/logo.png" alt="Logo"/> */}
                            </a> 
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav ml-auto">
                                    <li className="nav-item active"><a className="page-scroll" href="#home">Home</a></li>
                                    <li className="nav-item"><a className="page-scroll" href="#about">About</a></li>
                                    <li className="nav-item"><a className="page-scroll" href="#work">Portfolio</a></li>
                                    <li className="nav-item"><a className="page-scroll" href="#contact">Contact</a></li>
                                </ul>
                            </div> 
                        </nav> 
                    </div>
                </div> 
            </div> 
        </div>
        </div> 
 
        </div>
        
    )

}


export default Header;