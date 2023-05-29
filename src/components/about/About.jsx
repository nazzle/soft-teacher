import React from 'react'
import './about.css'
import TOPICS from '../../assets/img/st-blue.png'

const About = () => {
  return (
    <>
        <section id="about">
            <div className="container">
                <header className="section-header">
                <h3>About App</h3>
                <p>
                You can explore and learn academic material in a fun and engaging way, 
                making it easier to retain information and develop critical thinking skills.
                </p>
                </header>
                <div className="row about-container">
                <div className="col-lg-6 content order-lg-1 order-2">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <div className="icon-box wow fadeInUp">
                    <div className="icon"><i className="fa fa-shopping-bag" /></div>
                    <h4 className="title"><a href>Mathematics</a></h4>
                    <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
                    </div>
                    <div className="icon-box wow fadeInUp" data-wow-delay="0.2s">
                    <div className="icon"><i className="fa fa-photo" /></div>
                    <h4 className="title"><a href>English</a></h4>
                    <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                    <div className="icon-box wow fadeInUp" data-wow-delay="0.4s">
                    <div className="icon"><i className="fa fa-bar-chart" /></div>
                    <h4 className="title"><a href>Science and Technology</a></h4>
                    <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                    </div>
                    <div className="icon-box wow fadeInUp" data-wow-delay="0.4s">
                    <div className="icon"><i className="fa fa-bar-chart" /></div>
                    <h4 className="title"><a href>Civic and Moral Education</a></h4>
                    <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                    </div>
                </div>
                <div className="col-lg-6 background order-lg-2 order-1 wow fadeInUp">
                    <img src={TOPICS} className="img-fluid" alt="" />
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default About