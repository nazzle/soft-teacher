import React from 'react'
import './mission.css'

const Mission = () => {
  return (
    <>
        <section id="mission" className="wow fadeIn">
            <div className="container">
                <header className="section-header">
                <h3>Mission & Vision</h3>
                <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus.</p>
                </header>
                <div className="row row-eq-height justify-content-center">
                <div className="col-lg-6 mb-6">
                    <div className="card wow bounceInUp">
                    <i className="fa fa-diamond" />
                    <div className="card-body">
                        <h5 className="card-title">Mission</h5>
                        <p className="card-text">Deleniti optio et nisi dolorem debitis. Aliquam nobis est temporibus sunt ab inventore officiis aut voluptatibus.</p>
                        <a href="#" className="readmore">Read more </a>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6 mb-6">
                    <div className="card wow bounceInUp">
                    <i className="fa fa-language" />
                    <div className="card-body">
                        <h5 className="card-title">Vision</h5>
                        <p className="card-text">Voluptates nihil et quis omnis et eaque omnis sint aut. Ducimus dolorum aspernatur.</p>
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