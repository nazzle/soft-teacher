import React from 'react'
import './mission.css'

const Mission = () => {
  return (
    <>
        <section id="mission" className="wow fadeIn">
            <div className="container">
                <header className="section-header">
                <h3>Mission & Vision</h3>
                <p>Objectives and roadmaps on achieving our goals.</p>
                </header>
                <div className="row row-eq-height justify-content-center">
                <div className="col-lg-6 mb-6">
                    <div className="card wow bounceInUp">
                    <i className="fa fa-diamond" />
                    <div className="card-body">
                        <h5 className="card-title">Mission</h5>
                        <p className="card-text">
                            To improve learning process for students of all ages by simulating academic materials into
                            variety of activities and games that provide a more interactive, engaging and enjoyable learning
                            experience to help them retain information better and develop critical thinking skills.
                        </p>
                        <a href="#" className="readmore">Read more </a>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6 mb-6">
                    <div className="card wow bounceInUp">
                    <i className="fa fa-language" />
                    <div className="card-body">
                        <h5 className="card-title">Vision</h5>
                        <p className="card-text">
                            To be an excellent interactive learning tools provider that support students to overcome
                            learning difficult challenges and reach their full potential.
                        </p>
                        <a href="#" className="readmore">Read more </a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Mission