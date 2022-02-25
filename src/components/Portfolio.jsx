import React from 'react'

const Portfolio = () =>{
    return(
        <div>
    <section id="work" class="work-area pt-125 pb-130">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="section-title pb-25">
                        <h2 class="title">My Recent Works</h2>
                        <p>Click any of my projects to take you to the live preview or the repository on github.</p>
                    </div> 
                </div>
            </div> 
            <div class="row">
                
                
                
            <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-work text-center mt-30">
                        <div class="work-image">
                            <img src="assets/images/work/w-4.jpg" alt="work"/>
                        </div>
                        <div class="work-overlay">
                            <div class="work-content">
                                <h3 class="work-title">Word App</h3>
                                <p style = {{color: 'whitesmoke'}}>HTML, CSS</p>
                                <ul>
                                    <li><a href="https://use-word-app.herokuapp.com" target = '_blank'><i class="lni-laptop-phone"></i></a></li>
                                    <li><a href="https://github.com/ralu-ugo/Word-App" target = "_blank"><i class="lni-github"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div> 
                </div>        
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-work text-center mt-30">
                        <div class="work-image">
                            <img src="assets/images/work/w-4.jpg" alt="work"/>
                        </div>
                        <div class="work-overlay">
                            <div class="work-content">
                                <h3 class="work-title">Bank App</h3>
                                <p style = {{color: 'whitesmoke'}}>Python</p>
                                <ul>
                                    <li><a href="https://github.com/ralu-ugo/P.py/blob/main/bank_app.py" target = "_blank"><i class="lni-github"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div> 
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-work text-center mt-30">
                        <div class="work-image">
                            <img src="assets/images/work/w-6.jpg" alt="work"/>
                        </div>
                        <div class="work-overlay">
                            <div class="work-content">
                                <h3 class="work-title">Keeper App</h3>
                                <p style = {{color: 'whitesmoke'}}>React JS</p>
                                <ul>
                                    <li><a class="image-popup" href="https://use-keeper-app.netlify.app" target = '_blank'><i class="lni-laptop-phone"></i></a></li>
                                    <li><a href="https://github.com/ralu-ugo/Keeper-App" target = "_blank"><i class="lni-github"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div> 
                </div>
            </div> 
            <div class="row">
                <div class="col-lg-12">
                    <div class="work-more text-center mt-50">
                        {/* <a class="main-btn" href="#">more works</a> */}
                    </div>
                </div>
            </div> 
        </div>
        </section>

        </div>
    )
}


export default Portfolio;