import React from 'react'
import './intro.css'
import IntroHeader from "./IntroHeader";
import IntroButtons from "./IntroButtons";
import STIMG from '../../assets/img/st.png'

const Intro = () => {
  return (
    <>
        <section id="intro" className="clearfix">
            <div className="container">
                <div className="intro-img">
                <img src={STIMG} alt="" className="img-fluid intro-image" />
                </div>
                <div className="intro-info">
                    <IntroHeader />
                <div>
                    <IntroButtons />
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Intro