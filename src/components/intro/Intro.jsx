import React from 'react'
import './intro.css'

const Intro = () => {
  return (
    <>
        <section id="intro" className="clearfix">
            <div className="container">
                <div className="intro-img">
                <img src="img/intro-img.svg" alt="" className="img-fluid" />
                </div>
                <div className="intro-info">
                <h2>Unlock your<br /><span>Potential</span><br /></h2>
                <div>
                    <a href="#about" className="btn-get-started scrollto">Download</a>
                    <a href="#services" className="btn-services scrollto">Learn More</a>
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Intro