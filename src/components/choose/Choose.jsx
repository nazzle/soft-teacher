import React from 'react'
import './choose.css'

const Choose = () => {
  return (
    <>
        <section id="why-us" className="wow fadeIn">
            <div className="container">
                <header className="section-header">
                <h3>Why choose our App?</h3>
                <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus.</p>
                </header>
                <div className="row counters">
                <div className="col-lg-3 col-6 text-center">
                    <span data-toggle="counter-up">7</span>
                    <p>Subjects</p>
                </div>
                <div className="col-lg-3 col-6 text-center">
                    <span data-toggle="counter-up">421</span>
                    <p>Topics</p>
                </div>
                <div className="col-lg-3 col-6 text-center">
                    <span data-toggle="counter-up">1,364</span>
                    <p>Questions</p>
                </div>
                <div className="col-lg-3 col-6 text-center">
                    <span data-toggle="counter-up">118</span>
                    <p>Tests & Exams</p>
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Choose