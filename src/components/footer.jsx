import React from "react"

const Footer = () =>{
    return(
        <div>
            <footer id="footer" class="footer-area">
        <div class="footer-widget pt-130 pb-130">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="footer-content text-center">
                            {/* <a href="index.html">
                                <img src="assets/images/logo-2.png" alt="Logo"/>
                            </a> */}
                            <p class="mt-">An ambitious Nigerian youth with a dynamic vision on simple to complex algorithms, and an understanding to multi programming languages, some presented below in the portfolio section. </p>
                            <ul>
                                <li><a href="https://github.com/ralu-ugo" target = "_blank"><i class="lni-github"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/ralu-ugochukwu-6b6566225/" targegt = "_blank"><i class="lni-linkedin-original"></i></a></li>
                            </ul>
                        </div> 
                    </div>
                </div> 
            </div> 
        </div>
        <div class="footer-copyright pb-20">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="copyright-text text-center pt-20">
                            <p>Copyright © 2022.</p>
                        </div> 
                    </div>
                </div> 
                </div>    
        </div>
    </footer>
        </div>
    )
}

export default Footer;

